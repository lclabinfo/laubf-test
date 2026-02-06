import svgPaths from "./svg-74urfz6zpn";
import imgWhatwedoCard from "figma:asset/445b913c155a1ce01ebd61135e1021d16ff4ab75.png";
import imgWhatwedoCard1 from "figma:asset/6331a7002928e5827fa984b7239563e24081fe6d.png";
import imgWhatwedoCard2 from "figma:asset/f3a9203ff5eb53c5cca22ed3f2cc45090800f3a8.png";
import imgWhatwedoCard3 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";
import imgScreenshot20260129At23349Pm1 from "figma:asset/1c4f1434de377a38dfc47cf3b1b2f56275faccfc.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-[280px] whitespace-pre-wrap" data-name="header">
      <div className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#0d0d0d] text-[0px] text-[48px] tracking-[-1.44px] w-full">
        <p className="mb-0">Your</p>
        <p className="font-['DM_Serif_Display:Italic',sans-serif] italic mb-0">{`Next Steps `}</p>
        <p>at LA UBF</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#313131] text-[24px] tracking-[-0.72px] w-full">Explore different ways to connect, grow in faith, and be part of our community.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Sunday Worship</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Experience meaningful worship and Bible-centered messages.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b10900} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p328d3b40} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame />
      <Container1 />
    </div>
  );
}

function WhatwedoCard() {
  return (
    <div className="col-[1] relative rounded-[12px] row-[1] self-stretch shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgWhatwedoCard} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[32px] py-[28px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Personal Bible Studies</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Study the Bible and grow deeper in God’s Word.</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b10900} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p328d3b40} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame3 />
      <Container2 />
    </div>
  );
}

function WhatwedoCard1() {
  return (
    <div className="col-[1] relative rounded-[12px] row-[2] self-stretch shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgWhatwedoCard1} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[32px] py-[28px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Fellowship</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Build meaningful friendships and walk life together in faith.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b10900} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p328d3b40} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame5 />
      <Container3 />
    </div>
  );
}

function WhatwedoCard2() {
  return (
    <div className="col-[2] relative rounded-[12px] row-[2] self-stretch shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgWhatwedoCard2} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[32px] py-[28px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">College Campus Ministries</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Connect with a Christ-centered community right on your campus.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b10900} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          <path d={svgPaths.p328d3b40} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame7 />
      <Container4 />
    </div>
  );
}

function WhatwedoCard3() {
  return (
    <div className="col-[2] relative rounded-[12px] row-[1] self-stretch shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgWhatwedoCard3} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col items-start justify-end px-[32px] py-[28px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function StepsGrid() {
  return (
    <div className="flex-[1_0_0] gap-[20px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[760px] min-h-px min-w-px relative" data-name="steps-grid">
      <WhatwedoCard />
      <WhatwedoCard1 />
      <WhatwedoCard2 />
      <WhatwedoCard3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <Header />
      <StepsGrid />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p284c2680} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p42530a0} id="Vector_2" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-end justify-center relative shrink-0">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">LBCC</p>
      <Icon4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end max-w-[540px] min-h-px min-w-px relative">
      <Frame10 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CSULB</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CSUF</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">UCLA</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">USC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CSUDH</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CCC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">MT. SAC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">GOLDEN STATE</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CYPRESS</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[48px] tracking-[-1.44px]">CAL POLY POMONA</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none max-w-[280px] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px] w-[min-content] whitespace-pre-wrap">Our Campus Ministries</p>
      <div className="h-[381px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Screenshot 2026-01-29 at 2.33.49 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgScreenshot20260129At23349Pm1} />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">Let us know your interest</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[382px]">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[36px] text-black tracking-[-1.08px] w-[min-content] whitespace-pre-wrap">Don’t see your campus?</p>
      <Link />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full">
      <Frame12 />
      <Frame9 />
    </div>
  );
}

export default function NextSteps() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[120px] items-center p-[120px] relative size-full" data-name="next-steps">
      <Container />
      <Frame13 />
    </div>
  );
}