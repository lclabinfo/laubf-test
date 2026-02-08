import { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import imgDsc014521 from "figma:asset/8b9260ecd87064086e6838e1c3e473f61bf77201.png";
import imgDsc014522 from "figma:asset/47b3d8d7a4eae261889f59f1ae5b3b0b599631ec.png";
import imgDsc014523 from "figma:asset/b9107e08e56ccb7c4d2b40949661ca82f4e580e6.png";

// Expanded set of images for the loop
const IMAGES = [
  imgDsc014521,
  "https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNTc3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  imgDsc014522,
  "https://images.unsplash.com/photo-1741699427706-7bfb38c716d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMHRvZ2V0aGVyJTIwbGlicmFyeXxlbnwxfHx8fDE3NzAzNTc3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  imgDsc014523,
  "https://images.unsplash.com/photo-1758275557250-894dd1e8feb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFkdWx0cyUyMHBpY25pYyUyMHBhcmslMjBncm91cHxlbnwxfHx8fDE3NzAzNTc3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1628716957555-f88f182aadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGdyb3VwJTIwd29yc2hpcCUyMHNpbmdpbmd8ZW58MXx8fHwxNzcwMzU3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758270704464-f980b03b9633?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBsYXVnaGluZyUyMHRhbGtpbmclMjBjYW1wdXN8ZW58MXx8fHwxNzcwMzU3NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
];

interface WhoWeAreStripProps {
  onNavigate?: (page: any) => void;
}

export default function WhoWeAreStrip({ onNavigate }: WhoWeAreStripProps) {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // --- CONFIGURATION ---
  // Large radius for a subtle curve (mimics the "flat-ish" look of the reference)
  const RADIUS = 700; 
  // Vertical spacing in "virtual pixels" along the arc
  const ITEM_SPACING = 300; 
  // Base speed (pixels per millisecond)
  const SPEED = 0.04; 
  
  // Dimensions from design
  const CARD_WIDTH = 390;
  const CARD_HEIGHT = 222;

  const TOTAL_LENGTH = IMAGES.length * ITEM_SPACING;

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (!isHovered) {
        // Continuous scroll "upwards" (positive offset moves items up/left)
        setScrollOffset(prev => (prev + SPEED * deltaTime) % TOTAL_LENGTH);
      }
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <section className="bg-[#0d0d0d] w-full py-24 px-6 md:px-0 overflow-hidden relative border-b border-[#222]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-0 h-[500px]">
        
        {/* Left Side: Virtual Wheel Animation */}
        <div 
          className="relative w-full md:w-[600px] h-full shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {/* Center the coordinate system on the left side of the container */}
            <div className="absolute top-1/2 left-[100px] w-0 h-0">
                {IMAGES.map((src, index) => {
                    // 1. Calculate Virtual Position relative to current scroll
                    const itemBasePos = index * ITEM_SPACING;
                    
                    // Distance from the "Center" (scrollOffset)
                    // We handle wrapping to find the shortest distance in the loop
                    let dist = (itemBasePos - scrollOffset) % TOTAL_LENGTH;
                    if (dist < -TOTAL_LENGTH / 2) dist += TOTAL_LENGTH;
                    if (dist > TOTAL_LENGTH / 2) dist -= TOTAL_LENGTH;

                    // 2. Map Distance to Angle
                    // Arc length = Radius * Angle (in radians)
                    // Angle = ArcLength / Radius
                    const angleRad = dist / RADIUS;
                    const angleDeg = angleRad * (180 / Math.PI);

                    // 3. Optimization: Only render if within visible arc
                    // +/- 50 degrees covers the visible area comfortably
                    if (Math.abs(angleDeg) > 50) return null;

                    // 4. Calculate Position on Circle (Parametric)
                    // Center of circle is at (-RADIUS, 0) relative to our origin
                    // We want 0 degrees to be at (0, 0)
                    const x = -RADIUS + (RADIUS * Math.cos(angleRad));
                    const y = RADIUS * Math.sin(angleRad);
                    
                    // 5. Visual Effects based on distance/angle
                    const absAngle = Math.abs(angleDeg);
                    
                    // Opacity: Center is 1, fades out quickly towards edges
                    // Reference shows top/bottom items at ~0.6
                    const opacity = Math.max(0, 1 - (absAngle / 50)); 
                    
                    // Scale: Center is 1, edges slightly smaller (0.85)
                    const scale = 1 - (absAngle / 150);

                    // Z-Index: Closer to center = higher
                    const zIndex = 100 - Math.floor(absAngle);

                    return (
                        <div
                            key={index}
                            className="absolute rounded-[8px] overflow-hidden shadow-2xl border border-white/5 origin-center will-change-transform"
                            style={{
                                width: `${CARD_WIDTH}px`,
                                height: `${CARD_HEIGHT}px`,
                                transform: `translate3d(${x}px, ${y}px, 0) rotate(${angleDeg}deg) scale(${scale}) translate(-50%, -50%)`,
                                opacity: opacity,
                                zIndex: zIndex,
                            }}
                        >
                            <img 
                                src={src} 
                                alt="" 
                                className="w-full h-full object-cover" 
                                draggable={false}
                            />
                            {/* Overlay to darken items as they recede */}
                            <div 
                                className="absolute inset-0 bg-[#0d0d0d] pointer-events-none transition-opacity duration-300"
                                style={{ opacity: absAngle / 60 }} // Darkens as it rotates away
                            />
                        </div>
                    );
                })}
            </div>
            
            {/* Gradient Masks for seamless fade at top/bottom edges */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-50 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-50 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1 max-w-[500px] text-left relative z-20 pl-8 md:pl-0">
           <p className="text-[#9e9e9e] text-[20px] font-medium tracking-[-0.4px] mb-4 font-['Helvetica_Neue',_sans-serif]">
              WHO WE ARE
           </p>
           
           <h2 className="text-[#fafafa] text-[36px] md:text-[40px] leading-[1.2] tracking-[-1.08px] font-['Helvetica_Neue',_sans-serif] font-medium mb-6">
              Christian Ministry for <span className="font-['DM_Serif_Text',_serif] italic font-normal">College Students</span>
           </h2>
           
           <p className="text-[#e8e8e8] text-[18px] md:text-[20px] leading-[1.6] tracking-[-0.4px] mb-10 font-['Helvetica_Neue',_sans-serif]">
              University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.
           </p>
           
           <button 
             onClick={() => onNavigate ? onNavigate('about') : window.location.href = '/about'}
             className="px-[33px] py-[21px] rounded-full border border-[#fafafa] text-[#fafafa] text-[18px] font-medium tracking-[-0.54px] hover:bg-white hover:text-black transition-all duration-300"
           >
              More about us
           </button>
        </div>

      </div>
    </section>
  );
}
