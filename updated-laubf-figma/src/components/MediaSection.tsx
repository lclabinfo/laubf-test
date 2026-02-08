import { Play, ArrowUpRight } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="sermons" className="py-24 md:py-32 bg-black text-white border-t border-white/20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-serif italic text-2xl text-gray-500">05</span>
              <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-white/50">
                Sermon Archive
              </p>
            </div>
            <h2 className="font-serif italic text-white text-6xl md:text-8xl lg:text-9xl leading-[0.8]">
              The Word
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/50">Latest Message</span>
            <span className="font-serif text-xl italic text-white">Sunday, Dec 10</span>
          </div>
        </div>

        {/* Main Sermon Display - Minimalist / Cinematic */}
        <div className="relative group w-full cursor-pointer">
          {/* Video Container */}
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#111] border border-white/10">
             <img 
                src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop" 
                alt="Sermon Background" 
                className="w-full h-full object-cover opacity-40 grayscale group-hover:opacity-30 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Play className="w-8 h-8 fill-current translate-x-1" />
                 </div>
              </div>
          </div>

          {/* Sermon Info - Below Video (Editorial Style) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
             <div className="md:col-span-8">
                <h3 className="font-serif text-5xl md:text-7xl text-white leading-[0.9] mb-4 group-hover:underline decoration-1 underline-offset-8 decoration-white/30">
                  Walking in Faith: The Journey Begins
                </h3>
             </div>
             <div className="md:col-span-4 flex flex-col md:items-end justify-between h-full">
                <div className="flex flex-col md:items-end">
                   <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#3667B1] mb-2">Series</span>
                   <span className="font-serif italic text-2xl text-gray-400">The Book of Acts</span>
                </div>
                
                <div className="mt-8 md:mt-0 flex flex-col md:items-end">
                   <span className="font-sans font-bold text-xs uppercase tracking-widest text-white/50 mb-2">Speaker</span>
                   <span className="font-sans text-sm text-white border-b border-white/20 pb-1">Pastor John Kim</span>
                </div>
             </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-24 text-center">
           <a 
            href="#all-sermons"
            className="inline-flex items-center gap-3 font-sans font-bold text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            Browse All Sermons <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
