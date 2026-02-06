import { useState, useEffect } from 'react';
import { Search, Filter, X, Check, ChevronDown, Calendar as CalendarIcon, BookOpen, LayoutGrid, Folder, Book, ArrowUp, ArrowDown, Library, ArrowRight } from 'lucide-react';
import { studies } from '../lib/studies';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "./ui/utils";
import { format, startOfDay, endOfDay } from "date-fns";

interface StudiesPageProps {
  onNavigate: (page: any, id?: string) => void;
}

const ITEMS_PER_PAGE = 12;

type ViewMode = 'all' | 'series' | 'books';
type ViewLayout = 'grid' | 'list';
type SortKey = 'date' | 'passage' | 'title';
type SortDirection = 'asc' | 'desc';

interface SortConfig {
  key: SortKey;
  direction: SortDirection;
}

const BIBLE_BOOKS = [
  // Old Testament
  { name: 'Genesis', testament: 'Old' }, { name: 'Exodus', testament: 'Old' }, { name: 'Leviticus', testament: 'Old' }, 
  { name: 'Numbers', testament: 'Old' }, { name: 'Deuteronomy', testament: 'Old' }, { name: 'Joshua', testament: 'Old' }, 
  { name: 'Judges', testament: 'Old' }, { name: 'Ruth', testament: 'Old' }, { name: '1 Samuel', testament: 'Old' }, 
  { name: '2 Samuel', testament: 'Old' }, { name: '1 Kings', testament: 'Old' }, { name: '2 Kings', testament: 'Old' }, 
  { name: '1 Chronicles', testament: 'Old' }, { name: '2 Chronicles', testament: 'Old' }, { name: 'Ezra', testament: 'Old' }, 
  { name: 'Nehemiah', testament: 'Old' }, { name: 'Esther', testament: 'Old' }, { name: 'Job', testament: 'Old' }, 
  { name: 'Psalms', testament: 'Old' }, { name: 'Proverbs', testament: 'Old' }, { name: 'Ecclesiastes', testament: 'Old' }, 
  { name: 'Song of Solomon', testament: 'Old' }, { name: 'Isaiah', testament: 'Old' }, { name: 'Jeremiah', testament: 'Old' }, 
  { name: 'Lamentations', testament: 'Old' }, { name: 'Ezekiel', testament: 'Old' }, { name: 'Daniel', testament: 'Old' }, 
  { name: 'Hosea', testament: 'Old' }, { name: 'Joel', testament: 'Old' }, { name: 'Amos', testament: 'Old' }, 
  { name: 'Obadiah', testament: 'Old' }, { name: 'Jonah', testament: 'Old' }, { name: 'Micah', testament: 'Old' }, 
  { name: 'Nahum', testament: 'Old' }, { name: 'Habakkuk', testament: 'Old' }, { name: 'Zephaniah', testament: 'Old' }, 
  { name: 'Haggai', testament: 'Old' }, { name: 'Zechariah', testament: 'Old' }, { name: 'Malachi', testament: 'Old' },
  // New Testament
  { name: 'Matthew', testament: 'New' }, { name: 'Mark', testament: 'New' }, { name: 'Luke', testament: 'New' }, 
  { name: 'John', testament: 'New' }, { name: 'Acts', testament: 'New' }, { name: 'Romans', testament: 'New' }, 
  { name: '1 Corinthians', testament: 'New' }, { name: '2 Corinthians', testament: 'New' }, { name: 'Galatians', testament: 'New' }, 
  { name: 'Ephesians', testament: 'New' }, { name: 'Philippians', testament: 'New' }, { name: 'Colossians', testament: 'New' }, 
  { name: '1 Thessalonians', testament: 'New' }, { name: '2 Thessalonians', testament: 'New' }, { name: '1 Timothy', testament: 'New' }, 
  { name: '2 Timothy', testament: 'New' }, { name: 'Titus', testament: 'New' }, { name: 'Philemon', testament: 'New' }, 
  { name: 'Hebrews', testament: 'New' }, { name: 'James', testament: 'New' }, { name: '1 Peter', testament: 'New' }, 
  { name: '2 Peter', testament: 'New' }, { name: '1 John', testament: 'New' }, { name: '2 John', testament: 'New' }, 
  { name: '3 John', testament: 'New' }, { name: 'Jude', testament: 'New' }, { name: 'Revelation', testament: 'New' }
] as const;

export default function StudiesPage({ onNavigate }: StudiesPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'date', direction: 'desc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState<string>('All');
  const [selectedSeries, setSelectedSeries] = useState<string>('All');
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [openBook, setOpenBook] = useState(false);
  const [openSeries, setOpenSeries] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedBook, selectedSeries, startDate, endDate, viewMode]);

  // --- DATA HELPERS ---
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

  const uniqueBooks = Array.from(new Set(studies.map(s => getBookFromPassage(s.passage)))).sort();
  const bibleBookNames = new Set(BIBLE_BOOKS.map(b => b.name));
  
  // Custom series (filtering out things that are just Book names if they happen to be used as series, though usually series are distinct)
  const uniqueSeries = Array.from(new Set(studies.map(s => s.series)))
    .filter(series => !bibleBookNames.has(series)) // Optional: keep if series names overlap with book names
    .sort();

  // --- FILTER LOGIC ---
  const filteredStudies = studies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.passage.toLowerCase().includes(searchTerm.toLowerCase());
    
    const studyBook = getBookFromPassage(study.passage);
    const matchesBook = selectedBook === 'All' || studyBook === selectedBook;
    const matchesSeries = selectedSeries === 'All' || study.series === selectedSeries;

    let matchesDate = true;
    const studyDate = new Date(study.date);
    
    if (startDate && studyDate < startOfDay(startDate)) {
       matchesDate = false;
    }
    if (endDate && studyDate > endOfDay(endDate)) {
       matchesDate = false;
    }
    
    return matchesSearch && matchesBook && matchesSeries && matchesDate;
  });

  // --- SORT LOGIC ---
  const sortedStudies = [...filteredStudies].sort((a, b) => {
    let comparison = 0;
    switch (sortConfig.key) {
      case 'date':
        comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'passage':
        comparison = a.passage.localeCompare(b.passage, undefined, { numeric: true, sensitivity: 'base' });
        break;
    }
    return sortConfig.direction === 'asc' ? comparison : -comparison;
  });

  const visibleStudies = sortedStudies.slice(0, visibleCount);
  const hasMore = visibleCount < sortedStudies.length;

  // --- GROUPING LOGIC (For Series/Books Views) ---
  const seriesGroups = uniqueSeries.map(seriesName => {
     const seriesStudies = studies.filter(s => s.series === seriesName);
     const latestDate = seriesStudies.reduce((max, s) => s.date > max ? s.date : max, seriesStudies[0]?.date || '');
     return {
        name: seriesName,
        count: seriesStudies.length,
        latestDate,
        studies: seriesStudies
     };
  });

  const bookGroups = uniqueBooks.map(bookName => {
    const bookStudies = studies.filter(s => getBookFromPassage(s.passage) === bookName);
    const latestDate = bookStudies.reduce((max, s) => s.date > max ? s.date : max, bookStudies[0]?.date || '');
    return {
        name: bookName,
        count: bookStudies.length,
        latestDate,
        studies: bookStudies
    };
  });

  // --- HANDLERS ---
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBook('All');
    setSelectedSeries('All');
    setStartDate(undefined);
    setEndDate(undefined);
    setSortConfig({ key: 'date', direction: 'desc' });
  };

  const hasActiveFilters = selectedBook !== 'All' || selectedSeries !== 'All' || startDate !== undefined || endDate !== undefined || searchTerm !== '';

  const handleGroupClick = (type: 'series' | 'book', name: string) => {
      if (type === 'series') {
          setSelectedSeries(name);
          setSelectedBook('All');
      } else {
          setSelectedBook(name);
          setSelectedSeries('All'); // Depending on logic, maybe we want to keep series if it makes sense, but usually mutually exclusive filters for drill-down
      }
      setViewMode('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-40 font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="bg-white pt-[60px] pb-[40px] px-6 border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
           <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
              <BookOpen className="w-3 h-3" /> Discipleship Tools
           </div>
           <h1 className="text-[60px] md:text-[80px] leading-[0.9] font-medium tracking-[-0.04em] text-[#0d0d0d] mb-4">
               Study Guides
           </h1>
           <p className="text-[#676767] text-[18px] font-normal max-w-2xl">
              Deep dive into the Word of God with our weekly bible study materials and questions.
           </p>
        </div>
      </div>

      {/* 2. VIEW TOGGLE */}
      <div className="sticky top-0 z-20 bg-[#fafafa]/95 backdrop-blur-md pt-8 pb-4 px-6 border-b border-[#e8e8e8]">
         <div className="max-w-[1400px] mx-auto flex items-center justify-center md:justify-start">
             <div className="flex bg-white p-1 rounded-[12px] border border-[#e8e8e8] shadow-sm">
                 <button 
                   onClick={() => setViewMode('all')}
                   className={cn(
                       "px-6 py-2 rounded-[8px] text-[13px] font-bold uppercase tracking-wide transition-all",
                       viewMode === 'all' ? "bg-[#0d0d0d] text-white shadow-md" : "text-[#676767] hover:bg-gray-50"
                   )}
                 >
                    All Studies
                 </button>
                 <button 
                   onClick={() => setViewMode('series')}
                   className={cn(
                       "px-6 py-2 rounded-[8px] text-[13px] font-bold uppercase tracking-wide transition-all",
                       viewMode === 'series' ? "bg-[#0d0d0d] text-white shadow-md" : "text-[#676767] hover:bg-gray-50"
                   )}
                 >
                    Series
                 </button>
                 <button 
                   onClick={() => setViewMode('books')}
                   className={cn(
                       "px-6 py-2 rounded-[8px] text-[13px] font-bold uppercase tracking-wide transition-all",
                       viewMode === 'books' ? "bg-[#0d0d0d] text-white shadow-md" : "text-[#676767] hover:bg-gray-50"
                   )}
                 >
                    Books
                 </button>
             </div>
         </div>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <section className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto">
          
          {/* VIEW: ALL STUDIES */}
          {viewMode === 'all' && (
              <>
                {/* Controls Bar */}
                <div className="bg-white rounded-[16px] p-2 mb-10 shadow-sm border border-[#e8e8e8]">
                    {/* Top Row: Search */}
                    <div className="p-2 border-b border-[#f0f0f0] mb-2">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                            <input 
                                type="text" 
                                placeholder="Search studies by title or passage..." 
                                className="w-full h-10 bg-[#f9f9f9] pl-10 pr-4 rounded-[8px] text-[13px] font-medium focus:outline-none focus:ring-1 focus:ring-[#0d0d0d] transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Bottom Row: Filters */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 px-2 pb-2">
                        
                        {/* Series */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Series</label>
                            <Popover open={openSeries} onOpenChange={setOpenSeries}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" role="combobox" aria-expanded={openSeries} className="w-full h-10 justify-between bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium text-[#0d0d0d] hover:bg-white shadow-none">
                                        {selectedSeries === 'All' ? "All Series" : selectedSeries}
                                        <ChevronDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search series..." className="text-[13px]" />
                                        <CommandList>
                                            <CommandEmpty>No series found.</CommandEmpty>
                                            <CommandGroup>
                                                <CommandItem value="All" onSelect={() => { setSelectedSeries("All"); setOpenSeries(false); }} className="text-[13px]">
                                                    <Check className={cn("mr-2 h-3 w-3", selectedSeries === "All" ? "opacity-100" : "opacity-0")} /> All Series
                                                </CommandItem>
                                                {uniqueSeries.map((series) => (
                                                    <CommandItem key={series} value={series} onSelect={(val) => { setSelectedSeries(val === selectedSeries ? "All" : val); setOpenSeries(false); }} className="text-[13px]">
                                                        <Check className={cn("mr-2 h-3 w-3", selectedSeries === series ? "opacity-100" : "opacity-0")} /> {series}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
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
                                    <Button variant="outline" className={cn("w-full h-10 justify-start text-left font-medium bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] shadow-none hover:bg-white", !startDate && "text-[#676767]")}>
                                        <CalendarIcon className="mr-2 h-3 w-3 text-[#a0a0a0]" />
                                        {startDate ? (endDate ? `${format(startDate, "MMM d")} - ${format(endDate, "MMM d")}` : format(startDate, "MMM d, yyyy")) : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar 
                                        initialFocus 
                                        mode="single" 
                                        selected={startDate} 
                                        onSelect={setStartDate} 
                                    />
                                </PopoverContent>
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

                {/* TEXT-ONLY CARD GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleStudies.map(study => (
                        <div 
                            key={study.id} 
                            onClick={() => onNavigate('study-detail', study.id)}
                            className="group bg-white rounded-[16px] p-8 border border-[#e8e8e8] hover:border-[#0d0d0d] hover:shadow-md transition-all cursor-pointer flex flex-col h-full min-h-[200px]"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="px-3 py-1 bg-[#f3f4f6] rounded-[6px] text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                                    {study.series}
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a0a0a0]">{study.date}</span>
                            </div>
                            
                            <div className="flex-1">
                                <h3 className="text-[24px] font-medium leading-[1.1] text-[#0d0d0d] tracking-[-0.02em] mb-3 group-hover:text-[#3667B1] transition-colors">
                                    {study.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[#676767]">
                                    <BookOpen className="w-4 h-4 text-[#a0a0a0]" />
                                    <span className="text-[14px] font-medium font-serif italic">{study.passage}</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-[#f0f0f0] flex items-center justify-between">
                                <div className="text-[11px] font-bold uppercase tracking-widest text-[#a0a0a0]">
                                    {getBookFromPassage(study.passage)}
                                </div>
                                <ArrowRight className="w-4 h-4 text-[#dcdcdc] group-hover:text-[#0d0d0d] transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>

                {filteredStudies.length === 0 && (
                    <div className="text-center py-40 text-[#676767]">
                        <p className="text-[18px] font-medium">No studies found matching your criteria.</p>
                        <button onClick={clearFilters} className="mt-4 text-[#0d0d0d] font-bold text-[13px] uppercase tracking-widest hover:underline">Clear Filters</button>
                    </div>
                )}

                {/* Load More */}
                {hasMore && (
                    <div className="mt-20 flex justify-center">
                        <Button 
                        onClick={() => setVisibleCount(prev => prev + 12)}
                        variant="outline"
                        className="h-14 px-8 rounded-full border-[#dcdcdc] text-[#0d0d0d] font-bold uppercase tracking-widest text-[11px] hover:bg-[#0d0d0d] hover:text-white transition-all"
                        >
                        Load More Studies
                        </Button>
                    </div>
                )}
              </>
          )}

          {/* VIEW: SERIES COLLECTIONS */}
          {viewMode === 'series' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                  {seriesGroups.map(group => (
                      <div 
                        key={group.name} 
                        onClick={() => handleGroupClick('series', group.name)}
                        className="group bg-white p-8 rounded-[16px] border border-[#e8e8e8] hover:border-[#0d0d0d] hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
                      >
                           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                               <Library className="w-24 h-24" />
                           </div>
                           
                           <div className="relative z-10 flex flex-col h-full">
                               <div className="mb-4 w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                                   <Folder className="w-5 h-5 text-[#0d0d0d]" />
                               </div>
                               
                               <h3 className="text-[24px] font-medium text-[#0d0d0d] tracking-[-0.02em] mb-2">{group.name}</h3>
                               <p className="text-[13px] text-[#676767] mb-6">{group.count} Studies • Last updated {group.latestDate}</p>
                               
                               <div className="mt-auto flex items-center text-[11px] font-bold uppercase tracking-widest text-[#3667B1] group-hover:underline">
                                   View Collection
                               </div>
                           </div>
                      </div>
                  ))}
              </div>
          )}

          {/* VIEW: BOOKS COLLECTIONS */}
          {viewMode === 'books' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in duration-500">
                  {bookGroups.map(group => (
                      <div 
                        key={group.name} 
                        onClick={() => handleGroupClick('book', group.name)}
                        className="group bg-white p-6 rounded-[16px] border border-[#e8e8e8] hover:border-[#0d0d0d] hover:shadow-md transition-all cursor-pointer text-center flex flex-col items-center justify-center min-h-[160px]"
                      >
                           <div className="mb-4 w-10 h-10 bg-[#f3f4f6] rounded-full flex items-center justify-center group-hover:bg-[#0d0d0d] group-hover:text-white transition-colors">
                               <Book className="w-4 h-4" />
                           </div>
                           
                           <h3 className="text-[18px] font-bold text-[#0d0d0d] tracking-tight mb-1">{group.name}</h3>
                           <p className="text-[11px] font-bold uppercase tracking-wider text-[#9ca3af]">{group.count} Studies</p>
                      </div>
                  ))}
              </div>
          )}

        </div>
      </section>
    </div>
  );
}