import svgPaths from "./svg-b399v9msw9";
import imgImageLbccTrueVineClub from "figma:asset/26715de276c78a216ce088bec4e0de59dbc6e981.png";
import imgImageWilliamLarsen from "figma:asset/b121dea28a66ed812f990fc75bcf2a9939f2f9c3.png";
import imgImageTroySegale from "figma:asset/396138dc2c647725cb032c4f687460ba0eb648ec.png";
import imgImageJoeyFishman from "figma:asset/7b5accc25396e9d29e2e5459217dc6a207cb58f1.png";
import imgImageTrueVineClubRush from "figma:asset/5cd8ccbe59d6888d9cdcc7428516aadc2fcbad4a.png";
import imgImageGallery1 from "figma:asset/aaa0eb91d9aa6f9d66220bba647a3a2836c05085.png";
import imgImageGallery2 from "figma:asset/e5aed798378e7491abfa92140ed1c4d71e4f48c9.png";
import imgImageGallery3 from "figma:asset/da112ee8e8d96da25757c04864092f94476600b7.png";
import imgImageGallery4 from "figma:asset/ca9aacec07f0941fab28cc45165832a094b0db3b.png";
import imgImageGallery5 from "figma:asset/c94779f8d7f85856d8817276a474eaed4e5a4db4.png";
import imgImageGallery6 from "figma:asset/baa0e66372c50518e5cfc65bed9641dc05ef4409.png";
import imgImageGallery7 from "figma:asset/17901e99ebd397ab96ada3f76ce5551d5cb0e2fb.png";
import imgImageGallery8 from "figma:asset/3cbfb0a0cce3815b7223beb2c8a41fffe103c405.png";
import imgImageGallery9 from "figma:asset/a123bbd4aa09e43d99dedc9feb44cdeee5776fdd.png";
import imgImageGallery10 from "figma:asset/0095eb2809db54634de36711911e70e1bfec946f.png";

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #676767)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[80px] w-[129.078px]" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[16px] left-[77px] not-italic text-[#676767] text-[12px] text-center top-0 tracking-[1.2px] uppercase">All Campuses</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28.797px] relative shrink-0 w-[172.852px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[28.8px] left-[86.5px] not-italic text-[#676767] text-[24px] text-center top-0 tracking-[-0.72px] uppercase w-[173px] whitespace-pre-wrap">LBCC Ministry</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[708.641px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[72px] left-[354px] not-italic text-[#0d0d0d] text-[80px] text-center top-[2.5px] tracking-[-2.4px]">LBCC True Vine Club</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[108.797px] items-center left-[24px] top-[128px] w-[1301px]" data-name="Container">
      <Paragraph />
      <Heading />
    </div>
  );
}

function ImageLbccTrueVineClub() {
  return (
    <div className="h-[557.57px] relative shrink-0 w-full" data-name="Image (LBCC True Vine Club)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLbccTrueVineClub} />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[557.57px] items-start left-[24px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[284.8px] w-[1301px]" data-name="Container">
      <ImageLbccTrueVineClub />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[946.367px] left-0 top-0 w-[1349px]" data-name="Container">
      <Button />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[28.797px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Regular',sans-serif] leading-[28.8px] min-h-px min-w-px not-italic relative text-[#676767] text-[24px] tracking-[-0.72px] uppercase whitespace-pre-wrap">Introduction</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[48px] left-0 not-italic text-[#0d0d0d] text-[48px] top-[2px] tracking-[-1.44px]">About the Ministry</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px]">{`"I am the true vine, and my Father is the gardener." (John 15:1)`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[51.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px] w-[801px] whitespace-pre-wrap">LBCC True Vine is our club at LBCC. Jesus is the true vine and we are his branches. We want to remain in Jesus together at LBCC through Bible study and other activities.</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[25.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[25.6px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px]">You can join us any time!</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[102.375px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[227.172px] items-start relative shrink-0 w-full" data-name="Section">
      <Paragraph1 />
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[48px] left-0 not-italic text-[#0d0d0d] text-[48px] top-[2px] tracking-[-1.44px]">Meet the Team</p>
    </div>
  );
}

function ImageWilliamLarsen() {
  return (
    <div className="h-[386.5px] relative shrink-0 w-full" data-name="Image (William Larsen)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWilliamLarsen} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWilliamLarsen />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[28.797px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Medium',sans-serif] leading-[28.8px] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[24px] whitespace-pre-wrap">William Larsen</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#676767] text-[14px] top-0 tracking-[0.7px] uppercase">Campus Director</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px] w-[383px] whitespace-pre-wrap">Serving at our campus ministry to help students grow in faith.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[113.797px] relative shrink-0 w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Container10 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[516.297px] items-start left-0 top-0 w-[386.5px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ImageTroySegale() {
  return (
    <div className="h-[386.5px] relative shrink-0 w-full" data-name="Image (Troy Segale)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTroySegale} />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageTroySegale />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[28.797px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Medium',sans-serif] leading-[28.8px] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[24px] whitespace-pre-wrap">Troy Segale</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#676767] text-[14px] top-0 tracking-[0.7px] uppercase">Club Advisor</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px] w-[383px] whitespace-pre-wrap">Serving at our campus ministry to help students grow in faith.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[113.797px] relative shrink-0 w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading4 />
        <Container14 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[516.297px] items-start left-[418.5px] top-0 w-[386.5px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function ImageJoeyFishman() {
  return (
    <div className="h-[386.5px] relative shrink-0 w-full" data-name="Image (Joey Fishman)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageJoeyFishman} />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#e8e8e8] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageJoeyFishman />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[28.797px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Medium',sans-serif] leading-[28.8px] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[24px] whitespace-pre-wrap">Joey Fishman</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#676767] text-[14px] top-0 tracking-[0.7px] uppercase">Student Leader</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#313131] text-[16px] top-[-0.5px] w-[383px] whitespace-pre-wrap">Serving at our campus ministry to help students grow in faith.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[113.797px] relative shrink-0 w-[386.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading5 />
        <Container18 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[516.297px] items-start left-0 top-[548.3px] w-[386.5px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[1064.594px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[1160.594px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading2 />
      <Container6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[358.945px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[48px] left-0 not-italic text-[#fafafa] text-[48px] top-[2px] tracking-[-1.44px]">Upcoming Events</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[75.84px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.836px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[20px] left-[34.5px] not-italic text-[#fafafa] text-[14px] text-center top-[0.5px] tracking-[0.7px] uppercase">View All</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Button1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#fafafa] text-[20px] tracking-[-0.4px] whitespace-pre-wrap">True Vine Club Rush</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[12px] top-[3px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_8133_7652)" id="Icon">
          <path d="M6 3V6L8 7" id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3e7757b0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_8133_7652">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-[20px] not-italic text-[#fafafa] text-[12px] top-0 tracking-[0.3px] uppercase">11:00 AM</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[50px] items-start left-0 top-[275.88px] w-[346.5px]" data-name="Container">
      <Heading7 />
      <Container22 />
    </div>
  );
}

function ImageTrueVineClubRush() {
  return (
    <div className="absolute h-[257.875px] left-0 top-0 w-[344.5px]" data-name="Image (True Vine Club Rush)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageTrueVineClubRush} />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-[10.5px] not-italic text-[#d32f2f] text-[10px] text-center top-[0.5px] tracking-[0.5px] uppercase">Sep</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[18px] left-[10.77px] not-italic text-[#0d0d0d] text-[18px] text-center top-[0.5px]">10</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[45px] items-start left-[16px] pt-[6px] px-[12px] rounded-[8px] top-[16px] w-[44.57px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#313131] border border-[#333] border-solid h-[259.875px] left-0 overflow-clip rounded-[12px] top-0 w-[346.5px]" data-name="Container">
      <ImageTrueVineClubRush />
      <Container24 />
    </div>
  );
}

function CampusDetailPage1() {
  return (
    <div className="h-[325.875px] relative shrink-0 w-[346.5px]" data-name="CampusDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
        <Container23 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[325.875px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start pl-[16px] relative size-full">
        <CampusDetailPage1 />
      </div>
    </div>
  );
}

function CarouselContent() {
  return (
    <div className="content-stretch flex flex-col h-[325.875px] items-start overflow-clip pl-[-16px] relative shrink-0 w-full" data-name="CarouselContent">
      <Container20 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#313131] opacity-50 relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#313131] opacity-50 relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function CampusDetailPage2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-start relative shrink-0 w-full" data-name="CampusDetailPage">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Carousel() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[389.875px] items-start relative shrink-0 w-full" data-name="Carousel">
      <CarouselContent />
      <CampusDetailPage2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#0d0d0d] h-[581.875px] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[48px] px-[48px] relative size-full">
        <Container19 />
        <Carousel />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[48px] left-0 not-italic text-[#0d0d0d] text-[48px] top-[2px] tracking-[-1.44px]">Snippets from the Ministry</p>
    </div>
  );
}

function ImageGallery() {
  return (
    <div className="h-[394.5px] relative shrink-0 w-full" data-name="Image (Gallery 1)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery1} />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[394.5px] top-0" data-name="Container">
      <ImageGallery />
    </div>
  );
}

function ImageGallery1() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 2)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery2} />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[410.5px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-0" data-name="Container">
      <ImageGallery1 />
    </div>
  );
}

function ImageGallery2() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 3)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery3} />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[615.75px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-0" data-name="Container">
      <ImageGallery2 />
    </div>
  );
}

function ImageGallery3() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 4)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery4} />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[410.5px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[205.25px]" data-name="Container">
      <ImageGallery3 />
    </div>
  );
}

function ImageGallery4() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 5)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery5} />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[615.75px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[205.25px]" data-name="Container">
      <ImageGallery4 />
    </div>
  );
}

function ImageGallery5() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 6)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery6} />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[410.5px]" data-name="Container">
      <ImageGallery5 />
    </div>
  );
}

function ImageGallery6() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 7)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery7} />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[205.25px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[410.5px]" data-name="Container">
      <ImageGallery6 />
    </div>
  );
}

function ImageGallery7() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 8)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery8} />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[410.5px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[410.5px]" data-name="Container">
      <ImageGallery7 />
    </div>
  );
}

function ImageGallery8() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 9)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery9} />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-[615.75px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[410.5px]" data-name="Container">
      <ImageGallery8 />
    </div>
  );
}

function ImageGallery9() {
  return (
    <div className="h-[189.25px] relative shrink-0 w-full" data-name="Image (Gallery 10)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGallery10} />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[189.25px] top-[615.75px]" data-name="Container">
      <ImageGallery9 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[805px] relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[901px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading8 />
      <Container25 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[48px] left-0 not-italic text-[#0d0d0d] text-[48px] top-[2px] tracking-[-1.44px]">Common Questions</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[789px] size-[16px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[30px] left-0 not-italic text-[#0d0d0d] text-[20px] top-[24px]">Do I need to be a Christian to join?</p>
        <Icon5 />
      </div>
    </div>
  );
}

function PrimitiveH() {
  return (
    <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-full" data-name="Primitive.h3">
      <PrimitiveButton />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[79px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <PrimitiveH />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[789px] size-[16px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[30px] left-0 not-italic text-[#0d0d0d] text-[20px] top-[24px]">What is a typical meeting like?</p>
        <Icon6 />
      </div>
    </div>
  );
}

function PrimitiveH1() {
  return (
    <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-full" data-name="Primitive.h3">
      <PrimitiveButton1 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col h-[79px] items-start pb-px relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-b border-solid inset-0 pointer-events-none" />
      <PrimitiveH1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[789px] size-[16px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="flex-[1_0_0] h-[78px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[30px] left-0 not-italic text-[#0d0d0d] text-[20px] top-[24px]">Is there a cost to join?</p>
        <Icon7 />
      </div>
    </div>
  );
}

function PrimitiveH2() {
  return (
    <div className="content-stretch flex h-[78px] items-start relative shrink-0 w-full" data-name="Primitive.h3">
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col h-[236px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <Container36 />
      <Container37 />
      <PrimitiveH2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[332px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading9 />
      <PrimitiveDiv />
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1] content-stretch flex flex-col gap-[96px] h-[3586.641px] items-start relative row-[1] shrink-0" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute gap-[96px] grid grid-cols-[__minmax(0,_805fr)_minmax(0,_1fr)] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[3586.641px] left-[24px] pr-[496px] top-[946.37px] w-[1301px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Regular',sans-serif] leading-[36px] left-[500.34px] not-italic text-[#676767] text-[24px] text-center top-0">{`Don't see your campus?`}</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[72px] left-[500.55px] not-italic text-[#0d0d0d] text-[48px] text-center top-[2px] tracking-[-1.44px]">Check out our other locations</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">CSULB</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Cal State Long Beach</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[113.29px] pb-px pt-[17px] px-[33px] rounded-[16px] top-0 w-[233.023px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">CSUF</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Cal State Fullerton</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[362.31px] pb-px pt-[17px] px-[33px] rounded-[16px] top-0 w-[206.461px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">UCLA</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Univ. of California, Los Angeles</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[584.77px] pb-px pt-[17px] px-[33px] rounded-[16px] top-0 w-[301.93px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">USC</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Univ. of Southern California</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[115.26px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[99px] w-[273.727px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">CSUDH</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Cal State Dominguez Hills</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[404.98px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[99px] w-[263.75px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">CCC</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">CCC Ministry</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[684.73px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[99px] w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">Mt. Sac</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Mt. San Antonio College</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[50.32px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[198px] w-[251.352px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">Golden State</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Golden State CC</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[317.67px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[198px] w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">Cypress</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Cypress College</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[533.67px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[198px] w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#676767] text-[12px] top-0 tracking-[0.3px] uppercase">Cal Poly Pomona</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#0d0d0d] text-[18px] top-px tracking-[-0.45px]">Cal Poly Pomona</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[4px] h-[83px] items-start left-[749.67px] pb-px pt-[17px] px-[33px] rounded-[16px] top-[198px] w-[200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[281px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[453px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Heading10 />
      <Container40 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f2f2f2] content-stretch flex flex-col h-[694px] items-start left-0 pt-[121px] px-[174.5px] top-[4629.01px] w-[1349px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e8e8e8] border-solid border-t inset-0 pointer-events-none" />
      <Container39 />
    </div>
  );
}

function CampusDetailPage() {
  return (
    <div className="absolute bg-[#fafafa] h-[5323.008px] left-0 top-[81px] w-[1349px]" data-name="CampusDetailPage">
      <Container />
      <Container3 />
      <Container38 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">About</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[89.852px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Who We Are</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[48.383px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Beliefs</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[118.508px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">{`Mission & Vision`}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[196px] items-start left-0 top-0 w-[221.797px]" data-name="Container">
      <Heading11 />
      <List />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">Get Involved</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[117.625px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Sunday Worship</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[82.406px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Bible Study</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[133.766px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Campus Ministries</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[48.523px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Events</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[196px] items-start left-[269.8px] top-0 w-[221.797px]" data-name="Container">
      <Heading12 />
      <List1 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">Resources</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[64.484px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Sermons</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[82.375px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Daily Bread</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[152.727px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Bible Study Materials</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[140.461px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">Member Resources</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[196px] items-start left-[539.59px] top-0 w-[221.797px]" data-name="Container">
      <Heading13 />
      <List2 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">Contact</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-0.5px] tracking-[-0.3125px]">123 Main Street</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Los Angeles, CA 90001</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[14.5px] w-[104.961px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">info@laubf.org</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-[2.5px] w-[114.5px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#99a1af] text-[16px] tracking-[-0.3125px]">(310) 555-1234</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[144px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[196px] items-start left-[809.39px] top-0 w-[221.805px]" data-name="Container">
      <Heading14 />
      <List3 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[515.59px] not-italic text-[#99a1af] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px]">© 2025 LA UBF. All Rights Reserved.</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col h-[65px] items-start pt-[41px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph9 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#101828] content-stretch flex flex-col gap-[48px] h-[309px] items-start left-[134.9px] px-[24px] top-[5484.01px] w-[1079.195px]" data-name="Footer">
      <Container61 />
      <Container66 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white h-[5873.008px] left-0 top-0 w-[1349px]" data-name="App">
      <CampusDetailPage />
      <Footer />
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[32px] left-[32px] top-[32px] w-[334px]" data-name="Heading 3">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[32px] left-0 not-italic text-[#0d0d0d] text-[32px] top-px tracking-[-1px]">Join Us</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8133_7684)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8133_7684">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#676767] text-[10px] top-[0.5px] tracking-[1px] uppercase">When</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0d0d0d] text-[16px] top-[0.5px] w-[240px] whitespace-pre-wrap">Thursdays @ 12:00 PM - 1:00 PM</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[39px] relative shrink-0 w-[239.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex gap-[12px] h-[39px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#676767] text-[10px] top-[0.5px] tracking-[1px] uppercase">Where</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0d0d0d] text-[14px] top-[0.5px]">LAC F101</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[35px] relative shrink-0 w-[62.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] h-[35px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium_Italic',sans-serif] italic leading-[18px] left-0 text-[#676767] text-[12px] top-0 w-[105px] whitespace-pre-wrap">* Pizza provided! 🍕</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[#fafafa] h-[146px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container70 />
        <Container75 />
        <Container80 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8133_7684)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8133_7684">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#676767] text-[10px] top-[0.5px] tracking-[1px] uppercase">When</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0d0d0d] text-[16px] top-[0.5px] w-[224px] whitespace-pre-wrap">Tuesdays @ 5:00 PM - 6:00 PM</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[39px] relative shrink-0 w-[223.883px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container85 />
        <Container86 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[12px] h-[39px] items-start relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <Container84 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#676767] text-[10px] top-[0.5px] tracking-[1px] uppercase">Where</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] left-0 not-italic text-[#0d0d0d] text-[14px] top-[0.5px]">Student Library</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[35px] relative shrink-0 w-[96.211px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container90 />
        <Container91 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[12px] h-[35px] items-start relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Medium_Italic',sans-serif] italic leading-[18px] left-0 text-[#676767] text-[12px] top-0 w-[108px] whitespace-pre-wrap">* Evening fellowship</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="bg-[#fafafa] h-[146px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container82 />
        <Container87 />
        <Container92 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[316px] items-start relative shrink-0 w-full" data-name="Container">
      <Container69 />
      <Container81 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#0d0d0d] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[15px] left-0 not-italic text-[#676767] text-[10px] top-[0.5px] tracking-[1px] uppercase">Contact</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[28px] left-0 not-italic text-[#0d0d0d] text-[18px] top-[0.5px]">lbcc@laubf.org</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[47px] relative shrink-0 w-[119.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Container97 />
        <Link13 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[16px] h-[47px] items-start relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container96 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-solid border-t inset-0 pointer-events-none" />
      <Container94 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[233.64px] size-[16px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-[#0d0d0d] h-[52px] relative rounded-[12px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[334px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[20px] left-[84.35px] not-italic text-[14px] text-white top-[16.5px] tracking-[0.35px] uppercase">Start Bible Study</p>
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[32.81px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8133_7656)" id="Icon">
          <path d={svgPaths.p22916300} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22f6cc00} id="Vector_2" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M11.6667 4.33333H11.6733" id="Vector_3" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8133_7656">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-[#f2f2f2] col-[1] relative rounded-[12px] row-[1] self-stretch shrink-0" data-name="Link">
      <Icon14 />
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[16px] left-[56.81px] not-italic text-[#0d0d0d] text-[12px] top-[12px] tracking-[0.3px] uppercase">Instagram</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[41.56px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_8133_7706)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #0D0D0D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_8133_7706">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-[#f2f2f2] col-[2] relative rounded-[12px] row-[1] self-stretch shrink-0" data-name="Link">
      <Icon15 />
      <p className="absolute font-['Helvetica_Neue:Bold',sans-serif] leading-[16px] left-[65.56px] not-italic text-[#0d0d0d] text-[12px] top-[12px] tracking-[0.3px] uppercase">Website</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[40px] relative shrink-0 w-[334px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[12px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] relative size-full">
        <Link15 />
        <Link16 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[120px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link14 />
      <Container99 />
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[572px] items-start left-[32px] top-[96px] w-[334px]" data-name="Container">
      <Container68 />
      <Container93 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return <div className="absolute bg-[#0d0d0d] h-[4px] left-0 top-0 w-[398px]" data-name="Container" />;
}

function CampusDetailPage3() {
  return (
    <div className="absolute bg-white border border-[#e8e8e8] border-solid h-[702px] left-[925px] overflow-clip rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(229,231,235,0.2),0px_4px_6px_-4px_rgba(229,231,235,0.2)] top-[1027.37px] w-[400px]" data-name="CampusDetailPage">
      <Heading15 />
      <Container67 />
      <Container100 />
    </div>
  );
}

function LaubfLogo1() {
  return (
    <div className="absolute contents inset-[2.32%_0.46%]" data-name="laubf-logo">
      <div className="absolute inset-[2.32%_0.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.4629 45.7733">
          <path d={svgPaths.p9d37300} fill="var(--fill-0, #3667B1)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.87%_24.49%_17.82%_50.13%]" data-name="Vector_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7207 15.9857">
          <path d={svgPaths.p265ff300} fill="var(--fill-0, #3667B1)" id="Vector_2" />
        </svg>
      </div>
    </div>
  );
}

function LaubfLogo() {
  return (
    <div className="h-[48px] overflow-clip relative shrink-0 w-full" data-name="LaubfLogo">
      <LaubfLogo1 />
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[48px] relative shrink-0 w-[58px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <LaubfLogo />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[97.05px] size-[16px] top-[21.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[1_0_0] h-[59px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-[47px] not-italic text-[#101828] text-[18px] text-center top-[17px]">Our Church</p>
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[81.01px] size-[16px] top-[21.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[59px] relative shrink-0 w-[97.008px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-[39.5px] not-italic text-[#3667b1] text-[18px] text-center top-[17px]">Ministries</p>
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[89.34px] size-[16px] top-[21.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[59px] relative shrink-0 w-[105.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-[43.5px] not-italic text-[#101828] text-[18px] text-center top-[17px]">Resources</p>
        <Icon18 />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[27px] relative shrink-0 w-[51px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] left-0 not-italic text-[#101828] text-[18px] top-px">Giving</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="h-[59px] relative shrink-0 w-[462.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button14 />
        <Button15 />
        <Button16 />
        <Link18 />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.367px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#6a7282] text-[14px] tracking-[-0.1504px]">Member Login</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="bg-[#3667b1] flex-[1_0_0] h-[47px] min-h-px min-w-px relative rounded-[16777200px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
          <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-white">{`I'm New`}</p>
        </div>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[47px] relative shrink-0 w-[224.703px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Link19 />
        <Link20 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.008px] relative size-full">
          <Link17 />
          <Container102 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[81px] items-start left-0 pb-px px-[58.5px] top-0 w-[1349px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <Container101 />
    </div>
  );
}

export default function CurrentLaUbf() {
  return (
    <div className="bg-white relative size-full" data-name="[current] LA UBF">
      <App />
      <CampusDetailPage3 />
      <Navbar />
    </div>
  );
}