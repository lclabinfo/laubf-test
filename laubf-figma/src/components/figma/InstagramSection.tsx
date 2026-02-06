import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import imgInstagramPost from "figma:asset/22285c53ee1931b3954c2c49407f85d0491f8dc2.png";
import imgInstagramPost1 from "figma:asset/72b4607bc01601c0a5eb95fcd6164fe9ecd13599.png";
import imgInstagramPost2 from "figma:asset/57d330b2f64eb8e9028f942f6288f0efd3a929a2.png";
import imgInstagramPost3 from "figma:asset/5d9e120b27b82e08657cba9630da04a43fea6326.png";
import imgContainer2 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";

const posts = [imgInstagramPost, imgInstagramPost1, imgInstagramPost2, imgInstagramPost3];

const socials = [
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/la.ubf/" },
  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/losangelesubf/" },
  { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/channel/UC1SRAeGrnVlvoEEMZ-htVlA" },
  { 
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ), 
    href: "https://www.tiktok.com/@la.ubf" 
  },
];

export default function InstagramSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={imgContainer2} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h2 className="text-3xl md:text-[48px] font-medium leading-none tracking-tight text-black mb-1">
                        What we’re up to
                    </h2>
                    <a href="https://instagram.com/la.ubf" target="_blank" rel="noopener noreferrer" className="text-xl text-[#313131] hover:text-[#3667B1] transition-colors">
                        @la.ubf
                    </a>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
                {socials.map((social, index) => (
                    <a 
                        key={index}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all hover:scale-110"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {posts.map((post, index) => (
                <motion.a 
                    key={index}
                    href="https://instagram.com/la.ubf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-2xl overflow-hidden relative group"
                >
                    <img src={post} alt="Instagram Post" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Instagram className="text-white w-8 h-8" />
                    </div>
                </motion.a>
            ))}
        </div>

      </div>
    </section>
  );
}
