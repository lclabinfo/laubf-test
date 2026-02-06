import { motion } from "motion/react";
import { ArrowRight, Calendar, MapPin, Clock, Users, BookOpen, Music } from 'lucide-react';
import { events } from '../lib/events';
import { format, parseISO, isFuture, compareAsc } from 'date-fns';
import { cn } from "./ui/utils";
import PlanVisitForm from './PlanVisitForm';

interface HighSchoolMinistryPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function HighSchoolMinistryPage({ onNavigate }: HighSchoolMinistryPageProps) {
  // Filter for upcoming HBF events
  const ministryEvents = events
    .filter(e => e.ministry === 'HBF' && isFuture(parseISO(e.endDate)))
    .sort((a, b) => compareAsc(parseISO(a.startDate), parseISO(b.startDate)))
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0d0d0d] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=2000" 
            alt="High School Ministry" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-white/30 rounded-full text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm text-orange-400 border-orange-400/50">
                High School Bible Fellowship
            </div>
            <h1 className="font-['Helvetica_Neue',sans-serif] font-medium text-[50px] md:text-[90px] lg:text-[120px] tracking-tighter leading-none mb-6">
              HBF
            </h1>
            <p className="font-['DM_Serif_Text',serif] italic text-2xl md:text-3xl text-gray-200 max-w-2xl mx-auto">
              "Don't let anyone look down on you because you are young, but set an example for the believers..."
            </p>
            <p className="text-sm md:text-base uppercase tracking-widest mt-4 text-gray-400 font-bold">
              1 Timothy 4:12
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is HBF */}
      <section className="py-24 px-6 bg-white">
         <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-['DM_Serif_Text',serif] italic mb-8 text-gray-900">
                     Faith that is Your Own
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-['Inter',sans-serif]">
                     High School Bible Fellowship (HBF) is a community where students can ask real questions, build deep friendships, and discover what it means to follow Jesus. We believe that high school students are not just the church of tomorrow, but the church of today.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-['Inter',sans-serif]">
                     Our goal is to help students transition from a faith they inherited to a faith they own, equipping them to live for Christ in their schools and families.
                  </p>
               </div>
               <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                     <img 
                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" 
                        alt="High School Group" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
         <div className="container mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-['DM_Serif_Text',serif] italic mb-4">What We Do</h2>
               <p className="text-gray-500 max-w-xl mx-auto">
                  Sunday worship, Friday night fellowship, and seasonal retreats.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-orange-500 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                     <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bible Study</h3>
                  <p className="text-gray-500 leading-relaxed">
                     Interactive studies that tackle real-life issues through the lens of Scripture.
                  </p>
               </div>
               <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-orange-500 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                     <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Small Groups</h3>
                  <p className="text-gray-500 leading-relaxed">
                     Gender-based small groups where students can share openly and pray for one another.
                  </p>
               </div>
               <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center group hover:border-orange-500 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                     <Music className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Worship & Events</h3>
                  <p className="text-gray-500 leading-relaxed">
                     Passionate worship nights, fun outings, and retreats that create lasting memories.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Leaders Section */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
         <div className="container mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-['DM_Serif_Text',serif] italic mb-4">Meet Our Leaders</h2>
               <p className="text-gray-500 max-w-xl mx-auto">
                  Guiding students to grow in their faith.
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200" 
                    alt="John Park" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                     <h3 className="text-xl font-bold text-gray-900">John Park</h3>
                     <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">HBF Director</p>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        John has been serving in youth ministry for over 10 years. He is passionate about helping teens find their identity in Christ.
                     </p>
                  </div>
               </div>
               
               <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                    alt="Michelle Choi" 
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                     <h3 className="text-xl font-bold text-gray-900">Michelle Choi</h3>
                     <p className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2">Bible Teacher</p>
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Michelle leads our girls' bible study and organizes our annual winter retreat. She loves connecting with students.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Get Involved / Events */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
         <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
               <div>
                  <h2 className="text-3xl md:text-4xl font-['DM_Serif_Text',serif] italic mb-4">Coming Up</h2>
                  <p className="text-gray-600 max-w-xl">
                     Join us for our next HBF event.
                  </p>
               </div>
               <button 
                 onClick={() => onNavigate('events', 'HBF')}
                 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-all"
               >
                  View All Events <ArrowRight className="w-4 h-4" />
               </button>
            </div>

            {ministryEvents.length > 0 ? (
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ministryEvents.map((event) => (
                     <div 
                        key={event.id}
                        onClick={() => onNavigate('event-detail', event.id)}
                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                     >
                        <div className="aspect-video bg-gray-100 relative overflow-hidden">
                           {event.imageUrl ? (
                              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                           ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                 <Calendar className="w-8 h-8 text-gray-300" />
                              </div>
                           )}
                           <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-black">
                              {format(parseISO(event.startDate), 'MMM d')}
                           </div>
                        </div>
                        <div className="p-6">
                           <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">{event.title}</h3>
                           <div className="flex items-center text-xs text-gray-500 font-medium uppercase tracking-wide gap-3">
                              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {format(parseISO(event.startDate), 'h:mm a')}</span>
                              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="bg-gray-50 rounded-2xl p-12 text-center border border-dashed border-gray-200">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">No upcoming events scheduled at the moment.</p>
               </div>
            )}
         </div>
      </section>

      {/* Plan A Visit Form */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
         <div className="container mx-auto max-w-5xl">
            <PlanVisitForm variant="orange" />
         </div>
      </section>

    </div>
  );
}