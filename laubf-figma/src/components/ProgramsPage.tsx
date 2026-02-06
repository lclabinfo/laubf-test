import { useState, useMemo } from 'react';
import { Clock, Search, ArrowRight, CalendarDays, Users, BookOpen, SlidersHorizontal, X, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { programs, Program } from '../lib/programs';
import { getMinistryColor } from '../lib/events';
import { cn } from "./ui/utils";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { format, parseISO, isValid } from 'date-fns';

interface ProgramsPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function ProgramsPage({ onNavigate }: ProgramsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  // --- DERIVED STATE ---
  
  // 1. Featured Programs (Always visible at top, unfiltered by search usually, but let's stick to "active")
  // The user asked for "highlighted programs" to be above search.
  const featuredPrograms = useMemo(() => {
    return programs.filter(p => p.status === 'Open' || p.status === 'Coming Soon');
  }, []);

  // 2. Filtered Programs (For the bottom grid)
  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!program.title.toLowerCase().includes(q) && !program.description.toLowerCase().includes(q)) return false;
      }
      if (selectedStatus !== 'All' && program.status !== selectedStatus) return false;
      return true;
    });
  }, [searchQuery, selectedStatus]);

  // --- COMPONENT: Featured Card (Next Steps Style) ---
  const FeaturedProgramCard = ({ program }: { program: Program }) => {
    return (
      <div 
        onClick={() => onNavigate('program-detail', program.id)}
        className="group relative h-[420px] rounded-[24px] overflow-hidden cursor-pointer bg-black"
      >
        {/* Image */}
        <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 opacity-90" 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-6 left-6 z-10">
             <span className={cn(
                 "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm", 
                 program.status === 'Open' ? "bg-green-600" : "bg-blue-600"
             )}>
                 {program.status === 'Open' ? 'Open' : 'Coming Soon'}
             </span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-3">
                <span className={cn("w-1.5 h-1.5 rounded-full bg-white")} />
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{program.ministry}</span>
            </div>
            
            <h3 className="text-white text-[32px] leading-[1.1] font-medium mb-3 tracking-tighter font-['Helvetica_Neue',sans-serif]">
                {program.title}
            </h3>
            
            <div className="flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-wider mb-1">
                 <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" /> {program.duration}</span>
            </div>
            
            {/* Arrow - Bottom Right */}
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowRight className="w-5 h-5" />
            </div>
        </div>
      </div>
    );
  };

  // --- COMPONENT: Standard Card (Events Style) ---
  const StandardProgramCard = ({ program }: { program: Program }) => {
      const ministryColor = getMinistryColor(program.ministry);
      const isClosed = program.status === 'Closed';

      // Date Formatting
      let dateDisplay = program.startDate; 
      if (isValid(parseISO(program.startDate))) {
           const start = parseISO(program.startDate);
           dateDisplay = format(start, 'MMM d, yyyy');
      }

      return (
        <div 
          onClick={() => onNavigate('program-detail', program.id)}
          className={cn(
            "group relative bg-white overflow-hidden cursor-pointer flex flex-col transition-all duration-300 rounded-2xl border border-gray-100 h-full",
            !isClosed ? "hover:shadow-xl hover:-translate-y-1" : "opacity-80 hover:opacity-100 hover:shadow-md"
          )}
        >
          {/* Image Area */}
          <div className="relative overflow-hidden bg-gray-100 aspect-video shrink-0">
             <img 
                src={program.imageUrl} 
                alt={program.title}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700",
                  !isClosed ? "group-hover:scale-105" : "grayscale"
                )}
              />
              
              <div className="absolute top-4 right-4">
                  <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm", ministryColor)}>
                      {program.ministry}
                  </span>
              </div>
              
              {isClosed && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white font-bold uppercase tracking-widest border border-white/20 rounded-lg">
                          Program Closed
                      </span>
                  </div>
              )}
          </div>
 
          {/* Content Area */}
          <div className="flex flex-col p-5 grow">
             <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wide mb-2">
                <CalendarDays className="w-3 h-3" />
                {program.duration}
                <span>•</span>
                <Clock className="w-3 h-3" />
                <span className="truncate max-w-[150px]">{program.schedule}</span>
             </div>
 
             <h3 className="font-bold text-xl leading-tight mb-2 group-hover:text-[#3667B1] transition-colors line-clamp-2">
               {program.title}
             </h3>
 
             <p className="text-gray-500 text-sm line-clamp-3 font-medium mb-4 grow">
               {program.description}
             </p>
             
             <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                 <span>{dateDisplay}</span>
                 <span className="group-hover:translate-x-1 transition-transform">Details &rarr;</span>
             </div>
          </div>
        </div>
      );
  };

  return (
    <div className="bg-white min-h-screen pb-20">
       <div className="bg-black text-white pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider mb-6">
              Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Programs
          </h1>
          <p className="text-gray-400 font-medium max-w-xl text-lg">
             Long-term discipleship, training, and educational courses.
          </p>
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="border-b border-gray-100 bg-white sticky top-20 z-30 shadow-sm">
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
            <Button variant="ghost" className="text-gray-500 font-bold uppercase tracking-wider text-xs hover:text-[#3667B1] hover:bg-blue-50" onClick={() => onNavigate('events')}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                Events
            </Button>
            <div className="w-px h-4 bg-gray-200 mx-2" />
            <Button variant="ghost" className="text-gray-500 font-bold uppercase tracking-wider text-xs hover:text-[#3667B1] hover:bg-blue-50" onClick={() => onNavigate('meetings')}>
                <Users className="w-4 h-4 mr-2" />
                Meetings
            </Button>
            <div className="w-px h-4 bg-gray-200 mx-2" />
            <Button variant="ghost" className="text-[#3667B1] bg-blue-50 font-bold uppercase tracking-wider text-xs">
                <BookOpen className="w-4 h-4 mr-2" />
                Programs
            </Button>
        </div>
      </div>

      <div className="px-6 relative z-20 mt-12">
        <div className="w-[90%] max-w-[1400px] mx-auto">
            
            {/* SECTION 1: Featured Programs (Above Search) */}
            {featuredPrograms.length > 0 && (
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl md:text-4xl font-['DM_Serif_Text',serif] italic text-gray-900 leading-none">
                            Featured Programs
                        </h2>
                    </div>
                    
                    {/* Responsive Grid that becomes a scrollable row on mobile if needed, but strict row on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredPrograms.slice(0, 4).map(program => (
                            <FeaturedProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                </div>
            )}


             {/* SECTION 2: Filter Bar */}
            <div className="bg-gray-50 rounded-[2rem] p-6 md:p-8 mb-12 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="w-5 h-5 text-[#3667B1]" />
                    <h2 className="font-bold uppercase tracking-wider text-sm text-gray-900">Search All Programs</h2>
                </div>
                
                <div className="flex flex-col gap-6">
                     <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 py-6 text-lg bg-white border-gray-200 rounded-xl focus-visible:ring-[#3667B1]" 
                            placeholder="Search programs..." 
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    <div className="w-full md:w-1/3">
                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1 mb-2 block">Program Status</label>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger className="bg-white border-gray-200 h-12 rounded-xl">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All Statuses</SelectItem>
                                <SelectItem value="Open">Registration Open</SelectItem>
                                <SelectItem value="Coming Soon">Coming Soon</SelectItem>
                                <SelectItem value="Closed">Closed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* SECTION 3: All Programs Grid (Filtered) */}
            <div>
                 <div className="mb-8">
                    <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900">
                        All Programs ({filteredPrograms.length})
                    </h2>
                </div>
                
                {filteredPrograms.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPrograms.map(program => (
                            <StandardProgramCard key={program.id} program={program} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 border border-dashed border-gray-200 rounded-[2rem] p-16 text-center">
                        <p className="text-gray-500 font-medium">No programs found matching your filters.</p>
                        <Button 
                            variant="link" 
                            onClick={() => {setSearchQuery(''); setSelectedStatus('All');}}
                            className="text-[#3667B1] mt-2"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>

        </div>
      </div>
    </div>
  );
}
