import { useState, useEffect } from 'react';
import { Play, Calendar as CalendarIcon, User, BookOpen, Search, Filter, ArrowRight, X, Check, ChevronDown, Clock } from 'lucide-react';
import { sermons } from '../lib/sermons';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "./ui/utils";
import { format, isWithinInterval, startOfDay, endOfDay } from "date-fns";
import { DateRange } from "react-day-picker";

interface SermonsPageProps {
  onNavigate: (page: 'home' | 'about' | 'sermons' | 'sermon-detail', sermonId?: string) => void;
}

const ITEMS_PER_PAGE = 9;

export default function SermonsPage({ onNavigate }: SermonsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('All');
  const [selectedEvent, setSelectedEvent] = useState<string>('All');
  const [selectedBook, setSelectedBook] = useState<string>('All');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [openBook, setOpenBook] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedSpeaker, selectedEvent, selectedBook, dateRange]);

  // Logic
  const latestSermon = sermons?.[0];
  const otherSermons = sermons?.slice(1) || [];

  const getBookFromPassage = (passage: string) => {
    const parts = passage.split(' ');
    if (/^\d/.test(parts[0])) {
      return `${parts[0]} ${parts[1]}`;
    }
    if (parts[0] === 'Song') {
      return 'Song of Solomon';
    }
    return parts[0];
  };

  const uniqueSpeakers = ['All', ...Array.from(new Set(sermons.map(s => s.speaker)))];
  const uniqueEvents = ['All', ...Array.from(new Set(sermons.map(s => s.event)))];
  const uniqueBooks = Array.from(new Set(sermons.map(s => getBookFromPassage(s.passage)))).sort();

  // Filter logic
  const filteredSermons = otherSermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sermon.passage.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpeaker = selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker;
    const matchesEvent = selectedEvent === 'All' || sermon.event === selectedEvent;
    
    const sermonBook = getBookFromPassage(sermon.passage);
    const matchesBook = selectedBook === 'All' || sermonBook === selectedBook;

    let matchesDate = true;
    if (dateRange?.from) {
        const sermonDate = new Date(sermon.date);
        const start = startOfDay(dateRange.from);
        const end = dateRange.to ? endOfDay(dateRange.to) : endOfDay(dateRange.from);
        matchesDate = isWithinInterval(sermonDate, { start, end });
    }
    
    return matchesSearch && matchesSpeaker && matchesEvent && matchesBook && matchesDate;
  });

  const visibleSermons = filteredSermons.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSermons.length;

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSpeaker('All');
    setSelectedEvent('All');
    setSelectedBook('All');
    setDateRange(undefined);
  };

  const hasActiveFilters = selectedSpeaker !== 'All' || selectedEvent !== 'All' || selectedBook !== 'All' || dateRange !== undefined || searchTerm !== '';

  return (
    <div className="bg-[#fafafa] min-h-screen pb-40 font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* 1. HEADER */}
      <div className="bg-white pt-[60px] pb-[40px] px-6 border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
           <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
              <Play className="w-3 h-3" /> Media Library
           </div>
           <h1 className="text-[60px] md:text-[80px] leading-[0.9] font-medium tracking-[-0.04em] text-[#0d0d0d] mb-4">
               Sunday Messages
           </h1>
           <p className="text-[#676767] text-[18px] font-normal max-w-2xl">
              Watch recent sermons, download study guides, and grow in your faith.
           </p>
        </div>
      </div>

      {/* 2. LATEST MESSAGE (Featured) */}
      {latestSermon && (
        <section className="px-6 py-12">
            <div className="max-w-[1400px] mx-auto">
                <div 
                    onClick={() => onNavigate('sermon-detail', latestSermon.id)}
                    className="group relative w-full aspect-[21/9] md:aspect-[2.35/1] rounded-[24px] overflow-hidden cursor-pointer shadow-sm"
                >
                    <img 
                      src={`https://img.youtube.com/vi/${latestSermon.videoId}/maxresdefault.jpg`} 
                      alt={latestSermon.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-3xl">
                         <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-[8px] text-[11px] font-bold uppercase tracking-widest text-white mb-6 border border-white/10">
                            Latest Message
                         </span>
                         <h2 className="text-[32px] md:text-[56px] leading-[1] font-medium tracking-[-0.03em] text-white mb-4">
                            {latestSermon.title}
                         </h2>
                         <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <span className="text-[14px] font-bold uppercase tracking-wide">{latestSermon.speaker}</span>
                            <span className="w-1 h-1 bg-white/50 rounded-full" />
                            <span className="text-[14px] font-medium tracking-wide">{latestSermon.passage}</span>
                            <span className="w-1 h-1 bg-white/50 rounded-full" />
                            <span className="text-[14px] text-white/70">{latestSermon.date}</span>
                         </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                        <Play className="w-8 h-8 text-white ml-1 fill-white" />
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* 3. FILTERS & GRID */}
      <section className="px-6">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Controls Bar */}
          <div className="bg-white rounded-[16px] p-2 mb-10 shadow-sm border border-[#e8e8e8]">
             {/* Search */}
             <div className="p-2 border-b border-[#f0f0f0] mb-2">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                    <input 
                        type="text" 
                        placeholder="Search by title or passage..." 
                        className="w-full h-10 bg-[#f9f9f9] pl-10 pr-4 rounded-[8px] text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-[#0d0d0d] transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
             </div>

             {/* Filters Grid */}
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 px-2 pb-2">
                 
                 {/* Speaker */}
                 <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Speaker</label>
                    <Select value={selectedSpeaker} onValueChange={setSelectedSpeaker}>
                        <SelectTrigger className="w-full h-10 bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium focus:ring-0 focus:border-[#0d0d0d]"><SelectValue placeholder="All Speakers" /></SelectTrigger>
                        <SelectContent>
                            {uniqueSpeakers.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                    </Select>
                 </div>

                 {/* Book */}
                 <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Book</label>
                    <Popover open={openBook} onOpenChange={setOpenBook}>
                        <PopoverTrigger asChild>
                            <Button variant="outline" role="combobox" aria-expanded={openBook} className="w-full h-10 justify-between bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium text-[#0d0d0d] hover:bg-white shadow-none">
                                {selectedBook === 'All' ? "All Books" : selectedBook}
                                <ChevronDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                                <CommandInput placeholder="Search books..." className="text-[13px]" />
                                <CommandList>
                                    <CommandEmpty>No book found.</CommandEmpty>
                                    <CommandGroup>
                                        <CommandItem value="All" onSelect={() => { setSelectedBook("All"); setOpenBook(false); }} className="text-[13px]">
                                            <Check className={cn("mr-2 h-3 w-3", selectedBook === "All" ? "opacity-100" : "opacity-0")} /> All Books
                                        </CommandItem>
                                        {uniqueBooks.map((book) => (
                                            <CommandItem key={book} value={book} onSelect={(val) => { setSelectedBook(val === selectedBook ? "All" : val); setOpenBook(false); }} className="text-[13px]">
                                                <Check className={cn("mr-2 h-3 w-3", selectedBook === book ? "opacity-100" : "opacity-0")} /> {book}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                 </div>

                 {/* Date */}
                 <div className="space-y-1 col-span-2 lg:col-span-1">
                    <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Date Range</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full h-10 justify-start text-left font-medium bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] shadow-none hover:bg-white", !dateRange && "text-[#676767]")}>
                                <CalendarIcon className="mr-2 h-3 w-3 text-[#a0a0a0]" />
                                {dateRange?.from ? (dateRange.to ? `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d")}` : format(dateRange.from, "MMM d, yyyy")) : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start"><Calendar initialFocus mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={setDateRange} numberOfMonths={2} /></PopoverContent>
                    </Popover>
                 </div>
                
                {/* Clear (If Active) */}
                {hasActiveFilters && (
                    <div className="flex items-end">
                        <Button variant="ghost" onClick={clearFilters} className="h-10 text-[11px] font-bold uppercase tracking-wider text-red-500 hover:text-red-600 hover:bg-red-50 w-full rounded-[8px]">
                            Reset
                        </Button>
                    </div>
                )}
             </div>
          </div>

          {/* Messages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleSermons.map(sermon => (
              <div 
                key={sermon.id} 
                className="group cursor-pointer flex flex-col gap-5"
                onClick={() => onNavigate('sermon-detail', sermon.id)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-[20px] overflow-hidden bg-gray-100 border border-[#e8e8e8] group-hover:border-[#0d0d0d] transition-all duration-300">
                   <img 
                      src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`} 
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                   
                   {/* Series Tag */}
                   <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-[8px] border border-white/20 shadow-sm">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#0d0d0d]">{sermon.series || "Sunday Service"}</span>
                   </div>

                   {/* Duration */}
                   <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-2 py-1 rounded-[6px] text-white text-[10px] font-bold tracking-wide">
                     24:15
                   </div>
                </div>

                {/* Info */}
                <div className="px-2">
                   <div className="flex items-center justify-between text-[#676767] mb-2 text-[12px] font-medium tracking-tight">
                      <span className="flex items-center gap-1.5"><CalendarIcon className="w-3.5 h-3.5" /> {sermon.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {sermon.speaker}</span>
                   </div>
                   
                   <h3 className="text-[20px] font-medium leading-[1.2] text-[#0d0d0d] tracking-[-0.02em] mb-2 group-hover:text-[#3667B1] transition-colors line-clamp-2">
                     {sermon.title}
                   </h3>

                   <div className="flex items-center gap-1.5 text-[#313131] text-[13px] font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-[#a0a0a0]" /> 
                      {sermon.passage}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSermons.length === 0 && (
            <div className="text-center py-40 text-[#676767]">
               <p className="text-[18px] font-medium">No sermons found matching your criteria.</p>
               <button onClick={clearFilters} className="mt-4 text-[#0d0d0d] font-bold text-[13px] uppercase tracking-widest hover:underline">Clear Filters</button>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
             <div className="mt-20 flex justify-center">
                <Button 
                  onClick={() => setVisibleCount(prev => prev + 9)}
                  variant="outline"
                  className="h-14 px-8 rounded-full border-[#dcdcdc] text-[#0d0d0d] font-bold uppercase tracking-widest text-[11px] hover:bg-[#0d0d0d] hover:text-white transition-all"
                >
                  Load More Sermons
                </Button>
             </div>
          )}

        </div>
      </section>
    </div>
  );
}