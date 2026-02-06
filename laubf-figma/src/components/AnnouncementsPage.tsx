import { useState, useMemo } from 'react';
import { ChevronRight, ArrowLeft, Search, Calendar as CalendarIcon, Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from './ui/utils';
import { mockAnnouncements } from '../data/mockAnnouncements';
import { format, parse, isAfter, isBefore, startOfDay, endOfDay, isValid } from 'date-fns';

interface AnnouncementsPageProps {
  onNavigate: (page: any, id?: string) => void;
  onBack: () => void;
}

export default function AnnouncementsPage({ onNavigate, onBack }: AnnouncementsPageProps) {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  // Filter Logic
  const filteredAnnouncements = useMemo(() => {
    return mockAnnouncements.filter(item => {
      // 1. Search
      const q = searchQuery.toLowerCase();
      const matchesSearch = 
        item.title.toLowerCase().includes(q) || 
        item.summary.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // 2. Date Parsing & Filter
      // Format: "October 24, 2023"
      let itemDate = new Date();
      try {
          itemDate = parse(item.date, 'MMMM d, yyyy', new Date());
      } catch (e) {
          console.error("Date parse error", e);
          return true; // Keep if parse fails
      }

      if (!isValid(itemDate)) return true;

      // From
      if (dateFrom && isBefore(itemDate, startOfDay(dateFrom))) {
          return false;
      }

      // To
      if (dateTo && isAfter(itemDate, endOfDay(dateTo))) {
          return false;
      }

      return true;
    });
  }, [searchQuery, dateFrom, dateTo]);

  // Reset Filters
  const clearFilters = () => {
      setSearchQuery('');
      setDateFrom(undefined);
      setDateTo(undefined);
  };

  const activeFiltersCount = (searchQuery ? 1 : 0) + (dateFrom ? 1 : 0) + (dateTo ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* HEADER */}
      <div className="bg-black text-white pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
           <div className="flex items-center gap-3 mb-6">
                <Button variant="ghost" size="sm" onClick={onBack} className="text-white/60 hover:text-white hover:bg-white/10 -ml-3">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Button>
           </div>
           <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider mb-6">
              Internal Updates
           </span>
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
               Announcements
           </h1>
           <p className="text-gray-400 font-medium max-w-xl text-lg">
              Official news, reports, and updates for our members.
           </p>
        </div>
      </div>

      {/* CONTROLS & CONTENT */}
      <div className="px-6 relative z-20 -mt-8">
        <div className="w-[90%] max-w-[1400px] mx-auto">
            
            {/* Filters Bar */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-12 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
                    
                    {/* Search */}
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-12 bg-gray-50 border-0 rounded-xl"
                            placeholder="Search by keyword..." 
                        />
                    </div>

                    {/* Date From */}
                    <div className="w-full md:w-auto">
                        <div className="text-[10px] font-bold uppercase text-gray-400 tracking-wider ml-1 mb-1">From</div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className={cn("w-full md:w-[180px] h-12 justify-start text-left font-normal bg-gray-50 border-0 rounded-xl", !dateFrom && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateFrom ? format(dateFrom, "MMM d, yyyy") : <span>Date From</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={dateFrom} onSelect={setDateFrom} initialFocus /></PopoverContent>
                        </Popover>
                    </div>

                    {/* Date To */}
                    <div className="w-full md:w-auto">
                        <div className="text-[10px] font-bold uppercase text-gray-400 tracking-wider ml-1 mb-1">To</div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className={cn("w-full md:w-[180px] h-12 justify-start text-left font-normal bg-gray-50 border-0 rounded-xl", !dateTo && "text-muted-foreground")}>
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateTo ? format(dateTo, "MMM d, yyyy") : <span>Date To</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={dateTo} onSelect={setDateTo} initialFocus /></PopoverContent>
                        </Popover>
                    </div>
                    
                    {/* Clear Button */}
                    {activeFiltersCount > 0 && (
                        <Button variant="ghost" onClick={clearFilters} className="h-12 px-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl">
                            <X className="w-4 h-4 mr-2" /> Clear
                        </Button>
                    )}

                </div>
            </div>

            {/* List */}
            <div className="max-w-4xl mx-auto space-y-4">
                {filteredAnnouncements.length > 0 ? (
                    filteredAnnouncements.map((announcement) => (
                         <Card 
                            key={announcement.id} 
                            className="border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group overflow-hidden"
                            onClick={() => onNavigate('announcement-detail', announcement.id)}
                         >
                           <CardContent className="p-0 flex flex-col md:flex-row">
                               <div className="bg-gray-100 p-6 md:w-48 shrink-0 flex flex-col justify-center items-center text-center group-hover:bg-[#3667B1] group-hover:text-white transition-colors duration-300">
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                                        {announcement.type}
                                    </span>
                                    <span className="font-serif text-4xl font-black leading-none mb-1">
                                        {format(parse(announcement.date, 'MMMM d, yyyy', new Date()), 'dd')}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                                        {format(parse(announcement.date, 'MMMM d, yyyy', new Date()), 'MMM yyyy')}
                                    </span>
                               </div>
                               <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-[#3667B1] transition-colors">
                                        {announcement.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {announcement.summary}
                                    </p>
                                    <div className="flex items-center text-[#3667B1] font-bold text-xs uppercase tracking-wider mt-auto">
                                        Read Announcement <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                               </div>
                           </CardContent>
                         </Card>
                    ))
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">No announcements found</h3>
                        <p className="text-gray-500 text-sm">Try adjusting your search or date filters.</p>
                        <Button variant="link" onClick={clearFilters} className="mt-2 text-[#3667B1]">Clear all filters</Button>
                    </div>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}