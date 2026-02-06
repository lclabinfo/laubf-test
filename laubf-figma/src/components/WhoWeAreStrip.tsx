import { ArrowDown } from 'lucide-react';

export default function WhoWeAreStrip() {
  return (
    <section className="bg-[#3667B1] py-20 relative overflow-hidden">
      {/* Texture/Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="w-[90%] max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
              More than just a service.<br/>
              <span className="text-white/60">We're a family on mission.</span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed font-medium">
              LA UBF is where faith meets real life. We are dedicated to raising disciples, diving deep into Scripture, and doing life together.
            </p>
          </div>
          
          <div className="shrink-0">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/30 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path
                    id="curve"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="text-[11px] font-bold uppercase tracking-widest fill-white">
                    <textPath href="#curve">
                      Est. 1990 • Campus Ministry • Bible Study •
                    </textPath>
                  </text>
                </svg>
                <ArrowDown className="absolute inset-0 m-auto text-white w-8 h-8 animate-none" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
