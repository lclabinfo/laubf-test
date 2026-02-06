import svgPaths from "./svg-gb5avardf1";
import imgScreenshot20260129At23349Pm1 from "figma:asset/1c4f1434de377a38dfc47cf3b1b2f56275faccfc.png";

function Icon() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-end justify-center relative shrink-0">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">LBCC</p>
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end max-w-[540px] min-h-px min-w-px relative">
      <Frame2 />
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none max-w-[280px] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px] w-[min-content] whitespace-pre-wrap">Our Campus Ministries</p>
      <div className="h-[381px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Screenshot 2026-01-29 at 2.33.49 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgScreenshot20260129At23349Pm1} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame3 />
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[382px]">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[36px] text-black tracking-[-1.08px] w-[min-content] whitespace-pre-wrap">Don’t see your campus?</p>
      <Link />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Frame1 />
    </div>
  );
}

export default function NextSteps() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-center p-[120px] relative size-full" data-name="next-steps">
      <Frame5 />
    </div>
  );
}