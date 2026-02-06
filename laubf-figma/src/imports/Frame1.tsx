export default function Frame() {
  return (
    <div className="bg-white font-['Inter:Medium',sans-serif] font-medium leading-[0] not-italic relative size-full text-[#1e1e1e] text-[24px] tracking-[-0.456px]">
      <ol className="absolute block left-[675px] list-decimal top-[459.27px] w-[456px]" start="1">
        <li className="mb-0 ms-[36px]">
          <span className="leading-[1.5]">A little excerpt about “who we are”</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[1.5]">How to join us (sunday service, campus gbs, 1-to-1)</span>
        </li>
        <ul className="absolute left-[675px] mb-0 top-[459.27px] w-[456px]">
          <li className="list-disc ms-[72px]">
            <span className="leading-[1.5]">link to campuses if visiting campus</span>
          </li>
        </ul>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[1.5]">What to expect</span>
        </li>
        <li className="mb-0 ms-[36px]">
          <span className="leading-[1.5]">plan a visit form</span>
        </li>
        <li className="ms-[36px]">
          <span className="leading-[1.5]">contact info</span>
        </li>
      </ol>
      <div className="absolute leading-[1.5] left-[2755px] text-nowrap top-[465.27px] whitespace-pre">
        <p className="mb-0">(recurring events like 16 steps</p>
        <p>or discipleship on a separate list)</p>
      </div>
    </div>
  );
}