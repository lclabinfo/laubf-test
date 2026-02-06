import svgPaths from "./svg-lhm0qqkpep";
import imgImage from "figma:asset/901ee9d863045a1cec3c609415a3705effd14ea8.png";

function Headings() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="headings">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#e8e8e8] text-[24px] tracking-[-0.72px] w-full">YOUNG ADULT MINISTRY</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#fafafa] text-[48px] tracking-[-1.44px] w-full">Upcoming Events</p>
    </div>
  );
}

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

function EventCard() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[359px]" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image />
        <EventDetails />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-[235px] px-[20px] py-[12px] rounded-[16777200px] top-[16px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] tracking-[0.24px]">UPCOMING</p>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Badge1 />
    </div>
  );
}

function EventType1() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="event-type">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EventType1 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px] w-[min-content] whitespace-pre-wrap">Praise Night</p>
    </div>
  );
}

function Icon2() {
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

function Time1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon2 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">Every Friday @ 7:30 PM</p>
    </div>
  );
}

function Icon3() {
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

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon3 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">LA UBF Center</p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <Time1 />
      <Location1 />
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#HBF/JBF</p>
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#RECURRING</p>
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#OPEN EVENT</p>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags">
      <Pill3 />
      <Pill4 />
      <Pill5 />
    </div>
  );
}

function EventDetails1() {
  return (
    <div className="relative shrink-0 w-full" data-name="event-details">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[18px] px-[28px] relative w-full">
        <Frame1 />
        <Details1 />
        <Tags1 />
      </div>
    </div>
  );
}

function EventCard1() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[359px]" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image1 />
        <EventDetails1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-[235px] px-[20px] py-[12px] rounded-[16777200px] top-[16px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] tracking-[0.24px]">UPCOMING</p>
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Badge2 />
    </div>
  );
}

function EventType2() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="event-type">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EventType2 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px] w-[min-content] whitespace-pre-wrap">Praise Night</p>
    </div>
  );
}

function Icon4() {
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

function Time2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon4 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">Every Friday @ 7:30 PM</p>
    </div>
  );
}

function Icon5() {
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

function Location2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon5 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">LA UBF Center</p>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <Time2 />
      <Location2 />
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#HBF/JBF</p>
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#RECURRING</p>
    </div>
  );
}

function Pill8() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#OPEN EVENT</p>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags">
      <Pill6 />
      <Pill7 />
      <Pill8 />
    </div>
  );
}

function EventDetails2() {
  return (
    <div className="relative shrink-0 w-full" data-name="event-details">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[18px] px-[28px] relative w-full">
        <Frame2 />
        <Details2 />
        <Tags2 />
      </div>
    </div>
  );
}

function EventCard2() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[359px]" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image2 />
        <EventDetails2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-[235px] px-[20px] py-[12px] rounded-[16777200px] top-[16px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] tracking-[0.24px]">UPCOMING</p>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Badge3 />
    </div>
  );
}

function EventType3() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="event-type">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EventType3 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px] w-[min-content] whitespace-pre-wrap">Praise Night</p>
    </div>
  );
}

function Icon6() {
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

function Time3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon6 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">Every Friday @ 7:30 PM</p>
    </div>
  );
}

function Icon7() {
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

function Location3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon7 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">LA UBF Center</p>
    </div>
  );
}

function Details3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <Time3 />
      <Location3 />
    </div>
  );
}

function Pill9() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#HBF/JBF</p>
    </div>
  );
}

function Pill10() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#RECURRING</p>
    </div>
  );
}

function Pill11() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#OPEN EVENT</p>
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags">
      <Pill9 />
      <Pill10 />
      <Pill11 />
    </div>
  );
}

function EventDetails3() {
  return (
    <div className="relative shrink-0 w-full" data-name="event-details">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[18px] px-[28px] relative w-full">
        <Frame3 />
        <Details3 />
        <Tags3 />
      </div>
    </div>
  );
}

function EventCard3() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[359px]" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image3 />
        <EventDetails3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-[235px] px-[20px] py-[12px] rounded-[16777200px] top-[16px]" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] tracking-[0.24px]">UPCOMING</p>
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[200px] overflow-clip relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Badge4 />
    </div>
  );
}

function EventType4() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="event-type">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <EventType4 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px] w-[min-content] whitespace-pre-wrap">Praise Night</p>
    </div>
  );
}

function Icon8() {
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

function Time4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon8 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">Every Friday @ 7:30 PM</p>
    </div>
  );
}

function Icon9() {
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

function Location4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon9 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#313131] text-[14px] tracking-[-0.28px]">LA UBF Center</p>
    </div>
  );
}

function Details4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="details">
      <Time4 />
      <Location4 />
    </div>
  );
}

function Pill12() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#HBF/JBF</p>
    </div>
  );
}

function Pill13() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#RECURRING</p>
    </div>
  );
}

function Pill14() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">#OPEN EVENT</p>
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="tags">
      <Pill12 />
      <Pill13 />
      <Pill14 />
    </div>
  );
}

function EventDetails4() {
  return (
    <div className="relative shrink-0 w-full" data-name="event-details">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[20px] pt-[18px] px-[28px] relative w-full">
        <Frame4 />
        <Details4 />
        <Tags4 />
      </div>
    </div>
  );
}

function EventCard4() {
  return (
    <div className="bg-white relative rounded-[20px] shrink-0 w-[359px]" data-name="event-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Image4 />
        <EventDetails4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Events() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="events">
      <EventCard />
      <EventCard1 />
      <EventCard2 />
      <EventCard3 />
      <EventCard4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M5.24707 5.25H12.7471V12.75" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M5.24707 12.75L12.7471 5.25" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">View all events</p>
      <Icon10 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col gap-[64px] items-center p-[120px] relative size-full">
      <Headings />
      <Events />
      <Link />
    </div>
  );
}