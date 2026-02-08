import { BookOpen, FileText, HelpCircle, Video, ArrowUpRight } from 'lucide-react';
import { BibleStudy } from '../lib/studies';

interface StudyCardProps {
  study: BibleStudy;
  onClick: () => void;
}

export default function StudyCard({ study, onClick }: StudyCardProps) {
  // Format date to "JAN 29, 2026" format
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <div
      onClick={onClick}
      className="group bg-white relative rounded-[24px] cursor-pointer transition-all hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)] min-h-[232px]"
    >
      <div className="content-stretch flex flex-col items-start p-[28px] relative rounded-[inherit] h-full min-h-[232px]">
        {/* Top Section */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full mb-[20px]">
          {/* Series and Date Row */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[8px] py-[6px] relative rounded-[8px] shrink-0">
              <p className="font-medium leading-none not-italic relative shrink-0 text-[#676767] text-[12px] text-center tracking-[0.24px]">
                {study.series}
              </p>
            </div>
            <p className="font-medium leading-none not-italic relative shrink-0 text-[#676767] text-[14px] tracking-[-0.42px]">
              {formatDate(study.date)}
            </p>
          </div>

          {/* Title and Passage */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[8px] relative w-full">
              <p className="font-medium leading-[1.2] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] tracking-[-0.72px] w-full">
                {study.title}
              </p>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <BookOpen className="relative shrink-0 size-[16px] text-[#676767]" />
                <p className="flex-[1_0_0] leading-[1.4] min-h-px min-w-px not-italic relative text-[#676767] text-[16px] tracking-[-0.32px]">
                  {study.passage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Resource Icons and Arrow */}
        <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full mt-auto">
          {/* Resource Indicators */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            {/* Questions Icon */}
            {study.hasQuestions && (
              <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                <FileText className="relative shrink-0 size-[16px] text-[#313131]" />
              </div>
            )}
            
            {/* Answers Icon */}
            {study.hasAnswers && (
              <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                <HelpCircle className="relative shrink-0 size-[16px] text-[#313131]" />
              </div>
            )}
            
            {/* Transcript Icon */}
            {study.hasTranscript && (
              <div className="bg-[#f2f2f2] content-stretch flex items-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
                <Video className="relative shrink-0 size-[16px] text-[#313131]" />
              </div>
            )}
          </div>

          {/* Arrow Icon */}
          <ArrowUpRight className="relative shrink-0 size-[24px] text-[#676767] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      
      {/* Border and Shadow */}
      <div
        aria-hidden="true"
        className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] transition-shadow group-hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]"
      />
    </div>
  );
}