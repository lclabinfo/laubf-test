import { useState } from 'react';
import { motion } from "motion/react";
import { ArrowRight, Clock, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { events, getMinistryColor } from '../lib/events';
import { campuses } from '../lib/campuses';
import { format, parseISO, isFuture, compareAsc } from 'date-fns';
import { cn } from "./ui/utils";
import PlanVisitForm from './PlanVisitForm';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface CollegeMinistryPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function CollegeMinistryPage({ onNavigate }: CollegeMinistryPageProps) {
  // Filter for upcoming YAM/College events
  const ministryEvents = events
    .filter(e => e.ministry === 'YAM' && isFuture(parseISO(e.endDate)))
    .sort((a, b) => compareAsc(parseISO(a.startDate), parseISO(b.startDate)));

  const galleryImages = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000"
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col items-center pt-[120px] pb-[80px] px-6 text-center">
        <p className="text-[24px] leading-[1.2] tracking-[-0.72px] text-[#676767] uppercase mb-2">
           MINISTRY
        </p>
        <h1 className="text-[48px] md:text-[80px] leading-[0.9] tracking-[-2.4px] font-medium text-[#0d0d0d] mb-[64px]">
           Young Adult / College
        </h1>
        
        {/* Large Hero Image */}
        <div className="w-full max-w-[1200px] aspect-[21/9] rounded-[12px] overflow-hidden relative shadow-sm">
           <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000" 
              alt="Young Adult Ministry" 
              className="w-full h-full object-cover" 
           />
        </div>
      </div>

      {/* 2. INTRO SECTION */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-[80px] flex flex-col md:flex-row gap-[64px] items-center">
         <div className="md:w-1/2 rounded-[12px] overflow-hidden aspect-[4/3]">
            <img 
               src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
               alt="YAM Intro" 
               className="w-full h-full object-cover" 
            />
         </div>
         <div className="md:w-1/2 flex flex-col items-start gap-6">
            <div>
               <p className="text-[24px] leading-[1.2] tracking-[-0.72px] text-[#676767] uppercase mb-2">INTRODUCTION</p>
               <h2 className="text-[48px] leading-none tracking-[-1.44px] font-medium text-[#0d0d0d]">Young Adult Ministry (YAM)</h2>
            </div>
            <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-[#313131]">
               Open to college students and those in their 20s+, our ministry fosters genuine connection through fellowship activities like hiking, camping, and paint nights. At the heart of our community is a deep commitment to spiritual growth, anchored by our weekly discipleship training.
            </p>
         </div>
      </div>

      {/* 3. WHAT WE DO (Dark Section) */}
      <div className="bg-[#0d0d0d] text-[#fafafa] py-[120px] px-6">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[48px] leading-none tracking-[-1.44px] font-medium mb-[80px] text-[#fafafa]">What We Do</h2>
            
            <div className="flex flex-col gap-[80px]">
               {/* Pillar 1: Fellowship */}
               <div className="flex flex-col md:flex-row gap-[48px] items-center">
                  <div className="md:w-1/2 h-[240px] rounded-[12px] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" alt="Fellowship" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-1/2">
                     <h3 className="text-[36px] leading-[1.2] tracking-[-1.08px] font-medium mb-2">Fellowship</h3>
                     <p className="text-[16px] leading-[1.4] tracking-[-0.32px] max-w-[640px]">
                        Life is best lived in community, so we host regular events like camping, hiking, and paint nights to help you unwind. These gatherings are the perfect space to build lasting friendships and share life with others in your age group.
                     </p>
                  </div>
               </div>

               {/* Pillar 2: Discipleship (Reversed) */}
               <div className="flex flex-col md:flex-row-reverse gap-[48px] items-center">
                  <div className="md:w-1/2 h-[240px] rounded-[12px] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000" alt="Discipleship" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-1/2 text-right flex flex-col items-end">
                     <h3 className="text-[36px] leading-[1.2] tracking-[-1.08px] font-medium mb-2">Discipleship Training</h3>
                     <p className="text-[16px] leading-[1.4] tracking-[-0.32px] max-w-[640px]">
                        We meet weekly to study the Bible and navigate deep questions about purpose and identity together. Join us to explore faith alongside your peers and grow as true disciples of Christ.
                     </p>
                  </div>
               </div>

               {/* Pillar 3: Serving */}
               <div className="flex flex-col md:flex-row gap-[48px] items-center">
                  <div className="md:w-1/2 h-[240px] rounded-[12px] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000" alt="Serving" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:w-1/2">
                     <h3 className="text-[36px] leading-[1.2] tracking-[-1.08px] font-medium mb-2">Serving Opportunities</h3>
                     <p className="text-[16px] leading-[1.4] tracking-[-0.32px] max-w-[640px]">
                        Our members actively serve in diverse roles, from teaching youth and leading children’s worship to playing in the praise band. We invite you to discover your calling here and help us shape the ministry you want to see.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. SNIPPETS (Gallery) */}
      <div className="py-[120px] px-6 text-center">
         <h2 className="text-[48px] leading-none tracking-[-1.44px] font-medium text-[#0d0d0d] mb-[64px]">
            Snippets from the Ministry
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
             <div className="md:col-span-2 md:row-span-2 rounded-[12px] overflow-hidden h-[500px]">
                 <img src={galleryImages[0]} alt="Snippet 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="rounded-[12px] overflow-hidden h-[240px]">
                 <img src={galleryImages[1]} alt="Snippet 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="rounded-[12px] overflow-hidden h-[240px]">
                 <img src={galleryImages[2]} alt="Snippet 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="rounded-[12px] overflow-hidden h-[240px]">
                 <img src={galleryImages[3]} alt="Snippet 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="rounded-[12px] overflow-hidden h-[240px]">
                 <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" alt="Snippet 5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
             </div>
         </div>
      </div>

      {/* 5. JOIN A CAMPUS MINISTRY (Campuses List) */}
      <div className="py-[120px] px-6 bg-[#fafafa]">
         <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
            <div className="relative mb-[64px]">
               {/* Polaroids decoration could go here if using images */}
               <div className="w-[300px] h-[200px] bg-white p-2 shadow-lg rotate-3 absolute -top-20 left-1/2 -translate-x-1/2 border border-gray-100 hidden md:block">
                  <div className="w-full h-[85%] bg-gray-200 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
            
            <p className="text-[24px] leading-[1.2] tracking-[-0.72px] text-[#0d0d0d] mb-2 relative z-10">Are you a college student?</p>
            <h2 className="text-[48px] leading-none tracking-[-1.44px] font-medium text-[#0d0d0d] mb-8 relative z-10">
               Join a Campus Ministry
            </h2>
            <p className="text-[20px] leading-[1.5] tracking-[-0.4px] text-[#313131] max-w-[680px] mb-12 relative z-10">
               We have bible study clubs all across different college campuses. Join us for weekly group bible studies and get to know each other through fellowship.
            </p>

            <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {campuses.map((c) => (
                    <button
                        key={c.id}
                        onClick={() => onNavigate('campus-detail', c.id)}
                        className="bg-[#e8e8e8] hover:bg-[#dcdcdc] px-8 py-4 rounded-[16px] text-center min-w-[200px] transition-all flex flex-col items-center gap-1 group"
                    >
                        <span className="text-[14px] text-[#676767] font-medium uppercase tracking-wide group-hover:text-[#0d0d0d] transition-colors">
                            {c.shortName}
                        </span>
                        <span className="text-[18px] text-[#0d0d0d] font-medium tracking-tight leading-none">
                            {c.name.replace('University', 'Univ.').replace('California State', 'Cal State')}
                        </span>
                    </button>
                ))}
            </div>
            
            <button className="mt-12 bg-white border border-[#dcdcdc] rounded-full px-8 py-3 text-[16px] font-medium hover:bg-gray-50 transition-colors">
               Don't see your campus?
            </button>
         </div>
      </div>

      {/* 6. UPCOMING EVENTS (Black Background) */}
      <div className="bg-[#0d0d0d] text-[#fafafa] py-[120px] px-6">
         <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-[80px]">
               <p className="text-[14px] uppercase tracking-widest text-[#676767] mb-4">Young Adult Ministry</p>
               <h2 className="text-[48px] font-medium tracking-[-1.44px]">Upcoming Events</h2>
            </div>
            
            {ministryEvents.length > 0 ? (
               <div className="grid md:grid-cols-3 gap-8">
                  {ministryEvents.map((event) => (
                      <div 
                         key={event.id}
                         onClick={() => onNavigate('event-detail', event.id)}
                         className="bg-[#1a1a1a] rounded-[12px] overflow-hidden cursor-pointer group hover:translate-y-[-4px] transition-all duration-300"
                      >
                         <div className="aspect-video relative overflow-hidden">
                            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-4 left-4 bg-[#fafafa] text-[#0d0d0d] px-3 py-1 rounded-[4px] font-bold text-xs uppercase">
                               {event.ministry}
                            </div>
                         </div>
                         <div className="p-6">
                            <h3 className="text-[24px] font-medium leading-tight mb-2">{event.title}</h3>
                            <div className="flex gap-4 text-[#676767] text-sm font-medium uppercase tracking-wide mb-4">
                               <span>{format(parseISO(event.startDate), 'MMM d')}</span>
                               <span>•</span>
                               <span>{format(parseISO(event.startDate), 'h:mm a')}</span>
                            </div>
                            <div className="flex items-center text-[#fafafa] text-sm font-bold uppercase tracking-wider group-hover:text-[#3667B1] transition-colors">
                               View Details <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                         </div>
                      </div>
                  ))}
               </div>
            ) : (
               <div className="text-center text-[#676767]">No upcoming events at this time.</div>
            )}
            
            <div className="flex justify-center mt-12">
               <button onClick={() => onNavigate('events', 'YAM')} className="border border-[#333] text-[#fafafa] px-8 py-3 rounded-full hover:bg-[#333] transition-colors">
                  View All Events
               </button>
            </div>
         </div>
      </div>

      {/* 7. GET STARTED (Plan Visit) */}
      <div className="py-[120px] px-6 bg-white">
          <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-[48px] font-medium tracking-[-1.44px] text-[#0d0d0d] mb-4">How to Get Started at LA UBF</h2>
              <p className="text-[20px] text-[#313131] mb-[64px]">
                 We know that visiting a new church can be intimidating. We want to make your first experience as seamless and welcoming as possible.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-4">
                         <Clock className="w-full h-full text-[#0d0d0d]" />
                      </div>
                      <h3 className="text-[20px] font-medium mb-2">Join us on Sunday</h3>
                      <p className="text-[#676767] text-sm">Experience our main worship service where we gather to listen to the sermon.</p>
                      <button className="mt-4 bg-[#0d0d0d] text-white px-6 py-2 rounded-full text-sm font-bold">Service Info</button>
                  </div>
                  
                  <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-4">
                         <ArrowUpRight className="w-full h-full text-[#0d0d0d]" />
                      </div>
                      <h3 className="text-[20px] font-medium mb-2">Are you a Student?</h3>
                      <p className="text-[#676767] text-sm">Connect with our campus ministries for bible studies and events.</p>
                      <button className="mt-4 bg-[#0d0d0d] text-white px-6 py-2 rounded-full text-sm font-bold">View Campuses</button>
                  </div>

                  <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-4">
                         <Calendar className="w-full h-full text-[#0d0d0d]" />
                      </div>
                      <h3 className="text-[20px] font-medium mb-2">Not sure where to start?</h3>
                      <p className="text-[#676767] text-sm">Check out our upcoming events to see what brings our community together.</p>
                      <button className="mt-4 border border-[#dcdcdc] px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-50">View All Events</button>
                  </div>
              </div>
          </div>
      </div>

    </div>
  );
}