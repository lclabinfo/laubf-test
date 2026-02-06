import { ArrowRight, Church, Users, GraduationCap, BookOpen } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Sunday Worship',
    subtitle: 'Weekly Gathering',
    description: 'Experience meaningful worship and Bible-centered messages.',
    link: '#contact',
    color: 'bg-black text-white',
    hover: 'hover:bg-gray-900'
  },
  {
    id: 2,
    title: 'Small Groups',
    subtitle: 'Life Together',
    description: 'Connect with others for deeper study and fellowship.',
    link: '#groups',
    color: 'bg-[#F2F2F2] text-black',
    hover: 'hover:bg-[#E5E5E5]'
  },
  {
    id: 3,
    title: 'Campus Ministry',
    subtitle: 'On Campus',
    description: 'Active fellowships at UCLA, USC, CSULB, and more.',
    link: '#campuses',
    color: 'bg-[#3667B1] text-white',
    hover: 'hover:bg-[#2d5491]'
  },
  {
    id: 4,
    title: 'Bible Study',
    subtitle: '1-on-1 Discipleship',
    description: 'Dive deep into scripture with a personal mentor.',
    link: '#bible-study',
    color: 'bg-[#F2F2F2] text-black',
    hover: 'hover:bg-[#E5E5E5]'
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-black text-white border-t border-white/10">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header styled like a Bible Verse/Chapter Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="h-16 w-[1px] bg-[#3667B1]"></span>
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#3667B1]">Chapter 04</span>
          </div>
          <h2 className="font-serif italic text-white text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight">
            Ministries
          </h2>
          <p className="mt-8 text-xl font-serif text-gray-400 italic max-w-lg">
            "For where two or three are gathered in my name, there am I among them."
          </p>
        </div>

        {/* Bible-style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
          {activities.map((activity, index) => (
            <a 
              key={activity.id}
              href={activity.link}
              className="group relative border-r border-b border-white/10 p-12 md:p-16 flex flex-col h-full min-h-[400px] hover:bg-[#F2F2F2] hover:text-black transition-colors duration-500 ease-out"
            >
              {/* Verse Number Style */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-serif text-2xl md:text-3xl text-gray-700 group-hover:text-black/50 transition-colors">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>

              <div className="mt-auto">
                <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-[0.9] group-hover:translate-x-2 transition-transform duration-500">
                  <span className="block text-xs font-sans font-bold uppercase tracking-widest text-[#3667B1] mb-3 group-hover:text-[#3667B1]">
                    {activity.subtitle}
                  </span>
                  {activity.title}
                </h3>
                <p className="font-sans text-sm md:text-base font-medium text-gray-500 group-hover:text-black/70 max-w-xs leading-relaxed transition-colors duration-300">
                  {activity.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
