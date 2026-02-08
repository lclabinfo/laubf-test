import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import imgCampus from "figma:asset/1c4f1434de377a38dfc47cf3b1b2f56275faccfc.png";

const campuses = [
  "LBCC",
  "CSULB",
  "CSUF",
  "UCLA",
  "USC",
  "CSUDH",
  "CCC",
  "MT. SAC",
  "GOLDEN STATE",
  "CYPRESS",
  "CAL POLY POMONA"
];

function CampusItem({ name }: { name: string }) {
    return (
        <motion.div 
            className="group flex items-center justify-end cursor-pointer h-[48px]"
            initial="initial"
            whileHover="hover"
        >
            <p 
                className="font-['Helvetica_Neue',sans-serif] font-medium text-[48px] leading-none tracking-[-1.44px] transition-colors duration-300 text-[#9e9e9e] group-hover:text-[#0d0d0d]"
            >
                {name}
            </p>
            <motion.div
                variants={{
                    initial: { width: 0, opacity: 0 },
                    hover: { width: 60, opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className="overflow-hidden flex items-center justify-center shrink-0"
            >
                <ArrowUpRight className="w-[48px] h-[48px] text-[#0d0d0d]" strokeWidth={3} />
            </motion.div>
        </motion.div>
    );
}

// Custom easing function for "Fast Start, Slow End" motion
// Equivalent to "circOut"
function easeCircOut(t: number) {
  return Math.sqrt(1 - Math.pow(t - 1, 2));
}

export default function CampusMinistriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start slightly earlier (when top is 25% down the viewport) to address "too delayed"
    offset: ["start 0.25", "end start"]
  });

  // Add spring physics to create a "following" effect (0.5s feel)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001
  });

  // Parallax with "Fast Start, Slow End" easing mapped to the smoothed progress
  const y = useTransform(smoothProgress, [0, 1], [0, 235], {
    ease: easeCircOut
  });

  return (
    <div className="bg-[#fafafa]">
        {/* Parallax Section */}
        {/* Height kept at ~900px to maintain minimal margin feel */}
        <section ref={containerRef} className="h-[900px] relative pt-[120px] pb-0 mb-0">
            <div className="container mx-auto px-[120px]">
                <div className="flex gap-[48px] justify-center items-start">
                    
                    {/* Left Column: Fixed (Sticky) List */}
                    <div className="w-[540px] shrink-0 sticky top-[120px]">
                        <div className="flex flex-col items-end gap-[16px]">
                            {campuses.map((campus) => (
                                <CampusItem key={campus} name={campus} />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Parallax Content (Sticky + Transform) */}
                    <div className="w-full max-w-[480px] sticky top-[120px]">
                        <motion.div style={{ y }} className="flex flex-col gap-[24px]">
                            <h2 className="font-['Helvetica_Neue',sans-serif] font-medium text-[48px] leading-none tracking-[-1.44px] text-[#0d0d0d]">
                                Our Campus Ministries
                            </h2>
                            <div className="h-[381px] w-[480px] relative rounded-[12px] overflow-hidden">
                                <img 
                                    src={imgCampus} 
                                    alt="Campus Fellowship" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>

        {/* Don't See Your Campus Section */}
        <section className="flex flex-col items-center justify-center pt-[32px] pb-[120px] gap-[20px]">
            <h3 className="font-['Helvetica_Neue',sans-serif] font-medium text-[36px] tracking-[-1.08px] text-black">
                Don’t see your campus?
            </h3>
            <button className="bg-[#0d0d0d] text-[#fafafa] px-[32px] py-[20px] rounded-[100px] font-['Helvetica_Neue',sans-serif] font-medium text-[18px] tracking-[-0.54px] hover:bg-gray-800 transition-colors">
                Let us know your interest
            </button>
        </section>
    </div>
  );
}