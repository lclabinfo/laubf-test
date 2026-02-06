import { useState, useMemo, useEffect } from 'react';
import { Users, Clock, MapPin, Video, Search, X, SlidersHorizontal, ArrowRight, Calendar, BookOpen } from 'lucide-react';
import { meetings, Meeting } from '../lib/meetings';
import { getMinistryColor, Ministry } from '../lib/events';
import { cn } from "./ui/utils";
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface MeetingsPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function MeetingsPage({ onNavigate }: MeetingsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All'); // Online vs In-Person

  // --- FILTERING LOGIC ---
  const filteredMeetings = useMemo(() => {
    return meetings.filter(meeting => {
      // 1. Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches = 
          meeting.title.toLowerCase().includes(q) || 
          meeting.description.toLowerCase().includes(q) ||
          meeting.leader?.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // 2. Ministry
      if (selectedMinistry !== 'All' && meeting.ministry !== selectedMinistry) {
        return false;
      }

      // 3. Type
      if (selectedType === 'Online' && !meeting.isOnline) return false;
      if (selectedType === 'In-Person' && meeting.isOnline) return false; // Rough logic, some are hybrid

      return true;
    });
  }, [searchQuery, selectedMinistry, selectedType]);

  const MeetingCard = ({ meeting }: { meeting: Meeting }) => {
    const ministryColor = getMinistryColor(meeting.ministry);
    
    return (
      <div className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
         {/* Top Border Accent */}
         <div className={cn("absolute top-0 left-0 right-0 h-1.5", ministryColor)} />
         
         <div className="flex justify-between items-start mb-4">
             <div className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", ministryColor)}>
                 {meeting.ministry}
             </div>
             {meeting.isOnline && (
                 <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                     <Video className="w-3 h-3" />
                     Online
                 </div>
             )}
         </div>

         <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#3667B1] transition-colors">
             {meeting.title}
         </h3>

         <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm font-medium">
             <Clock className="w-4 h-4 text-[#3667B1]" />
             <span>{meeting.day} @ {meeting.time}</span>
         </div>

         <p className="text-gray-500 text-sm mb-6 grow line-clamp-3">
             {meeting.description}
         </p>

         <div className="mt-auto pt-4 border-t border-gray-50 space-y-3">
             <div className="flex items-start gap-2 text-xs text-gray-500">
                 <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                 <span>{meeting.location}</span>
             </div>
             {meeting.leader && (
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                     <Users className="w-3 h-3 shrink-0" />
                     <span>Led by {meeting.leader}</span>
                 </div>
             )}
             
             {meeting.isOnline && meeting.zoomUrl ? (
                 <a 
                   href={meeting.zoomUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center w-full py-3 mt-2 bg-[#3667B1] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#2d5491] transition-colors shadow-sm hover:shadow-md"
                 >
                     <Video className="w-3 h-3 mr-2" />
                     Join Zoom Meeting
                 </a>
             ) : (
                 <button className="flex items-center justify-center w-full py-3 mt-2 bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-colors">
                     View Details <ArrowRight className="w-3 h-3 ml-2" />
                 </button>
             )}
         </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20">
       {/* Header */}
       <div className="bg-black text-white pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider mb-6">
              Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Meetings
          </h1>
          <p className="text-gray-400 font-medium max-w-xl text-lg">
             Regular weekly gatherings for prayer, fellowship, and study.
          </p>
        </div>
      </div>
      
      {/* Quick Shortcuts */}
      <div className="border-b border-gray-100 bg-white sticky top-20 z-30 shadow-sm">
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
            <Button variant="ghost" className="text-gray-500 font-bold uppercase tracking-wider text-xs hover:text-[#3667B1] hover:bg-blue-50" onClick={() => onNavigate('events')}>
                <Calendar className="w-4 h-4 mr-2" />
                Events
            </Button>
            <div className="w-px h-4 bg-gray-200 mx-2" />
            <Button variant="ghost" className="text-[#3667B1] bg-blue-50 font-bold uppercase tracking-wider text-xs">
                <Users className="w-4 h-4 mr-2" />
                Meetings
            </Button>
            <div className="w-px h-4 bg-gray-200 mx-2" />
            <Button variant="ghost" className="text-gray-500 font-bold uppercase tracking-wider text-xs hover:text-[#3667B1] hover:bg-blue-50" onClick={() => onNavigate('programs')}>
                <BookOpen className="w-4 h-4 mr-2" />
                Programs
            </Button>
        </div>
      </div>

      <div className="px-6 relative z-20 mt-8">
        <div className="w-[90%] max-w-[1400px] mx-auto">
            {/* Filter Bar */}
            <div className="bg-gray-50 rounded-[2rem] p-6 md:p-8 mb-12 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal className="w-5 h-5 text-[#3667B1]" />
                    <h2 className="font-bold uppercase tracking-wider text-sm text-gray-900">Search & Filter</h2>
                </div>
                
                <div className="flex flex-col gap-6">
                     {/* Search - Matches Events Page Style */}
                     <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 py-6 text-lg bg-white border-gray-200 rounded-xl focus-visible:ring-[#3667B1]" 
                            placeholder="Search meetings by name, leader, or keyword..." 
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                             <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">Ministry Group</label>
                             <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                                <SelectTrigger className="bg-white border-gray-200 h-12 rounded-xl">
                                    <SelectValue placeholder="Ministry" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">All Ministries</SelectItem>
                                    <SelectItem value="General">General</SelectItem>
                                    <SelectItem value="YAM">Young Adults</SelectItem>
                                    <SelectItem value="HBF">High School</SelectItem>
                                    <SelectItem value="JBF">Jr. High</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>

                        <div className="space-y-2">
                             <label className="text-xs font-bold uppercase text-gray-400 tracking-wider ml-1">Location Type</label>
                             <Select value={selectedType} onValueChange={setSelectedType}>
                                <SelectTrigger className="bg-white border-gray-200 h-12 rounded-xl">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="All">Any Location</SelectItem>
                                    <SelectItem value="Online">Online (Zoom)</SelectItem>
                                    <SelectItem value="In-Person">In-Person</SelectItem>
                                </SelectContent>
                             </Select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMeetings.map(meeting => (
                    <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
            </div>

            {filteredMeetings.length === 0 && (
                 <div className="text-center py-24 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No meetings found</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                        We couldn't find any meetings matching your criteria.
                    </p>
                    <Button 
                        variant="outline"
                        onClick={() => {setSearchQuery(''); setSelectedMinistry('All'); setSelectedType('All');}}
                        className="rounded-full px-6"
                    >
                        Clear All Filters
                    </Button>
                 </div>
            )}
        </div>
      </div>
    </div>
  );
}
