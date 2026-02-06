import React from 'react';
import { motion } from 'motion/react';
import Navbar from '../Navbar';
import imgHeroV0 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";
import svgPaths from "../../imports/svg-vlibl4tule";

interface HeroVProps {
  onNavigate: (page: any) => void;
}

export default function HeroV({ onNavigate }: HeroVProps) {
  return (
    <div className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src={imgHeroV0} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>


      {/* Hero Content */}
      <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col items-center pb-12 md:pb-20 px-4">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
         >
            <h1 className="flex flex-col items-center leading-none text-white">
                <span className="font-['Helvetica_Neue',sans-serif] font-medium text-[40px] md:text-[80px] lg:text-[160px] tracking-tighter">
                    Welcome to
                </span>
                <span className="font-['DM_Serif_Text',serif] italic text-[40px] md:text-[80px] lg:text-[160px] tracking-tighter mt-[-10px] md:mt-[-30px]">
                    LA UBF
                </span>
            </h1>
         </motion.div>
      </div>
    </div>
  );
}
