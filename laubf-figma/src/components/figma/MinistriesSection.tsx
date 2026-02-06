import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import imgWhatwedoCard from "figma:asset/445b913c155a1ce01ebd61135e1021d16ff4ab75.png";
import imgWhatwedoCard1 from "figma:asset/6331a7002928e5827fa984b7239563e24081fe6d.png";
import imgWhatwedoCard2 from "figma:asset/f3a9203ff5eb53c5cca22ed3f2cc45090800f3a8.png";
import imgHeroV0 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";
import svgPaths from "../../imports/svg-vlibl4tule";

interface MinistriesSectionProps {
  onNavigate: (page: any) => void;
}

const steps = [
  {
    title: "Sunday Worship",
    desc: "Experience meaningful worship and Bible-centered messages.",
    img: imgWhatwedoCard,
    link: "contact" // Anchor link usually
  },
  {
    title: "Personal Bible Studies",
    desc: "Study the Bible and grow deeper in God’s Word.",
    img: imgWhatwedoCard1,
    link: "studies"
  },
  {
    title: "Fellowship",
    desc: "Build meaningful friendships and walk life together in faith.",
    img: imgWhatwedoCard2,
    link: "groups"
  },
  {
    title: "College Campus Ministries",
    desc: "Connect with a Christ-centered community right on your campus.",
    img: imgHeroV0,
    link: "campuses"
  }
];

export default function MinistriesSection({ onNavigate }: MinistriesSectionProps) {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left Text */}
        <div className="lg:col-span-1 flex flex-col justify-start pt-8">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="font-['Helvetica_Neue',sans-serif] text-5xl md:text-[56px] leading-[1.0] tracking-tighter text-black mb-6"
            >
                Your<br/>
                Next Steps<br/>
                at LA UBF
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-[20px] text-[#313131] leading-relaxed max-w-sm"
            >
                Explore different ways to connect, grow in faith, and be part of our community.
            </motion.p>
        </div>

        {/* Right Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                    className="group relative h-[420px] rounded-[24px] overflow-hidden cursor-pointer bg-black"
                    onClick={() => {
                        if (step.link === 'contact') {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                            onNavigate(step.link);
                        }
                    }}
                >
                    {/* Image */}
                    <img 
                        src={step.img} 
                        alt={step.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-105 opacity-90" 
                    />
                    
                    {/* Gradient Overlay - Optimized for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h3 className="text-white text-[32px] leading-[1.1] font-medium mb-3 tracking-tighter font-['Helvetica_Neue',sans-serif]">
                            {step.title}
                        </h3>
                        <p className="text-white/80 text-[17px] leading-relaxed mb-1 pr-12 font-['Inter',sans-serif]">
                            {step.desc}
                        </p>
                        
                        {/* Arrow - Bottom Right */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500">
                             <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
