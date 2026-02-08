import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ExternalLink, ChevronRight } from 'lucide-react';
import imgHeroV0 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";

interface FooterProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const siteLinks = [
    { label: 'About Us', page: 'about' },
    { label: "I'm New", page: 'im-new' },
    { label: 'Sermons', page: 'sermons' },
    { label: 'Ministries', page: 'ministries' },
    { label: 'Events', page: 'events' },
    { label: 'Giving', page: 'give' },
  ];

  const resourceLinks = [
    { name: 'Daily Bread', page: 'daily-bread' }, // Internal
    { name: 'UBF HQ', href: 'https://ubf.org' },
    { name: 'Chicago UBF', href: 'https://chicagoubf.org' },
    { name: 'Korea UBF', href: '#' },
  ];

  return (
    <footer className="relative bg-[#0d0d0d] text-white pt-20 pb-10 overflow-hidden font-sans">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <img src={imgHeroV0} alt="Footer Background" className="w-full h-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
             <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-12">
                
                {/* 1. Brand & Identity */}
                <div className="md:col-span-1">
                    <h2 className="flex flex-col items-start leading-none text-white mb-6">
                        <span className="font-['DM_Serif_Text',serif] italic text-4xl tracking-tighter text-[#3667B1]">
                            LA UBF
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        University Bible Fellowship is an international evangelical church dedicated to campus evangelism and discipleship.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.name}
                                href={social.href} 
                                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3667B1] hover:text-white transition-all duration-300 text-gray-400"
                                aria-label={social.name}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Site Navigation */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                        Explore
                    </h3>
                    <ul className="space-y-3">
                        {siteLinks.map((link) => (
                            <li key={link.label}>
                                <button 
                                    onClick={() => onNavigate(link.page)}
                                    className="text-gray-300 text-sm hover:text-white transition-colors hover:translate-x-1 duration-200 inline-flex items-center"
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Resources */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                        Resources
                    </h3>
                    <ul className="space-y-3">
                        {resourceLinks.map((link: any) => (
                            <li key={link.name}>
                                {link.page ? (
                                    <button 
                                        onClick={() => onNavigate(link.page)}
                                        className="text-gray-300 text-sm hover:text-white transition-colors hover:translate-x-1 duration-200"
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <a 
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 text-sm hover:text-white transition-colors hover:translate-x-1 duration-200 flex items-center gap-2 group"
                                    >
                                        {link.name}
                                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Contact Info */}
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                        Visit Us
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-gray-500 mt-1 shrink-0" />
                            <span className="text-gray-300 text-sm leading-relaxed">
                                11625 Paramount Blvd,<br/>Downey, CA 90241
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-gray-500 shrink-0" />
                            <span className="text-gray-300 text-sm">562 396 6350</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-gray-500 shrink-0" />
                            <a href="mailto:laubf.downey@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                                laubf.downey@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
             </div>

             {/* Bottom Bar */}
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                 <p>&copy; {currentYear} Los Angeles University Bible Fellowship.</p>
                 <div className="flex gap-6">
                    <button onClick={() => onNavigate('member-hub')} className="hover:text-gray-400 transition-colors">Member Hub</button>
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                 </div>
             </div>
        </div>
    </footer>
  );
}
