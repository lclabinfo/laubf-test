import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import svgPaths from "../../imports/svg-vlibl4tule";

interface ImNewSectionProps {
  onNavigate: (page: any) => void;
}

export default function ImNewSection({ onNavigate }: ImNewSectionProps) {
  return (
    <section className="bg-[#061b4f] text-white py-32 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute -top-[120px] left-[60%] w-[600px] h-[600px] border-[60px] border-white/20 rounded-full opacity-20" />
             <div className="absolute top-[50%] -left-[100px] w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <div className="inline-block border border-white/20 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md mb-8">
                     <span className="text-xs font-bold uppercase tracking-[1.2px]">First Time Here?</span>
                </div>
                
                <h2 className="font-['Tinos',serif] italic text-6xl md:text-[96px] leading-none mb-8">
                    You Belong Here.
                </h2>
                
                <p className="font-['Inter',sans-serif] font-light text-xl md:text-[20px] text-white/90 max-w-2xl mx-auto leading-relaxed">
                    We know visiting a new place can be intimidating. We want to make it easy. Connect with us and let's start the conversation.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6"
            >
                <button 
                    onClick={() => onNavigate('im-new')}
                    className="bg-white text-[#3667B1] px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg min-w-[180px]"
                >
                    I'm New 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4.16667 10H15.8333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 4.16667L15.8333 10L10 15.8333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                
                <button 
                    onClick={() => {
                        window.location.href = "mailto:info@laubf.org";
                    }}
                    className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-colors min-w-[220px]"
                >
                    Ask a Question
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d={svgPaths.p2afb5370} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </motion.div>

        </div>
    </section>
  );
}
