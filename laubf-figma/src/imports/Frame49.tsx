export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative size-full text-[#0d0d0d] whitespace-pre-wrap">
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[0.8] relative shrink-0 text-[80px] tracking-[-2.4px] w-full">Heading 1</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[56px] tracking-[-1.68px] w-full">Heading 2</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-none relative shrink-0 text-[40px] tracking-[-1.2px] w-full">Heading 3</p>
      <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.2] relative shrink-0 text-[32px] tracking-[-0.96px] w-full">Heading 4</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[1.4] relative shrink-0 text-[18px] tracking-[-0.36px] w-full">Body 1</p>
    </div>
  );
}