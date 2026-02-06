import { useState, useMemo, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Search, X, 
  SlidersHorizontal, Users, BookOpen, Video, List, LayoutGrid, ChevronRight, ChevronLeft, Filter
} from 'lucide-react';
import { events, Event, getMinistryColor } from '../lib/events';
import { meetings, Meeting } from '../lib/meetings';
import { programs, Program } from '../lib/programs';
import { campuses } from '../lib/campuses';
import { cn } from "./ui/utils";
import { format, parseISO, isFuture, isPast, isWithinInterval, startOfDay, endOfDay, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, getDay, setHours, setMinutes, nextDay, isToday } from 'date-fns';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';

// --- TYPES ---
type ItemType = 'Event' | 'Meeting' | 'Program';
type ViewType = 'card' | 'list' | 'calendar';

interface ConsolidatedItem {
  id: string;
  originalId: string;
  type: ItemType;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  ministry: string;
  campusId?: string;
  location: string;
  imageUrl?: string;
  isOnline?: boolean;
  zoomUrl?: string;
  leader?: string; // For meetings
  status?: string; // For programs
  displayDateString?: string; // For recurring meetings (e.g. "Wednesdays @ 7pm")
}

interface ConsolidatedEventsPageProps {
  onNavigate: (page: any, id?: string) => void;
  initialType?: string; // 'All', 'Event', 'Meeting', 'Program'
}

// --- PLACEHOLDER IMAGES ---
const PLACEHOLDER_IMAGES = [
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800", // Group study
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", // Fellowship food
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800", // Eyes closed prayer
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80&w=800", // Open bible
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", // Campus
];

const getPlaceholderImage = (index: number) => PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length];

// --- HELPER: NORMALIZE DATA ---
const normalizeData = (): ConsolidatedItem[] => {
  const normalized: ConsolidatedItem[] = [];

  // 1. Events
  events.forEach(e => {
    normalized.push({
      id: `event-${e.id}`,
      originalId: e.id,
      type: 'Event',
      title: e.title,
      description: e.description,
      startDate: parseISO(e.startDate),
      endDate: parseISO(e.endDate),
      ministry: e.ministry,
      campusId: e.campusId,
      location: e.location,
      imageUrl: e.imageUrl,
    });
  });

  // 2. Programs
  programs.forEach(p => {
    let start = new Date();
    try {
        if (p.startDate && p.startDate.includes('T')) {
            start = parseISO(p.startDate);
        } else {
            start = new Date(); 
        }
    } catch (e) { console.error(e); }

    normalized.push({
      id: `program-${p.id}`,
      originalId: p.id,
      type: 'Program',
      title: p.title,
      description: p.description,
      startDate: start,
      ministry: p.ministry,
      location: p.schedule || 'See Details',
      imageUrl: p.imageUrl,
      status: p.status
    });
  });

  // 3. Meetings (Recurring) - Generate 4 occurrences
  const today = new Date();
  
  meetings.forEach((m, idx) => {
    const daysMap: {[key: string]: number} = {
        'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5, 'Saturday': 6
    };
    
    try {
        const dayIndex = daysMap[m.day];
        if (dayIndex !== undefined) {
            // Determine time
            let hours = 19; // Default 7pm
            let minutes = 0;
            const timeMatch = m.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
            if (timeMatch) {
                hours = parseInt(timeMatch[1]);
                minutes = parseInt(timeMatch[2]);
                const meridian = timeMatch[3].toUpperCase();
                if (meridian === 'PM' && hours !== 12) hours += 12;
                if (meridian === 'AM' && hours === 12) hours = 0;
            }

            // Generate next 4 occurrences to interleave
            for (let i = 0; i < 4; i++) {
                let instanceDate = new Date();
                
                // Find next day match
                if (i === 0) {
                    if (getDay(today) === dayIndex) instanceDate = today;
                    else instanceDate = nextDay(today, dayIndex as 0|1|2|3|4|5|6);
                } else {
                    // Start from previous instance + 1 week
                    // We need to calculate base date again or just add weeks to first instance
                    // Easier: Calculate first instance, then add i * 7 days
                    let firstInstance = getDay(today) === dayIndex ? today : nextDay(today, dayIndex as 0|1|2|3|4|5|6);
                    instanceDate = addDays(firstInstance, i * 7);
                }

                // Set time
                instanceDate = setHours(instanceDate, hours);
                instanceDate = setMinutes(instanceDate, minutes);
                
                // If first instance is in past today, move to next week
                if (i === 0 && instanceDate < new Date()) {
                    instanceDate = addDays(instanceDate, 7);
                }

                normalized.push({
                    id: `meeting-${m.id}-${i}`,
                    originalId: m.id,
                    type: 'Meeting',
                    title: m.title,
                    description: m.description,
                    startDate: instanceDate,
                    ministry: m.ministry,
                    location: m.location,
                    isOnline: m.isOnline,
                    zoomUrl: m.zoomUrl,
                    leader: m.leader,
                    displayDateString: `${m.day}s @ ${m.time}`,
                    imageUrl: getPlaceholderImage(idx + i), // Assign random placeholder
                });
            }
        }
    } catch (e) {
        console.log("Error parsing meeting date", e);
    }
  });

  return normalized.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
};

export default function ConsolidatedEventsPage({ onNavigate, initialType = 'All' }: ConsolidatedEventsPageProps) {
  // --- STATE ---
  const [view, setView] = useState<ViewType>('card');
  const [filterType, setFilterType] = useState<string>(initialType); // All, Event, Meeting, Program
  const [searchQuery, setSearchQuery] = useState('');
  
  // New Filters
  const [selectedMinistry, setSelectedMinistry] = useState<string>('All');
  const [selectedCampus, setSelectedCampus] = useState<string>('All');
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  const [visibleCount, setVisibleCount] = useState(12);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const allItems = useMemo(() => normalizeData(), []);

  // --- FILTERED DATA ---
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      // 1. Type Filter
      if (filterType !== 'All') {
          const typeMap: {[key: string]: string} = { 'Events': 'Event', 'Meetings': 'Meeting', 'Programs': 'Program' };
          const normalizedFilter = typeMap[filterType] || filterType;
          if (item.type !== normalizedFilter) return false;
      }

      // 2. Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!(
            item.title.toLowerCase().includes(q) || 
            item.description.toLowerCase().includes(q) ||
            item.location.toLowerCase().includes(q)
        )) return false;
      }

      // 3. Ministry Filter
      if (selectedMinistry !== 'All' && item.ministry !== selectedMinistry) return false;

      // 4. Campus Filter
      if (selectedCampus !== 'All') {
          // If filtering by campus, only show items with that campusId or "General" items if user wants? 
          // Strictly matching campusId for now. Note: Meetings/Programs might not have campusId set in my normalizer.
          // If item doesn't have campusId, exclude it unless it's general? 
          // Usually Campus Filter implies "Show me events FOR this campus".
          if (item.campusId !== selectedCampus) return false;
      }

      // 5. Date From
      if (dateFrom) {
          if (item.startDate < startOfDay(dateFrom)) return false;
      }

      // 6. Date To
      if (dateTo) {
          if (item.startDate > endOfDay(dateTo)) return false;
      }

      return true;
    });
  }, [allItems, filterType, searchQuery, selectedMinistry, selectedCampus, dateFrom, dateTo]);

  // Pagination for List/Card views
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // --- QUICK ACCESS (MEETINGS) ---
  // Just show ONE instance per meeting definition (unique originalId)
  const recurringMeetings = useMemo(() => {
    const uniqueMap = new Map();
    meetings.filter(m => m.zoomUrl && m.isOnline).forEach(m => {
        uniqueMap.set(m.id, m);
    });
    return Array.from(uniqueMap.values());
  }, []);

  // --- CALENDAR HELPERS ---
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    return eachDayOfInterval({ start: startDate, end: endDate });
  }, [currentMonth]);

  const getEventsForDay = (day: Date) => {
    return filteredItems.filter(item => isSameDay(item.startDate, day));
  };

  const handleNavigateDetail = (item: ConsolidatedItem | Meeting) => {
      // Handle both consolidated items and raw Meeting objects from Quick Access
      const id = 'originalId' in item ? item.originalId : item.id;
      const type = 'type' in item ? item.type : 'Meeting'; // Quick access is always Meeting
      
      if (type === 'Event') onNavigate('event-detail', id);
      else if (type === 'Meeting') onNavigate('meeting-detail', id);
      else if (type === 'Program') onNavigate('program-detail', id);
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 font-['Helvetica_Neue',_sans-serif]">
      
      {/* HEADER */}
      <div className="bg-white pt-[60px] pb-[40px] px-6 border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
           <h1 className="text-[60px] md:text-[80px] leading-[0.9] font-medium tracking-[-0.04em] text-[#0d0d0d] mb-4">
               Events
           </h1>
           <p className="text-[#676767] text-[18px] font-normal max-w-2xl">
              Join our community gatherings. A curated list of worship, fellowship, and study opportunities.
           </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 relative z-20 mt-12">
        <div className="max-w-[1400px] mx-auto">
            
            {/* QUICK LINKS SECTION */}
            {recurringMeetings.length > 0 && (
               <div className="mb-12">
                  <h2 className="text-[14px] font-bold uppercase tracking-widest text-[#676767] mb-6 flex items-center gap-2">
                      <Video className="w-4 h-4" /> Recurring Online Gatherings
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {recurringMeetings.map(meeting => (
                          <a 
                              key={meeting.id}
                              href={meeting.zoomUrl} 
                              target="_blank"
                              rel="noreferrer"
                              className="group bg-white border border-[#e8e8e8] rounded-[16px] p-6 hover:border-[#0d0d0d] hover:shadow-lg transition-all flex flex-col gap-4"
                          >
                              <div className="flex justify-between items-start">
                                  <div className="bg-[#eef2ff] text-[#3730a3] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                                      <Video className="w-3 h-3" /> Zoom
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-[#dcdcdc] group-hover:text-[#0d0d0d] transition-colors -rotate-45 group-hover:rotate-0" />
                              </div>
                              
                              <div>
                                  <h3 className="text-[18px] font-medium text-[#0d0d0d] leading-tight mb-1 group-hover:text-[#3667B1] transition-colors">
                                      {meeting.title}
                                  </h3>
                                  <p className="text-[13px] text-[#676767] line-clamp-2">
                                      {meeting.description}
                                  </p>
                              </div>

                              <div className="mt-auto pt-4 border-t border-[#f5f5f5] flex items-center gap-3 text-[12px] font-medium text-[#0d0d0d]">
                                  <span className="uppercase tracking-wider">{meeting.day}</span>
                                  <span className="w-1 h-1 rounded-full bg-[#dcdcdc]"></span>
                                  <span>{meeting.time}</span>
                              </div>
                          </a>
                      ))}
                  </div>
               </div>
            )}

            {/* CONTROLS BAR (Updated with Detailed Filters) */}
            <div className="bg-white rounded-[16px] p-2 mb-10 shadow-sm border border-[#e8e8e8]">
                {/* Top Row: View Toggles & Search */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-2">
                    <div className="flex bg-[#f5f5f5] rounded-[10px] p-1 shrink-0 w-full lg:w-auto">
                        <button onClick={() => setView('card')} className={cn("px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all flex-1 lg:flex-none", view === 'card' ? "bg-white text-black shadow-sm" : "text-[#676767]")}>
                            <LayoutGrid className="w-4 h-4" /> Card
                        </button>
                        <button onClick={() => setView('list')} className={cn("px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all flex-1 lg:flex-none", view === 'list' ? "bg-white text-black shadow-sm" : "text-[#676767]")}>
                            <List className="w-4 h-4" /> List
                        </button>
                        <button onClick={() => setView('calendar')} className={cn("px-4 py-2 rounded-[8px] flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all flex-1 lg:flex-none", view === 'calendar' ? "bg-white text-black shadow-sm" : "text-[#676767]")}>
                            <CalendarIcon className="w-4 h-4" /> Calendar
                        </button>
                    </div>

                    <div className="relative w-full lg:max-w-[400px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-10 bg-[#f9f9f9] border-0 rounded-[8px] text-[13px] font-medium focus-visible:ring-1 focus-visible:ring-[#0d0d0d]"
                            placeholder="Search events, meetings, programs..." 
                        />
                    </div>
                </div>

                {/* Bottom Row: Detailed Filters */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 px-2 pb-2 mt-2 border-t border-[#f0f0f0] pt-4">
                     
                     {/* Type */}
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Type</label>
                        <Select value={filterType} onValueChange={setFilterType}>
                            <SelectTrigger className="w-full h-10 bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium focus:ring-0 focus:border-[#0d0d0d]"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Types</SelectItem>
                                <SelectItem value="Event">Events</SelectItem>
                                <SelectItem value="Meeting">Meetings</SelectItem>
                                <SelectItem value="Program">Programs</SelectItem>
                            </SelectContent>
                        </Select>
                     </div>

                     {/* Ministry */}
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Ministry</label>
                        <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                            <SelectTrigger className="w-full h-10 bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium focus:ring-0 focus:border-[#0d0d0d]"><SelectValue placeholder="All Ministries" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Ministries</SelectItem>
                                <SelectItem value="General">General</SelectItem>
                                <SelectItem value="CBF">Children (CBF)</SelectItem>
                                <SelectItem value="BBF">Infants (BBF)</SelectItem>
                                <SelectItem value="JBF">Junior High (JBF)</SelectItem>
                                <SelectItem value="HBF">High School (HBF)</SelectItem>
                                <SelectItem value="YAM">Young Adults (YAM)</SelectItem>
                                <SelectItem value="Adults">Adults</SelectItem>
                            </SelectContent>
                        </Select>
                     </div>

                     {/* Campus */}
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Campus</label>
                        <Select value={selectedCampus} onValueChange={setSelectedCampus}>
                            <SelectTrigger className="w-full h-10 bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium focus:ring-0 focus:border-[#0d0d0d]"><SelectValue placeholder="All Campuses" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Campuses</SelectItem>
                                {campuses.map(campus => (
                                    <SelectItem key={campus.id} value={campus.id}>{campus.shortName}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                     </div>

                     {/* Date From */}
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">From</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className={cn("w-full h-10 justify-start text-left font-medium bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] shadow-none hover:bg-white", !dateFrom && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#a0a0a0]" />
                                    {dateFrom ? format(dateFrom, "MMM d, yyyy") : <span className="text-[#0d0d0d]">Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus /></PopoverContent>
                        </Popover>
                     </div>

                     {/* Date To */}
                     <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">To</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className={cn("w-full h-10 justify-start text-left font-medium bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] shadow-none hover:bg-white", !dateTo && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4 text-[#a0a0a0]" />
                                    {dateTo ? format(dateTo, "MMM d, yyyy") : <span className="text-[#0d0d0d]">Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus /></PopoverContent>
                        </Popover>
                     </div>

                </div>
            </div>

            {/* VIEW CONTENT */}
            
            {/* 1. CARD VIEW (UPDATED TO NEW DESIGN) */}
            {view === 'card' && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {displayedItems.map(item => (
                            <div 
                                key={item.id}
                                onClick={() => handleNavigateDetail(item)}
                                className="group relative bg-white overflow-hidden cursor-pointer flex flex-col transition-all duration-300 rounded-[20px] border border-[#dcdcdc] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] h-full hover:border-[#0d0d0d]"
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden w-full h-[200px] shrink-0">
                                    {item.imageUrl ? (
                                        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50">
                                            <span className={cn("font-black opacity-20 uppercase tracking-widest text-3xl", getMinistryColor(item.ministry))}>{item.ministry}</span>
                                        </div>
                                    )}
                                    
                                    {/* Date Badge */}
                                    <div className="absolute top-4 left-4 bg-white rounded-[12px] px-3 py-2 text-center min-w-[60px] shadow-sm">
                                        <span className="block text-[10px] font-bold uppercase tracking-wider text-[#d32f2f] mb-0.5">{format(item.startDate, 'MMM')}</span>
                                        <span className="block text-[24px] font-medium text-[#0d0d0d] leading-none tracking-[-0.04em]">{format(item.startDate, 'dd')}</span>
                                    </div>

                                    {/* Type Badge */}
                                    <div className={cn(
                                        "absolute top-4 right-4 px-2 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm",
                                        item.type === 'Program' ? "bg-[#f97316]" : "bg-[#155dfc]"
                                    )}>
                                        {item.type.toUpperCase()}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col p-6 grow gap-4">
                                    <h3 className="text-[20px] font-medium leading-[1.2] text-[#0d0d0d] tracking-[-0.02em] line-clamp-2">
                                        {item.title}
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-[#676767]" strokeWidth={1.5} />
                                            <span className="text-[14px] text-[#313131] leading-[1.4] tracking-[-0.01em]">
                                                {item.displayDateString || format(item.startDate, 'h:mm a')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-[#676767]" strokeWidth={1.5} />
                                            <span className="text-[14px] text-[#313131] leading-[1.4] tracking-[-0.01em]">
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                                        <div className="bg-[#e8e8e8] px-2 py-1.5 rounded-[8px]">
                                            <p className="text-[#676767] text-[10px] font-bold uppercase tracking-wider">
                                                #{item.ministry}
                                            </p>
                                        </div>
                                        {item.tags?.slice(0, 2).map(tag => (
                                            <div key={tag} className="bg-[#e8e8e8] px-2 py-1.5 rounded-[8px]">
                                                <p className="text-[#676767] text-[10px] font-bold uppercase tracking-wider">
                                                    {tag}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {hasMore && (
                        <div className="flex justify-center mb-20">
                            <Button variant="outline" onClick={() => setVisibleCount(prev => prev + 12)} className="rounded-full px-8 py-6 border-gray-200 text-gray-600 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
                                Load More
                            </Button>
                        </div>
                    )}
                </>
            )}

            {/* 2. LIST VIEW */}
            {view === 'list' && (
                <div className="max-w-4xl mx-auto mb-20">
                     {displayedItems.map(item => (
                         <div 
                            key={item.id}
                            onClick={() => handleNavigateDetail(item)}
                            className="group cursor-pointer py-6 border-b border-[#e8e8e8] hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-6 md:items-center px-4 rounded-[16px]"
                         >
                            <div className="w-20 text-center shrink-0">
                                <span className="block text-[12px] font-bold text-[#d32f2f] uppercase tracking-wider">
                                    {format(item.startDate, 'MMM')}
                                </span>
                                <span className="block text-[32px] font-medium text-[#0d0d0d] leading-none">
                                    {format(item.startDate, 'dd')}
                                </span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={cn(
                                        "inline-block px-2 py-0.5 text-white text-[9px] font-bold uppercase tracking-wider rounded-[4px]",
                                        item.type === 'Meeting' ? "bg-emerald-600" : 
                                        item.type === 'Program' ? "bg-[#f97316]" : "bg-[#155dfc]"
                                    )}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-[20px] font-medium text-[#0d0d0d] leading-tight mb-2 group-hover:text-[#3667B1] transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-4 text-[13px] text-[#676767]">
                                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" strokeWidth={1.5} /> {item.displayDateString || format(item.startDate, 'h:mm a')}</span>
                                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" strokeWidth={1.5} /> {item.location}</span>
                                </div>
                            </div>
                            <div className="hidden md:block text-[#dcdcdc] group-hover:text-[#0d0d0d] transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                         </div>
                     ))}
                     {hasMore && (
                        <div className="flex justify-center mt-12">
                            <Button variant="outline" onClick={() => setVisibleCount(prev => prev + 12)} className="rounded-full px-8 py-6 border-gray-200 text-gray-600 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
                                Load More
                            </Button>
                        </div>
                    )}
                </div>
            )}

            {/* 3. CALENDAR VIEW */}
            {view === 'calendar' && (
                <div className="mb-20 bg-white p-8 rounded-[24px] border border-[#e8e8e8]">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[24px] font-medium text-[#0d0d0d]">
                            {format(currentMonth, 'MMMM yyyy')}
                        </h2>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => setCurrentMonth(prev => addDays(prev, -30))}>
                                <ChevronLeft className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>Today</Button>
                            <Button variant="outline" size="sm" onClick={() => setCurrentMonth(prev => addDays(prev, 30))}>
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-px bg-[#e8e8e8] border border-[#e8e8e8] rounded-lg overflow-hidden">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="bg-[#f9f9f9] p-3 text-center text-[11px] font-bold uppercase tracking-widest text-[#676767]">
                                {day}
                            </div>
                        ))}
                        {calendarDays.map((day, idx) => {
                            const dayEvents = getEventsForDay(day);
                            return (
                                <div 
                                    key={idx} 
                                    className={cn(
                                        "bg-white min-h-[120px] p-2 transition-colors hover:bg-gray-50",
                                        !isSameMonth(day, currentMonth) && "bg-gray-50/50 text-gray-400"
                                    )}
                                >
                                    <div className={cn("text-[11px] font-bold mb-2 w-6 h-6 flex items-center justify-center rounded-full", isToday(day) ? "bg-[#0d0d0d] text-white" : "text-[#0d0d0d]")}>
                                        {format(day, 'd')}
                                    </div>
                                    <div className="space-y-1">
                                        {dayEvents.slice(0, 3).map(event => (
                                            <div 
                                                key={event.id}
                                                onClick={() => handleNavigateDetail(event)}
                                                className={cn(
                                                    "cursor-pointer text-[10px] px-1.5 py-1 rounded-[4px] font-bold truncate transition-colors border-l-2",
                                                    event.type === 'Meeting' ? "bg-emerald-50 text-emerald-700 border-emerald-600 hover:bg-emerald-600 hover:text-white" :
                                                    event.type === 'Program' ? "bg-orange-50 text-orange-700 border-orange-500 hover:bg-orange-500 hover:text-white" :
                                                    "bg-blue-50 text-blue-700 border-blue-600 hover:bg-blue-600 hover:text-white"
                                                )}
                                            >
                                                {format(event.startDate, 'h:mma')} {event.title}
                                            </div>
                                        ))}
                                        {dayEvents.length > 3 && (
                                            <div className="text-[9px] text-gray-400 font-bold pl-1">
                                                +{dayEvents.length - 3} more
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
}