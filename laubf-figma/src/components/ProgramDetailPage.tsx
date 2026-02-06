import { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ArrowRight, Share2, ArrowLeft, CalendarDays, Users, Video } from 'lucide-react';
import { programs, Program } from '../lib/programs';
import { getMinistryColor } from '../lib/events';
import { cn } from "./ui/utils";
import { format, parseISO, isValid } from 'date-fns';
import { Button } from './ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface ProgramDetailPageProps {
  programId: string;
  onNavigate: (page: any, id?: string) => void;
  onBack?: () => void;
}

export default function ProgramDetailPage({ programId, onNavigate, onBack }: ProgramDetailPageProps) {
  const program = useMemo(() => programs.find(p => p.id === programId), [programId]);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Program not found</h2>
            <Button onClick={() => onNavigate('programs')}>Back to Programs</Button>
        </div>
      </div>
    );
  }

  const ministryColor = getMinistryColor(program.ministry);
  
  // Format dates
  let dateDisplay = program.startDate; 
  if (isValid(parseISO(program.startDate))) {
      const start = parseISO(program.startDate);
      if (program.endDate && isValid(parseISO(program.endDate))) {
          const end = parseISO(program.endDate);
          dateDisplay = `${format(start, 'MMMM d')} - ${format(end, 'MMMM d, yyyy')}`;
      } else {
          dateDisplay = format(start, 'MMMM d, yyyy');
      }
  }

  const isOpen = program.status === 'Open';

  return (
    <div className="bg-white min-h-screen pb-40 font-['Helvetica_Neue',_sans-serif]">
       {/* Header Section (Centered Editorial) */}
       <div className="pt-[100px] pb-[60px] text-center max-w-[1000px] mx-auto px-6">
           <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
              {program.ministry} Ministry
           </div>
           <h1 className="text-[56px] md:text-[80px] leading-[0.95] font-medium tracking-[-0.03em] text-[#0d0d0d] mb-0">
              {program.title}
           </h1>
       </div>

       {/* Hero Image (Full Width Rounded) */}
       <div className="max-w-[1400px] mx-auto px-6 mb-24">
           <div className="w-full aspect-[21/9] bg-[#f3f4f6] rounded-[24px] overflow-hidden relative shadow-sm">
               <img 
                 src={program.imageUrl} 
                 alt={program.title}
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-8 left-8">
                   <span className={cn(
                       "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-lg", 
                       program.status === 'Open' ? "bg-green-600/90" : 
                       program.status === 'Coming Soon' ? "bg-blue-600/90" : "bg-gray-900/90"
                   )}>
                       {program.status === 'Open' ? 'Registration Open' : program.status}
                   </span>
               </div>
           </div>
       </div>

       <div className="px-6">
           <div className="max-w-[1400px] mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-20 lg:gap-32">
                   
                   {/* LEFT COLUMN (Content) */}
                   <div>
                       <div className="mb-20">
                           <span className="block text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-6">Introduction</span>
                           <h2 className="text-[32px] md:text-[40px] leading-[1] font-medium tracking-[-0.02em] text-[#0d0d0d] mb-8">
                               About the Program
                           </h2>
                           <p className="text-[20px] leading-[1.6] text-[#374151] font-medium mb-10 border-l-4 border-[#0d0d0d] pl-6 py-1">
                               {program.description}
                           </p>
                           <div className="prose prose-lg prose-neutral max-w-none 
                               prose-p:text-[18px] prose-p:leading-[1.7] prose-p:text-[#4b5563]
                               prose-headings:font-medium prose-headings:text-[#0d0d0d] prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-6
                               prose-ul:my-6 prose-li:text-[18px] prose-li:text-[#4b5563]
                           ">
                               {program.longDescription ? (
                                   <div dangerouslySetInnerHTML={{ __html: program.longDescription }} />
                               ) : (
                                   <p className="italic text-gray-400">Detailed curriculum and session information will be posted shortly.</p>
                               )}
                           </div>
                       </div>
                   </div>

                   {/* RIGHT COLUMN (Sidebar Details) */}
                   <div className="lg:sticky lg:top-32 h-fit">
                       <div className="border-t-2 border-[#0d0d0d] pt-8">
                           <h3 className="text-[24px] font-medium tracking-tight text-[#0d0d0d] mb-10">
                               Program Details
                           </h3>

                           <div className="space-y-10 mb-12">
                               {/* Duration */}
                               <div className="flex gap-5 items-start">
                                   <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0">
                                       <CalendarIcon className="w-5 h-5 text-[#0d0d0d]" strokeWidth={1.5} />
                                   </div>
                                   <div>
                                       <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1.5">Duration & Dates</div>
                                       <div className="text-[16px] font-bold text-[#0d0d0d] leading-tight mb-1">{program.duration}</div>
                                       <div className="text-[14px] text-[#6b7280] leading-snug">{dateDisplay}</div>
                                   </div>
                               </div>

                               {/* Schedule */}
                               <div className="flex gap-5 items-start">
                                   <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0">
                                       <Clock className="w-5 h-5 text-[#0d0d0d]" strokeWidth={1.5} />
                                   </div>
                                   <div>
                                       <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1.5">Weekly Schedule</div>
                                       <div className="text-[16px] font-bold text-[#0d0d0d] leading-tight">{program.schedule}</div>
                                   </div>
                               </div>

                               {/* Location */}
                               <div className="flex gap-5 items-start">
                                   <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0">
                                       <MapPin className="w-5 h-5 text-[#0d0d0d]" strokeWidth={1.5} />
                                   </div>
                                   <div>
                                       <div className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-1.5">Location</div>
                                       <div className="text-[16px] font-bold text-[#0d0d0d] leading-tight">{program.location}</div>
                                   </div>
                               </div>
                           </div>

                           <div className="space-y-4">
                               {isOpen ? (
                                   <Button className="w-full bg-[#0d0d0d] hover:bg-black text-white font-bold uppercase tracking-widest h-14 rounded-full text-[11px] transition-all hover:scale-[1.02]">
                                       Register for Program <ArrowRight className="w-4 h-4 ml-2" />
                                   </Button>
                               ) : (
                                   <Button disabled className="w-full bg-[#e5e7eb] text-[#9ca3af] font-bold uppercase tracking-widest h-14 rounded-full text-[11px] cursor-not-allowed">
                                       {program.status === 'Closed' ? 'Registration Closed' : 'Coming Soon'}
                                   </Button>
                               )}

                               <Button 
                                   variant="outline" 
                                   className="w-full border-[#e5e7eb] hover:bg-[#f9fafb] text-[#0d0d0d] h-14 rounded-full text-[11px] font-bold uppercase tracking-widest" 
                                   onClick={() => {
                                       navigator.clipboard.writeText(window.location.href);
                                       alert("Link copied to clipboard!");
                                   }}
                               >
                                   <Share2 className="w-4 h-4 mr-2" />
                                   Share Program
                               </Button>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </div>
    </div>
  );
}
