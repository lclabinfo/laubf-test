import React from 'react';
import { ArrowRight } from 'lucide-react';
import imgHeroV0 from "figma:asset/37767e86d11cc6e451bdd9045feb0da92cc9165f.png";

export default function LandingHero({ onNavigate }: { onNavigate: (page: any) => void }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
            src={imgHeroV0} 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 sm:pt-0">
        <div className="flex flex-col items-center gap-4 sm:gap-8 max-w-4xl mx-auto text-white">
            <div className="flex flex-col items-center leading-none">
                <span className="font-sans text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-2 sm:mb-4">You're</span>
                <span className="font-serif italic text-7xl sm:text-9xl lg:text-[10rem] leading-[0.8]">Welcome</span>
                <span className="font-sans text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mt-2 sm:mt-4">here.</span>
            </div>
            
            <p className="font-sans text-lg sm:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed opacity-90">
                We’re a campus-based Christian community helping students study the Bible, grow in faith, and find purpose during college.
            </p>

            <button 
                onClick={() => onNavigate('im-new')}
                className="mt-12 group bg-white text-black px-10 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#3667B1] hover:text-white transition-all shadow-2xl"
            >
                Start Here
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
}
