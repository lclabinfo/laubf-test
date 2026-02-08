import svgPaths from "./svg-rq1r0fj44b";
import imgEventCard from "figma:asset/c56062b1094e411797e08dea8e6f0ae5088007ac.png";
import imgEventCard1 from "figma:asset/47b3d8d7a4eae261889f59f1ae5b3b0b599631ec.png";
import imgEventCard2 from "figma:asset/f4e689eac8f3ae1f8982b8689f9ecc9ecd263efa.png";

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="section-heading">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">Featured Events</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#313131] text-[24px] tracking-[-0.72px]">{`Highlights of what's happening in our community.`}</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">View All Events</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="header">
      <SectionHeading />
      <Link />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[20px] py-[12px] relative rounded-[16777200px] shrink-0" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[-0.42px]">UPCOMING</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">LA UBF Center</p>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[325px]" data-name="details">
      <Time />
      <Location />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.72px] w-[min-content] whitespace-pre-wrap">Men’s New Year Conference</p>
      <Details />
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="event-details">
      <Badge />
      <Info />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[22.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p2c3a19c0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p3cac0b00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 pt-[16.8px] px-[16.8px] relative rounded-[100px] shrink-0 size-[56px]" data-name="arrow">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <Icon2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full">
      <EventDetails />
      <Arrow />
    </div>
  );
}

function EventCard() {
  return (
    <div className="bg-[#0d0d0d] flex-[1_0_0] h-[500px] min-h-px min-w-px relative rounded-[12px]" data-name="event-card">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-end pl-[48px] pr-[40px] py-[40px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgEventCard} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0.75) 75%), linear-gradient(90deg, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.2) 100%)" }} />
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[20px] py-[12px] relative rounded-[16777200px] shrink-0" data-name="badge">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[16777200.5px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[-0.42px]">UPCOMING</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon3 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Jan 23 @ 7:00 PM - Jan 24 @ 3:00 PM</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon4 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">LA UBF Center</p>
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[325px]" data-name="details">
      <Time1 />
      <Location1 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="info">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.72px] w-[min-content] whitespace-pre-wrap">Women’s New Year Conference</p>
      <Details1 />
    </div>
  );
}

function EventDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="event-details">
      <Badge1 />
      <Info1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[22.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p2c3a19c0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p3cac0b00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 pt-[16.8px] px-[16.8px] relative rounded-[100px] shrink-0 size-[56px]" data-name="arrow">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <Icon5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full">
      <EventDetails1 />
      <Arrow1 />
    </div>
  );
}

function EventCard1() {
  return (
    <div className="bg-[#0d0d0d] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="event-card">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-end p-[32px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgEventCard1} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0.75) 75%), linear-gradient(90deg, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.2) 100%)" }} />
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Time2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon6 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Dec 21 @ 11:00 AM</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon7 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">LA UBF Center</p>
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[325px]" data-name="details">
      <Time2 />
      <Location2 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="info">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.72px] w-[min-content] whitespace-pre-wrap">Christmas 2025 Service</p>
      <Details2 />
    </div>
  );
}

function EventDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="event-details">
      <Info2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[22.4px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p2c3a19c0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.16%_29.18%_29.17%_29.15%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
            <path d={svgPaths.p3cac0b00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Arrow2() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 pt-[16.8px] px-[16.8px] relative rounded-[100px] shrink-0 size-[56px]" data-name="arrow">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <Icon8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full">
      <EventDetails2 />
      <Arrow2 />
    </div>
  );
}

function EventCard2() {
  return (
    <div className="bg-[#0d0d0d] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="event-card">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-end p-[32px] relative size-full">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgEventCard2} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0.75) 75%), linear-gradient(90deg, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.2) 100%)" }} />
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function SecondaryEvents() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start min-h-px min-w-px relative" data-name="secondary events">
      <EventCard1 />
      <EventCard2 />
    </div>
  );
}

function EventsGrid() {
  return (
    <div className="content-stretch flex gap-[20px] h-[500px] items-start relative shrink-0 w-[1200px]" data-name="events-grid">
      <EventCard />
      <SecondaryEvents />
    </div>
  );
}

function FeaturedEvents() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full" data-name="featured-events">
      <Header />
      <EventsGrid />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #313131)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Month() {
  return (
    <div className="relative shrink-0 w-[180px]" data-name="month">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[15px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">SEPTEMBER 2026</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #313131)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function MonthToggle() {
  return (
    <div className="relative shrink-0" data-name="month-toggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Button />
        <Month />
        <Button1 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 8H2.00667" id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 12H2.00667" id="Vector_2" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H2.00667" id="Vector_3" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H14" id="Vector_4" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H14" id="Vector_5" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 4H14" id="Vector_6" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative">
        <Icon11 />
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] text-center tracking-[-0.54px]">List</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative">
        <Icon12 />
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[18px] text-center tracking-[-0.54px]">Month</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[14px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start p-[4px] relative">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function CalendarHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="calendar header">
      <MonthToggle />
      <Container />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[-0.42px]">ALL</p>
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Events</p>
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Meetings</p>
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[100px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Programs</p>
    </div>
  );
}

function Pills() {
  return (
    <div className="relative shrink-0" data-name="pills">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Pill />
        <Pill1 />
        <Pill2 />
        <Pill3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#3667b1] content-stretch flex items-center justify-center min-h-[26px] min-w-[26px] p-[6px] relative rounded-[16777200px] shrink-0" data-name="Text">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Medium',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#fafafa] text-[14px] text-center tracking-[-0.42px] whitespace-pre-wrap">5</p>
    </div>
  );
}

function Upcoming() {
  return (
    <div className="relative shrink-0" data-name="upcoming">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#676767] text-[16px] tracking-[-0.32px]">Upcoming in January</p>
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Pills />
      <Upcoming />
    </div>
  );
}

function EventDate() {
  return (
    <div className="min-w-[48px] relative shrink-0" data-name="event-date">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-center leading-none min-w-[inherit] not-italic relative text-center">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN</p>
        <p className="font-['Helvetica_Neue:Bold',sans-serif] relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.6px]">1</p>
      </div>
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[#096] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">MEETING</p>
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="metadata">
      <Pill4 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
    </div>
  );
}

function EventInfo() {
  return (
    <div className="relative shrink-0 w-[1227px]" data-name="event-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Metadata />
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px]">{`New Year's Service`}</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function EventList() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="event=list">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[13px] pt-[12px] px-[8px] relative w-full">
          <EventDate />
          <EventInfo />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function EventDate1() {
  return (
    <div className="min-w-[48px] relative shrink-0" data-name="event-date">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-center leading-none min-w-[inherit] not-italic relative text-center">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN</p>
        <p className="font-['Helvetica_Neue:Bold',sans-serif] relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.6px]">1</p>
      </div>
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Metadata1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="metadata">
      <Pill5 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
    </div>
  );
}

function EventInfo1() {
  return (
    <div className="relative shrink-0 w-[1227px]" data-name="event-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Metadata1 />
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px]">{`New Year's Service`}</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function EventList1() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="event=list">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[13px] pt-[12px] px-[8px] relative w-full">
          <EventDate1 />
          <EventInfo1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function EventDate2() {
  return (
    <div className="min-w-[48px] relative shrink-0" data-name="event-date">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center justify-center leading-none min-w-[inherit] not-italic relative text-center">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN</p>
        <p className="font-['Helvetica_Neue:Bold',sans-serif] relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.6px]">1</p>
      </div>
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Metadata2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="metadata">
      <Pill6 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
    </div>
  );
}

function EventInfo2() {
  return (
    <div className="relative shrink-0 w-[1227px]" data-name="event-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Metadata2 />
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px]">{`New Year's Service`}</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function EventList2() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="event=list">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[13px] pt-[12px] px-[8px] relative w-full">
          <EventDate2 />
          <EventInfo2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function EventDate3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center leading-none min-w-[48px] not-italic relative shrink-0 text-center" data-name="event-date">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN</p>
      <p className="font-['Helvetica_Neue:Bold',sans-serif] relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.6px]">29</p>
    </div>
  );
}

function Frame3() {
  return <div className="bg-[#9e9e9e] h-[2px] rounded-[100px] shrink-0 w-[8px]" />;
}

function EventDate4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center justify-center leading-none min-w-[48px] not-italic relative shrink-0 text-center" data-name="event-date">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN</p>
      <p className="font-['Helvetica_Neue:Bold',sans-serif] relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.6px]">30</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <EventDate3 />
        <Frame3 />
        <EventDate4 />
      </div>
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[12px] text-center tracking-[0.24px]">EVENT</p>
    </div>
  );
}

function Metadata3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="metadata">
      <Pill7 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
    </div>
  );
}

function EventInfo3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="event-info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Metadata3 />
        <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px]">{`New Year's Service`}</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
            <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, #9E9E9E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function EventList3() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="event=list">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pb-[13px] pt-[12px] px-[8px] relative w-full">
          <Frame4 />
          <EventInfo3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="events">
      <EventList />
      <EventList1 />
      <EventList2 />
      <EventList3 />
    </div>
  );
}

function CalendarContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="calendar content">
      <Container1 />
      <Events />
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="calendar">
      <CalendarHeader />
      <CalendarContent />
    </div>
  );
}

function Schedule() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="schedule">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[36px] tracking-[-1.08px] w-full whitespace-pre-wrap">Schedule</p>
      <Calendar />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M5.24707 5.25H12.7471V12.75" id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M5.24707 12.75L12.7471 5.25" id="Vector_2" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">2026 LA UBF Calendar</p>
      <Icon17 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">View All Events</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <Link1 />
      <Link2 />
    </div>
  );
}

function ScheduleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="schedule section">
      <Schedule />
      <Buttons />
    </div>
  );
}

export default function EventsNSchedule() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[100px] relative size-full" data-name="events-n-schedule">
      <FeaturedEvents />
      <ScheduleSection />
    </div>
  );
}