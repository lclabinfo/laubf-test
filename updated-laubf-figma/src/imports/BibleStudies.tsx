import svgPaths from "./svg-be4td7qji8";
import imgLaubfOg3 from "figma:asset/358855b4d2cdacab7e3086fcf2486455302bc897.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex gap-[6px] items-center pl-[12px] pr-[8px] py-[16px] relative rounded-[12px] shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">Our Church</p>
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center pl-[12px] pr-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">Ministries</p>
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center pl-[12px] pr-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">Resources</p>
      <Icon2 />
    </div>
  );
}

function NavLink3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center pl-[12px] pr-[8px] py-[16px] relative shrink-0" data-name="nav-link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">Giving</p>
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
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[20px] text-center tracking-[-0.4px]">Member Login</p>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex items-center justify-center px-[32px] py-[16px] relative rounded-[100px] shrink-0" data-name="Link">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[20px] tracking-[-0.4px]">I’m new</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="buttons">
      <NavLink4 />
      <Link />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1140px]" data-name="Navbar">
      <div className="h-[52px] relative shrink-0 w-[62px]" data-name="laubf-og 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[164.11%] left-[-19.35%] max-w-none top-[-31.09%] w-[132.26%]" src={imgLaubfOg3} />
        </div>
      </div>
      <Links />
      <Buttons />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#fafafa] h-[84px] left-0 top-0 w-[1440px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Navbar />
      </div>
      <div aria-hidden="true" className="absolute border-[#dcdcdc] border-b border-solid inset-0 pointer-events-none shadow-[0px_12px_20px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="header">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#fafafa] text-[80px] tracking-[-2.4px] w-[min-content] whitespace-pre-wrap">Bible Study Resources</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="content">
      <Header />
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#9e9e9e] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">Deep dive into the Word of God with our weekly bible study materials and questions.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#0d0d0d] content-stretch flex flex-col items-start left-0 pb-[64px] pt-[80px] px-[120px] top-[84px] w-[1440px]">
      <Content />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0d0d0d] text-[48px] tracking-[-1.44px] w-full whitespace-pre-wrap">All Bible studies</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[8.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1cfa1bc0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2cfdb900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17f25d40} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15fb5e00} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[88.555px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[16.5px] left-[56px] not-italic text-[11px] text-black text-center top-[8.5px] tracking-[0.55px] uppercase">Card</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[8.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 8H2.00667" id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 12H2.00667" id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H2.00667" id="Vector_3" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 8H14" id="Vector_4" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H14" id="Vector_5" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 4H14" id="Vector_6" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[32.5px] relative rounded-[8px] shrink-0 w-[80.609px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[16.5px] left-[52px] not-italic text-[#676767] text-[11px] text-center top-[8.5px] tracking-[0.55px] uppercase">List</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[8.25px]" data-name="Icon">
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

function Button2() {
  return (
    <div className="flex-[1_0_0] h-[32.5px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[16.5px] left-[71.5px] not-italic text-[#676767] text-[11px] text-center top-[8.5px] tracking-[0.55px] uppercase">Calendar</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex h-[40.5px] items-start pt-[4px] px-[4px] relative rounded-[10px] shrink-0 w-[295.82px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex h-[40px] items-center left-0 overflow-clip pl-[40px] pr-[12px] py-[4px] rounded-[8px] top-0 w-[400px]" data-name="Input">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px]">Search events, meetings, programs...</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1066 11.1067" id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[400px]" data-name="Container">
      <Input />
      <Icon6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[11.5px] items-start relative shrink-0 w-[28.813px]" data-name="Label">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a0a0a0] text-[10px] tracking-[1px] uppercase">Type</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[51.523px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] text-center">All Types</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan />
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-h-px min-w-px py-[4px] relative" data-name="Container">
      <Label />
      <PrimitiveButton />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[11.5px] items-start relative shrink-0 w-[54.297px]" data-name="Label">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a0a0a0] text-[10px] tracking-[1px] uppercase">Ministry</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[73.43px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] text-center">All Ministries</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan1 />
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-h-px min-w-px py-[4px] relative" data-name="Container">
      <Label1 />
      <PrimitiveButton1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[11.5px] items-start relative shrink-0 w-[48.594px]" data-name="Label">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a0a0a0] text-[10px] tracking-[1px] uppercase">Campus</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[80.188px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] text-center">All Campuses</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <PrimitiveSpan2 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-h-px min-w-px py-[4px] relative" data-name="Container">
      <Label2 />
      <PrimitiveButton2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[11.5px] items-start relative shrink-0 w-[32.906px]" data-name="Label">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a0a0a0] text-[10px] tracking-[1px] uppercase">From</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ConsolidatedEventsPage() {
  return (
    <div className="absolute h-[19.5px] left-[45px] top-[10.25px] w-[65.016px]" data-name="ConsolidatedEventsPage">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#0d0d0d] text-[13px] top-0">Pick a date</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon10 />
      <ConsolidatedEventsPage />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label3 />
      <Button3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex h-[11.5px] items-start relative shrink-0 w-[15.344px]" data-name="Label">
      <p className="font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#a0a0a0] text-[10px] tracking-[1px] uppercase">To</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #A0A0A0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ConsolidatedEventsPage1() {
  return (
    <div className="absolute h-[19.5px] left-[45px] top-[10.25px] w-[65.016px]" data-name="ConsolidatedEventsPage">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#0d0d0d] text-[13px] top-0">Pick a date</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon11 />
      <ConsolidatedEventsPage1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[5px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label4 />
      <Button4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[8px] relative w-full">
          <Container5 />
          <Container6 />
          <Container7 />
          <Container8 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[171px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[9px] px-[9px] relative size-full">
        <Container1 />
        <Container4 />
      </div>
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame6() {
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame5 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame6 />
      <Frame7 />
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

function Icon12() {
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

function Frame9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable />
      <Icon12 />
    </div>
  );
}

function BibleStudyCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame8 />
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill1 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen1() {
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

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen1 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame13 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function LucideFileText1() {
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

function LucideInstagram3() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText1 />
    </div>
  );
}

function LucideSearch1() {
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

function LucideInstagram4() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch1 />
    </div>
  );
}

function LucideVideo1() {
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

function LucideInstagram5() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo1 />
    </div>
  );
}

function ResourcesAvailable1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram3 />
      <LucideInstagram4 />
      <LucideInstagram5 />
    </div>
  );
}

function Icon13() {
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

function Frame14() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable1 />
      <Icon13 />
    </div>
  );
}

function BibleStudyCard1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame10 />
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill2 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen2() {
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen2 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame19 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function LucideFileText2() {
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

function LucideInstagram6() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText2 />
    </div>
  );
}

function LucideSearch2() {
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

function LucideInstagram7() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch2 />
    </div>
  );
}

function LucideVideo2() {
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

function LucideInstagram8() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo2 />
    </div>
  );
}

function ResourcesAvailable2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram6 />
      <LucideInstagram7 />
      <LucideInstagram8 />
    </div>
  );
}

function Icon14() {
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

function Frame20() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable2 />
      <Icon14 />
    </div>
  );
}

function BibleStudyCard2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame16 />
          <Frame20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="row">
      <BibleStudyCard />
      <BibleStudyCard1 />
      <BibleStudyCard2 />
    </div>
  );
}

function Pill3() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill3 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen3() {
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

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen3 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame25 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function LucideFileText3() {
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

function LucideInstagram9() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText3 />
    </div>
  );
}

function LucideSearch3() {
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

function LucideInstagram10() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch3 />
    </div>
  );
}

function LucideVideo3() {
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

function LucideInstagram11() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo3 />
    </div>
  );
}

function ResourcesAvailable3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram9 />
      <LucideInstagram10 />
      <LucideInstagram11 />
    </div>
  );
}

function Icon15() {
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

function Frame26() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable3 />
      <Icon15 />
    </div>
  );
}

function BibleStudyCard3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame22 />
          <Frame26 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill4() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill4 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen4() {
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

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen4 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame30 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function LucideFileText4() {
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

function LucideInstagram12() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText4 />
    </div>
  );
}

function LucideSearch4() {
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

function LucideInstagram13() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch4 />
    </div>
  );
}

function LucideVideo4() {
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

function LucideInstagram14() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo4 />
    </div>
  );
}

function ResourcesAvailable4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram12 />
      <LucideInstagram13 />
      <LucideInstagram14 />
    </div>
  );
}

function Icon16() {
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

function Frame31() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable4 />
      <Icon16 />
    </div>
  );
}

function BibleStudyCard4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame27 />
          <Frame31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill5() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill5 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen5() {
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

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen5 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame35 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function LucideFileText5() {
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

function LucideInstagram15() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText5 />
    </div>
  );
}

function LucideSearch5() {
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

function LucideInstagram16() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch5 />
    </div>
  );
}

function LucideVideo5() {
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

function LucideInstagram17() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo5 />
    </div>
  );
}

function ResourcesAvailable5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram15 />
      <LucideInstagram16 />
      <LucideInstagram17 />
    </div>
  );
}

function Icon17() {
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

function Frame36() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable5 />
      <Icon17 />
    </div>
  );
}

function BibleStudyCard5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame32 />
          <Frame36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <BibleStudyCard3 />
      <BibleStudyCard4 />
      <BibleStudyCard5 />
    </div>
  );
}

function Pill6() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill6 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen6() {
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

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen6 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame41 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function LucideFileText6() {
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

function LucideInstagram18() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText6 />
    </div>
  );
}

function LucideSearch6() {
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

function LucideInstagram19() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch6 />
    </div>
  );
}

function LucideVideo6() {
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

function LucideInstagram20() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo6 />
    </div>
  );
}

function ResourcesAvailable6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram18 />
      <LucideInstagram19 />
      <LucideInstagram20 />
    </div>
  );
}

function Icon18() {
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

function Frame42() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable6 />
      <Icon18 />
    </div>
  );
}

function BibleStudyCard6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame38 />
          <Frame42 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill7() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill7 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen7() {
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

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen7 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame46 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function LucideFileText7() {
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

function LucideInstagram21() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText7 />
    </div>
  );
}

function LucideSearch7() {
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

function LucideInstagram22() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch7 />
    </div>
  );
}

function LucideVideo7() {
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

function LucideInstagram23() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo7 />
    </div>
  );
}

function ResourcesAvailable7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram21 />
      <LucideInstagram22 />
      <LucideInstagram23 />
    </div>
  );
}

function Icon19() {
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

function Frame47() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable7 />
      <Icon19 />
    </div>
  );
}

function BibleStudyCard7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame43 />
          <Frame47 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill8() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill8 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen8() {
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

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen8 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame51 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function LucideFileText8() {
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

function LucideInstagram24() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText8 />
    </div>
  );
}

function LucideSearch8() {
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

function LucideInstagram25() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch8 />
    </div>
  );
}

function LucideVideo8() {
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

function LucideInstagram26() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo8 />
    </div>
  );
}

function ResourcesAvailable8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram24 />
      <LucideInstagram25 />
      <LucideInstagram26 />
    </div>
  );
}

function Icon20() {
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

function Frame52() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable8 />
      <Icon20 />
    </div>
  );
}

function BibleStudyCard8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame48 />
          <Frame52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <BibleStudyCard6 />
      <BibleStudyCard7 />
      <BibleStudyCard8 />
    </div>
  );
}

function Pill9() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill9 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen9() {
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

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen9 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame57 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function LucideFileText9() {
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

function LucideInstagram27() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText9 />
    </div>
  );
}

function LucideSearch9() {
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

function LucideInstagram28() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch9 />
    </div>
  );
}

function LucideVideo9() {
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

function LucideInstagram29() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo9 />
    </div>
  );
}

function ResourcesAvailable9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram27 />
      <LucideInstagram28 />
      <LucideInstagram29 />
    </div>
  );
}

function Icon21() {
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

function Frame58() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable9 />
      <Icon21 />
    </div>
  );
}

function BibleStudyCard9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame54 />
          <Frame58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill10() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill10 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen10() {
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen10 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame62 />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function LucideFileText10() {
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

function LucideInstagram30() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText10 />
    </div>
  );
}

function LucideSearch10() {
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

function LucideInstagram31() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch10 />
    </div>
  );
}

function LucideVideo10() {
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

function LucideInstagram32() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo10 />
    </div>
  );
}

function ResourcesAvailable10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram30 />
      <LucideInstagram31 />
      <LucideInstagram32 />
    </div>
  );
}

function Icon22() {
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

function Frame63() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable10 />
      <Icon22 />
    </div>
  );
}

function BibleStudyCard10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame59 />
          <Frame63 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill11() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill11 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen11() {
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

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen11 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame67 />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function LucideFileText11() {
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

function LucideInstagram33() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText11 />
    </div>
  );
}

function LucideSearch11() {
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

function LucideInstagram34() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch11 />
    </div>
  );
}

function LucideVideo11() {
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

function LucideInstagram35() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo11 />
    </div>
  );
}

function ResourcesAvailable11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram33 />
      <LucideInstagram34 />
      <LucideInstagram35 />
    </div>
  );
}

function Icon23() {
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

function Frame68() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable11 />
      <Icon23 />
    </div>
  );
}

function BibleStudyCard11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame64 />
          <Frame68 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <BibleStudyCard9 />
      <BibleStudyCard10 />
      <BibleStudyCard11 />
    </div>
  );
}

function Pill12() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill12 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen12() {
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

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen12 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame73 />
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function LucideFileText12() {
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

function LucideInstagram36() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText12 />
    </div>
  );
}

function LucideSearch12() {
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

function LucideInstagram37() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch12 />
    </div>
  );
}

function LucideVideo12() {
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

function LucideInstagram38() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo12 />
    </div>
  );
}

function ResourcesAvailable12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram36 />
      <LucideInstagram37 />
      <LucideInstagram38 />
    </div>
  );
}

function Icon24() {
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

function Frame74() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable12 />
      <Icon24 />
    </div>
  );
}

function BibleStudyCard12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame70 />
          <Frame74 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill13() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill13 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen13() {
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

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen13 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame78 />
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function LucideFileText13() {
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

function LucideInstagram39() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText13 />
    </div>
  );
}

function LucideSearch13() {
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

function LucideInstagram40() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch13 />
    </div>
  );
}

function LucideVideo13() {
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

function LucideInstagram41() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo13 />
    </div>
  );
}

function ResourcesAvailable13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram39 />
      <LucideInstagram40 />
      <LucideInstagram41 />
    </div>
  );
}

function Icon25() {
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

function Frame79() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable13 />
      <Icon25 />
    </div>
  );
}

function BibleStudyCard13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame75 />
          <Frame79 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill14() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill14 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen14() {
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

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen14 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame83 />
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function LucideFileText14() {
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

function LucideInstagram42() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText14 />
    </div>
  );
}

function LucideSearch14() {
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

function LucideInstagram43() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch14 />
    </div>
  );
}

function LucideVideo14() {
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

function LucideInstagram44() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo14 />
    </div>
  );
}

function ResourcesAvailable14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram42 />
      <LucideInstagram43 />
      <LucideInstagram44 />
    </div>
  );
}

function Icon26() {
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

function Frame84() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable14 />
      <Icon26 />
    </div>
  );
}

function BibleStudyCard14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame80 />
          <Frame84 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <BibleStudyCard12 />
      <BibleStudyCard13 />
      <BibleStudyCard14 />
    </div>
  );
}

function Pill15() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill15 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen15() {
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

function Frame89() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen15 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame89 />
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function LucideFileText15() {
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

function LucideInstagram45() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText15 />
    </div>
  );
}

function LucideSearch15() {
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

function LucideInstagram46() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch15 />
    </div>
  );
}

function LucideVideo15() {
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

function LucideInstagram47() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo15 />
    </div>
  );
}

function ResourcesAvailable15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram45 />
      <LucideInstagram46 />
      <LucideInstagram47 />
    </div>
  );
}

function Icon27() {
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

function Frame90() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable15 />
      <Icon27 />
    </div>
  );
}

function BibleStudyCard15() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame86 />
          <Frame90 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill16() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill16 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen16() {
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

function Frame94() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen16 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame94 />
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function LucideFileText16() {
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

function LucideInstagram48() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText16 />
    </div>
  );
}

function LucideSearch16() {
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

function LucideInstagram49() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch16 />
    </div>
  );
}

function LucideVideo16() {
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

function LucideInstagram50() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo16 />
    </div>
  );
}

function ResourcesAvailable16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram48 />
      <LucideInstagram49 />
      <LucideInstagram50 />
    </div>
  );
}

function Icon28() {
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

function Frame95() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable16 />
      <Icon28 />
    </div>
  );
}

function BibleStudyCard16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame91 />
          <Frame95 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Pill17() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0" data-name="pill">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">Sunday Message</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Pill17 />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">JAN 29, 2026</p>
    </div>
  );
}

function LucideBookOpen17() {
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

function Frame99() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <LucideBookOpen17 />
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px] whitespace-pre-wrap">Psalms 11:20-39</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full whitespace-pre-wrap">His Steadfast Love Endures Forever</p>
        <Frame99 />
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function LucideFileText17() {
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

function LucideInstagram51() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideFileText17 />
    </div>
  );
}

function LucideSearch17() {
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

function LucideInstagram52() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideSearch17 />
    </div>
  );
}

function LucideVideo17() {
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

function LucideInstagram53() {
  return (
    <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="lucide/instagram">
      <LucideVideo17 />
    </div>
  );
}

function ResourcesAvailable17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="resources-available">
      <LucideInstagram51 />
      <LucideInstagram52 />
      <LucideInstagram53 />
    </div>
  );
}

function Icon29() {
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

function Frame100() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full">
      <ResourcesAvailable17 />
      <Icon29 />
    </div>
  );
}

function BibleStudyCard17() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[24px]" data-name="bible-study-card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[28px] relative w-full">
          <Frame96 />
          <Frame100 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <BibleStudyCard15 />
      <BibleStudyCard16 />
      <BibleStudyCard17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Row />
      <Frame21 />
      <Frame37 />
      <Frame53 />
      <Frame69 />
      <Frame85 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Container />
      <Frame15 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-0 px-[120px] py-[80px] top-[444px] w-[1440px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0d0d0d] flex-[1_0_0] h-[35.5px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[66px] not-italic text-[13px] text-center text-white top-[8px] tracking-[0.325px] uppercase">All Studies</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[35.5px] relative rounded-[8px] shrink-0 w-[94.961px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[47.5px] not-italic text-[#676767] text-[13px] text-center top-[8px] tracking-[0.325px] uppercase">Series</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[35.5px] relative rounded-[8px] shrink-0 w-[95.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[19.5px] left-[48.5px] not-italic text-[#676767] text-[13px] text-center top-[8px] tracking-[0.325px] uppercase">Books</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white h-[45.5px] relative rounded-[12px] shrink-0 w-[332.586px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-px pt-[5px] px-[5px] relative size-full">
        <Button5 />
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[45.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container11 />
    </div>
  );
}

function StudiesPage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[94.5px] items-start left-0 pb-px pt-[32px] px-[24px] top-[349px] w-[1349px]" data-name="StudiesPage">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

export default function BibleStudies() {
  return (
    <div className="bg-white relative size-full" data-name="bible studies">
      <Frame />
      <Frame4 />
      <Frame3 />
      <StudiesPage />
    </div>
  );
}