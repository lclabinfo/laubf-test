import imgDsc014521 from "figma:asset/8b9260ecd87064086e6838e1c3e473f61bf77201.png";
import imgDsc014522 from "figma:asset/47b3d8d7a4eae261889f59f1ae5b3b0b599631ec.png";
import imgDsc014523 from "figma:asset/b9107e08e56ccb7c4d2b40949661ca82f4e580e6.png";

function Overlay() {
  return <div className="absolute inset-0" data-name="overlay" style={{ backgroundImage: "linear-gradient(rgb(13, 13, 13) 0%, rgba(13, 13, 13, 0.25) 24.519%, rgba(13, 13, 13, 0) 50%, rgba(13, 13, 13, 0.25) 75%, rgb(13, 13, 13) 100%)" }} />;
}

function Frame() {
  return (
    <div className="h-[573px] overflow-clip relative shrink-0 w-[600px]">
      <div className="absolute h-[222px] left-[154px] rounded-[8px] top-[166px] w-[389.688px]" data-name="DSC01452 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014521} />
        </div>
      </div>
      <div className="absolute flex h-[316.968px] items-center justify-center left-[73px] top-[-173px] w-[387.232px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-25 flex-none">
          <div className="h-[192.317px] opacity-60 relative rounded-[8px] w-[337.584px]" data-name="DSC01452 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014522} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[316.968px] items-center justify-center left-[73px] top-[410px] w-[387.232px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-25">
          <div className="h-[192.317px] opacity-60 relative rounded-[8px] w-[337.584px]" data-name="DSC01452 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-[140.44%] left-0 max-w-none top-[-0.03%] w-full" src={imgDsc014523} />
            </div>
          </div>
        </div>
      </div>
      <Overlay />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center justify-center px-[33px] py-[21px] relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#fafafa] text-[18px] tracking-[-0.54px]">More about us</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[33px] items-start min-h-px min-w-px relative">
      <Header />
      <Link />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <div className="bg-[#0d0d0d] content-stretch flex gap-[64px] items-center justify-center pr-[120px] relative size-full" data-name="who-we-are">
      <Frame />
      <Frame1 />
    </div>
  );
}