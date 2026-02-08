import { ArrowLeft, Clock, MapPin, Calendar, Share2, Info, ChevronRight, Ban } from 'lucide-react';
import { events } from '../lib/events';
import { format, parseISO } from 'date-fns';
import { cn } from "./ui/utils";

interface EventDetailPageProps {
  eventId: string;
  onNavigate: (page: any, id?: string) => void;
}

export default function EventDetailPage({ eventId, onNavigate }: EventDetailPageProps) {
  const event = events.find(e => e.id === eventId);

  if (!event) return <div>Event not found</div>;

  const startDate = parseISO(event.startDate);
  
  return (
    <div className="bg-[#fafafa] min-h-screen font-['Helvetica_Neue',_sans-serif]">
      
      {/* --- BREADCRUMB --- */}
      <div className="bg-white border-b border-[#e8e8e8] py-4 px-6 sticky top-0 z-10">
         <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-[12px] font-medium text-[#676767]">
            <span className="cursor-pointer hover:text-black" onClick={() => onNavigate('home')}>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="cursor-pointer hover:text-black" onClick={() => onNavigate('events')}>
               {event.type === 'program' ? 'Programs' : 'Events'}
            </span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#0d0d0d] font-bold">{event.title}</span>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12">
         
         {/* --- HERO IMAGE (Full Width Rounded) --- */}
         <div className="rounded-[32px] overflow-hidden aspect-[21/9] bg-[#e8e8e8] relative mb-12 shadow-sm">
            {event.imageUrl ? (
               <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
            ) : (
               <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-white/20 text-4xl font-black uppercase tracking-widest">{event.ministry}</span>
               </div>
            )}
            
            {/* Status Badge (Overlay) */}
            {event.isRegistrationClosed && (
               <div className="absolute top-8 left-8 bg-[#1f2937]/90 backdrop-blur-md text-white px-4 py-2 rounded-[8px] border border-white/10 shadow-lg">
                  <span className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-red-500" /> Registration Closed
                  </span>
               </div>
            )}
         </div>

         <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            
            {/* --- LEFT COLUMN: CONTENT --- */}
            <div>
               {/* Ministry Badge */}
               <span className="inline-block bg-[#6366f1] text-white px-3 py-1.5 rounded-[6px] text-[11px] font-bold uppercase tracking-widest mb-6">
                  {event.ministry} Ministry
               </span>

               <h1 className="text-[56px] md:text-[72px] leading-[0.9] font-black uppercase tracking-[-0.04em] text-[#0d0d0d] mb-8">
                  {event.title}
               </h1>

               <p className="text-[20px] font-medium text-[#313131] leading-[1.5] mb-12 border-l-4 border-[#0d0d0d] pl-6 py-1">
                  {event.description}
               </p>

               <div className="prose prose-lg prose-neutral max-w-none font-['Helvetica_Neue',_sans-serif] 
                  prose-p:text-[16px] prose-p:leading-[1.8] prose-p:text-[#676767]
                  prose-headings:font-bold prose-headings:text-[#0d0d0d] prose-headings:uppercase prose-headings:tracking-tight
                  prose-ul:text-[#676767]
               "
               dangerouslySetInnerHTML={{ __html: event.longDescription }} 
               />
               
               <div className="mt-12 pt-12 border-t border-[#e8e8e8]">
                  <p className="text-[14px] text-[#a0a0a0] font-medium italic">
                     Join us for this transformative program. More details coming soon.
                  </p>
               </div>
            </div>

            {/* --- RIGHT COLUMN: DETAILS CARD --- */}
            <div className="lg:sticky lg:top-24">
               <div className="bg-white rounded-[24px] p-8 border border-[#e8e8e8] shadow-[0px_8px_32px_rgba(0,0,0,0.04)]">
                  <h3 className="text-[13px] font-black uppercase tracking-widest text-[#0d0d0d] mb-8 border-b border-[#f0f0f0] pb-4">
                     {event.type === 'program' ? 'Program Details' : 'Event Details'}
                  </h3>

                  <div className="space-y-8 mb-8">
                     {/* Row 1: Duration/Date */}
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0">
                           <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-1">
                              {event.programDetails?.duration ? 'Duration & Dates' : 'Date'}
                           </div>
                           <div className="text-[15px] font-bold text-[#0d0d0d] mb-1">
                              {event.programDetails?.duration || format(startDate, 'MMMM d, yyyy')}
                           </div>
                           <div className="text-[13px] font-medium text-[#676767]">
                              {event.programDetails?.semester || format(startDate, 'EEEE @ h:mm a')}
                           </div>
                        </div>
                     </div>

                     {/* Row 2: Schedule */}
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#16a34a] flex items-center justify-center shrink-0">
                           <Clock className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-1">
                              {event.programDetails ? 'Weekly Schedule' : 'Time'}
                           </div>
                           <div className="text-[15px] font-bold text-[#0d0d0d]">
                              {event.programDetails?.weeklySchedule || format(startDate, 'h:mm a')}
                           </div>
                        </div>
                     </div>

                     {/* Row 3: Location */}
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fef2f2] text-[#dc2626] flex items-center justify-center shrink-0">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold uppercase tracking-widest text-[#a0a0a0] mb-1">
                              Location
                           </div>
                           <div className="text-[15px] font-bold text-[#0d0d0d]">
                              {event.location}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-6 border-t border-[#f0f0f0]">
                     {event.isRegistrationClosed ? (
                        <button disabled className="w-full h-12 bg-[#f3f4f6] text-[#9ca3af] rounded-[10px] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center cursor-not-allowed">
                           Registration Closed
                        </button>
                     ) : (
                        <button className="w-full h-12 bg-[#0d0d0d] hover:bg-black text-white rounded-[10px] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center transition-colors">
                           Register Now
                        </button>
                     )}
                     
                     <button className="w-full h-12 bg-white border border-[#e8e8e8] hover:bg-[#fafafa] text-[#0d0d0d] rounded-[10px] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
                        <Share2 className="w-4 h-4" /> Share {event.type === 'program' ? 'Program' : 'Event'}
                     </button>
                  </div>

               </div>
            </div>
         </div>

      </div>
    </div>
  );
}