import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, FileText, ArrowRight, Video, BookOpen, ExternalLink, X, Paperclip, File, Image as ImageIcon, AlignLeft, Lightbulb, PanelRightClose, Plus, Minus, Type, ChevronDown, Check } from 'lucide-react';
import { studies } from '../lib/studies';
import { sermons } from '../lib/sermons';
import { Button } from './ui/button';
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface StudyDetailPageProps {
  studyId: string;
  onBack?: () => void;
  onNavigate: (page: any, id?: string) => void;
}

type ResourceType = 'scripture' | 'guide';

export default function StudyDetailPage({ studyId, onBack, onNavigate }: StudyDetailPageProps) {
  const study = studies.find(s => s.id === studyId);
  const linkedSermon = sermons.find(s => s.studyId === studyId);

  // States
  const [activeTab, setActiveTab] = useState('scripture'); // 'scripture' | 'questions' | 'transcript'
  const [fontSize, setFontSize] = useState(100);
  const [bibleVersion, setBibleVersion] = useState<'NIV' | 'ESV'>('ESV');

  if (!study) return <div className="p-20 text-center font-bold">Study not found</div>;

  // Helpers
  const getBibleGatewayUrl = (passage: string) => {
    const formatted = passage.replace(/ /g, '+').replace(/~/g, '-');
    return `https://www.biblegateway.com/passage/?search=${formatted}&version=${bibleVersion}&interface=print`;
  };

  const displayBibleText = study.bibleText 
    ? study.bibleText.replace(/\(ESV\)/g, `(${bibleVersion})`).replace(/\(NIV\)/g, `(${bibleVersion})`)
    : '';

  const hasQuestions = study.sections && study.sections.length > 0;
  const hasTranscript = linkedSermon && !!linkedSermon.manuscript;

  return (
    <div className="bg-[#fafafa] min-h-screen font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d] pb-40">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="pt-[100px] pb-[60px] text-center max-w-[1000px] mx-auto px-6">
          <div className="mb-6 flex items-center justify-center gap-3">
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                {study.series || "Bible Study"}
             </span>
             <span className="w-1 h-1 bg-[#dcdcdc] rounded-full" />
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                {study.date}
             </span>
          </div>
          <h1 className="text-[48px] md:text-[72px] leading-[0.95] font-medium tracking-[-0.03em] text-[#0d0d0d] mb-6">
              {study.title}
          </h1>
          <p className="text-[18px] text-[#676767] max-w-2xl mx-auto leading-relaxed">
             A deep dive into <span className="text-[#0d0d0d] font-bold">{study.passage}</span>. Explore the scripture, reflection questions, and additional resources below.
          </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: INFO & DOWNLOADS (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-10">
                
                {/* Meta Bar */}
                <div className="border-t border-[#dcdcdc] pt-8 flex flex-col gap-8">
                    <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Passage</span>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#0d0d0d]" strokeWidth={1.5} />
                            <span className="text-[16px] font-bold text-[#0d0d0d]">{study.passage}</span>
                        </div>
                    </div>
                    
                    {linkedSermon && (
                        <div>
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Related Message</span>
                            <div 
                                onClick={() => onNavigate('sermon-detail', linkedSermon.id)}
                                className="group cursor-pointer flex items-center gap-3 p-4 bg-white border border-[#e8e8e8] rounded-[16px] hover:border-[#0d0d0d] transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0">
                                    <Video className="w-4 h-4 text-[#6b7280]" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div className="text-[13px] font-bold text-[#0d0d0d] line-clamp-1 group-hover:underline">{linkedSermon.title}</div>
                                    <div className="text-[11px] text-[#9ca3af]">{linkedSermon.speaker}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Downloads Section */}
                <div>
                   <h3 className="text-[18px] font-medium tracking-tight mb-6">Resources</h3>
                   <div className="flex flex-col gap-3">
                       {/* Questions Doc */}
                       {(study.docxUrl || study.pdfUrl) && (
                           <button 
                             onClick={() => window.open(study.docxUrl || study.pdfUrl, '_blank')}
                             className="flex items-center justify-between p-4 bg-[#f9f9f9] rounded-[12px] hover:bg-[#f0f0f0] transition-colors group"
                           >
                               <div className="flex items-center gap-3">
                                   <FileText className="w-5 h-5 text-[#3667B1]" strokeWidth={1.5} />
                                   <span className="text-[13px] font-bold text-[#0d0d0d]">Study Questions</span>
                               </div>
                               <Download className="w-4 h-4 text-[#a0a0a0] group-hover:text-[#0d0d0d]" />
                           </button>
                       )}

                       {/* External Link */}
                       <button 
                         onClick={() => window.open(getBibleGatewayUrl(study.passage), '_blank')}
                         className="flex items-center justify-between p-4 bg-[#f9f9f9] rounded-[12px] hover:bg-[#f0f0f0] transition-colors group"
                       >
                           <div className="flex items-center gap-3">
                               <ExternalLink className="w-5 h-5 text-[#676767]" strokeWidth={1.5} />
                               <span className="text-[13px] font-bold text-[#676767]">Open in BibleGateway</span>
                           </div>
                       </button>
                   </div>
                </div>

                <div className="mt-auto pt-8">
                   <button 
                     onClick={() => onNavigate('studies')}
                     className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#9ca3af] hover:text-[#0d0d0d] transition-colors"
                   >
                       <ChevronLeft className="w-4 h-4" /> Back to Studies
                   </button>
                </div>

            </div>

            {/* RIGHT: INTERACTIVE VIEWER (8 cols) */}
            <div className="lg:col-span-8 flex flex-col h-[700px] lg:h-[900px] sticky top-24">
                <div className="flex-1 bg-white rounded-[24px] border border-[#e8e8e8] flex flex-col overflow-hidden shadow-sm">
                    
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
                        {/* Tab Header */}
                        <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between shrink-0 bg-white z-10">
                            <TabsList className="flex gap-6 overflow-x-auto no-scrollbar bg-transparent p-0">
                                <TabsTrigger value="scripture" className="data-[state=active]:text-[#0d0d0d] data-[state=active]:border-b-2 data-[state=active]:border-[#0d0d0d] text-[#9ca3af] text-[11px] font-bold uppercase tracking-widest py-2 rounded-none border-b-2 border-transparent transition-all whitespace-nowrap bg-transparent shadow-none hover:bg-transparent">
                                    Scripture Text
                                </TabsTrigger>
                                <TabsTrigger value="questions" disabled={!hasQuestions} className="data-[state=active]:text-[#0d0d0d] data-[state=active]:border-b-2 data-[state=active]:border-[#0d0d0d] text-[#9ca3af] text-[11px] font-bold uppercase tracking-widest py-2 rounded-none border-b-2 border-transparent transition-all whitespace-nowrap bg-transparent shadow-none hover:bg-transparent">
                                    Study Questions
                                </TabsTrigger>
                                <TabsTrigger value="transcript" disabled={!hasTranscript} className="data-[state=active]:text-[#0d0d0d] data-[state=active]:border-b-2 data-[state=active]:border-[#0d0d0d] text-[#9ca3af] text-[11px] font-bold uppercase tracking-widest py-2 rounded-none border-b-2 border-transparent transition-all whitespace-nowrap bg-transparent shadow-none hover:bg-transparent">
                                    Message Transcript
                                </TabsTrigger>
                            </TabsList>
                            
                            {/* Controls */}
                            <div className="flex items-center gap-2 pl-4 border-l border-[#f0f0f0] hidden md:flex">
                                <button onClick={() => setFontSize(s => Math.max(80, s - 10))} className="p-1.5 hover:bg-gray-100 rounded text-[#9ca3af] hover:text-[#0d0d0d]"><Minus className="w-3 h-3" /></button>
                                <Type className="w-4 h-4 text-[#0d0d0d]" />
                                <button onClick={() => setFontSize(s => Math.min(150, s + 10))} className="p-1.5 hover:bg-gray-100 rounded text-[#9ca3af] hover:text-[#0d0d0d]"><Plus className="w-3 h-3" /></button>
                            </div>
                        </div>

                        {/* 1. SCRIPTURE TAB */}
                        <TabsContent value="scripture" className="flex-1 overflow-hidden mt-0 data-[state=active]:flex data-[state=active]:flex-col">
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex items-center justify-between mb-8 sticky top-0 bg-white/95 backdrop-blur py-4 border-b border-[#f0f0f0] z-10">
                                        <h2 className="text-[24px] font-black text-[#0d0d0d] uppercase leading-tight tracking-tight">
                                            {study.passage}
                                        </h2>
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                              <button className="flex items-center gap-1 text-[11px] font-bold text-[#0d0d0d] bg-[#f3f4f6] hover:bg-[#e5e7eb] px-3 py-1.5 rounded-[6px] transition-colors">
                                                  {bibleVersion} <ChevronDown className="w-3 h-3" />
                                              </button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                              <DropdownMenuItem onClick={() => setBibleVersion('NIV')} className="text-xs font-bold">NIV</DropdownMenuItem>
                                              <DropdownMenuItem onClick={() => setBibleVersion('ESV')} className="text-xs font-bold">ESV</DropdownMenuItem>
                                          </DropdownMenuContent>
                                       </DropdownMenu>
                                    </div>
                                    
                                    <div 
                                        style={{ fontSize: `${fontSize * 0.9}%` }}
                                        className="prose prose-lg max-w-none prose-p:text-[#4b5563] font-serif leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: displayBibleText }}
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        {/* 2. QUESTIONS TAB */}
                        <TabsContent value="questions" className="flex-1 overflow-hidden mt-0 data-[state=active]:flex data-[state=active]:flex-col">
                             <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                <div className="max-w-3xl mx-auto space-y-12">
                                    {study.sections?.map((section, idx) => (
                                        <div key={section.id} className="border-b border-[#f0f0f0] last:border-0 pb-12 last:pb-0">
                                            <div className="flex items-baseline gap-4 mb-6">
                                                <span className="text-[48px] font-black text-[#e5e7eb] leading-none">0{idx + 1}</span>
                                                <h3 className="text-[20px] font-bold text-[#0d0d0d] uppercase tracking-wide">{section.title}</h3>
                                            </div>
                                            
                                            {/* Questions content would go here - mocking for now since structure might vary */}
                                            {section.guide ? (
                                                <div 
                                                    style={{ fontSize: `${fontSize * 0.9}%` }}
                                                    className="prose prose-lg max-w-none prose-p:text-[#4b5563] prose-li:text-[#4b5563] font-serif leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: section.guide }}
                                                />
                                            ) : (
                                                <div className="space-y-6">
                                                    {[1,2,3].map(q => (
                                                        <div key={q} className="bg-[#f9fafb] p-6 rounded-[12px]">
                                                            <p className="font-medium text-[#374151] mb-4">Question {q}: What does the author mean by this phrase?</p>
                                                            <textarea className="w-full bg-white border border-[#e5e7eb] rounded-[8px] p-3 text-sm h-24 resize-none focus:outline-none focus:border-[#0d0d0d] transition-colors placeholder:text-gray-300" placeholder="Type your answer here..." />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </TabsContent>

                        {/* 3. TRANSCRIPT TAB */}
                        <TabsContent value="transcript" className="flex-1 overflow-hidden mt-0 data-[state=active]:flex data-[state=active]:flex-col">
                             <ScrollArea className="flex-1 p-8 md:p-12 h-full">
                                <div className="max-w-3xl mx-auto">
                                    {linkedSermon ? (
                                        <>
                                            <div className="mb-12 text-center border-b border-[#f0f0f0] pb-8">
                                                <h2 className="text-[32px] font-medium tracking-tight text-[#0d0d0d] mb-2">{linkedSermon.title}</h2>
                                                <p className="text-[#6b7280] font-serif italic">Message by {linkedSermon.speaker}</p>
                                            </div>
                                            <div 
                                              style={{ fontSize: `${fontSize * 0.9}%` }}
                                              className="prose prose-lg max-w-none prose-p:text-[#4b5563] font-['Georgia',_serif] leading-relaxed"
                                              dangerouslySetInnerHTML={{ __html: linkedSermon.manuscript || '' }}
                                            />
                                        </>
                                    ) : (
                                        <div className="text-center text-[#9ca3af] py-20">Transcript unavailable</div>
                                    )}
                                </div>
                             </ScrollArea>
                        </TabsContent>

                    </Tabs>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}