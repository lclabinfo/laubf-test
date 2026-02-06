import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay, isToday, differenceInCalendarDays, startOfWeek, endOfWeek, isWithinInterval, startOfDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, List as ListIcon, MapPin, Clock, ArrowRight, X } from 'lucide-react';
import { getCalendarItemsForMonth, CalendarItem } from '../../lib/calendar';
import { events } from '../../lib/events'; // For featured
import { programs } from '../../lib/programs'; // For featured
import { cn } from "../ui/utils";
import { Button } from '../ui/button';

interface EventsSectionProps {
  onNavigate: (page: any, id?: string) => void;
}

interface DisplayItem extends CalendarItem {
    endDate?: Date;
    isGrouped?: boolean;
}

export default function EventsSection({ onNavigate }: EventsSectionProps) {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [listFilter, setListFilter] = useState<'all' | 'event' | 'meeting' | 'program'>('all');
  const [selectedItem, setSelectedItem] = useState<CalendarItem | null>(null);

  // --- FEATURED ITEMS DATA ---
  // Ideally, these would be flagged in the data, but we'll select specific ones for the layout
  // 1. Featured Big (Youth Night or Summer Retreat)
  const featuredBig = events.find(e => e.id === '1') || events[0]; 
  // 2. Featured Top Right (Conference)
  const featuredTopRight = events.find(e => e.id === 'hbf-2') || events[1];
  // 3. Featured Bottom Right (Program)
  const featuredBottomRight = programs.find(p => p.id === 'discipleship') || programs[0];

  // --- CALENDAR DATA ---
  // Get items for the currently viewed month
  const calendarItems = useMemo(() => {
    return getCalendarItemsForMonth(currentDate);
  }, [currentDate]);

  // --- LIST VIEW DATA ---
  // Filter and limit items for list view
  const listItems = useMemo(() => {
    let items = [...calendarItems];

    // If viewing the current month, only show future items
    // (Otherwise, "Upcoming" would show past events from the start of the month)
    if (isSameMonth(currentDate, new Date())) {
        const today = startOfDay(new Date());
        items = items.filter(item => item.date >= today);
    }
    
    // Filter by type
    if (listFilter !== 'all') {
        items = items.filter(item => item.type === listFilter);
    }
    
    items.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    // Deduplicate Multi-Day Events (Show only the first occurrence in the list)
    const uniqueItems: CalendarItem[] = [];
    const processedEventIds = new Set<string>();

    items.forEach(item => {
        if (item.type === 'event') {
            if (!processedEventIds.has(item.originalId)) {
                processedEventIds.add(item.originalId);
                uniqueItems.push(item);
            }
        } else {
            // For meetings and programs, we typically want to see every occurrence
            // unless it's a specific multi-day program logic, but typically programs are like classes (recurring)
            uniqueItems.push(item);
        }
    });
    
    return uniqueItems;
  }, [calendarItems, listFilter]);

  // Grouping logic is now simplified since we deduplicated events
  const displayListItems = useMemo(() => {
      // We map items to DisplayItem to add end date info from fullItem
      return listItems.slice(0, 5).map(item => {
          const displayItem: DisplayItem = { ...item };
          
          if (item.type === 'event') {
             // Use the full event duration
             const evt = item.fullItem as any; // Cast to access startDate/endDate safely
             if (evt.startDate && evt.endDate) {
                 displayItem.date = new Date(evt.startDate);
                 displayItem.endDate = new Date(evt.endDate);
                 // Only show grouping hyphen if end date is different day
                 displayItem.isGrouped = !isSameDay(new Date(evt.startDate), new Date(evt.endDate));
             }
          }
          return displayItem;
      });
  }, [listItems]);


  // Calendar Grid Generation
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  
  // Chunk into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
  }

  // Helper to process events for a specific week
  const getWeekEvents = (weekDays: Date[]) => {
      const weekStart = weekDays[0];
      const weekEnd = weekDays[6];

      // 1. Find all items in this week
      const itemsInWeek = calendarItems.filter(item => 
          isWithinInterval(item.date, { start: weekStart, end: weekEnd })
      );

      // 2. Group consecutive items (same originalId) into "spans"
      const positionedEvents: { item: CalendarItem; startCol: number; span: number; row?: number }[] = [];
      
      // We need to iterate day by day to handle gaps correctly
      // Map: originalId -> { startCol, span, currentEndCol }
      // This is slightly complex because we need to handle gaps.
      // Simpler approach: Iterate through itemsInWeek (which are daily items).
      // Sort by date.
      itemsInWeek.sort((a, b) => a.date.getTime() - b.date.getTime());

      const processedIds = new Set<string>();

      itemsInWeek.forEach(item => {
          // If we already processed this daily item as part of a group, skip
          // But wait, itemsInWeek are unique daily items.
          // We want to merge them if they are consecutive.
          
          // Check if we have an active group for this item's original ID
          const existing = positionedEvents.find(p => 
              p.item.originalId === item.originalId && 
              p.startCol + p.span === getDay(item.date) // Consecutive?
          );

          if (existing) {
              existing.span += 1;
          } else {
              positionedEvents.push({
                  item: item,
                  startCol: getDay(item.date),
                  span: 1
              });
          }
      });

      // 3. Stack events (Assign rows)
      // Sort by startCol, then span (desc)
      positionedEvents.sort((a, b) => {
          if (a.startCol !== b.startCol) return a.startCol - b.startCol;
          return b.span - a.span;
      });

      // Simple packing
      const rows: number[][] = []; // rows[row][col] = 1 if occupied

      positionedEvents.forEach(event => {
          let rowIndex = 0;
          let placed = false;

          while (!placed) {
              // Check if row exists
              if (!rows[rowIndex]) rows[rowIndex] = [];

              // Check collision
              let collision = false;
              for (let c = event.startCol; c < event.startCol + event.span; c++) {
                  if (rows[rowIndex][c]) {
                      collision = true;
                      break;
                  }
              }

              if (!collision) {
                  // Place it
                  for (let c = event.startCol; c < event.startCol + event.span; c++) {
                      rows[rowIndex][c] = 1;
                  }
                  event.row = rowIndex;
                  placed = true;
              } else {
                  rowIndex++;
              }
          }
      });

      return { events: positionedEvents, maxRows: rows.length };
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToToday = () => setCurrentDate(new Date());

  const handleItemClick = (item: CalendarItem) => {
    setSelectedItem(item);
  };

  const navigateToDetail = (item: CalendarItem) => {
    if (item.type === 'event') onNavigate('event-detail', item.originalId);
    else if (item.type === 'meeting') onNavigate('meeting-detail', item.originalId);
    else if (item.type === 'program') onNavigate('program-detail', item.originalId);
  };

  const getItemColor = (type: string) => {
      switch(type) {
          case 'event': return 'bg-blue-600 text-white';
          case 'meeting': return 'bg-emerald-600 text-white';
          case 'program': return 'bg-orange-500 text-white';
          default: return 'bg-gray-800 text-white';
      }
  };

  const getItemLabel = (type: string) => {
      switch(type) {
          case 'event': return 'Event';
          case 'meeting': return 'Meeting';
          case 'program': return 'Program';
          default: return 'Item';
      }
  };

  return (
    <section className="bg-white py-24 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- SECTION 1: FEATURED EVENTS (Restored) --- */}
        <div className="mb-24">
             <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div>
                    <h2 className="text-4xl md:text-[48px] font-['Helvetica_Neue',sans-serif] font-medium tracking-tight mb-3 text-black">
                        Featured Events
                    </h2>
                    <p className="text-lg md:text-[20px] text-[#313131] max-w-2xl font-['Helvetica_Neue',sans-serif]">
                        Highlights of what's happening in our community.
                    </p>
                </div>
                <button 
                    onClick={() => onNavigate('events')}
                    className="group flex items-center gap-2 text-lg font-['Helvetica_Neue',sans-serif] font-medium border-b-2 border-black pb-1 hover:text-[#3667B1] hover:border-[#3667B1] transition-all"
                >
                    View All Events 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">
                {/* Main Featured (Left) */}
                <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="lg:col-span-2 relative rounded-[32px] overflow-hidden bg-black h-[400px] lg:h-full cursor-pointer group"
                    onClick={() => onNavigate('event-detail', featuredBig.id)}
                >
                    <img src={featuredBig.imageUrl} alt={featuredBig.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <div className="absolute top-8 left-8 bg-[#3667B1] px-4 py-1.5 rounded-full">
                            <span className="text-white text-sm font-bold uppercase tracking-widest">Featured</span>
                        </div>

                        <h3 className="text-4xl md:text-[56px] font-['Helvetica_Neue',sans-serif] font-medium text-white uppercase tracking-tighter mb-6 leading-none max-w-2xl">
                            {featuredBig.title}
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-6 text-white/90 font-['Helvetica_Neue',sans-serif]">
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <CalendarIcon className="w-5 h-5" />
                                <span className="font-medium">{format(new Date(featuredBig.startDate), 'MMM d @ h:mm a')}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                <MapPin className="w-5 h-5" />
                                <span className="font-medium">{featuredBig.location}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column (2 Stacked) */}
                <div className="lg:col-span-1 flex flex-col gap-6 h-full">
                    
                    {/* Top Right */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 relative rounded-[32px] overflow-hidden bg-gray-900 min-h-[200px] cursor-pointer group"
                        onClick={() => onNavigate('event-detail', featuredTopRight.id)}
                    >
                        <img src={featuredTopRight.imageUrl} alt={featuredTopRight.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-xl shadow-sm">
                            <span className="font-bold text-sm text-black">{format(new Date(featuredTopRight.startDate), 'MMM d')}</span>
                        </div>

                        <div className="absolute bottom-0 w-full bg-transparent p-6">
                            <h3 className="text-2xl font-['Helvetica_Neue',sans-serif] font-medium text-white uppercase drop-shadow-md leading-tight">{featuredTopRight.title}</h3>
                        </div>
                    </motion.div>

                     {/* Bottom Right */}
                     <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 relative rounded-[32px] overflow-hidden bg-gray-900 min-h-[200px] cursor-pointer group"
                        onClick={() => onNavigate('program-detail', featuredBottomRight.id)}
                    >
                        <img src={featuredBottomRight.imageUrl} alt={featuredBottomRight.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        
                        <div className="absolute bottom-6 left-6 pr-6">
                            <div className="inline-block bg-orange-500 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase text-white mb-2 font-['Helvetica_Neue',sans-serif]">Program</div>
                            <h3 className="text-2xl font-['Helvetica_Neue',sans-serif] font-medium text-white uppercase drop-shadow-md leading-none mb-1">{featuredBottomRight.title}</h3>
                            <p className="text-white/90 text-sm font-medium line-clamp-1 font-['Helvetica_Neue',sans-serif]">{featuredBottomRight.description}</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>

        
        {/* --- SECTION 2: CALENDAR & EVENTS --- */}
        <div>
            {/* Header Area */}
            <div className="mb-8">
                <h2 className="text-3xl font-['Helvetica_Neue',sans-serif] font-medium tracking-tight mb-6 text-black">
                    Calendar & Schedule
                </h2>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" onClick={prevMonth} className="h-8 w-8 rounded-full border-gray-200">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <span className="text-lg font-['Helvetica_Neue',sans-serif] font-medium uppercase tracking-tight min-w-[160px] text-center whitespace-nowrap">
                                {format(currentDate, 'MMMM yyyy')}
                            </span>
                            <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8 rounded-full border-gray-200">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="bg-gray-100 p-1 rounded-xl flex gap-1 shrink-0 font-['Helvetica_Neue',sans-serif]">
                         <button 
                            onClick={() => setViewMode('list')}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all",
                                viewMode === 'list' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
                            )}
                         >
                             <ListIcon className="w-4 h-4" />
                             List
                         </button>
                         <button 
                            onClick={() => setViewMode('calendar')}
                            className={cn(
                                "px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all",
                                viewMode === 'calendar' ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-black"
                            )}
                         >
                             <CalendarIcon className="w-4 h-4" />
                             Month
                         </button>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {viewMode === 'calendar' ? (
                    <div className="flex flex-col h-full animate-in fade-in duration-300">
                        {/* Weekday Headers */}
                        <div className="grid grid-cols-7 mb-2 border-b border-gray-100 pb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-center text-xs font-['Helvetica_Neue',sans-serif] font-medium uppercase text-gray-400 tracking-wider">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid (Week Rows) */}
                        <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden bg-white">
                            {weeks.map((week, weekIndex) => {
                                const { events: weekEvents, maxRows } = getWeekEvents(week);
                                
                                return (
                                    <div key={weekIndex} className="flex flex-col relative min-h-[100px] border-b border-gray-100 last:border-b-0">
                                        {/* Background Grid */}
                                        <div className="grid grid-cols-7 absolute inset-0">
                                            {week.map((day, dayIndex) => {
                                                const isTodayDate = isToday(day);
                                                const isCurrentMonth = isSameMonth(day, currentDate);
                                                return (
                                                    <div 
                                                        key={day.toISOString()} 
                                                        className={cn(
                                                            "border-r border-gray-100 last:border-r-0 p-2 transition-colors",
                                                            !isCurrentMonth && "bg-gray-50/50",
                                                            isTodayDate && "bg-blue-50/30"
                                                        )}
                                                    >
                                                        <span className={cn(
                                                            "text-sm font-bold w-7 h-7 flex items-center justify-center rounded-full mb-1",
                                                            isTodayDate ? "bg-[#3667B1] text-white" : (isCurrentMonth ? "text-gray-900" : "text-gray-400")
                                                        )}>
                                                            {format(day, 'd')}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Events Layer */}
                                        <div className="relative mt-10 px-0 pb-2 z-10 w-full" style={{ height: `${maxRows * 28}px` }}>
                                            {weekEvents.map((event, i) => (
                                                <div
                                                    key={`${event.item.id}-${i}`}
                                                    onClick={(e) => { e.stopPropagation(); handleItemClick(event.item); }}
                                                    className={cn(
                                                        "absolute h-[24px] rounded px-2 text-[11px] font-bold leading-[24px] truncate cursor-pointer hover:brightness-95 transition-all shadow-sm z-20",
                                                        getItemColor(event.item.type)
                                                    )}
                                                    style={{
                                                        top: `${(event.row || 0) * 28}px`,
                                                        left: `${(event.startCol / 7) * 100}%`,
                                                        width: `calc(${ (event.span / 7) * 100 }% - 4px)`, // -4px for gap
                                                        marginLeft: '2px',
                                                        marginRight: '2px'
                                                    }}
                                                >
                                                    {event.item.time.replace(/ AM| PM/g, '')} {event.item.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-bottom-2 duration-300">
                        {/* List View Tabs */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 border-b border-gray-100 pb-4">
                            <div className="flex items-center gap-2">
                                {(['all', 'event', 'meeting', 'program'] as const).map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setListFilter(filter)}
                                        className={cn(
                                            "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                                            listFilter === filter 
                                                ? "bg-black text-white" 
                                                : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black"
                                        )}
                                    >
                                        {filter === 'all' ? 'All' : filter + 's'}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    Upcoming in {format(currentDate, 'MMMM')}
                                </span>
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3667B1] text-white text-[10px] font-bold">
                                    {listItems.length}
                                </span>
                            </div>
                        </div>

                        {/* Dense List Items */}
                        <div className="flex flex-col">
                            {displayListItems.length > 0 ? (
                                <>
                                    {displayListItems.map((item, index) => (
                                        <div 
                                            key={item.id}
                                            onClick={() => navigateToDetail(item)}
                                            className="group flex items-center gap-4 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors px-2"
                                        >
                                            {/* Date Box */}
                                            <div className="flex flex-col items-center justify-center w-14 shrink-0">
                                                <span className="text-[10px] font-bold uppercase text-gray-400 tracking-wider leading-none mb-1">{format(item.date, 'MMM')}</span>
                                                <div className="flex items-baseline">
                                                    <span className="text-xl font-black text-gray-900 leading-none">{format(item.date, 'd')}</span>
                                                    {item.isGrouped && item.endDate && !isSameDay(item.date, item.endDate) && (
                                                        <span className="text-sm font-bold text-gray-400 leading-none ml-0.5">
                                                            -{format(item.endDate, isSameMonth(item.date, item.endDate) ? 'd' : 'MMM d')}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={cn("px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold uppercase tracking-wider", getItemColor(item.type))}>
                                                        {getItemLabel(item.type)}
                                                    </span>
                                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider truncate">
                                                        {item.time} • {item.location}
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#3667B1] transition-colors truncate">
                                                    {item.title}
                                                </h4>
                                            </div>

                                            {/* Arrow */}
                                            <div className="shrink-0 transition-transform group-hover:translate-x-1 duration-300">
                                                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#3667B1]" />
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* View All Button */}
                                    <div className="mt-4 text-center">
                                        <Button 
                                            variant="ghost" 
                                            className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black hover:bg-gray-100 w-full border border-dashed border-gray-200 py-6"
                                            onClick={() => onNavigate(listFilter === 'all' ? 'events' : listFilter + 's')}
                                        >
                                            View All {listFilter === 'all' ? 'Items' : listFilter + 's'}
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-sm font-medium">No {listFilter}s found for this month.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
            <>
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedItem(null)}
                    className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="fixed inset-0 m-auto z-[60] w-full max-w-lg h-fit bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    <div className="relative p-8">
                        <button 
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>

                        <div className="mb-6">
                            <span className={cn("inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4", getItemColor(selectedItem.type))}>
                                {getItemLabel(selectedItem.type)}
                            </span>
                            <h3 className="text-3xl font-black text-gray-900 leading-tight mb-2">
                                {selectedItem.title}
                            </h3>
                            <p className="text-gray-500 font-medium text-lg">
                                {format(selectedItem.date, 'EEEE, MMMM do')}
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock className="w-5 h-5 text-[#3667B1]" />
                                <span className="font-medium">{selectedItem.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 text-[#3667B1]" />
                                <span className="font-medium">{selectedItem.location}</span>
                            </div>
                        </div>

                        <div className="prose prose-sm text-gray-500 mb-8 line-clamp-3">
                            {selectedItem.description}
                        </div>

                        <Button 
                            onClick={() => navigateToDetail(selectedItem)}
                            className="w-full bg-black text-white hover:bg-[#3667B1] h-12 rounded-xl text-sm font-bold uppercase tracking-wider"
                        >
                            View Full Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </>
        )}
      </AnimatePresence>
    </section>
  );
}
