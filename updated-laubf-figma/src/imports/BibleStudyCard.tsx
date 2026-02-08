import svgPaths from "./svg-k59vggpkbv";

function Pill() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/book-open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/book-open">
          <path d={svgPaths.p10216700} id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function LucideFileText() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/file-text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/file-text">
          <path d={svgPaths.p2c98cc70} id="Vector" stroke="var(--stroke-0, #313131)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LucideInstagram() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText />
    </div>
  );
}

function LucideSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/search">
          <path d={svgPaths.pe4f6c00} id="Vector" stroke="var(--stroke-0, #313131)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LucideInstagram1() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch />
    </div>
  );
}

function LucideVideo() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="lucide/video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lucide/video">
          <path d={svgPaths.p2d5ed900} id="Vector" stroke="var(--stroke-0, #313131)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LucideInstagram2() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo />
    </div>
  );
}

function ResourcesAvailable() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram />
      <LucideInstagram1 />
      <LucideInstagram2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6.99479 7H16.9948V17" id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          <path d="M6.99479 17L16.9948 7" id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable />
      <Icon />
    </div>
  );
}

export default function BibleStudyCard() {
  return (
    <div className="bg-white relative rounded-[24px] size-full" data-name="bible-study-card">
      <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <Frame3 />
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}