import svgPaths from "./svg-petlu9zol1";
import imgHeroV0 from "figma:asset/37767e86d11cc6e451bdd9045feb0da92cc9165f.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">{children}</div>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-0 py-[16px] relative">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.3125px]">{text}</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}
type LinkTextProps = {
  text: string;
};

function LinkText({ text }: LinkTextProps) {
  return (
    <Wrapper>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[-0.3125px]">{text}</p>
    </Wrapper>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 text-nowrap w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[48px] tracking-[-1.44px]">You’re</p>
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-none relative shrink-0 text-[120px]">Welcome</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] relative shrink-0 text-[48px] tracking-[-1.44px]">here.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start not-italic relative shrink-0 text-white w-full">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.4492px] w-full">We’re a campus-based Christian community helping students study the Bible, grow in faith, and find purpose during college.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 5L19 12L12 19" id="Vector_2" stroke="var(--stroke-0, #3667B1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex gap-[9px] items-center px-[40px] py-[22px] relative rounded-[1.67772e+07px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.2),0px_8px_10px_-6px_rgba(0,0,0,0.2)] shrink-0" data-name="Link">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#3667b1] text-[20px] text-center text-nowrap tracking-[-0.4492px]">{`I'm New`}</p>
      <Icon />
    </div>
  );
}

function HeroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[140px] top-[442px] w-[691px]" data-name="hero-content">
      <Frame1 />
      <Link />
    </div>
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
      <LinkText text="Home" />
      <LinkText text="About" />
      <ButtonText text="Ministries" />
      <ButtonText text="Campuses" />
      <ButtonText text="Media" />
    </div>
  );
}

function Link1() {
  return (
    <Wrapper>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.3125px]">Member Login</p>
    </Wrapper>
  );
}

function Link2() {
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
      <Link1 />
      <Link2 />
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
    <div className="h-[1080px] relative shrink-0 w-full" data-name="hero-v0">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-6.24%] max-w-none top-0 w-[112.49%]" src={imgHeroV0} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.72)] inset-0" />
      </div>
      <HeroContent />
      <Nav />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center px-[36px] py-[18px] relative rounded-[1.67772e+07px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.4492px]">Who We Are</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center text-white w-full">
      <p className="font-['Instrument_Serif:Regular',sans-serif] leading-none relative shrink-0 text-[48px] w-full">
        <span>{`A Christian Ministry for `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic">College Students</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[20px] tracking-[-0.6px] w-full">University Bible Fellowship (UBF) is an international, non-denominational evangelical church centered on Bible study and discipleship. We especially serve college students, raising lifelong disciples of Jesus Christ who love one another and take part in God’s global mission.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[960px] relative shrink-0 w-full">
      <Link3 />
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center overflow-clip pb-[96px] pt-[56px] px-0 relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full">
      <HeroV />
      <Frame2 />
    </div>
  );
}