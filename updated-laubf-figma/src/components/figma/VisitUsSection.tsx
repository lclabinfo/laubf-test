import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function VisitUsSection() {
  return (
    <section className="bg-white pb-24 px-6 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="bg-[#f8f8f8] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-sm border border-gray-100">
             
             {/* Left Content */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-10"
             >
                <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 w-fit">
                    Visit Us
                </div>
                
                <h2 className="text-4xl md:text-[56px] font-['Helvetica_Neue',sans-serif] font-medium leading-[1.1] tracking-tighter mb-8 text-black">
                    Church Address
                </h2>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-black">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                             <p className="text-xl font-['Inter',sans-serif] text-black font-medium leading-relaxed">
                                11625 Paramount Blvd.,<br/>
                                Downey, CA 90241<br/>
                                United States
                             </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                         <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'tel:5623966350'}>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-black group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium text-gray-600 group-hover:text-[#3667B1] transition-colors">562 396 6350</span>
                        </div>
                        
                        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = 'mailto:laubf.downey@gmail.com'}>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-black group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium text-gray-600 group-hover:text-[#3667B1] transition-colors">laubf.downey@gmail.com</span>
                        </div>
                    </div>
                </div>
             </motion.div>

             {/* Right Content / Map */}
             <div className="flex-1 min-h-[400px] md:min-h-auto relative bg-gray-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.6366578643883!2d-118.15655542426998!3d33.91834922335492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cd27117e3717%3A0xc68224522432a59f!2s11625%20Paramount%20Blvd%2C%20Downey%2C%20CA%2090241!5e0!3m2!1sen!2sus!4v1709600000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    title="LA UBF Location"
                ></iframe>
             </div>
        </div>

      </div>
    </section>
  );
}
