import { useState } from 'react';
import { ChevronLeft, BookOpen, Headphones, Menu, Download, PanelLeftOpen, PanelLeftClose, ChevronDown, ChevronUp } from 'lucide-react';
import { dailyBreads } from '../lib/dailyBread';
import { cn } from './ui/utils';
import { AudioPlayer } from './AudioPlayer';

interface DailyBreadPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function DailyBreadPage({ onNavigate }: DailyBreadPageProps) {
  const todayBread = dailyBreads[0];
  
  // States
  const [showBibleSidebar, setShowBibleSidebar] = useState(false);
  const [bibleExpanded, setBibleExpanded] = useState(true);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

  return (
    <div className="bg-white min-h-screen font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* HEADER BAR */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#e8e8e8] h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-[#676767] hover:text-[#0d0d0d] transition-colors text-xs uppercase tracking-wider font-bold"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <div className="h-5 w-px bg-[#e8e8e8]" />
          <h1 className="text-sm font-medium text-[#0d0d0d] tracking-tight">
            {todayBread.title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowBibleSidebar(!showBibleSidebar)}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#676767] hover:text-[#3667b1] transition-colors"
          >
            {showBibleSidebar ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            <span className="hidden md:inline">{showBibleSidebar ? 'Hide' : 'Show'} Bible</span>
          </button>
          <div className="h-5 w-px bg-[#e8e8e8] hidden md:block" />
          <button 
            onClick={() => window.open('https://ubf.org/daily-breads/list', '_blank')}
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#676767] hover:text-[#3667b1] transition-colors"
          >
            <Menu className="w-4 h-4" /> View Archive
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        
        {/* LEFT SIDEBAR - BIBLE (Optional) */}
        <div 
          className={cn(
            "flex-col bg-[#fafafa] border-r border-[#e8e8e8] overflow-hidden transition-all duration-300",
            showBibleSidebar ? "flex w-[45%]" : "hidden w-0"
          )}
        >
          {/* Tab Header */}
          <div className="border-b border-[#e8e8e8] px-6 pt-6 pb-4 bg-[#fafafa]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0d0d] text-white">
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-xs font-medium uppercase tracking-wider">Scripture Reference</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-[570px] mx-auto px-8 pt-8 pb-40">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-[#e0e0e0] pb-4">
                  <h2 className="text-[20px] font-black text-[#0d0d0d] uppercase tracking-tight">
                    {todayBread.passage}
                  </h2>
                </div>
                
                <div 
                  className="prose prose-base max-w-none prose-p:text-[#4b5563] prose-p:leading-relaxed font-['Georgia',_serif]"
                  dangerouslySetInnerHTML={{ __html: todayBread.bibleText || '<p>Scripture text not available.</p>' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT - DAILY BREAD */}
        <div className={cn(
          "flex flex-col bg-white overflow-hidden transition-all duration-300",
          showBibleSidebar ? "flex-1" : "w-full"
        )}>
          
          {/* Tab Header */}
          <div className="border-b border-[#e8e8e8] px-6 pt-6 pb-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d0d0d] text-white">
                <span className="text-xs font-medium uppercase tracking-wider">Daily Bread</span>
              </div>
              {todayBread.audioUrl && (
                <button
                  onClick={() => setShowAudioPlayer(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider text-[#676767] hover:bg-[#f9f9f9] transition-colors ml-auto"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  Listen
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className={cn(
              "mx-auto px-12 pt-12 pb-40",
              showBibleSidebar ? "max-w-[570px]" : "max-w-[900px]"
            )}>
              <div className="flex flex-col gap-10">
                
                {/* HEADER */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#3667b1] px-3 py-1 rounded-full">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white">Daily Bread</p>
                      </div>
                      <p className="text-[13px] font-medium text-[#676767] tracking-[0.325px]">
                        {todayBread.displayDate}
                      </p>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#e5e5e5] hover:bg-[#fafafa] transition-colors">
                      <Download className="w-3.5 h-3.5 text-[#676767]" />
                      <span className="text-[11px] font-bold uppercase tracking-[0.275px] text-[#676767]">
                        Download DOCX
                      </span>
                    </button>
                  </div>

                  <h1 className="text-[56px] font-medium leading-[56px] tracking-[-1.68px] text-[#0d0d0d]">
                    {todayBread.title}
                  </h1>

                  <div className="flex items-center gap-3 text-[13px] font-medium text-[#313131] tracking-[0.325px]">
                    <span>Passage</span>
                    <div className="w-1 h-1 rounded-full bg-[#d4d4d4]" />
                    <span className="text-[#3667b1]">{todayBread.passage}</span>
                    <div className="w-1 h-1 rounded-full bg-[#d4d4d4]" />
                    <span className="text-[#676767]">Key Verse {todayBread.keyVerse}</span>
                  </div>
                </div>

                {/* KEY VERSE CALLOUT */}
                <div className="bg-[#fafafa] rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#3667b1] pl-7 pr-6 py-6">
                  <p className="text-[14px] font-bold italic uppercase tracking-[0.35px] text-[#3667b1] mb-4">
                    Key Verse {todayBread.keyVerse}
                  </p>
                  <p className="text-[18px] font-['Tinos',_serif] italic leading-[28px] text-[#1e2939]">
                    "{todayBread.keyVerse}"
                  </p>
                </div>

                {/* BODY CONTENT */}
                <div 
                  className="prose prose-base max-w-none prose-p:text-[#364153] prose-p:leading-[26px] prose-p:text-[16px] prose-p:font-['Helvetica_Neue',_sans-serif] prose-strong:text-[#0d0d0d] prose-strong:font-bold"
                  dangerouslySetInnerHTML={{ __html: todayBread.body }}
                />

                {/* INLINE BIBLE TEXT SECTION (Collapsible) */}
                <div className="border-t border-[#e5e5e5] pt-8">
                  <button
                    onClick={() => setBibleExpanded(!bibleExpanded)}
                    className="w-full flex items-center justify-between pb-4 group"
                  >
                    <h2 className="text-[20px] font-black text-[#0d0d0d] uppercase tracking-tight group-hover:text-[#3667b1] transition-colors">
                      {todayBread.passage}
                    </h2>
                    <div className="flex items-center gap-2 text-[#676767] group-hover:text-[#3667b1] transition-colors">
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        {bibleExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      {bibleExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div 
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      bibleExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div 
                      className="prose prose-base max-w-none prose-p:text-[#4b5563] prose-p:leading-relaxed font-['Georgia',_serif] pt-4"
                      dangerouslySetInnerHTML={{ __html: todayBread.bibleText || '<p>Scripture text not available.</p>' }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {showAudioPlayer && todayBread.audioUrl && (
         <AudioPlayer 
           src={todayBread.audioUrl} 
           title={todayBread.title} 
           onClose={() => setShowAudioPlayer(false)} 
         />
      )}

    </div>
  );
}
