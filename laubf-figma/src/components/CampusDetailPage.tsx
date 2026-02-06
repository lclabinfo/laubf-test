import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Mail, Instagram, Globe, ArrowRight, X, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { campuses } from '../lib/campuses';
import { events, getMinistryColor } from '../lib/events';
import { Badge } from "./ui/badge";
import { format, parseISO } from 'date-fns';
import { cn } from "./ui/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface CampusDetailPageProps {
  campusId: string;
  onNavigate: (page: any, id?: string) => void;
}

export default function CampusDetailPage({ campusId, onNavigate }: CampusDetailPageProps) {
  const campus = campuses.find(c => c.id === campusId);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter events for this campus
  const campusEvents = events.filter(e => e.campusId === campus?.id);

  // Filter other campuses for footer nav
  const otherCampuses = campuses.filter(c => c.id !== campus?.id);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  if (!campus) return <div>Campus not found</div>;

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < campus.galleryImages.length) {
        setLightboxIndex(newIndex);
    } else if (newIndex < 0) {
        setLightboxIndex(campus.galleryImages.length - 1); // Loop to end
    } else {
        setLightboxIndex(0); // Loop to start
    }
  };

  return (
    <div className="bg-[#fafafa] min-h-screen pb-0 pt-0 animate-in fade-in duration-500 font-['Helvetica_Neue',_sans-serif]">
       
       {/* Lightbox Overlay */}
       {lightboxIndex !== null && (
         <div className="fixed inset-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
            <button 
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            >
                <X className="w-8 h-8" />
            </button>
            
            <button 
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
            >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <div className="w-full h-full max-w-7xl max-h-screen p-4 md:p-12 flex items-center justify-center">
                <img 
                    src={campus.galleryImages[lightboxIndex]} 
                    alt={`Gallery ${lightboxIndex + 1}`} 
                    className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                />
            </div>

            <button 
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-4 hover:bg-white/10 rounded-full"
            >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 font-medium tracking-widest text-sm">
                {lightboxIndex + 1} / {campus.galleryImages.length}
            </div>
         </div>
       )}

       {/* 1. HEADER SECTION (Editorial Style) */}
       <div className="flex flex-col items-center pt-[100px] pb-[40px] px-6 text-center max-w-[1400px] mx-auto relative">
          
          <div className="w-full max-w-[900px] mx-auto mb-10">
             <button 
                onClick={() => onNavigate('campuses')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e8e8e8] text-[#676767] hover:text-[#0d0d0d] hover:border-[#0d0d0d] font-bold uppercase tracking-widest text-[10px] transition-all mb-8 shadow-sm"
             >
                <ArrowLeft className="w-3 h-3" /> All Campuses
             </button>

             <div className="flex flex-col gap-[12px] items-center mb-12 w-full">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0d0d0d]"></span>
                    <p className="text-[14px] font-bold tracking-[0.2em] text-[#9ca3af] uppercase">
                        {campus.shortName} Ministry
                    </p>
                    <span className="w-2 h-2 rounded-full bg-[#0d0d0d]"></span>
                </div>
                <h1 className="text-[56px] md:text-[90px] leading-[0.9] tracking-[-0.04em] font-medium text-[#0d0d0d]">
                    {campus.name}
                </h1>
             </div>
          </div>

          <div className="w-full aspect-[21/9] rounded-[24px] overflow-hidden relative shadow-sm mb-16 border border-[#e8e8e8]">
             <img 
                src={campus.imageUrl} 
                alt={campus.name} 
                className="w-full h-full object-cover" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
       </div>

       {/* 2. MAIN CONTENT (Single Column Flow) */}
       <div className="max-w-[1000px] mx-auto px-6 pb-24 space-y-24">
             
          {/* Introduction */}
          <section>
             <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af] mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#9ca3af]"></span> Introduction
             </p>
             <h2 className="text-[48px] leading-none tracking-[-0.03em] font-medium text-[#0d0d0d] mb-8">
                About the Ministry
             </h2>
             <div 
                className="prose prose-xl prose-gray max-w-none font-['Helvetica_Neue',_sans-serif] text-[#313131] leading-[1.6] prose-p:mb-6 prose-headings:font-medium prose-headings:text-[#0d0d0d] prose-a:text-[#3667B1] prose-li:marker:text-[#0d0d0d]"
                dangerouslySetInnerHTML={{ __html: campus.longDescription }} 
             />
          </section>

          {/* JOIN US SECTION (Refactored Website Layout) */}
          <section className="scroll-mt-24 border-t border-[#e8e8e8] pt-16" id="join-us">
              <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
                
                {/* Left Column: Title & Intro (4 cols) */}
                <div className="md:col-span-4">
                  <h2 className="text-[48px] leading-[0.9] tracking-[-0.03em] font-medium text-[#0d0d0d] mb-6">
                    Join Us
                  </h2>
                  <p className="text-[#676767] text-[18px] leading-relaxed">
                    We gather weekly for fellowship, worship, and deep dives into the Word. Whether you're a believer or just curious, you are welcome here.
                  </p>
                </div>

                {/* Right Column: Info & Actions (8 cols) */}
                <div className="md:col-span-8 space-y-16">
                  
                  {/* 1. Weekly Gatherings */}
                  <div>
                     <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af] mb-8 border-b border-[#e8e8e8] pb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Weekly Gatherings
                     </h3>
                     <div className="space-y-10">
                        {campus.meetingSessions && campus.meetingSessions.length > 0 ? (
                           campus.meetingSessions.map((session, idx) => (
                              <div key={idx} className="group">
                                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                                    <span className="text-[32px] font-medium text-[#0d0d0d] tracking-tight">{session.day}s</span>
                                    <span className="text-[32px] font-medium text-[#9ca3af] tracking-tight decoration-1 decoration-[#e8e8e8] underline-offset-8">@ {session.time}</span>
                                 </div>
                                 <div className="flex items-start gap-3 text-[#676767]">
                                    <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#0d0d0d]" />
                                    <div>
                                       <span className="text-[18px] block text-[#0d0d0d] font-medium">{session.location}</span>
                                       {session.note && <span className="text-[14px] text-[#9ca3af] italic mt-1 block">{session.note}</span>}
                                    </div>
                                 </div>
                              </div>
                           ))
                        ) : (
                           // Fallback
                           <div className="group">
                                 <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                                    <span className="text-[32px] font-medium text-[#0d0d0d] tracking-tight">Weekly Meeting</span>
                                    <span className="text-[32px] font-medium text-[#9ca3af] tracking-tight">@ {campus.meetingTime}</span>
                                 </div>
                                 <div className="flex items-start gap-3 text-[#676767]">
                                    <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#0d0d0d]" />
                                    <div>
                                       <span className="text-[18px] block text-[#0d0d0d] font-medium">{campus.location}</span>
                                       <span className="text-[16px] block mt-1">{campus.address}</span>
                                    </div>
                                 </div>
                           </div>
                        )}
                     </div>

                     {/* Quick Zoom Links */}
                     {campus.meetingSessions?.some(s => s.zoomUrl) && (
                        <div className="mt-12 pt-10 border-t border-[#e8e8e8] border-dashed">
                           <h4 className="text-[14px] font-bold text-[#0d0d0d] mb-4 flex items-center gap-2">
                              <Video className="w-4 h-4" /> Virtual Options
                           </h4>
                           <div className="flex flex-wrap gap-4">
                              {campus.meetingSessions.filter(s => s.zoomUrl).map((session, idx) => (
                                 <a 
                                    key={idx}
                                    href={session.zoomUrl}
                                    target="_blank"
                                    rel="noreferrer" 
                                    className="inline-flex items-center gap-3 bg-[#eef2ff] hover:bg-[#e0e7ff] text-[#3730a3] px-5 py-3 rounded-[8px] transition-colors border border-[#e0e7ff]"
                                 >
                                    <span className="font-bold text-[12px] uppercase tracking-wider">
                                       {session.day} Zoom
                                    </span>
                                    <ArrowRight className="w-4 h-4" />
                                 </a>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>

                  {/* 2. Get Connected */}
                  <div>
                     <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af] mb-8 border-b border-[#e8e8e8] pb-4 flex items-center gap-2">
                        <Mail className="w-4 h-4" /> Get Connected
                     </h3>
                     
                     <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                           <div className="mb-2 text-[13px] font-bold text-[#0d0d0d] uppercase tracking-wide">Email Us</div>
                           <a href={`mailto:${campus.contactEmail}`} className="text-[20px] md:text-[24px] font-medium text-[#676767] hover:text-[#0d0d0d] underline decoration-1 underline-offset-8 decoration-[#e8e8e8] hover:decoration-[#0d0d0d] transition-all break-words">
                              {campus.contactEmail}
                           </a>
                        </div>
                        
                        {/* Actions */}
                        <div className="flex flex-col gap-4">
                           {campus.startBibleStudyUrl && (
                              <a href={campus.startBibleStudyUrl} target="_blank" className="w-full bg-[#0d0d0d] text-white py-5 px-8 rounded-[12px] font-bold uppercase tracking-widest text-[11px] flex items-center justify-between group hover:bg-[#333] transition-colors shadow-lg shadow-black/5">
                                 Start Bible Study
                                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </a>
                           )}
                           <div className="flex gap-3">
                              {campus.socials.instagram && (
                                 <a href={`https://instagram.com/${campus.socials.instagram}`} target="_blank" className="flex-1 bg-[#f3f4f6] text-[#0d0d0d] py-4 px-4 rounded-[12px] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#e8e8e8] transition-colors">
                                    <Instagram className="w-4 h-4" /> Instagram
                                 </a>
                              )}
                              {campus.socials.website && (
                                  <a href={campus.socials.website} target="_blank" className="flex-1 bg-[#f3f4f6] text-[#0d0d0d] py-4 px-4 rounded-[12px] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-[#e8e8e8] transition-colors">
                                    <Globe className="w-4 h-4" /> Website
                                  </a>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
          </section>

          {/* Leadership Section */}
          {campus.leaders.length > 0 && (
             <section>
                <h2 className="text-[48px] leading-none tracking-[-0.03em] font-medium text-[#0d0d0d] mb-[48px]">
                   Meet the Team
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                   {campus.leaders.map((leader, idx) => (
                      <div key={idx} className="flex flex-col gap-4 group">
                         <div className="aspect-square rounded-[16px] overflow-hidden bg-[#e8e8e8] border border-[#e8e8e8]">
                            <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                         </div>
                         <div>
                            <h3 className="text-[24px] font-medium text-[#0d0d0d] leading-[1.2] mb-1">{leader.name}</h3>
                            <div className="text-[#676767] text-[12px] font-bold uppercase tracking-widest mb-3">{leader.role}</div>
                            <p className="text-[#313131] text-[16px] leading-[1.5]">{leader.bio}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </section>
          )}

          {/* Events Section */}
          {campusEvents.length > 0 && (
             <section className="bg-[#0d0d0d] text-[#fafafa] rounded-[24px] p-8 md:p-12 -mx-6 md:-mx-12 lg:mx-0 shadow-xl shadow-black/5">
                <div className="flex items-center justify-between mb-12">
                   <h2 className="text-[36px] md:text-[48px] leading-none tracking-[-0.03em] font-medium">
                      Upcoming Events
                   </h2>
                   <button 
                      onClick={() => onNavigate('events', 'YAM')}
                      className="hidden md:flex text-[#fafafa] font-bold text-xs uppercase tracking-widest items-center gap-2 hover:text-[#3667B1] transition-colors bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
                   >
                      View All <ArrowRight className="w-3 h-3" />
                   </button>
                </div>

                <Carousel
                  opts={{ align: "start", loop: false }}
                  className="w-full relative"
                >
                   <CarouselContent className="-ml-4">
                     {campusEvents.map((event) => {
                       const startDate = parseISO(event.startDate);
                       return (
                         <CarouselItem key={event.id} className="pl-4 md:basis-1/2">
                            <div 
                              onClick={() => onNavigate('event-detail', event.id)}
                              className="group cursor-pointer flex flex-col gap-4"
                            >
                              <div className="aspect-[4/3] relative rounded-[16px] overflow-hidden bg-[#313131] border border-[#333]">
                                {event.imageUrl ? (
                                  <img 
                                    src={event.imageUrl} 
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                                     <span className="font-medium opacity-20 uppercase tracking-widest text-2xl">
                                       {event.ministry}
                                     </span>
                                  </div>
                                )}
                                
                                <div className="absolute top-4 left-4 bg-[#fafafa] text-[#0d0d0d] rounded-[8px] px-3 py-1.5 font-bold text-center shadow-lg">
                                   <span className="block text-[10px] uppercase tracking-wider text-[#d32f2f]">
                                      {format(startDate, 'MMM')}
                                   </span>
                                   <span className="block text-lg leading-none">
                                      {format(startDate, 'dd')}
                                   </span>
                                </div>
                              </div>

                              <div>
                                 <h3 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em] mb-2 group-hover:text-[#3667B1] transition-colors">
                                   {event.title}
                                 </h3>
                                 <div className="flex items-center gap-2 text-[#fafafa]/60 text-[11px] font-bold uppercase tracking-wider">
                                    <Clock className="w-3 h-3" />
                                    {format(startDate, 'h:mm a')}
                                 </div>
                              </div>
                            </div>
                         </CarouselItem>
                       );
                     })}
                   </CarouselContent>
                   <div className="flex gap-4 mt-8">
                       <CarouselPrevious className="static translate-y-0 bg-[#313131] border-none text-white hover:bg-[#505050] hover:text-white rounded-full w-12 h-12" />
                       <CarouselNext className="static translate-y-0 bg-[#313131] border-none text-white hover:bg-[#505050] hover:text-white rounded-full w-12 h-12" />
                   </div>
                </Carousel>
             </section>
          )}

          {/* Gallery Section */}
          {campus.galleryImages.length > 0 && (
             <section>
                <h2 className="text-[48px] leading-none tracking-[-0.03em] font-medium text-[#0d0d0d] mb-[48px]">
                   Snippets from the Ministry
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {campus.galleryImages.map((img, idx) => (
                      <div 
                          key={idx} 
                          onClick={() => setLightboxIndex(idx)}
                          className={`
                              cursor-pointer rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative 
                              ${idx === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}
                          `}
                      >
                         <img 
                           src={img} 
                           alt={`Gallery ${idx + 1}`} 
                           className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                         />
                      </div>
                   ))}
                </div>
             </section>
          )}

          {/* FAQ Section */}
          {campus.faqs.length > 0 && (
             <section>
                <h2 className="text-[48px] leading-none tracking-[-0.03em] font-medium text-[#0d0d0d] mb-[48px]">
                   Common Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                   {campus.faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border-[#e8e8e8]">
                         <AccordionTrigger className="text-[20px] font-medium text-[#0d0d0d] hover:text-[#3667B1] hover:no-underline py-6 tracking-tight">
                            {faq.question}
                         </AccordionTrigger>
                         <AccordionContent className="text-[#676767] text-[18px] leading-relaxed pb-6">
                            {faq.answer}
                         </AccordionContent>
                      </AccordionItem>
                   ))}
                </Accordion>
             </section>
          )}
       </div>
       
       {/* 3. FOOTER NAV (Other Campuses) */}
       <div className="bg-[#f2f2f2] py-[120px] px-6 border-t border-[#e8e8e8]">
          <div className="max-w-[1000px] mx-auto text-center">
             <p className="text-[18px] text-[#676767] mb-4">Don't see your campus?</p>
             <h2 className="text-[48px] font-medium text-[#0d0d0d] tracking-[-0.03em] mb-12">Check out our other locations</h2>
             
             <div className="flex flex-wrap justify-center gap-4">
                {otherCampuses.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => onNavigate('campus-detail', c.id)}
                        className="bg-white hover:bg-white/80 border border-[#e8e8e8] px-8 py-5 rounded-[24px] text-left min-w-[240px] transition-all group hover:shadow-lg hover:border-[#dcdcdc] hover:-translate-y-1"
                    >
                        <div className="text-[11px] text-[#9ca3af] font-bold uppercase tracking-widest mb-2 group-hover:text-[#0d0d0d] transition-colors flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e8e8e8] group-hover:bg-[#0d0d0d] transition-colors"></span>
                            {c.shortName}
                        </div>
                        <div className="text-[20px] text-[#0d0d0d] font-medium tracking-tight">
                            {c.name.replace('University', 'Univ.')}
                        </div>
                    </button>
                ))}
             </div>
          </div>
       </div>

    </div>
  );
}