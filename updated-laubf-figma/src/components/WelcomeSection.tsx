import { Heart, Users, BookOpen, ArrowUpRight } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section id="welcome" className="py-24 md:py-32 bg-[#F6F6F6] border-t border-gray-200">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 flex flex-col pt-12">
            <div className="flex items-center gap-4 mb-12">
               <span className="w-12 h-[1px] bg-black"></span>
               <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-black">
                 Chapter 03
               </p>
            </div>
            
            <h2 className="font-serif italic text-black text-6xl md:text-8xl leading-[0.85] tracking-tight mb-12">
              Find Your <br/>
              <span className="text-[#3667B1]">People.</span>
            </h2>
            
            <div className="space-y-12">
              <p className="font-serif text-2xl md:text-3xl text-gray-800 leading-snug">
                "As iron sharpens iron, so one person sharpens another."
              </p>
              
              <div className="font-sans text-gray-600 text-base leading-relaxed space-y-6 max-w-md">
                <p>
                  College is better together. We are a community of students and young adults navigating life, faith, and purpose.
                </p>
                <p>
                  We believe in authentic connection over superficial acquaintance. In a city of millions, you don't have to walk alone.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-8 mt-4">
                 <div>
                   <h4 className="font-serif text-2xl mb-2 flex items-center gap-2">
                     <Users className="w-5 h-5 text-[#3667B1]" /> Community
                   </h4>
                   <p className="font-sans text-xs text-gray-500 uppercase tracking-wide">Authentic & Real</p>
                 </div>
                 <div>
                   <h4 className="font-serif text-2xl mb-2 flex items-center gap-2">
                     <BookOpen className="w-5 h-5 text-[#3667B1]" /> Scripture
                   </h4>
                   <p className="font-sans text-xs text-gray-500 uppercase tracking-wide">Deep & Transformative</p>
                 </div>
              </div>
            </div>

            <div className="mt-12">
               <a 
                href="#contact"
                className="inline-flex items-center gap-3 font-sans font-bold text-sm uppercase tracking-widest text-black hover:text-[#3667B1] transition-colors border-b border-black hover:border-[#3667B1] pb-1"
              >
                Get Connected <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Image "Insert" */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
             <div className="relative z-10 p-4 bg-white shadow-2xl rotate-1 max-w-md mx-auto lg:ml-auto">
               <div className="relative aspect-[3/4] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                    alt="Community Group" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="pt-6 pb-2 text-center">
                 <p className="font-serif italic text-xl text-black">The Fall Retreat</p>
                 <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Big Bear, CA</p>
               </div>
             </div>
             
             {/* Decorative Elements behind */}
             <div className="absolute top-10 -right-10 w-full h-full border border-black/5 -z-10 hidden lg:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
