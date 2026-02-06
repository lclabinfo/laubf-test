import svgPaths from "./svg-kllu4q6jq6";
import clsx from "clsx";
import imgHeroV0 from "figma:asset/1b3d4c9f3753860284fc7b541bda2063754fd09b.png";
import imgImageYouthNight from "figma:asset/1edd59e2463c590c7195b56e49e5e76c5f00efac.png";
import imgImageVictoryConf from "figma:asset/83fac7c25842833d1ff64248126a623f06c37190.png";
import imgImageTheGathering from "figma:asset/28a86a99bbb5d892b7a3e7fb874f2caa4ae6edc8.png";
import imgWhatwedoCard from "figma:asset/445b913c155a1ce01ebd61135e1021d16ff4ab75.png";
import imgWhatwedoCard1 from "figma:asset/6331a7002928e5827fa984b7239563e24081fe6d.png";
import imgWhatwedoCard2 from "figma:asset/f3a9203ff5eb53c5cca22ed3f2cc45090800f3a8.png";
import imgContainer from "figma:asset/dc42ca839f5b61934e3b9fdeaacdc63a86b9aa5f.png";
import imgContainer1 from "figma:asset/f4e689eac8f3ae1f8982b8689f9ecc9ecd263efa.png";
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return (
    <div className={clsx("h-[24px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Icon7VectorBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[29.17%]">
      <BackgroundImage2 additionalClassNames="absolute inset-[-10%]">{children}</BackgroundImage2>
    </div>
  );
}
type IconBackgroundImage3Props = {
  additionalClassNames?: string;
};

function IconBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<IconBackgroundImage3Props>) {
  return (
    <div className={clsx("absolute size-[20px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage1() {
  return (
    <div className="aspect-[1920/1080] basis-0 grow min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgContainer1} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0 rounded-[16px]" />
      </div>
      <ContainerBackgroundImage />
    </div>
  );
}

function ContainerBackgroundImage() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[calc(50%-0.33px)] pl-[5px] pr-px py-px rounded-[1.67772e+07px] size-[80px] top-[calc(50%+0.54px)] translate-x-[-50%] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <IconBackgroundImage2 />
    </div>
  );
}

function IconBackgroundImage2() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p143c4b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}
type LinkBackgroundImageAndText1Props = {
  text: string;
};

function LinkBackgroundImageAndText1({ text }: LinkBackgroundImageAndText1Props) {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[20px] py-[18px] relative rounded-[1.67772e+07px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.4395px] uppercase">{text}</p>
      <IconBackgroundImage1 />
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage1>
      <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d="M7 17L17 7" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage1>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="flex flex-col justify-end size-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-end not-italic p-[20px] relative size-full text-white">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[32px] tracking-[-0.96px] w-full">{text}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] tracking-[-0.54px] w-full">{text1}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <p className={clsx("absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.1] left-[calc(50%-663px)] not-italic text-[0px] text-[160px] text-nowrap text-white tracking-[-6.4px] translate-y-[100%]", additionalClassNames)}>
      <span>{`Welcome to `}</span>
      <span className="font-['DM_Serif_Text:Italic',sans-serif] italic">{text}</span>
    </p>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-0 py-[16px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.3125px]">{text}</p>
        <IconBackgroundImage />
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage2 additionalClassNames="relative shrink-0 size-[16px]">
      <g id="Icon">
        <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      </g>
    </BackgroundImage2>
  );
}
type LinkBackgroundImageAndTextProps = {
  text: string;
};

function LinkBackgroundImageAndText({ text }: LinkBackgroundImageAndTextProps) {
  return (
    <BackgroundImage3>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.3125px]">{text}</p>
    </BackgroundImage3>
  );
}

function LaubfLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[58px]" data-name="laubf-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 48">
        <g id="laubf-logo">
          <path d={svgPaths.p3ec03e70} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3ca1efc0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
      <LinkBackgroundImageAndText text="Home" />
      <LinkBackgroundImageAndText text="About" />
      <ButtonBackgroundImageAndText text="Ministries" />
      <ButtonBackgroundImageAndText text="Campuses" />
      <ButtonBackgroundImageAndText text="Media" />
    </div>
  );
}

function Link() {
  return (
    <BackgroundImage3>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.3125px]">Member Login</p>
    </BackgroundImage3>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[1.67772e+07px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(54,103,177,0.2),0px_4px_6px_-4px_rgba(54,103,177,0.2)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[25px] py-[11px] relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.3125px]">{`I'm New`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex gap-[120px] items-start justify-center left-[calc(50%+0.5px)] top-[36px] translate-x-[-50%]" data-name="nav">
      <LaubfLogo />
      <Container />
      <Container1 />
    </div>
  );
}

function HeroV() {
  return (
    <div className="h-[1080px] relative shrink-0 w-[1440px]" data-name="hero-v0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[104.35%] left-[-8.69%] max-w-none top-[-4.31%] w-[117.38%]" src={imgHeroV0} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1440 1080\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5199999809265137\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0.0000023604 52.4 -145.19 0.0000065404 720 540)\\\'><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <Nav />
      <BackgroundImageAndText text="LA UBF" additionalClassNames="bottom-[176px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-white">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[40px] text-nowrap tracking-[-1.2px]">
        <span>{`A Christian Ministry for `}</span>
        <span className="font-['DM_Serif_Text:Italic',sans-serif] italic">{`College Students `}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[84px] leading-[1.4] relative shrink-0 text-[20px] text-center tracking-[-0.6px] w-[960px]">University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.</p>
    </div>
  );
}

function Icon() {
  return (
    <BackgroundImage1>
      <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 5L19 12L12 19" id="Vector_2" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </BackgroundImage1>
  );
}

function Link2() {
  return (
    <div className="bg-white content-stretch flex gap-[9px] items-center px-[40px] py-[22px] relative rounded-[1.67772e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.2),0px_8px_10px_-6px_rgba(0,0,0,0.2)] shrink-0" data-name="Link">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#3667b1] text-[20px] text-center text-nowrap tracking-[-0.4492px]">{`I'm New`}</p>
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex flex-col gap-[40px] items-center overflow-clip pb-[64px] pt-[80px] px-0 relative shrink-0 w-[1440px]">
      <Frame3 />
      <Link2 />
    </div>
  );
}

function Icon1() {
  return (
    <BackgroundImage1>
      <path d="M7 7H17V17" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1397e800} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </BackgroundImage1>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center px-0 py-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[18px] text-nowrap tracking-[-0.4395px]">View All Events</p>
      <Icon1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-0 relative w-full">
          <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[56px] text-black text-nowrap tracking-[-1.68px]">Upcoming Events</p>
          <Link3 />
        </div>
      </div>
    </div>
  );
}

function ImageYouthNight() {
  return (
    <div className="absolute h-[500px] left-0 opacity-80 top-0 w-[757.391px]" data-name="Image (Youth Night)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageYouthNight} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[500px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[757.391px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-[#3667b1] h-[28px] left-0 rounded-[1.67772e+07px] top-0 w-[165.867px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[4.5px] tracking-[0.5496px] uppercase">Featured Event</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[60px] left-0 top-[44px] w-[393.828px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[60px] left-0 not-italic text-[60px] text-nowrap text-white top-[0.5px] tracking-[-1.2363px] uppercase">Youth Night</p>
    </div>
  );
}

function Icon2() {
  return (
    <IconBackgroundImage3 additionalClassNames="left-0 top-[2px]">
      <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
      <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
      <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
      <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
    </IconBackgroundImage3>
  );
}

function Text() {
  return (
    <BackgroundImage4 additionalClassNames="w-[170.781px]">
      <Icon2 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[28px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-0.5px] tracking-[-0.3125px] w-[143px]">AUG 20 @ 6:30 PM</p>
    </BackgroundImage4>
  );
}

function Icon3() {
  return (
    <IconBackgroundImage3 additionalClassNames="left-0 top-[2px]">
      <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
      <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
    </IconBackgroundImage3>
  );
}

function Text1() {
  return (
    <BackgroundImage4 additionalClassNames="w-[143.258px]">
      <Icon3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[28px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Main Sanctuary</p>
    </BackgroundImage4>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center left-0 top-[112px] w-[393.828px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[136px] relative shrink-0 w-[393.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Heading1 />
        <Container4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon7VectorBackgroundImage>
        <path d={svgPaths.p1f5bd900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      </Icon7VectorBackgroundImage>
      <Icon7VectorBackgroundImage>
        <path d={svgPaths.p1bc53b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
      </Icon7VectorBackgroundImage>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[136px] items-end justify-between left-[48px] top-[316px] w-[661.391px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_1] bg-black h-[500px] justify-self-stretch overflow-clip relative rounded-[32px] shrink-0" data-name="Container">
      <ImageYouthNight />
      <Container2 />
      <Container7 />
    </div>
  );
}

function ImageVictoryConf() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[366.695px]" data-name="Image (Victory Conf.)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageVictoryConf} />
    </div>
  );
}

function Container9() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-[238px] left-0 top-0 w-[366.695px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] h-[36px] left-[261.39px] rounded-[14px] top-[24px] w-[81.305px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[16px] not-italic text-[14px] text-black text-nowrap top-[8.5px] tracking-[-0.1504px]">OCT 12</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] top-[178px] w-[232.156px]" data-name="Heading 3">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[36px] not-italic relative shrink-0 text-[30px] text-nowrap text-white tracking-[0.3955px] uppercase">Victory Conf.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#e8e8e8] h-[238px] overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <ImageVictoryConf />
      <Container9 />
      <Container10 />
      <Heading2 />
    </div>
  );
}

function ImageTheGathering() {
  return (
    <div className="absolute h-[238px] left-0 top-0 w-[366.695px]" data-name="Image (The Gathering)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageTheGathering} />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[238px] left-0 top-0 w-[366.695px]" data-name="Container" />;
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[36px] not-italic relative shrink-0 text-[30px] text-nowrap text-white tracking-[0.3955px] uppercase">The Gathering</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px]">Young Adults</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[64px] items-start left-[24px] top-[150px] w-[241.07px]" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#f3f4f6] h-[238px] overflow-clip relative rounded-[32px] shrink-0 w-full" data-name="Container">
      <ImageTheGathering />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-[24px] grid grid-cols-[minmax(0px,_2fr)_minmax(0px,_1fr)] grid-rows-[repeat(1,_fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container15 />
    </div>
  );
}

function UpcomingEvents() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full" data-name="UpcomingEvents">
      <Frame2 />
      <Container16 />
    </div>
  );
}

function WhatwedoCard() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative rounded-[16px] shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgWhatwedoCard} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <BackgroundImage text="Sunday Worship" text1="Experience meaningful worship and Bible-centered messages." />
    </div>
  );
}

function WhatwedoCard1() {
  return (
    <div className="[grid-area:2_/_1] place-self-stretch relative rounded-[16px] shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgWhatwedoCard1} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <BackgroundImage text="Bible Study" text1="Experience meaningful worship and Bible-centered messages." />
    </div>
  );
}

function WhatwedoCard2() {
  return (
    <div className="[grid-area:2_/_2] place-self-stretch relative rounded-[16px] shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <img alt="" className="absolute h-[205.23%] left-0 max-w-none top-[-17.11%] w-full" src={imgWhatwedoCard2} />
        </div>
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <BackgroundImage text="Fellowship" text1="Experience meaningful worship and Bible-centered messages." />
    </div>
  );
}

function WhatwedoCard3() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative rounded-[16px] shrink-0" data-name="whatwedo-card">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgHeroV0} />
        <div className="absolute bg-gradient-to-b from-[43.75%] from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[68.75%] to-[rgba(0,0,0,0.71)]" />
      </div>
      <BackgroundImage text="College Campus Ministry" text1="Experience meaningful worship and Bible-centered messages." />
    </div>
  );
}

function Frame4() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[560px] relative shrink-0 w-full">
      <WhatwedoCard />
      <WhatwedoCard1 />
      <WhatwedoCard2 />
      <WhatwedoCard3 />
    </div>
  );
}

function WhatWeDo() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-full" data-name="WhatWeDo">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[56px] text-black text-nowrap tracking-[-1.68px]">What We Do</p>
      <Frame4 />
    </div>
  );
}

function EventsParticipation() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Events & Participation">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[120px] items-center p-[120px] relative w-full">
          <UpcomingEvents />
          <WhatWeDo />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#e7e7e7] text-[56px] text-nowrap tracking-[-1.68px]">
        <span>{`This Week’s `}</span>
        <span className="font-['DM_Serif_Text:Italic',sans-serif] italic">Message</span>
      </p>
      <LinkBackgroundImageAndText1 text="View All MESSAGES" />
    </div>
  );
}

function ImageSermonBackground() {
  return <div className="absolute h-[565.711px] left-0 opacity-70 top-0 w-[1320px]" data-name="Image (Sermon Background)" />;
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[5px] pr-px py-px relative rounded-[1.67772e+07px] shrink-0 size-[80px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <IconBackgroundImage2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex items-center justify-center px-[16px] py-[12px] relative shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] text-center text-nowrap tracking-[1.2px] uppercase">SUNDAY WORSHIP • Dec 29</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.29px)] top-[calc(50%+0.14px)] translate-x-[-50%] translate-y-[-50%] w-[659.422px]">
      <div className="absolute h-[355px] left-[calc(50%-0.21px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[499px]">
        <div className="absolute inset-[-33.15%_-23.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 734.4 590.4">
            <g filter="url(#filter0_f_2019_823)" id="Ellipse 2">
              <ellipse cx="367.2" cy="295.2" fill="var(--fill-0, black)" fillOpacity="0.38" rx="249.5" ry="177.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="590.4" id="filter0_f_2019_823" width="734.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_2019_823" stdDeviation="58.85" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Container17 />
      <Text2 />
      <p className="font-['DM_Serif_Text:Italic',sans-serif] italic leading-none relative shrink-0 text-[48px] text-center text-nowrap text-white tracking-[-1.8px] uppercase">ETERNAL LIFE</p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic relative shrink-0 text-[#d1d5dc] text-[20px] text-center text-nowrap tracking-[0.0508px] uppercase">Pastor WILLIAM LARSEN</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[565.711px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgContainer} />
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-0 rounded-[16px]" />
      </div>
      <ImageSermonBackground />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Container18 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#e7e7e7] text-[32px] text-nowrap tracking-[-0.96px]">Featured Videos</p>
      <LinkBackgroundImageAndText1 text="View All videos" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
      <ContainerBackgroundImage1 />
    </div>
  );
}

function Videos() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="videos">
      <Frame9 />
      {[...Array(2).keys()].map((_, i) => (
        <ContainerBackgroundImage1 />
      ))}
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Videos />
    </div>
  );
}

function MessageVideos() {
  return (
    <div className="bg-[#0d0d0d] relative shrink-0 w-full" data-name="Message + Videos">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center p-[120px] relative w-full">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="absolute border-[60px] border-[rgba(255,255,255,0.2)] border-solid left-[904.8px] rounded-[1.67772e+07px] size-[600px] top-[-122.59px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[rgba(255,255,255,0.2)] blur-3xl filter left-[-136.8px] rounded-[1.67772e+07px] size-[400px] top-[335.59px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute h-[613px] left-0 opacity-10 top-0 w-[1368px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[30px] left-[417.91px] rounded-[1.67772e+07px] top-0 w-[164.172px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[81px] not-italic text-[12px] text-center text-nowrap text-white top-[7px] tracking-[1.2px] translate-x-[-50%] uppercase">First Time Here?</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[96px] left-[24px] top-[62px] w-[952px]" data-name="Heading 2">
      <p className="absolute font-['Tinos:Italic',sans-serif] italic leading-[96px] left-[476.14px] text-[96px] text-center text-nowrap text-white top-[0.5px] translate-x-[-50%]">You Belong Here.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[65px] left-[164px] top-[190px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[32.5px] left-[336.34px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center top-[-0.5px] tracking-[0.0508px] translate-x-[-50%] w-[627px]">{`We know visiting a new place can be intimidating. We want to make it easy. Connect with us and let's start the conversation.`}</p>
    </div>
  );
}

function Icon5() {
  return (
    <IconBackgroundImage3 additionalClassNames="left-[115.97px] top-[17px]">
      <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </IconBackgroundImage3>
  );
}

function Link4() {
  return (
    <div className="bg-white h-[54px] relative rounded-[1.67772e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.2),0px_8px_10px_-6px_rgba(0,0,0,0.2)] shrink-0 w-[175.969px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[74px] not-italic text-[#3667b1] text-[14px] text-center text-nowrap top-[17.5px] tracking-[1.2496px] translate-x-[-50%] uppercase">{`I'm New`}</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[188.9px] size-[20px] top-[17px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2019_816)" id="Icon">
          <path d={svgPaths.p2afb5370} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_2019_816">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[54px] relative rounded-[1.67772e+07px] shrink-0 w-[249.898px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[111px] not-italic text-[14px] text-center text-nowrap text-white top-[17.5px] tracking-[1.2496px] translate-x-[-50%] uppercase">Ask a Question</p>
        <Icon6 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[54px] items-start justify-center left-[24px] pl-0 pr-[0.008px] py-0 top-[303px] w-[952px]" data-name="Container">
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[357px] left-[184px] top-[128px] w-[1000px]" data-name="Container">
      <Text3 />
      <Heading />
      <Paragraph1 />
      <Container22 />
    </div>
  );
}

function ImNewSection() {
  return (
    <div className="bg-[#061b4f] h-[613px] overflow-clip relative shrink-0 w-full" data-name="ImNewSection">
      <Container21 />
      <Container23 />
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[455px] relative shrink-0 w-[1440px]" data-name="footer">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[247.69%] left-[-8.69%] max-w-none top-[-147.55%] w-[117.38%]" src={imgHeroV0} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1440 455\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.5199999809265137\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0.0000023604 22.076 -145.19 0.0000027555 720 227.5)\\\'><stop stop-color=\\\'rgba(0,0,0,0.4)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <BackgroundImageAndText text="LA UBF" additionalClassNames="bottom-[175.79px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <HeroV />
      <Frame />
      <EventsParticipation />
      <MessageVideos />
      <ImNewSection />
      <Footer />
    </div>
  );
}