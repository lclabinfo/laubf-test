import { useState, useEffect } from 'react';
import { Search, Filter, X, Check, ChevronDown, Calendar as CalendarIcon, BookOpen, LayoutGrid, Folder, Book, ArrowUp, ArrowDown, Library, ArrowRight } from 'lucide-react';
import { studies } from '../lib/studies';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { cn } from "./ui/utils";
import { format, startOfDay, endOfDay } from "date-fns";
import StudyCard from './StudyCard';

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

const BIBLE_BOOKS_DATA = [
  // Old Testament
  { name: 'Genesis', testament: 'Old', chapters: 50 },
  { name: 'Exodus', testament: 'Old', chapters: 40 },
  { name: 'Leviticus', testament: 'Old', chapters: 27 }, 
  { name: 'Numbers', testament: 'Old', chapters: 36 },
  { name: 'Deuteronomy', testament: 'Old', chapters: 34 },
  { name: 'Joshua', testament: 'Old', chapters: 24 }, 
  { name: 'Judges', testament: 'Old', chapters: 21 },
  { name: 'Ruth', testament: 'Old', chapters: 4 },
  { name: '1 Samuel', testament: 'Old', chapters: 31 }, 
  { name: '2 Samuel', testament: 'Old', chapters: 24 },
  { name: '1 Kings', testament: 'Old', chapters: 22 },
  { name: '2 Kings', testament: 'Old', chapters: 25 }, 
  { name: '1 Chronicles', testament: 'Old', chapters: 29 },
  { name: '2 Chronicles', testament: 'Old', chapters: 36 },
  { name: 'Ezra', testament: 'Old', chapters: 10 }, 
  { name: 'Nehemiah', testament: 'Old', chapters: 13 },
  { name: 'Esther', testament: 'Old', chapters: 10 },
  { name: 'Job', testament: 'Old', chapters: 42 }, 
  { name: 'Psalms', testament: 'Old', chapters: 150 },
  { name: 'Proverbs', testament: 'Old', chapters: 31 },
  { name: 'Ecclesiastes', testament: 'Old', chapters: 12 }, 
  { name: 'Song of Solomon', testament: 'Old', chapters: 8 },
  { name: 'Isaiah', testament: 'Old', chapters: 66 },
  { name: 'Jeremiah', testament: 'Old', chapters: 52 }, 
  { name: 'Lamentations', testament: 'Old', chapters: 5 },
  { name: 'Ezekiel', testament: 'Old', chapters: 48 },
  { name: 'Daniel', testament: 'Old', chapters: 12 }, 
  { name: 'Hosea', testament: 'Old', chapters: 14 },
  { name: 'Joel', testament: 'Old', chapters: 3 },
  { name: 'Amos', testament: 'Old', chapters: 9 }, 
  { name: 'Obadiah', testament: 'Old', chapters: 1 },
  { name: 'Jonah', testament: 'Old', chapters: 4 },
  { name: 'Micah', testament: 'Old', chapters: 7 }, 
  { name: 'Nahum', testament: 'Old', chapters: 3 },
  { name: 'Habakkuk', testament: 'Old', chapters: 3 },
  { name: 'Zephaniah', testament: 'Old', chapters: 3 }, 
  { name: 'Haggai', testament: 'Old', chapters: 2 },
  { name: 'Zechariah', testament: 'Old', chapters: 14 },
  { name: 'Malachi', testament: 'Old', chapters: 4 },
  // New Testament
  { name: 'Matthew', testament: 'New', chapters: 28 },
  { name: 'Mark', testament: 'New', chapters: 16 },
  { name: 'Luke', testament: 'New', chapters: 24 }, 
  { name: 'John', testament: 'New', chapters: 21 },
  { name: 'Acts', testament: 'New', chapters: 28 },
  { name: 'Romans', testament: 'New', chapters: 16 }, 
  { name: '1 Corinthians', testament: 'New', chapters: 16 },
  { name: '2 Corinthians', testament: 'New', chapters: 13 },
  { name: 'Galatians', testament: 'New', chapters: 6 }, 
  { name: 'Ephesians', testament: 'New', chapters: 6 },
  { name: 'Philippians', testament: 'New', chapters: 4 },
  { name: 'Colossians', testament: 'New', chapters: 4 }, 
  { name: '1 Thessalonians', testament: 'New', chapters: 5 },
  { name: '2 Thessalonians', testament: 'New', chapters: 3 },
  { name: '1 Timothy', testament: 'New', chapters: 6 }, 
  { name: '2 Timothy', testament: 'New', chapters: 4 },
  { name: 'Titus', testament: 'New', chapters: 3 },
  { name: 'Philemon', testament: 'New', chapters: 1 }, 
  { name: 'Hebrews', testament: 'New', chapters: 13 },
  { name: 'James', testament: 'New', chapters: 5 },
  { name: '1 Peter', testament: 'New', chapters: 5 }, 
  { name: '2 Peter', testament: 'New', chapters: 3 },
  { name: '1 John', testament: 'New', chapters: 5 },
  { name: '2 John', testament: 'New', chapters: 1 }, 
  { name: '3 John', testament: 'New', chapters: 1 },
  { name: 'Jude', testament: 'New', chapters: 1 },
  { name: 'Revelation', testament: 'New', chapters: 22 }
] as const;

export default function StudiesPage({ onNavigate }: StudiesPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'date', direction: 'desc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState<string>('All');
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [selectedSeries, setSelectedSeries] = useState<string>('All');
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [openBook, setOpenBook] = useState(false);
  const [openChapter, setOpenChapter] = useState(false);
  const [openSeries, setOpenSeries] = useState(false);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedBook, selectedChapter, selectedSeries, startDate, endDate, viewMode]);

  // When book changes, reset chapter
  useEffect(() => {
    if (selectedBook === 'All') {
        setSelectedChapter('All');
    } else {
        // Optionally keep chapter if it exists in new book? No, safer to reset.
        setSelectedChapter('All');
    }
  }, [selectedBook]);

  // --- DATA HELPERS ---
  const getBookFromPassage = (passage: string) => {
    const parts = passage.split(' ');
    // Handle cases like "1 Samuel"
    if (/^\d/.test(parts[0])) {
      return `${parts[0]} ${parts[1]}`;
    }
    if (parts[0] === 'Song') {
      return 'Song of Solomon';
    }
    return parts[0];
  };

  const getChapterFromPassage = (passage: string) => {
    const bookName = getBookFromPassage(passage);
    const bookData = BIBLE_BOOKS_DATA.find(b => b.name === bookName);
    
    // For single chapter books, always return "1"
    if (bookData?.chapters === 1) return "1";

    const rest = passage.replace(bookName, '').trim();
    // Match the first number found in the remainder
    const match = rest.match(/^(\d+)/);
    return match ? match[1] : null;
  };

  const uniqueBooks = Array.from(new Set(studies.map(s => getBookFromPassage(s.passage)))).sort();
  const bibleBookNames = new Set(BIBLE_BOOKS_DATA.map(b => b.name));
  
  const uniqueSeries = Array.from(new Set(studies.map(s => s.series)))
    .filter(series => !bibleBookNames.has(series)) 
    .sort();

  // --- FILTER LOGIC ---
  const filteredStudies = studies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          study.passage.toLowerCase().includes(searchTerm.toLowerCase());
    
    const studyBook = getBookFromPassage(study.passage);
    const matchesBook = selectedBook === 'All' || studyBook === selectedBook;
    
    // Chapter Filter
    let matchesChapter = true;
    if (selectedChapter !== 'All') {
        const studyChapter = getChapterFromPassage(study.passage);
        matchesChapter = studyChapter === selectedChapter;
    }

    const matchesSeries = selectedSeries === 'All' || study.series === selectedSeries;

    let matchesDate = true;
    const studyDate = new Date(study.date);
    
    if (startDate && studyDate < startOfDay(startDate)) {
       matchesDate = false;
    }
    if (endDate && studyDate > endOfDay(endDate)) {
       matchesDate = false;
    }
    
    return matchesSearch && matchesBook && matchesChapter && matchesSeries && matchesDate;
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

  // Use BIBLE_BOOKS_DATA as source for bookGroups to ensure all 66 books are shown
  const bookGroups = BIBLE_BOOKS_DATA.map(book => {
    const bookStudies = studies.filter(s => getBookFromPassage(s.passage) === book.name);
    // Determine if we have any studies to get a "latest date"
    const latestDate = bookStudies.length > 0 
        ? bookStudies.reduce((max, s) => s.date > max ? s.date : max, bookStudies[0].date)
        : null;
        
    return {
        name: book.name,
        count: bookStudies.length,
        latestDate,
        studies: bookStudies,
        chapters: book.chapters
    };
  });

  // --- HANDLERS ---
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBook('All');
    setSelectedChapter('All');
    setSelectedSeries('All');
    setStartDate(undefined);
    setEndDate(undefined);
    setSortConfig({ key: 'date', direction: 'desc' });
  };

  const hasActiveFilters = selectedBook !== 'All' || selectedChapter !== 'All' || selectedSeries !== 'All' || startDate !== undefined || endDate !== undefined || searchTerm !== '';

  const handleGroupClick = (type: 'series' | 'book', name: string) => {
      if (type === 'series') {
          setSelectedSeries(name);
          setSelectedBook('All');
      } else {
          setSelectedBook(name);
          setSelectedSeries('All');
      }
      setViewMode('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derived state for chapter options
  const selectedBookData = BIBLE_BOOKS_DATA.find(b => b.name === selectedBook);
  const chapterOptions = selectedBookData 
    ? Array.from({ length: selectedBookData.chapters }, (_, i) => (i + 1).toString()) 
    : [];

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
                                        <span className="truncate">{selectedSeries === 'All' ? "All Series" : selectedSeries}</span>
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
                                        <span className="truncate">{selectedBook === 'All' ? "All Books" : selectedBook}</span>
                                        <ChevronDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search books..." className="text-[13px]" />
                                        <CommandList className="max-h-[300px] overflow-y-auto">
                                            <CommandEmpty>No book found.</CommandEmpty>
                                            <CommandGroup>
                                                <CommandItem value="All" onSelect={() => { setSelectedBook("All"); setOpenBook(false); }} className="text-[13px]">
                                                    <Check className={cn("mr-2 h-3 w-3", selectedBook === "All" ? "opacity-100" : "opacity-0")} /> All Books
                                                </CommandItem>
                                                {BIBLE_BOOKS_DATA.map((book) => (
                                                    <CommandItem key={book.name} value={book.name} onSelect={(val) => { setSelectedBook(val === selectedBook ? "All" : val); setOpenBook(false); }} className="text-[13px]">
                                                        <Check className={cn("mr-2 h-3 w-3", selectedBook === book.name ? "opacity-100" : "opacity-0")} /> {book.name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Chapter (Conditional) OR Date */}
                        {selectedBook !== 'All' ? (
                             <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest ml-1">Chapter</label>
                                <Popover open={openChapter} onOpenChange={setOpenChapter}>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" role="combobox" aria-expanded={openChapter} className="w-full h-10 justify-between bg-white border border-[#e8e8e8] rounded-[8px] text-[13px] font-medium text-[#0d0d0d] hover:bg-white shadow-none">
                                            <span className="truncate">{selectedChapter === 'All' ? "All Chapters" : `Chapter ${selectedChapter}`}</span>
                                            <ChevronDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandInput placeholder="Search chapter..." className="text-[13px]" />
                                            <CommandList className="max-h-[300px] overflow-y-auto">
                                                <CommandEmpty>No chapter found.</CommandEmpty>
                                                <CommandGroup>
                                                    <CommandItem value="All" onSelect={() => { setSelectedChapter("All"); setOpenChapter(false); }} className="text-[13px]">
                                                        <Check className={cn("mr-2 h-3 w-3", selectedChapter === "All" ? "opacity-100" : "opacity-0")} /> All Chapters
                                                    </CommandItem>
                                                    {chapterOptions.map((chapter) => (
                                                        <CommandItem key={chapter} value={chapter} onSelect={(val) => { setSelectedChapter(val === selectedChapter ? "All" : val); setOpenChapter(false); }} className="text-[13px]">
                                                            <Check className={cn("mr-2 h-3 w-3", selectedChapter === chapter ? "opacity-100" : "opacity-0")} /> Chapter {chapter}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        ) : (
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
                        )}
                        
                        {/* If Book is selected, Date Range goes to 4th slot, otherwise Clear button logic */}
                        {selectedBook !== 'All' && (
                             <div className="space-y-1">
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
                        )}

                        {/* Reset Filter Button - Only show if filters active and we have space? 
                            The grid is 4 columns.
                            Scenario A (Book Selected): Series | Book | Chapter | Date. (Full). Need a new row or place for Reset.
                            Scenario B (No Book): Series | Book | Date | Reset (if active).
                        */}
                    </div>
                    
                    {hasActiveFilters && (
                        <div className="px-2 pb-2">
                             <Button variant="ghost" onClick={clearFilters} className="h-10 text-[11px] font-bold uppercase tracking-wider text-red-500 hover:text-red-600 hover:bg-red-50 w-full rounded-[8px] border border-red-100">
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>

                {/* TEXT-ONLY CARD GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleStudies.map(study => (
                        <StudyCard key={study.id} study={study} onClick={() => onNavigate('study-detail', study.id)} />
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
              <div className="animate-in fade-in duration-500">
                  <div className="grid lg:grid-cols-2 gap-8">
                      {/* Old Testament Section */}
                      <div>
                          <div className="mb-6 pb-3 border-b border-[#e8e8e8]">
                              <h2 className="text-[28px] font-medium tracking-[-0.02em] text-[#0d0d0d]">Old Testament</h2>
                              <p className="text-[12px] text-[#676767] mt-1">39 Books • Genesis through Malachi</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                              {bookGroups.filter(group => BIBLE_BOOKS_DATA.find(b => b.name === group.name)?.testament === 'Old').map(group => (
                                  <div 
                                    key={group.name} 
                                    onClick={() => handleGroupClick('book', group.name)}
                                    className={cn(
                                        "group bg-white p-4 rounded-[12px] border border-[#e8e8e8] transition-all cursor-pointer flex items-center justify-between gap-4 hover:border-[#0d0d0d] hover:shadow-sm",
                                        group.count === 0 && "opacity-50 hover:opacity-100"
                                    )}
                                  >
                                      <div className="flex items-center gap-3 flex-1 min-w-0">
                                          <div className={cn(
                                              "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                              group.count > 0 ? "bg-[#f3f4f6] group-hover:bg-[#0d0d0d] group-hover:text-white" : "bg-[#f9f9f9] text-[#d1d5db]"
                                          )}>
                                              <Book className="w-3.5 h-3.5" />
                                          </div>
                                          
                                          <div className="flex-1 min-w-0">
                                              <h3 className="text-[15px] font-medium text-[#0d0d0d] tracking-tight truncate">{group.name}</h3>
                                              <p className="text-[11px] text-[#9ca3af] tracking-wide">{group.chapters} {group.chapters === 1 ? 'chapter' : 'chapters'}</p>
                                          </div>
                                      </div>
                                      
                                      <div className="shrink-0 flex items-center gap-2">
                                          <span className={cn(
                                              "px-2.5 py-1 rounded-full text-[11px] font-bold",
                                              group.count > 0 ? "bg-[#0d0d0d] text-white" : "bg-[#f3f4f6] text-[#9ca3af]"
                                          )}>
                                              {group.count}
                                          </span>
                                          <ArrowRight className="w-4 h-4 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* New Testament Section */}
                      <div>
                          <div className="mb-6 pb-3 border-b border-[#e8e8e8]">
                              <h2 className="text-[28px] font-medium tracking-[-0.02em] text-[#0d0d0d]">New Testament</h2>
                              <p className="text-[12px] text-[#676767] mt-1">27 Books • Matthew through Revelation</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                              {bookGroups.filter(group => BIBLE_BOOKS_DATA.find(b => b.name === group.name)?.testament === 'New').map(group => (
                                  <div 
                                    key={group.name} 
                                    onClick={() => handleGroupClick('book', group.name)}
                                    className={cn(
                                        "group bg-white p-4 rounded-[12px] border border-[#e8e8e8] transition-all cursor-pointer flex items-center justify-between gap-4 hover:border-[#0d0d0d] hover:shadow-sm",
                                        group.count === 0 && "opacity-50 hover:opacity-100"
                                    )}
                                  >
                                      <div className="flex items-center gap-3 flex-1 min-w-0">
                                          <div className={cn(
                                              "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                              group.count > 0 ? "bg-[#f3f4f6] group-hover:bg-[#0d0d0d] group-hover:text-white" : "bg-[#f9f9f9] text-[#d1d5db]"
                                          )}>
                                              <Book className="w-3.5 h-3.5" />
                                          </div>
                                          
                                          <div className="flex-1 min-w-0">
                                              <h3 className="text-[15px] font-medium text-[#0d0d0d] tracking-tight truncate">{group.name}</h3>
                                              <p className="text-[11px] text-[#9ca3af] tracking-wide">{group.chapters} {group.chapters === 1 ? 'chapter' : 'chapters'}</p>
                                          </div>
                                      </div>
                                      
                                      <div className="shrink-0 flex items-center gap-2">
                                          <span className={cn(
                                              "px-2.5 py-1 rounded-full text-[11px] font-bold",
                                              group.count > 0 ? "bg-[#0d0d0d] text-white" : "bg-[#f3f4f6] text-[#9ca3af]"
                                          )}>
                                              {group.count}
                                          </span>
                                          <ArrowRight className="w-4 h-4 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" />
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          )}

        </div>
      </section>
    </div>
  );
}