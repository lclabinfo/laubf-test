import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[1080px] max-h-screen flex items-center justify-center overflow-hidden bg-black font-['Helvetica_Neue',sans-serif]">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute w-full h-full object-cover"
        >
          <source src="/_videos/v1/16fc416b4c33efb2ba4de4f2de5e03ee06f85848" type="video/mp4" />
        </video>
        <div 
            className="absolute inset-0" 
            style={{ 
                backgroundImage: "linear-gradient(195.58deg, rgba(13, 13, 13, 0) 49.77%, rgba(13, 13, 13, 0.5) 64.03%, #0D0D0D 85.74%)" 
            }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col items-start pt-32">
        
        <div className="flex flex-col items-start text-left mb-12">
            <div className="relative">
                <p className="text-[80px] leading-[0.8] tracking-[-3.2px] font-medium text-white mb-0 drop-shadow-lg">
                    Welcome to
                </p>
                <p className="text-[160px] leading-[0.8] font-serif italic text-white mb-6 drop-shadow-lg">
                    LA UBF
                </p>
            </div>
            
            <div className="text-[32px] leading-tight tracking-[-1.28px] text-[#ededed] font-medium max-w-xl space-y-1">
                <p>
                    <span className="text-[#bebebe]">Where </span>
                    people find their community.
                </p>
                <p>
                    <span className="text-[#bebebe]">Where </span>
                    disciples are raised.
                </p>
                <p>
                    <span className="text-[#bebebe]">Where </span>
                    the Word of God is lived.
                </p>
            </div>
        </div>

        <div className="flex flex-row gap-4">
          <a 
            href="#im-new"
            className="bg-white text-black hover:bg-gray-100 transition-colors px-8 py-4 rounded-full text-[20px] font-medium tracking-[-0.31px]"
          >
            I'm New
          </a>
          
          <a 
            href="#events"
            className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors px-8 py-4 rounded-full text-[20px] font-medium tracking-[-0.31px]"
          >
            Upcoming Events
          </a>
        </div>
      </div>
    </section>
  );
}
