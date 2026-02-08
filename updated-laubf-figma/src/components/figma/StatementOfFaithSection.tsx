import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Cross() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] opacity-86 relative shrink-0" data-name="cross">
      <div className="bg-[#676767] col-start-1 row-start-1 h-[91.667px] ml-[25px] mt-0 rounded-[4.167px] w-[16.667px]" />
      <div className="col-start-1 row-start-1 flex h-[17.544px] items-center justify-center ml-0 mt-[21.05px] relative w-[66.667px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#676767] h-[66.667px] rounded-[4.167px] w-[17.544px]" />
        </div>
      </div>
    </div>
  );
}

function StatementItem({ text, index, activeIndex }: { text: string, index: number, activeIndex: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isActive = index === activeIndex;

  return (
    <motion.p 
        ref={ref}
        data-index={index}
        initial={{ color: "#9e9e9e" }}
        animate={{ color: isActive ? "#0d0d0d" : "#9e9e9e" }}
        transition={{ duration: 0.3 }}
        className="font-['Helvetica_Neue',sans-serif] font-medium text-[36px] leading-[1.2] tracking-[-1.08px] w-full relative shrink-0 whitespace-pre-wrap scroll-mt-[180px]"
        style={{ scrollSnapAlign: 'start' }}
    >
        {text}
    </motion.p>
  );
}

const statements = [
    "there is one God in three Persons: God the Father, God the Son, and God the Holy Spirit.",
    "God created the heavens and the earth and all other things in the universe: that He is the Sovereign Ruler of all things; that the Sovereign God reveals Himself; we believe in his redemptive work and in his final judgment.",
    "the Bible is inspired by God; that it is the truth; that it is the final authority in faith and practice.",
    "since the fall of Adam, all people have been under the bondage and power of sin and are deserving of the judgment and wrath of God.",
    "Jesus Christ, who is God and man, through his atoning, sacrificial death on the cross for our sins and his resurrection, is the only way of salvation; he alone saves us from sin and judgment and purifies us from the contamination of the world caused by sin"
];

export default function StatementOfFaithSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const items = containerRef.current.querySelectorAll('[data-index]');
      if (items.length === 0) return;

      // The sticky text is at 180px from the top
      const stickyOffset = 180;
      
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top;
        const itemBottom = rect.bottom;
        
        // Only consider items that are visible in the viewport
        if (itemBottom > 0 && itemTop < window.innerHeight) {
          // Calculate distance from the sticky position
          const distance = Math.abs(itemTop - stickyOffset);
          
          // Find the item closest to the sticky position
          // Prefer items that are at or just below the sticky position
          if (distance < closestDistance || (distance === closestDistance && itemTop >= stickyOffset)) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white w-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center p-[60px] md:p-[120px] relative w-full max-w-[1440px] mx-auto">
            
            {/* Header */}
            <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
                <Cross />
                <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center">
                    <p className="font-['Helvetica_Neue',sans-serif] leading-[1.2] relative shrink-0 text-[#9e9e9e] text-[24px] tracking-[-0.72px]">
                        STATEMENT OF FAITH
                    </p>
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">
                        What We Believe
                    </p>
                </div>
            </div>

            {/* Content Row */}
            <div className="content-stretch flex flex-col lg:flex-row gap-[48px] items-start not-italic relative shrink-0 w-full">
                
                {/* Left Column - Sticky */}
                <div className="lg:w-[400px] shrink-0 lg:sticky lg:top-[180px]">
                    <p className="font-['Helvetica_Neue',sans-serif] font-medium leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">
                        We believe that
                    </p>
                </div>

                {/* Right Column - Scrollable List */}
                <div 
                    ref={containerRef} 
                    className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative"
                    style={{ 
                        scrollSnapType: 'y proximity',
                        scrollPaddingTop: '180px'
                    }}
                >
                    {statements.map((stmt, i) => (
                        <StatementItem key={i} text={stmt} index={i} activeIndex={activeIndex} />
                    ))}
                </div>
            </div>

        </div>
    </div>
  );
}