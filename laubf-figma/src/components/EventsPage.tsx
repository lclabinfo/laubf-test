import { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, MapPin, Search, Grid, List, Calendar, ChevronDown, Video, LayoutGrid, Clock } from 'lucide-react';
import { events } from '../lib/events';
import { format, parseISO } from 'date-fns';
import { cn } from "./ui/utils";

interface EventsPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function EventsPage({ onNavigate }: EventsPageProps) {
  const [viewMode, setViewMode] = useState<'card' | 'list' | 'calendar'>('card');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Quick Access (Recurring Online Meetings)
  const quickAccessEvents = events.filter(e => e.type === 'meeting' && e.zoomUrl);

  // 2. Main Grid Events (Programs & Events)
  const gridEvents = events.filter(e => e.type !== 'meeting');

  return (
    <div className="bg-[#fafafa] min-h-screen font-['Helvetica_Neue',_sans-serif]">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#0d0d0d] text-white pt-[120px] pb-[80px] px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-block border border-white/30 rounded-full px-4 py-1.5 mb-6">
             <span className="text-[11px] font-bold uppercase tracking-widest">Connect & Grow</span>
          </div>
          <h1 className="text-[80px] md:text-[100px] leading-[0.9] font-black tracking-[-0.04em] mb-4">
             EVENTS
          </h1>
          <p className="text-white/60 text-[18px] font-medium tracking-wide max-w-xl">
             One place for all our gatherings, programs, and community events.
          </p>
        </div>
      </div>

      {/* --- QUICK ACCESS SECTION --- */}
      <div className="bg-[#fafafa] px-6 py-12 border-b border-[#e8e8e8]">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center gap-2 mb-6 text-[#a0a0a0]">
               <Video className="w-4 h-4" />
               <span className="text-[11px] font-bold uppercase tracking-widest">Quick Access • Recurring Online Meetings</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {quickAccessEvents.map(event => (
                  <div key={event.id} className="bg-white rounded-[16px] p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-transparent hover:border-[#e8e8e8] transition-all">
                     <span className={cn(
                        "inline-block px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider mb-4",
                        event.badge === 'YAM' ? "bg-[#6366f1] text-white" : "bg-[#0d0d0d] text-white"
                     )}>
                        {event.badge || event.ministry}
                     </span>
                     
                     <h3 className="text-[18px] font-bold text-[#0d0d0d] leading-tight mb-1">
                        {event.title}
                     </h3>
                     <p className="text-[13px] font-medium text-[#676767] mb-6">
                        {event.recurrence}
                     </p>

                     <div className="grid gap-3">
                        <button 
                           onClick={() => window.open(event.zoomUrl, '_blank')}
                           className="w-full bg-[#3667B1] hover:bg-[#2c5282] text-white h-10 rounded-[8px] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                        >
                           <Video className="w-3 h-3" /> Join Zoom
                        </button>
                        <button 
                           onClick={() => onNavigate('event-detail', event.id)}
                           className="w-full bg-[#f5f5f5] hover:bg-[#e8e8e8] text-[#0d0d0d] h-10 rounded-[8px] text-[11px] font-bold uppercase tracking-widest transition-colors"
                        >
                           View Details
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="px-6 py-12 bg-white min-h-[800px]">
         <div className="max-w-[1400px] mx-auto">
            
            {/* FILTER BAR */}
            <div className="bg-white border border-[#e8e8e8] rounded-[16px] p-2 mb-12 shadow-sm sticky top-4 z-20">
               <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-2">
                  
                  {/* View Toggles */}
                  <div className="flex bg-[#f5f5f5] rounded-[10px] p-1 shrink-0">
                     <button 
                        onClick={() => setViewMode('card')}
                        className={cn("px-4 py-2 rounded-[8px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all", viewMode === 'card' ? "bg-white text-black shadow-sm" : "text-[#676767]")}
                     >
                        <LayoutGrid className="w-4 h-4" /> Card
                     </button>
                     <button 
                        onClick={() => setViewMode('list')}
                        className={cn("px-4 py-2 rounded-[8px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all", viewMode === 'list' ? "bg-white text-black shadow-sm" : "text-[#676767]")}
                     >
                        <List className="w-4 h-4" /> List
                     </button>
                     <button 
                        onClick={() => setViewMode('calendar')}
                        className={cn("px-4 py-2 rounded-[8px] flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider transition-all", viewMode === 'calendar' ? "bg-white text-black shadow-sm" : "text-[#676767]")}
                     >
                        <Calendar className="w-4 h-4" /> Calendar
                     </button>
                  </div>

                  {/* Search */}
                  <div className="relative w-full lg:max-w-[400px]">
                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a0a0a0]" />
                     <input 
                        type="text" 
                        placeholder="Search events, meetings, programs..." 
                        className="w-full bg-[#f9f9f9] h-10 pl-10 pr-4 rounded-[8px] text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#0d0d0d] transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                  </div>
               </div>

               {/* Filters Row */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 pb-2 mt-2 border-t border-[#f0f0f0] pt-4">
                  {['Type', 'Ministry', 'Campus', 'Date'].map((label) => (
                     <div key={label} className="relative">
                        <label className="text-[10px] font-bold uppercase text-[#a0a0a0] tracking-widest mb-1 block ml-1">{label}</label>
                        <button className="w-full h-10 border border-[#e8e8e8] rounded-[8px] px-3 flex items-center justify-between hover:border-[#0d0d0d] transition-colors bg-white">
                           <span className="text-[13px] font-medium text-[#0d0d0d]">
                              {label === 'Date' ? 'Pick a date' : `All ${label === 'Ministry' ? 'Ministries' : label === 'Campus' ? 'Campuses' : label + 's'}`}
                           </span>
                           <ChevronDown className="w-3 h-3 text-[#a0a0a0]" />
                        </button>
                     </div>
                  ))}
               </div>
            </div>

            {/* EVENTS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {gridEvents.map(event => {
                  const startDate = parseISO(event.startDate);
                  return (
                     <div 
                        key={event.id}
                        onClick={() => onNavigate('event-detail', event.id)}
                        className="group bg-white rounded-[20px] border border-[#e8e8e8] overflow-hidden hover:shadow-[0px_12px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                     >
                        {/* Image Header */}
                        <div className="h-[220px] relative overflow-hidden bg-gray-100">
                           <img 
                              src={event.imageUrl} 
                              alt={event.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                           
                           {/* Date Badge */}
                           <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-[12px] px-3 py-2 text-center shadow-sm min-w-[60px]">
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#d32f2f]">
                                 {format(startDate, 'MMM')}
                              </span>
                              <span className="block text-[24px] font-black leading-none text-[#0d0d0d]">
                                 {format(startDate, 'dd')}
                              </span>
                           </div>

                           {/* Program/Ministry Badge */}
                           {event.badge && (
                              <div className={cn(
                                 "absolute top-4 right-4 px-3 py-1.5 rounded-[8px] text-[10px] font-bold uppercase tracking-widest shadow-sm",
                                 event.badge === 'PROGRAM' ? "bg-[#f97316] text-white" : "bg-[#3667B1] text-white"
                              )}>
                                 {event.badge}
                              </div>
                           )}
                        </div>

                        {/* Content Body */}
                        <div className="p-6">
                           <div className="flex items-center gap-2 text-[#a0a0a0] mb-3">
                              <Clock className="w-4 h-4" />
                              <span className="text-[11px] font-bold uppercase tracking-widest">
                                 {event.recurrence || format(startDate, 'h:mm a')}
                              </span>
                           </div>

                           <h3 className="text-[20px] font-bold text-[#0d0d0d] leading-[1.2] mb-3 group-hover:text-[#3667B1] transition-colors">
                              {event.title}
                           </h3>
                           
                           <p className="text-[14px] font-medium text-[#676767] leading-[1.6] line-clamp-2">
                              {event.description}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>

         </div>
      </div>

    </div>
  );
}