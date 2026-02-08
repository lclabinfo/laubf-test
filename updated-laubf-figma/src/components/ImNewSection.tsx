import { ArrowRight, MessageCircle } from 'lucide-react';

export default function ImNewSection() {
  return (
    <section id="im-new" className="py-32 bg-[#3667B1] relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")' }}></div>
      
      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Invitation Card Style */}
        <div className="bg-[#3667B1] text-center border-y border-white/30 py-16 md:py-24">
           <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-white/70 mb-8">
             Epilogue
           </p>
           
           <h2 className="font-serif italic text-white text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.8]">
             You Belong Here.
           </h2>
           
           <p className="font-serif text-white/80 text-2xl md:text-3xl font-light mb-16 max-w-2xl mx-auto leading-normal italic">
             "We know visiting a new place can be intimidating. We want to make it easy."
           </p>
  
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <a 
               href="#connect-form"
               className="group relative inline-flex items-center justify-center px-12 py-4 bg-white text-[#3667B1] font-sans font-bold text-xs uppercase tracking-widest hover:bg-[#f0f0f0] transition-all overflow-hidden"
             >
               <span className="relative z-10">I'm New</span>
               <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
             </a>
             
             <a 
               href="#questions"
               className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-sans font-bold text-xs uppercase tracking-widest border border-white/30 hover:bg-white/10 transition-all"
             >
               Ask a Question
               <MessageCircle className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
             </a>
           </div>
        </div>

      </div>
    </section>
  );
}
