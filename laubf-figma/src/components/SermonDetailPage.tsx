import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Share2, MessageSquare, FileText, Clock, BookOpen, ArrowRight, Play, ChevronRight, User } from 'lucide-react';
import { sermons } from '../lib/sermons';
import { studies } from '../lib/studies';
import { Button } from './ui/button';
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "./ui/utils";

interface SermonDetailPageProps {
  sermonId: string;
  onNavigate: (page: any, id?: string) => void;
}

export default function SermonDetailPage({ sermonId, onNavigate }: SermonDetailPageProps) {
  const sermon = sermons.find(s => s.id === sermonId);

  if (!sermon) {
    return <div className="p-20 text-center font-bold">Sermon not found</div>;
  }

  const linkedStudy = sermon.studyId ? studies.find(s => s.id === sermon.studyId) : null;
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const defaultTab = sermon.transcript ? 'live' : 'manuscript';
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (activeSegmentIndex > 0 && transcriptRef.current) {
        const activeEl = transcriptRef.current.children[activeSegmentIndex] as HTMLElement;
        if (activeEl) {
            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
  }, [activeSegmentIndex]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const hasLiveTranscript = !!sermon.transcript && sermon.transcript.length > 0;
  const hasManuscript = !!sermon.manuscript;

  return (
    <div className="bg-[#fafafa] min-h-screen font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d] pb-40">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="pt-[100px] pb-[60px] text-center max-w-[1000px] mx-auto px-6">
          <div className="mb-6 flex items-center justify-center gap-3">
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                {sermon.series || "Sunday Service"}
             </span>
             <span className="w-1 h-1 bg-[#dcdcdc] rounded-full" />
             <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
                {sermon.date}
             </span>
          </div>
          <h1 className="text-[48px] md:text-[72px] leading-[0.95] font-medium tracking-[-0.03em] text-[#0d0d0d] mb-0">
              {sermon.title}
          </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* 2. VIDEO PLAYER (Full Width Hero) */}
        <div className="relative w-full aspect-video md:aspect-[2.35/1] bg-black rounded-[24px] overflow-hidden shadow-sm mb-16 group">
            <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${sermon.videoId}?rel=0`} 
                title={sermon.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>

        {/* 3. SPLIT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: INFO & DESCRIPTION (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-10">
                
                {/* Meta Bar */}
                <div className="border-y border-[#dcdcdc] py-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                                <User className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">Speaker</span>
                                <span className="block text-[14px] font-bold text-[#0d0d0d]">{sermon.speaker}</span>
                            </div>
                         </div>
                         <div className="flex items-center gap-3 text-right">
                             <div>
                                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">Scripture</span>
                                <span className="block text-[14px] font-bold text-[#0d0d0d]">{sermon.passage}</span>
                             </div>
                             <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-[#6b7280]" strokeWidth={1.5} />
                            </div>
                         </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                   <h3 className="text-[18px] font-medium tracking-tight mb-4">About the Message</h3>
                   <div className="prose prose-lg prose-neutral max-w-none 
                        prose-p:text-[16px] prose-p:leading-[1.7] prose-p:text-[#676767] prose-p:font-normal
                        prose-a:text-[#0d0d0d] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                   ">
                       <p>{sermon.description}</p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2 mt-8">
                       {sermon.tags.map(tag => (
                           <span key={tag} className="px-3 py-1.5 rounded-[6px] bg-[#f3f4f6] text-[#6b7280] text-[11px] font-bold uppercase tracking-wider">
                               #{tag}
                           </span>
                       ))}
                   </div>
                </div>

                {/* Linked Study (Minimal) */}
                {linkedStudy && (
                    <div className="mt-8 bg-white border border-[#e8e8e8] rounded-[16px] p-6 hover:border-[#0d0d0d] transition-colors cursor-pointer group" onClick={() => onNavigate('study-detail', linkedStudy.id)}>
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#3667B1] mb-2 block">Study Material</span>
                                <h4 className="text-[16px] font-bold text-[#0d0d0d] group-hover:underline">View Bible Study Guide</h4>
                            </div>
                            <ArrowRight className="w-5 h-5 text-[#dcdcdc] group-hover:text-[#0d0d0d] transition-colors" />
                        </div>
                    </div>
                )}
                
                <div className="mt-auto pt-8">
                   <button 
                     onClick={() => onNavigate('sermons')}
                     className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#9ca3af] hover:text-[#0d0d0d] transition-colors"
                   >
                       <ChevronLeft className="w-4 h-4" /> Back to Library
                   </button>
                </div>

            </div>

            {/* RIGHT: TRANSCRIPT (7 cols) */}
            <div className="lg:col-span-7 flex flex-col h-[600px] lg:h-[800px] sticky top-24">
                <div className="flex-1 bg-white rounded-[24px] border border-[#e8e8e8] flex flex-col overflow-hidden shadow-sm">
                    {hasLiveTranscript || hasManuscript ? (
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
                            <div className="px-6 py-4 border-b border-[#f0f0f0] flex items-center justify-between shrink-0">
                                <TabsList className="flex gap-6 overflow-x-auto no-scrollbar bg-transparent p-0">
                                    <TabsTrigger value="live" disabled={!hasLiveTranscript} className="data-[state=active]:text-[#0d0d0d] data-[state=active]:border-b-2 data-[state=active]:border-[#0d0d0d] text-[#9ca3af] text-[11px] font-bold uppercase tracking-widest py-2 rounded-none border-b-2 border-transparent transition-all bg-transparent shadow-none hover:bg-transparent">
                                        Live Transcript
                                    </TabsTrigger>
                                    <TabsTrigger value="manuscript" disabled={!hasManuscript} className="data-[state=active]:text-[#0d0d0d] data-[state=active]:border-b-2 data-[state=active]:border-[#0d0d0d] text-[#9ca3af] text-[11px] font-bold uppercase tracking-widest py-2 rounded-none border-b-2 border-transparent transition-all bg-transparent shadow-none hover:bg-transparent">
                                        Message Text
                                    </TabsTrigger>
                                </TabsList>
                                <div className="flex items-center gap-2 text-[#9ca3af]">
                                    <FileText className="w-4 h-4" />
                                </div>
                            </div>

                            <TabsContent value="live" className="flex-1 overflow-hidden mt-0 data-[state=active]:flex data-[state=active]:flex-col">
                                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar scroll-smooth" ref={transcriptRef}>
                                    <div className="space-y-6">
                                        {sermon.transcript!.map((segment, idx) => (
                                            <div 
                                              key={idx} 
                                              className={`transition-all duration-300 cursor-pointer group flex gap-6 ${idx === activeSegmentIndex ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                                              onClick={() => setActiveSegmentIndex(idx)}
                                            >
                                                <span className="text-[11px] font-mono font-bold text-[#dcdcdc] pt-1 w-10 shrink-0 tabular-nums">
                                                    {formatTime(segment.time)}
                                                </span>
                                                <p className={`text-[16px] leading-[1.6] ${idx === activeSegmentIndex ? 'text-[#0d0d0d] font-medium' : 'text-[#676767] font-normal'}`}>
                                                    {segment.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="manuscript" className="flex-1 overflow-hidden mt-0 data-[state=active]:flex data-[state=active]:flex-col">
                                <ScrollArea className="flex-1 p-8 h-full">
                                    <div 
                                      className="prose prose-lg prose-p:text-[#4b5563] prose-headings:text-[#0d0d0d] prose-headings:font-medium prose-headings:tracking-tight font-['Georgia',_serif] leading-relaxed max-w-none"
                                      dangerouslySetInnerHTML={{ __html: sermon.manuscript! }}
                                    />
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-[#9ca3af] p-8">
                            <MessageSquare className="w-8 h-8 mb-4 opacity-20" />
                            <p className="text-[12px] font-bold uppercase tracking-widest">Transcript Unavailable</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}