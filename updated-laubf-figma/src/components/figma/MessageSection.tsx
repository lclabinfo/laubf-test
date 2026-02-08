import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import imgContainer from "figma:asset/dc42ca839f5b61934e3b9fdeaacdc63a86b9aa5f.png";
import imgContainer1 from "figma:asset/f4e689eac8f3ae1f8982b8689f9ecc9ecd263efa.png";
import svgPaths from "../../imports/svg-vlibl4tule";

interface MessageSectionProps {
  onNavigate: (page: any) => void;
}

export default function MessageSection({ onNavigate }: MessageSectionProps) {
  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-24">
        
        {/* THIS WEEK'S MESSAGE */}
        <div>
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl md:text-[56px] font-['Helvetica_Neue',sans-serif] font-medium leading-none tracking-tight">
                    This Week’s <span className="font-['DM_Serif_Text',serif] italic">Message</span>
                </h2>
                 <button 
                    onClick={() => onNavigate('sermons')}
                    className="hidden md:flex items-center gap-2 border border-white/20 px-5 py-3 rounded-full uppercase text-sm font-['Helvetica_Neue',sans-serif] font-medium tracking-wide hover:bg-white hover:text-black transition-all"
                >
                    View All Messages <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[500px] md:h-[600px] rounded-[16px] overflow-hidden group cursor-pointer"
                onClick={() => onNavigate('sermon-detail')}
            >
                {/* Background Image */}
                <img src={imgContainer} alt="Sermon Background" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40" />

                {/* Content Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    {/* Play Button */}
                    <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d={svgPaths.p143c4b00} fill="currentColor" stroke="none" />
                        </svg>
                    </div>

                    {/* Tag */}
                    <div className="mb-4 px-4 py-2 border border-white/30 bg-black/40 backdrop-blur-md">
                        <span className="text-sm font-['Helvetica_Neue',sans-serif] font-medium tracking-[1.2px] uppercase text-white/90">SUNDAY WORSHIP • Dec 29</span>
                    </div>

                    <h3 className="font-['DM_Serif_Text',serif] italic text-5xl md:text-[64px] mb-2">ETERNAL LIFE</h3>
                    <p className="font-['Helvetica_Neue',sans-serif] font-light text-xl tracking-wide uppercase text-gray-300">Pastor WILLIAM LARSEN</p>
                </div>
            </motion.div>
        </div>

        {/* FEATURED VIDEOS */}
        <div>
             <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-[32px] font-['Helvetica_Neue',sans-serif] font-medium tracking-tight text-[#e7e7e7]">Featured Videos</h2>
                 <button 
                    onClick={() => onNavigate('videos')}
                    className="flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full uppercase text-xs font-['Helvetica_Neue',sans-serif] font-medium tracking-wide hover:bg-white hover:text-black transition-all"
                >
                    View All Videos <ArrowUpRight className="w-3 h-3" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="aspect-video relative rounded-2xl overflow-hidden cursor-pointer group"
                        onClick={() => onNavigate('videos')}
                    >
                         <img src={imgContainer1} alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                         
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur border border-white/40 flex items-center justify-center">
                                 <Play className="w-5 h-5 fill-white text-white" />
                             </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
