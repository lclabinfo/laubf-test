import React from 'react';

export default function LandingContent() {
  return (
    <div className="bg-black text-white py-24 md:py-32 px-6 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
        
        {/* Left: Chapter Marker */}
        <div className="flex items-center gap-4 md:sticky md:top-32 self-start">
           <span className="font-serif italic text-2xl text-gray-500">01</span>
           <span className="h-[1px] w-12 bg-white/30"></span>
           <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#3667B1]">
             Who We Are
           </p>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.9] mb-12">
            A Christian Ministry for <span className="italic text-gray-400">College Students</span>
          </h2>

          <div className="font-serif text-2xl leading-relaxed text-gray-300 max-w-3xl border-l border-white/20 pl-8 space-y-8">
             <p>
               "Go and make disciples of all nations..."
             </p>
             <p className="font-sans text-lg text-gray-400 leading-relaxed font-light">
               University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
