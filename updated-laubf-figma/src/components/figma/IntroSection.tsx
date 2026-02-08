import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onNavigate: (page: any) => void;
}

export default function IntroSection({ onNavigate }: IntroSectionProps) {
  return (
    <section className="bg-[#0d0d0d] text-white py-20 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-10"
        >
            <h2 className="text-3xl md:text-5xl lg:text-[40px] leading-tight font-['Helvetica_Neue',sans-serif] font-medium tracking-tight mb-6">
                A Christian Ministry for <span className="font-['DM_Serif_Text',serif] italic">College Students</span>
            </h2>
            
            <p className="font-['Helvetica_Neue',sans-serif] text-lg md:text-xl lg:text-[20px] leading-relaxed text-gray-300 max-w-4xl mx-auto">
                University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.
            </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center gap-5"
        >
            <button 
                onClick={() => onNavigate('im-new')}
                className="bg-white text-black px-8 py-4 rounded-full font-['Helvetica_Neue',sans-serif] font-medium text-lg flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
            >
                I'm New <ArrowRight className="w-5 h-5" />
            </button>
            <button 
                onClick={() => onNavigate('about')}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-['Helvetica_Neue',sans-serif] font-medium text-lg hover:bg-white/10 transition-colors"
            >
                About Us
            </button>
        </motion.div>

      </div>
    </section>
  );
}
