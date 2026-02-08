import svgPaths from "./svg-5igo7otp1e";
import imgImage from "figma:asset/901ee9d863045a1cec3c609415a3705effd14ea8.png";

function Badge() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-[235px] px-[20px] py-[12px] rounded-[16777200px] top-[16px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] tracking-[0.24px]">UPCOMING</p>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Badge />
    </div>
  );
}

function EventType() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="event-type">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EventType />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px] w-[min-content] whitespace-pre-wrap">Praise Night</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">Every Friday @ 7:30 PM</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">LA UBF Center</p>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <Time />
      <Location />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#HBF/JBF</p>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#RECURRING</p>
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#OPEN EVENT</p>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function EventDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="event-details">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[18px] px-[28px] relative w-full">
        <Frame />
        <Details />
        <Tags />
      </div>
    </div>
  );
}

export default function EventCard() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image />
        <EventDetails />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}