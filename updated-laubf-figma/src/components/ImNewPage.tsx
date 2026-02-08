import { useState } from 'react';
import { ChevronDown, ArrowRight, MapPin, Clock, Users, Coffee, HelpCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import PlanVisitForm from './PlanVisitForm';

interface ImNewPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function ImNewPage({ onNavigate }: ImNewPageProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In real app, send data to backend
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop" 
            alt="Community Gathering" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm font-bold uppercase tracking-wider mb-6 bg-white/10 backdrop-blur-sm">
            Welcome to LA UBF
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            You Belong<br/>Here
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're exploring faith for the first time or looking for a new church home, we're so glad you're here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('plan-visit')}
              className="bg-[#3667B1] hover:bg-[#2a518c] text-white px-8 py-6 rounded-full text-base font-bold uppercase tracking-wide w-full sm:w-auto"
            >
              Tell us you're coming
            </Button>
            <Button 
              onClick={() => scrollToSection('faq')}
              variant="outline" 
              className="bg-transparent px-8 py-6 rounded-full text-base font-bold uppercase tracking-wide border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white w-full sm:w-auto"
            >
              Frequently Asked Questions
            </Button>
          </div>
        </div>
      </div>

      {/* Intro Text */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
             How to get started
           </h2>
           <p className="text-lg text-gray-600 font-serif leading-relaxed">
              We know that visiting a new church can be intimidating. We want to make your first experience as seamless and welcoming as possible. Here are the two best ways to connect with our community.
           </p>
        </div>
      </div>

      {/* Pathways: Sunday vs Campus */}
      <div className="px-6 pb-24">
         <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
            
            {/* Path 1: Sunday Service */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#3667B1]">
                     <Coffee className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4">Join us on Sunday</h3>
                  <p className="text-gray-600 mb-8 font-medium">
                     Experience our main worship service. Great for families, working professionals, and anyone who loves a vibrant community worship setting.
                  </p>
                  <Button 
                    onClick={() => scrollToSection('what-to-expect')}
                    className="bg-black text-white rounded-xl px-6 py-6 font-bold uppercase text-sm tracking-wider group-hover:bg-[#3667B1] transition-colors"
                  >
                     See What to Expect
                  </Button>
               </div>
            </div>

            {/* Path 2: Campus Ministry */}
            <div className="bg-[#3667B1] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 text-white">
               {/* Decorative Circle */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center shadow-sm mb-8 text-white">
                     <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4">Are you a student?</h3>
                  <p className="text-blue-100 mb-8 font-medium">
                     We have active ministries at UCLA, USC, CSULB, and more. Connect with a mentor and join a small group Bible study right on your campus.
                  </p>
                  <Button 
                    onClick={() => onNavigate('campuses')}
                    className="bg-white text-[#3667B1] rounded-xl px-6 py-6 font-bold uppercase text-sm tracking-wider hover:bg-blue-50 transition-colors"
                  >
                     Find Your Campus
                  </Button>
               </div>
            </div>

         </div>
      </div>

      {/* What To Expect (Sunday Timeline) */}
      <div id="what-to-expect" className="bg-black text-white py-24 px-6 overflow-hidden">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
               <div>
                  <span className="text-[#3667B1] font-bold uppercase tracking-widest text-sm mb-2 block">Sunday Service</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9]">
                     What to<br/>Expect
                  </h2>
               </div>
               <p className="text-gray-400 max-w-md text-lg font-medium">
                  A typical Sunday at LA UBF is filled with worship, learning, and connection.
               </p>
            </div>

            {/* Timeline */}
            <div className="relative">
               {/* Vertical Line (Mobile) / Horizontal Line (Desktop) */}
               <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-white/20 md:left-0 md:right-0 md:top-[19px] md:bottom-auto md:h-0.5 md:w-full" />

               <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                  
                  {/* Step 1 */}
                  <div className="relative pl-16 md:pl-0 md:pt-16 group">
                     <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border-4 border-[#3667B1] z-10 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 transition-transform group-hover:scale-110" />
                     <div className="text-[#3667B1] font-black text-2xl mb-2">10:00 AM</div>
                     <h3 className="text-xl font-bold uppercase mb-3">Bible Study</h3>
                     <p className="text-gray-400 leading-relaxed text-sm">
                        Before service, we gather in small groups for personal Bible study. It's a great time to dive deeper into the Word and ask questions in a smaller setting.
                     </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative pl-16 md:pl-0 md:pt-16 group">
                     <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-4 border-white z-10 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 transition-transform group-hover:scale-110" />
                     <div className="text-white font-black text-2xl mb-2">11:00 AM</div>
                     <h3 className="text-xl font-bold uppercase mb-3">Worship Service</h3>
                     <p className="text-gray-400 leading-relaxed text-sm">
                        Our main service includes passionate praise, prayer, special music, and a sermon rooted in the Bible. Service typically lasts about 75-90 minutes.
                     </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative pl-16 md:pl-0 md:pt-16 group">
                     <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border-4 border-[#3667B1] z-10 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 transition-transform group-hover:scale-110" />
                     <div className="text-[#3667B1] font-black text-2xl mb-2">12:30 PM</div>
                     <h3 className="text-xl font-bold uppercase mb-3">Lunch & Fellowship</h3>
                     <p className="text-gray-400 leading-relaxed text-sm">
                        Don't rush off! We serve a delicious, free homemade lunch every week. It's the best way to meet people and feel the warmth of our community.
                     </p>
                  </div>

               </div>
            </div>
         </div>
      </div>

      {/* Visual Community Section */}
      <div className="py-24 px-6 bg-gray-50">
         <div className="max-w-[1200px] mx-auto text-center mb-16">
            <h2 className="text-3xl font-black uppercase mb-4">Real People, Real Community</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
               We're not just a Sunday church. We're a family that does life together.
            </p>
         </div>
         {/* Masonry-ish Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[600px] max-w-[1400px] mx-auto">
            <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-2 md:col-span-2 rounded-2xl overflow-hidden relative group">
               <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
         </div>
      </div>

      {/* Plan A Visit Form */}
      <div id="plan-visit" className="py-24 px-6 bg-white relative">
         <div className="max-w-[1000px] mx-auto">
            <PlanVisitForm variant="blue" />
         </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-24 px-6 bg-gray-50">
         <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-16">
               <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
               <h2 className="text-3xl font-black uppercase mb-4">Common Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
               {[
                  { q: "What should I wear?", a: "We're pretty casual! Jeans and a t-shirt are totally fine. Some people like to dress up a bit more, but there's no official dress code. Come as you are." },
                  { q: "Do you have something for kids?", a: "Yes! Our CBF (Children's Bible Fellowship) program runs during the main service. We have dedicated teachers for different age groups who provide a fun, safe, and faith-filled environment." },
                  { q: "Where do I park?", a: "We have a private parking lot right next to the church building. Our parking attendants will guide you to a spot when you arrive." },
                  { q: "Do I need to bring a Bible?", a: "If you have one, feel free to bring it! If not, we have Bibles available in the pews, and verses are projected on the screen during the sermon." },
                  { q: "How can I get connected with a small group?", a: "The best way is to fill out the 'Plan a Visit' form above and check the Bible study interest box. One of our leaders will reach out to connect you with a group that fits your life stage." }
               ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-100 rounded-xl px-6 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-[#3667B1]/10">
                     <AccordionTrigger className="font-bold text-lg hover:text-[#3667B1] text-left">
                        {item.q}
                     </AccordionTrigger>
                     <AccordionContent className="text-gray-500 font-medium leading-relaxed pb-6 text-base">
                        {item.a}
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </div>
      </div>

    </div>
  );
}
