import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { events } from '../lib/events';
import { format, parseISO, isFuture } from 'date-fns';

interface UpcomingEventsProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function UpcomingEvents({ onNavigate }: UpcomingEventsProps) {
  // Get next 3 upcoming events
  const upcomingEvents = events
    .filter(e => isFuture(parseISO(e.endDate)))
    .sort((a, b) => parseISO(a.startDate).getTime() - parseISO(b.startDate).getTime())
    .slice(0, 3);

  const featuredEvent = upcomingEvents[0];
  const secondaryEvents = upcomingEvents.slice(1, 3);

  if (!featuredEvent) return null;

  return (
    <section id="events" className="py-24 md:py-32 bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Header - Bible Verse Style */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-black pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <span className="font-serif italic text-2xl text-gray-400">02</span>
               <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#3667B1]">
                  Upcoming Events
               </p>
            </div>
            <h2 className="font-serif italic text-black text-6xl md:text-8xl leading-[0.85] tracking-tight">
              What's Happening
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('events')}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-[#3667B1] transition-colors"
          >
            Full Calendar <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Event - Magazine Layout */}
        <div className="mb-20">
           <div 
            onClick={() => onNavigate('event-detail', featuredEvent.id)}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
           >
             <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden bg-gray-100">
               <img 
                 src={featuredEvent.imageUrl} 
                 alt={featuredEvent.title}
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 border border-gray-200">
                 <span className="font-sans font-bold text-xs uppercase tracking-widest text-black">Featured</span>
               </div>
             </div>
             
             <div className="lg:col-span-5 flex flex-col justify-center border-l border-gray-200 lg:pl-12 lg:h-full">
               <div className="mb-6">
                 <span className="font-serif italic text-3xl text-[#3667B1] block mb-2">
                   {format(parseISO(featuredEvent.startDate), 'MMMM dd')}
                 </span>
                 <span className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400">
                   {format(parseISO(featuredEvent.startDate), 'EEEE @ h:mm a')}
                 </span>
               </div>
               
               <h3 className="font-serif text-5xl md:text-6xl text-black leading-[0.9] mb-8 group-hover:underline decoration-1 underline-offset-4">
                 {featuredEvent.title}
               </h3>
               
               <div className="flex items-center gap-3 text-gray-500 mb-8">
                 <MapPin className="w-4 h-4" />
                 <span className="font-sans text-sm font-medium uppercase tracking-wide border-b border-gray-300 pb-0.5">
                   {featuredEvent.location}
                 </span>
               </div>
               
               <div className="mt-auto">
                 <span className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-black group-hover:translate-x-2 transition-transform">
                   Event Details <ArrowUpRight className="w-4 h-4" />
                 </span>
               </div>
             </div>
           </div>
        </div>

        {/* Secondary Events - List View with Lines */}
        <div className="border-t border-black">
          {secondaryEvents.map((event) => (
            <div 
              key={event.id}
              onClick={() => onNavigate('event-detail', event.id)}
              className="group cursor-pointer py-10 border-b border-gray-200 hover:bg-gray-50 transition-colors flex flex-col md:flex-row gap-8 md:items-center"
            >
              {/* Date Block */}
              <div className="w-32 shrink-0">
                <span className="block font-serif italic text-2xl text-gray-400 group-hover:text-[#3667B1] transition-colors">
                  {format(parseISO(event.startDate), 'MMM dd')}
                </span>
                <span className="block font-sans text-xs font-bold uppercase tracking-widest text-gray-900 mt-1">
                  {format(parseISO(event.startDate), 'h:mm a')}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-serif text-4xl text-black leading-none mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {event.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 uppercase tracking-wide">
                  {event.location}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                 <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                   <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
