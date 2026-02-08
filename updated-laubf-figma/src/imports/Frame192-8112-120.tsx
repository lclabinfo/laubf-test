function Cross() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] opacity-86 relative shrink-0" data-name="cross">
      <div className="bg-[#676767] col-1 h-[91.667px] ml-[25px] mt-0 rounded-[4.167px] row-1 w-[16.667px]" />
      <div className="col-1 flex h-[17.544px] items-center justify-center ml-0 mt-[21.05px] relative row-1 w-[66.667px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#676767] h-[66.667px] rounded-[4.167px] w-[17.544px]" />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#9e9e9e] text-[24px] tracking-[-0.72px]">STATEMENT OF FAITH</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">What We Believe</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <Cross />
      <Frame1 />
    </div>
  );
}

function Statements() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start leading-[1.2] min-h-px min-w-px relative text-[36px] tracking-[-1.08px] whitespace-pre-wrap" data-name="statements">
      <p className="relative shrink-0 text-[#0d0d0d] w-full">there is one God in three Persons: God the Father, God the Son, and God the Holy Spirit.</p>
      <p className="relative shrink-0 text-[#9e9e9e] w-full">God created the heavens and the earth and all other things in the universe: that He is the Sovereign Ruler of all things; that the Sovereign God reveals Himself; we believe in his redemptive work and in his final judgment.</p>
      <p className="relative shrink-0 text-[#9e9e9e] w-full">the Bible is inspired by God; that it is the truth; that it is the final authority in faith and practice.</p>
      <p className="relative shrink-0 text-[#9e9e9e] w-full">since the fall of Adam, all people have been under the bondage and power of sin and are deserving of the judgment and wrath of God.</p>
      <p className="relative shrink-0 text-[#9e9e9e] w-full">Jesus Christ, who is God and man, through his atoning, sacrificial death on the cross for our sins and his resurrection, is the only way of salvation; he alone saves us from sin and judgment and purifies us from the contamination of the world caused by sin</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex font-['Helvetica_Neue:Medium',sans-serif] gap-[48px] items-start not-italic relative shrink-0 w-full" data-name="content">
      <p className="leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">We believe that</p>
      <Statements />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center p-[120px] relative size-full">
      <Frame />
      <Content />
    </div>
  );
}