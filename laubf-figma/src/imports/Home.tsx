import svgPaths from "./svg-j31pvun4p8";
import imgDsc014521 from "figma:asset/8b9260ecd87064086e6838e1c3e473f61bf77201.png";
import imgDsc014522 from "figma:asset/47b3d8d7a4eae261889f59f1ae5b3b0b599631ec.png";
import imgDsc014523 from "figma:asset/b9107e08e56ccb7c4d2b40949661ca82f4e580e6.png";
import imgEventCard from "figma:asset/c56062b1094e411797e08dea8e6f0ae5088007ac.png";
import imgEventCard1 from "figma:asset/f4e689eac8f3ae1f8982b8689f9ecc9ecd263efa.png";
import imgWhatwedoCard from "figma:asset/445b913c155a1ce01ebd61135e1021d16ff4ab75.png";
import imgWhatwedoCard1 from "figma:asset/6331a7002928e5827fa984b7239563e24081fe6d.png";
import imgWhatwedoCard2 from "figma:asset/f3a9203ff5eb53c5cca22ed3f2cc45090800f3a8.png";
import imgWhatwedoCard3 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";
import imgScreenshot20260129At23349Pm1 from "figma:asset/1c4f1434de377a38dfc47cf3b1b2f56275faccfc.png";
import imgVideo from "figma:asset/dc42ca839f5b61934e3b9fdeaacdc63a86b9aa5f.png";
import imgBanner from "figma:asset/9adc729ea868dc2b7a0633662340a259a906c0bd.png";

function Overlay() {
  return <div className="absolute h-[1080px] left-0 top-0 w-[1440px]" data-name="overlay" style={{ backgroundImage: "linear-gradient(195.581deg, rgba(13, 13, 13, 0) 49.77%, rgba(13, 13, 13, 0.5) 64.028%, rgb(13, 13, 13) 85.738%)" }} />;
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue:Medium',sans-serif] gap-[24px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="heading">
      <div className="leading-[0.8] relative shrink-0 text-[#fafafa] text-[0px] text-shadow-[0px_4px_6.9px_rgba(0,0,0,0.25)] tracking-[-6.4px] w-[473px]">
        <p className="mb-0 text-[80px] tracking-[-3.2px]">Welcome to</p>
        <p className="font-['DM_Serif_Text:Italic',sans-serif] italic text-[160px]">LA UBF</p>
      </div>
      <div className="leading-[0] relative shrink-0 text-[#ededed] text-[32px] tracking-[-1.28px] w-[483px]">
        <p className="mb-0">
          <span className="leading-[1.2] text-[#bebebe]">{`Where `}</span>
          <span className="leading-[1.2]">people find their community.</span>
        </p>
        <p className="mb-0">
          <span className="leading-[1.2] text-[#bebebe]">Where</span>
          <span className="leading-[1.2]">{` disciples are raised.`}</span>
        </p>
        <p>
          <span className="leading-[1.2] text-[#bebebe]">Where</span>
          <span className="leading-[1.2]">{` the Word of God is lived.`}</span>
        </p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[100px] shadow-[0px_10px_15px_0px_rgba(54,103,177,0.2),0px_4px_6px_0px_rgba(54,103,177,0.2)] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">I’m new</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_10px_15px_0px_rgba(54,103,177,0.2),0px_4px_6px_0px_rgba(54,103,177,0.2)]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">Upcoming events</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <Link />
      <Link1 />
    </div>
  );
}

function HeroHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[80px] top-[563px] w-[483px]" data-name="hero-header">
      <Heading />
      <Buttons />
    </div>
  );
}

function LaubfLogo() {
  return (
    <div className="h-[52px] relative shrink-0 w-[62px]" data-name="laubf-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 52">
        <g id="laubf-logo">
          <path d={svgPaths.pc4d53b0} fill="var(--fill-0, #E8E8E8)" id="Vector" />
          <path d={svgPaths.pc94fe00} fill="var(--fill-0, #E8E8E8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] text-center tracking-[-0.4px]">Our Church</p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] text-center tracking-[-0.4px]">Ministries</p>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] text-center tracking-[-0.4px]">Resources</p>
      <Icon2 />
    </div>
  );
}

function NavLink3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] text-center tracking-[-0.4px]">Giving</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="links">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <NavLink3 />
    </div>
  );
}

function NavLink4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] text-center tracking-[-0.4px]">Member Login</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] tracking-[-0.4px]">I’m new</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="buttons">
      <NavLink4 />
      <Link2 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[28px] w-[1140px]" data-name="Navbar">
      <LaubfLogo />
      <Links />
      <Buttons1 />
    </div>
  );
}

function HeroV() {
  return (
    <div className="h-[1080px] relative shrink-0 w-full" data-name="hero-v0">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/6e28154b534ee3ddd5033c3edf30e07fe4838e17" />
      </video>
      <Overlay />
      <HeroHeader />
      <Navbar />
    </div>
  );
}

function Overlay1() {
  return <div className="absolute inset-0" data-name="overlay" style={{ backgroundImage: "linear-gradient(rgb(13, 13, 13) 0%, rgba(13, 13, 13, 0.25) 24.519%, rgba(13, 13, 13, 0) 50%, rgba(13, 13, 13, 0.25) 75%, rgb(13, 13, 13) 100%)" }} />;
}

function Frame10() {
  return (
    <div className="h-[573px] overflow-clip relative shrink-0 w-[600px]">
      <div className="absolute h-[222px] left-[154px] rounded-[8px] top-[166px] w-[389.688px]" data-name="DSC01452 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014521} />
        </div>
      </div>
      <div className="absolute flex h-[316.968px] items-center justify-center left-[73px] top-[-173px] w-[387.232px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "1721.5" } as React.CSSProperties}>
        <div className="-rotate-25 flex-none">
          <div className="h-[192.317px] opacity-60 relative rounded-[8px] w-[337.584px]" data-name="DSC01452 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014522} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[316.968px] items-center justify-center left-[73px] top-[410px] w-[387.232px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "1707.5" } as React.CSSProperties}>
        <div className="flex-none rotate-25">
          <div className="h-[192.317px] opacity-60 relative rounded-[8px] w-[337.584px]" data-name="DSC01452 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014523} />
            </div>
          </div>
        </div>
      </div>
      <Overlay1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[0] relative shrink-0 text-[#fafafa] text-[0px] tracking-[-1.2px] w-full">
        <span className="leading-[1.2] text-[36px] tracking-[-1.08px]">{`Christian Ministry for `}</span>
        <span className="font-['DM_Serif_Text:Italic',sans-serif] italic leading-none text-[40px]">{`College Students `}</span>
      </p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="header">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#9e9e9e] text-[20px] tracking-[-0.4px]">WHO WE ARE</p>
      <Frame12 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">More about us</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[33px] items-start min-h-px min-w-px relative">
      <Header />
      <Link3 />
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="bg-[#0d0d0d] relative shrink-0 w-full" data-name="who-we-are">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center pr-[120px] relative w-full">
          <Frame10 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0" data-name="section-heading">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px]">Featured Events</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#313131] text-[24px] tracking-[-0.72px]">{`Highlights of what's happening in our community.`}</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">View All Events</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="header">
      <SectionHeading />
      <Link4 />
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

function Time() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon3 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Jan 29 @ 7:00 PM - Jan 30 @ 3:00 PM</p>
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

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon4 />
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

function Arrow() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 pt-[16.8px] px-[16.8px] relative rounded-[100px] shrink-0 size-[56px]" data-name="arrow">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <Icon5 />
    </div>
  );
}

function Frame13() {
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
          <Frame13 />
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

function Time1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="time">
      <Icon6 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Jan 23 @ 7:00 PM - Jan 24 @ 3:00 PM</p>
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

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="location">
      <Icon7 />
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

function Arrow1() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 pt-[16.8px] px-[16.8px] relative rounded-[100px] shrink-0 size-[56px]" data-name="arrow">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <Icon8 />
    </div>
  );
}

function Frame14() {
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
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgDsc014522} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0.75) 75%), linear-gradient(90deg, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.2) 100%)" }} />
          </div>
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
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
      <Icon9 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">Dec 21 @ 11:00 AM</p>
    </div>
  );
}

function Icon10() {
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
      <Icon10 />
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

function Icon11() {
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
      <Icon11 />
    </div>
  );
}

function Frame15() {
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
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgEventCard1} />
            <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0.75) 75%), linear-gradient(90deg, rgba(13, 13, 13, 0.2) 0%, rgba(13, 13, 13, 0.2) 100%)" }} />
          </div>
          <Frame15 />
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
      <Header1 />
      <EventsGrid />
    </div>
  );
}

function Icon12() {
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
        <Icon12 />
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

function Icon13() {
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
        <Icon13 />
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

function Icon14() {
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
        <Icon14 />
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] text-center tracking-[-0.54px]">List</p>
      </div>
    </div>
  );
}

function Icon15() {
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
        <Icon15 />
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

function Container2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
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

function Icon17() {
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
        <Icon17 />
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

function Icon18() {
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
        <Icon18 />
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

function Frame18() {
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

function Frame19() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <EventDate3 />
        <Frame18 />
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

function Icon19() {
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
        <Icon19 />
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
          <Frame19 />
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

function Icon20() {
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

function Link5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#0d0d0d] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">2026 LA UBF Calendar</p>
      <Icon20 />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">View All Events</p>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <Link5 />
      <Link6 />
    </div>
  );
}

function ScheduleSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="schedule section">
      <Schedule />
      <Buttons2 />
    </div>
  );
}

function EventsNSchedule() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="events-n-schedule">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start px-[120px] py-[100px] relative w-full">
          <FeaturedEvents />
          <ScheduleSection />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.2] relative shrink-0 text-[#fafafa] w-[612px]">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] relative shrink-0 text-[24px] text-center tracking-[-0.72px] w-full">2026 SPIRITUAL DIRECTION</p>
      <p className="font-['strude:Regular',sans-serif] relative shrink-0 text-[80px] tracking-[3.2px] w-full">Not of the World</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[16px] items-start relative shrink-0 text-[#e8e8e8] text-center w-full">
      <p className="leading-[0] relative shrink-0 text-[24px] tracking-[-0.72px] w-full">
        <span className="leading-[1.2] text-[#9e9e9e]">{`16 `}</span>
        <span className="leading-[1.2]">{`They are not of the world, just as I am not of the world. `}</span>
        <span className="leading-[1.2] text-[#9e9e9e]">{`17 `}</span>
        <span className="leading-[1.2]">{`Sanctify them in the truth; your word is truth. `}</span>
        <span className="leading-[1.2] text-[#9e9e9e]">{`18 `}</span>
        <span className="leading-[1.2]">As you sent me into the world, so I have sent them into the world.</span>
      </p>
      <p className="leading-[1.5] relative shrink-0 text-[20px] tracking-[-0.4px] w-full">John 17:16-18</p>
    </div>
  );
}

function SpiritualDrection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-center max-w-[960px] min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="spiritual-drection">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function WhoWeAre1() {
  return (
    <div className="bg-gradient-to-b from-[#262626] relative shrink-0 to-[#0d0d0d] to-[67.308%] w-full" data-name="who-we-are">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[64px] items-center justify-center p-[120px] relative w-full">
          <div className="-translate-x-1/2 absolute h-[383px] left-1/2 top-0 w-[926px]">
            <div className="absolute inset-[-26.11%_-10.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1126 583">
                <g filter="url(#filter0_f_8133_2301)" id="Vector 1">
                  <path d={svgPaths.p8ce8f80} fill="url(#paint0_linear_8133_2301)" fillOpacity="0.18" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="583" id="filter0_f_8133_2301" width="1126" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_8133_2301" stdDeviation="50" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8133_2301" x1="563" x2="563" y1="100" y2="483">
                    <stop stopColor="#FAFAFA" />
                    <stop offset="1" stopColor="#FAFAFA" stopOpacity="0.666667" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <SpiritualDrection />
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 w-[280px] whitespace-pre-wrap" data-name="header">
      <div className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[#0d0d0d] text-[0px] text-[48px] tracking-[-1.44px] w-full">
        <p className="mb-0">Your</p>
        <p className="font-['DM_Serif_Display:Italic',sans-serif] italic mb-0">Next Steps</p>
        <p>at LA UBF</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#313131] text-[24px] tracking-[-0.72px] w-full">Explore different ways to connect, grow in faith, and be part of our community.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Sunday Worship</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Experience meaningful worship and Bible-centered messages.</p>
    </div>
  );
}

function Icon21() {
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon21 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame2 />
      <Container7 />
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Personal Bible Studies</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Study the Bible and grow deeper in God’s Word.</p>
    </div>
  );
}

function Icon22() {
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

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon22 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame5 />
      <Container8 />
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
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">Fellowship</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Build meaningful friendships and walk life together in faith.</p>
    </div>
  );
}

function Icon23() {
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

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame7 />
      <Container9 />
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
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px not-italic relative text-[#fafafa] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[36px] tracking-[-1.08px] w-full">College Campus Ministries</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[16px] tracking-[-0.32px] w-full">Connect with a Christ-centered community right on your campus.</p>
    </div>
  );
}

function Icon24() {
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

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start p-[14px] relative rounded-[10066320px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#fafafa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[10066320px]" />
      <Icon24 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-full">
      <Frame9 />
      <Container10 />
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
          <Frame8 />
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

function Container6() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="container">
      <Header2 />
      <StepsGrid />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p284c2680} id="Vector" stroke="var(--stroke-0, #2F3689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p42530a0} id="Vector_2" stroke="var(--stroke-0, #2F3689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[6px] items-end justify-center relative shrink-0">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#2f3689] text-[48px] tracking-[-1.44px]">LBCC</p>
      <Icon25 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-end max-w-[540px] min-h-px min-w-px relative">
      <Frame22 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CSULB</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CSUF</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">UCLA</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">USC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CSUDH</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CCC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">MT. SAC</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">GOLDEN STATE</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CYPRESS</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9ea4af] text-[48px] tracking-[-1.44px]">CAL POLY POMONA</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none max-w-[280px] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px] w-[min-content] whitespace-pre-wrap">Our Campus Ministries</p>
      <div className="h-[381px] relative rounded-[12px] shrink-0 w-[480px]" data-name="Screenshot 2026-01-29 at 2.33.49 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgScreenshot20260129At23349Pm1} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame23 />
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">Let us know your interest</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[382px]">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#0d0d0d] text-[36px] tracking-[-1.08px] w-[min-content] whitespace-pre-wrap">Don’t see your campus?</p>
      <Link7 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-center relative shrink-0 w-full">
      <Frame24 />
      <Frame21 />
    </div>
  );
}

function NextSteps() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="next-steps">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-center p-[120px] relative w-full">
          <Container6 />
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#fafafa] w-[392px]" data-name="title">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.72px] w-full">This Week’s Message</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[0.8] relative shrink-0 text-[80px] text-center tracking-[-2.4px] w-full">Eternal Life</p>
    </div>
  );
}

function Metadata4() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue:Regular',sans-serif] gap-[4px] items-end leading-[1.5] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-[257px]" data-name="metadata">
      <p className="relative shrink-0 text-right w-full">Pastor William Larsen</p>
      <p className="relative shrink-0 text-center w-full">SUNDAY WORSHIP • DEC 29</p>
    </div>
  );
}

function MessageHeader() {
  return (
    <div className="content-stretch flex items-end justify-between not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="message-header">
      <Title />
      <Metadata4 />
    </div>
  );
}

function PlayBtn() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[144px] top-[calc(50%+0.5px)]" data-name="play-btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="play-btn">
          <rect fill="var(--fill-0, #0D0D0D)" height="144" rx="72" width="144" />
          <path d={svgPaths.p2792e900} fill="var(--fill-0, #FAFAFA)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function Video() {
  return (
    <div className="aspect-[1920/1080] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="video">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgVideo} />
      <PlayBtn />
    </div>
  );
}

function Message() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-[1200px]" data-name="message">
      <MessageHeader />
      <Video />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">View All Videos</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#e7e7e7] text-[36px] tracking-[-1.08px]">Featured Videos</p>
      <Link8 />
    </div>
  );
}

function PlayBtn1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[64px] top-[calc(50%+0.25px)]" data-name="play-btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="play-btn">
          <rect fill="var(--fill-0, #0D0D0D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p31f35c00} fill="var(--fill-0, #FAFAFA)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function VideoMock() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[8px] self-stretch" data-name="video-mock">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgEventCard1} />
      <PlayBtn1 />
    </div>
  );
}

function PlayBtn2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[64px] top-[calc(50%+0.25px)]" data-name="play-btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="play-btn">
          <rect fill="var(--fill-0, #0D0D0D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p31f35c00} fill="var(--fill-0, #FAFAFA)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function VideoMock1() {
  return (
    <div className="aspect-[1920/1080] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="video-mock">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgEventCard1} />
      <PlayBtn2 />
    </div>
  );
}

function PlayBtn3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.33px)] size-[64px] top-[calc(50%+0.25px)]" data-name="play-btn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="play-btn">
          <rect fill="var(--fill-0, #0D0D0D)" height="64" rx="32" width="64" />
          <path d={svgPaths.p31f35c00} fill="var(--fill-0, #FAFAFA)" id="Polygon 2" />
        </g>
      </svg>
    </div>
  );
}

function VideoMock2() {
  return (
    <div className="aspect-[1920/1080] flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[8px]" data-name="video-mock">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgEventCard1} />
      <PlayBtn3 />
    </div>
  );
}

function Videos() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="videos">
      <VideoMock />
      <VideoMock1 />
      <VideoMock2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <Frame />
      <Videos />
    </div>
  );
}

function MessageVideos() {
  return (
    <div className="bg-[#0d0d0d] relative shrink-0 w-full" data-name="Message + Videos">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center p-[120px] relative w-full">
          <Message />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-[#fafafa] w-full" data-name="header">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[24px] tracking-[-0.72px] w-full">New Here?</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[48px] tracking-[-1.44px] w-full">Visit us this Sunday</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="text">
      <Header3 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.5] max-w-[640px] relative shrink-0 text-[#e8e8e8] text-[20px] tracking-[-0.4px] w-full">All are welcome. Come connect with us and get to know our community.</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-center px-[32px] py-[20px] relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(54,103,177,0.2),0px_4px_6px_0px_rgba(54,103,177,0.2)] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[18px] tracking-[-0.54px]">Plan your visit</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px] shadow-[0px_10px_15px_0px_rgba(54,103,177,0.2),0px_4px_6px_0px_rgba(54,103,177,0.2)]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">See our ministries</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="buttons">
      <Link9 />
      <Link10 />
    </div>
  );
}

function Banner() {
  return (
    <div className="relative shrink-0 w-full" data-name="banner">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0d0d0d] inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-10 size-full" src={imgBanner} />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[120px] pt-[80px] px-[120px] relative w-full">
          <Text1 />
          <Buttons3 />
        </div>
      </div>
    </div>
  );
}

function LaubfLogo1() {
  return (
    <div className="h-[100px] relative shrink-0 w-[120px]" data-name="laubf-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 100">
        <g id="laubf-logo">
          <path d={svgPaths.p3f560180} fill="var(--fill-0, #E8E8E8)" id="Vector" />
          <path d={svgPaths.p39574800} fill="var(--fill-0, #E8E8E8)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Laubf() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="laubf">
      <LaubfLogo1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] max-w-[240px] min-w-full not-italic relative shrink-0 text-[#9e9e9e] text-[16px] tracking-[-0.32px] w-[min-content] whitespace-pre-wrap">A Bible-centered community raising lifelong disciples on campus and beyond.</p>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_8133_2217)" id="Icon">
          <path d={svgPaths.p121577f0} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1d30300} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5825 5.41748H14.5909" id="Vector_3" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_8133_2217">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-[#313131] content-stretch flex items-center justify-center p-[12px] relative rounded-[16777200px] shrink-0" data-name="Link">
      <Icon26 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1b591a80} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-[#313131] content-stretch flex items-center justify-center p-[12px] relative rounded-[16777200px] shrink-0" data-name="Link">
      <Icon27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26da8300} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p45094f0} id="Vector_2" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-[#313131] content-stretch flex items-center justify-center p-[12px] relative rounded-[16777200px] shrink-0" data-name="Link">
      <Icon28 />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="socials">
      <Link11 />
      <Link12 />
      <Link13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[32px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <Laubf />
      <Socials />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">About Us</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">I’m New</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Ministries</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Events</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Messages</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Giving</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Link14 />
      <Link15 />
      <Frame27 />
      <Frame28 />
      <Frame26 />
      <Frame29 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-[2] content-stretch flex flex-col gap-[12px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[14px] tracking-[-0.42px]">EXPLORE</p>
      <List />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Daily Bread YouTube</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">UBF HQ YouTube</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">UBF TV YouTube</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">UBF HQ</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Chicago UBF</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative shrink-0">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] text-center tracking-[-0.32px]">Korea UBF</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Link16 />
      <Frame30 />
      <Frame31 />
      <Link17 />
      <Frame32 />
      <Frame33 />
    </div>
  );
}

function Container13() {
  return (
    <div className="col-[3] content-stretch flex flex-col gap-[12px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[14px] tracking-[-0.42px]">RESOURCES</p>
      <List1 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="icon-container">
      <Icon29 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <IconContainer />
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px] whitespace-nowrap">
        <p className="mb-0">11625 Paramount Blvd,</p>
        <p>Downey, CA 90241</p>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8133_2246)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8133_2246">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="icon-container">
      <Icon30 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <IconContainer1 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e8e8e8] text-[16px] tracking-[-0.32px]">(562) 396-6350</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f8e7e80} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17070980} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center py-[4px] relative shrink-0" data-name="icon-container">
      <Icon31 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[8px] py-[6px] relative shrink-0" data-name="Link">
      <IconContainer2 />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#d1d5dc] text-[16px] tracking-[-0.32px]">laubf.downey@gmail.com</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <Link18 />
      <Link19 />
      <Link20 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[4] content-stretch flex flex-col gap-[12px] items-start relative row-[1] self-start shrink-0" data-name="Container">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#9e9e9e] text-[14px] tracking-[-0.42px] w-full whitespace-pre-wrap">VISIT US</p>
      <List2 />
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="gap-[40px] gap-[48px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="footer info">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col items-start overflow-clip px-[120px] py-[80px] relative shrink-0 w-[1440px]" data-name="footer">
      <FooterInfo />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative size-full" data-name="home">
      <HeroV />
      <WhoWeAre />
      <EventsNSchedule />
      <WhoWeAre1 />
      <NextSteps />
      <MessageVideos />
      <Banner />
      <Footer />
    </div>
  );
}