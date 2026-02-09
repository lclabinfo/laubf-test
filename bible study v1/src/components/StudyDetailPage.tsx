import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, FileText, ArrowRight, Video, BookOpen, ExternalLink, X, PanelLeftOpen, PanelLeftClose, ChevronUp, ChevronDown, Minus, Plus, MoreHorizontal, LayoutTemplate, Columns, Maximize2, GripHorizontal, Search, GripVertical, Paperclip, File, Image as ImageIcon, Type } from 'lucide-react';
import { motion, useDragControls } from "motion/react";
import { studies } from '../lib/studies';
import { sermons } from '../lib/sermons';
import { Button } from './ui/button';
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";
import { Resizable } from 're-resizable';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface StudyDetailPageProps {
  studyId: string;
  onBack: () => void;
  onNavigate: (page: 'home' | 'about' | 'sermons' | 'sermon-detail' | 'resources' | 'study-detail', id?: string) => void;
}

type ResourceType = 'scripture' | 'guide' | 'transcript' | 'leaderGuide';

const TABS_CONFIG = [
  { id: 'scripture', label: 'Bible', short: 'Bible', icon: BookOpen },
  { id: 'guide', label: 'Questions', short: 'Ques', icon: FileText },
  { id: 'leaderGuide', label: 'Answers', short: 'Ans', icon: Search },
  { id: 'transcript', label: 'Message', short: 'Msg', icon: Video },
] as const;

// Tab Component extracted to avoid re-renders and handle scroll state
const TabBar = ({ active, onChange, onClose }: { active: ResourceType | null, onChange: (t: ResourceType) => void, onClose?: () => void }) => {
  return (
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50/50 px-1 sm:px-2 h-12 sticky top-0 z-10 backdrop-blur-sm select-none relative group">
          <div className="flex-1 flex items-center gap-1 h-full w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {TABS_CONFIG.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => onChange(tab.id as ResourceType)}
                    className={cn(
                        "h-[calc(100%-4px)] mt-1 px-1 sm:px-4 rounded-t-md font-bold uppercase tracking-wide flex items-center justify-center gap-1.5 transition-all flex-shrink-0",
                        "flex-1 sm:flex-none min-w-0 sm:min-w-fit",
                        "text-xs min-[480px]:text-sm whitespace-nowrap",
                        active === tab.id 
                            ? "bg-white text-[#3667B1] shadow-sm border-t border-l border-r border-gray-200" 
                            : "text-gray-500 hover:bg-gray-200/50 hover:text-gray-900"
                    )}
                  >
                      <tab.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span className="truncate min-[440px]:hidden">{tab.short}</span>
                      <span className="hidden min-[440px]:inline">{tab.label}</span>
                  </button>
              ))}
          </div>
          {onClose && (
              <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-red-500 transition-colors ml-2 hidden sm:block flex-shrink-0 relative z-30">
                  <X className="w-5 h-5" />
              </button>
          )}
      </div>
  );
};

export default function StudyDetailPage({ studyId, onBack, onNavigate }: StudyDetailPageProps) {
  const study = studies.find(s => s.id === studyId);
  const [fontSize, setFontSize] = useState(100); // 100%
  const [isDesktop, setIsDesktop] = useState(true);
  const [bibleVersion, setBibleVersion] = useState<'NIV' | 'ESV'>('ESV');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Tab State
  const [leftTab, setLeftTab] = useState<ResourceType | null>('scripture');
  const [rightTab, setRightTab] = useState<ResourceType | null>('guide');
  const [activePane, setActivePane] = useState<'left' | 'right'>('right');
  const dragControls = useDragControls();

  // Split Pane State
  const [splitRatio, setSplitRatio] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isResizingRef = useRef(false);

  // Mobile scroll handling refs
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Resize Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizingRef.current || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const newRatio = (relativeX / containerRect.width) * 100;
      
      // Clamp between 25% and 75%
      setSplitRatio(Math.min(Math.max(newRatio, 25), 75));
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    isResizingRef.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  };

  // Find if there is a related sermon for this study
  const linkedSermon = sermons.find(s => s.studyId === studyId);
  const videoId = linkedSermon ? linkedSermon.videoId : study?.videoId;

  useEffect(() => {
    const checkDesktop = () => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth >= 1024);
      }
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Lock body scroll when this immersive view is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!study) {
    return <div>Study not found</div>;
  }

  // Helper to generate BibleGateway URL
  const getBibleGatewayUrl = (passage: string) => {
    const formatted = passage.replace(/ /g, '+').replace(/~/g, '-');
    return `https://www.biblegateway.com/passage/?search=${formatted}&version=${bibleVersion}&interface=print`;
  };

  const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 80));

  // Modify bible text based on version (mocking the switch since text is static)
  const displayBibleText = study.bibleText 
    ? study.bibleText.replace(/\(ESV\)/g, `(${bibleVersion})`).replace(/\(NIV\)/g, `(${bibleVersion})`)
    : '';

  // Content Renderers
  const renderContent = (type: ResourceType | null) => {
      switch(type) {
          case 'scripture':
              return (
                  <div className="p-8 max-w-3xl mx-auto animate-in fade-in duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-black text-gray-900 uppercase leading-tight">
                            {study.passage}
                        </h2>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button className="text-xs font-bold text-gray-500 hover:text-black px-2 py-1 hover:bg-gray-100 rounded transition-colors flex items-center gap-1 border border-gray-200">
                                    {bibleVersion} <ChevronDown className="w-3 h-3" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setBibleVersion('NIV')} className="font-bold text-xs">NIV</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setBibleVersion('ESV')} className="font-bold text-xs">ESV</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <a 
                                href={getBibleGatewayUrl(study.passage)}
                                target="_blank" 
                                rel="noreferrer"
                                className="text-xs font-bold text-gray-500 hover:text-[#3667B1] px-2 py-1 hover:bg-blue-50 rounded transition-colors flex items-center gap-2 border border-gray-200"
                                title="Read on BibleGateway"
                            >
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                      </div>
                      <div 
                        style={{ fontSize: `${fontSize}%` }}
                        className="prose prose-sm max-w-none prose-p:text-gray-600 prose-headings:font-bold font-serif leading-relaxed transition-all duration-200"
                        dangerouslySetInnerHTML={{ __html: displayBibleText }}
                      />
                      <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <a 
                            href={getBibleGatewayUrl(study.passage)}
                            target="_blank" 
                            rel="noreferrer"
                            className="text-xs font-bold text-gray-400 hover:text-[#3667B1] uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
                        >
                            Read on BibleGateway <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                  </div>
              );
          case 'guide':
              return (
                <div className="p-8 lg:p-12 max-w-3xl mx-auto animate-in fade-in duration-300">
                     <div className="mb-8">
                         <div className="flex items-center justify-between mb-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge className="bg-[#3667B1] text-white border-0 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg">
                                    Study Guide
                                </Badge>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                                    {study.date}
                                </span>
                            </div>
                            {study.attachments?.find(a => a.name.toLowerCase().includes('questions') && a.type === 'docx') && (
                                <a 
                                    href={study.attachments.find(a => a.name.toLowerCase().includes('questions') && a.type === 'docx')?.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#3667B1] hover:bg-blue-50 hover:border-blue-200 transition-all"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    Download DOCX
                                </a>
                            )}
                         </div>
                         <h1 className="text-3xl lg:text-4xl font-black uppercase leading-none text-gray-900 mb-6 tracking-tight">
                            {study.title}
                         </h1>
                         
                         <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
                             <span className="text-gray-400 uppercase tracking-wide">
                                 {study.series}
                             </span>
                             <span className="w-1 h-1 rounded-full bg-gray-300" />
                             <a 
                                href={getBibleGatewayUrl(study.passage)}
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-1 text-[#3667B1] hover:text-blue-800 transition-colors"
                             >
                                <span>📖</span>
                                <span className="underline decoration-blue-200 underline-offset-4 hover:decoration-blue-800">{study.passage}</span>
                                <ExternalLink className="w-3 h-3" />
                             </a>
                             <span className="w-1 h-1 rounded-full bg-gray-300" />
                             <span>Msg by {study.messenger}</span>
                         </div>
                     </div>

                     <div 
                       style={{ fontSize: `${fontSize}%` }}
                       className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:text-gray-600 prose-a:text-[#3667B1] prose-ol:list-decimal leading-relaxed transition-all duration-200"
                     >
                         <div dangerouslySetInnerHTML={{ __html: study.questions }} />
                     </div>

                     {/* Footer Attachments List */}
                     {(study.pdfUrl || study.docxUrl || (study.attachments && study.attachments.length > 0)) && (
                         <div className="mt-16 pt-8 border-t border-gray-100">
                             <h3 className="text-base font-black text-gray-900 mb-4">Attachments</h3>
                             <div className="space-y-3">
                                 {/* Primary PDF */}
                                 {study.pdfUrl && (
                                     <a href={study.pdfUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#3667B1]/30 hover:bg-blue-50/30 transition-all group bg-white">
                                         <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-[#3667B1] group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                                             <FileText className="w-5 h-5" />
                                         </div>
                                         <div className="flex-1 min-w-0">
                                             <p className="font-bold text-gray-900 truncate group-hover:text-[#3667B1] transition-colors">Study Guide PDF</p>
                                             <p className="text-xs text-gray-500 font-medium">Portable Document Format</p>
                                         </div>
                                         <Download className="w-4 h-4 text-gray-300 group-hover:text-[#3667B1] transition-colors" />
                                     </a>
                                 )}

                                 {/* DOCX */}
                                 {study.docxUrl && (
                                     <a href={study.docxUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#3667B1]/30 hover:bg-blue-50/30 transition-all group bg-white">
                                         <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-50 text-[#3667B1] group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                                             <FileText className="w-5 h-5" />
                                         </div>
                                         <div className="flex-1 min-w-0">
                                             <p className="font-bold text-gray-900 truncate group-hover:text-[#3667B1] transition-colors">Editable Study Guide</p>
                                             <p className="text-xs text-gray-500 font-medium">Microsoft Word Document</p>
                                         </div>
                                         <Download className="w-4 h-4 text-gray-300 group-hover:text-[#3667B1] transition-colors" />
                                     </a>
                                 )}

                                 {/* Other Attachments */}
                                 {study.attachments?.map((attachment, idx) => (
                                     <a key={idx} href={attachment.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#3667B1]/30 hover:bg-blue-50/30 transition-all group bg-white">
                                         <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-hover:bg-[#3667B1] group-hover:text-white transition-colors">
                                             {attachment.type === 'image' ? (
                                                 <ImageIcon className="w-5 h-5" />
                                             ) : (
                                                 <File className="w-5 h-5" />
                                             )}
                                         </div>
                                         <div className="flex-1 min-w-0">
                                             <p className="font-bold text-gray-900 truncate group-hover:text-[#3667B1] transition-colors">{attachment.name}</p>
                                             <p className="text-xs text-gray-500 font-medium uppercase">{attachment.type} file</p>
                                         </div>
                                         <Download className="w-4 h-4 text-gray-300 group-hover:text-[#3667B1] transition-colors" />
                                     </a>
                                 ))}
                             </div>
                         </div>
                     )}
                </div>
              );
          case 'transcript':
              return (
                  <div className="p-8 max-w-3xl mx-auto animate-in fade-in duration-300">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 uppercase leading-tight mb-2">
                                Message Transcript
                            </h2>
                            {linkedSermon ? (
                                <p className="text-sm text-gray-500 font-medium">
                                    Sermon: {linkedSermon.title} by {linkedSermon.speaker}
                                </p>
                            ) : (
                                <p className="text-sm text-gray-400 italic">No linked sermon transcript available.</p>
                            )}
                        </div>
                        {study.attachments?.find(a => a.name.toLowerCase().includes('transcript') && a.type === 'docx') && (
                                <a 
                                    href={study.attachments.find(a => a.name.toLowerCase().includes('transcript') && a.type === 'docx')?.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#3667B1] hover:bg-blue-50 hover:border-blue-200 transition-all"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    Download DOCX
                                </a>
                        )}
                      </div>
                      
                      {linkedSermon?.manuscript ? (
                          <div 
                            style={{ fontSize: `${fontSize}%` }}
                            className="prose prose-sm max-w-none prose-p:text-gray-600 prose-headings:font-bold leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: linkedSermon.manuscript }}
                          />
                      ) : (
                          <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                              <p className="text-gray-400 font-medium">Transcript not available for this message.</p>
                          </div>
                      )}
                  </div>
              );
          case 'leaderGuide':
              return (
                  <div className="p-8 max-w-3xl mx-auto animate-in fade-in duration-300">
                      <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="bg-[#3667B1] p-2 rounded-lg text-white">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-gray-900 uppercase leading-none">
                                    Answers
                                </h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Official Reference</p>
                            </div>
                          </div>
                          {study.attachments?.find(a => a.name.toLowerCase().includes('answers') && a.type === 'docx') && (
                                <a 
                                    href={study.attachments.find(a => a.name.toLowerCase().includes('answers') && a.type === 'docx')?.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#3667B1] hover:bg-blue-50 hover:border-blue-200 transition-all"
                                >
                                    <FileText className="w-3.5 h-3.5" />
                                    Download DOCX
                                </a>
                           )}
                      </div>
                      
                      {study.leaderGuide ? (
                           <div 
                             style={{ fontSize: `${fontSize}%` }}
                             className="prose prose-sm max-w-none prose-p:text-gray-600 prose-headings:font-bold leading-relaxed"
                             dangerouslySetInnerHTML={{ __html: study.leaderGuide }}
                           />
                       ) : (
                           <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-200">
                               <p className="text-gray-400 font-medium">Guide not available for this study.</p>
                           </div>
                       )}
                  </div>
              );
          default:
              return null;
      }
  };

  // Header Visibility State for Mobile
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;
    
    // Header Visibility Logic (only for small screens)
    if (window.innerWidth < 480) {
        const scrollDiff = currentScrollY - lastScrollY.current;

        // Threshold to prevent jitter
        if (Math.abs(scrollDiff) > 10) {
            if (scrollDiff > 0 && currentScrollY > 60) {
                // Scrolling Down & passed header height
                setIsHeaderVisible(false);
            } else {
                // Scrolling Up
                setIsHeaderVisible(true);
            }
        }
    } else {
        if (!isHeaderVisible) setIsHeaderVisible(true);
    }
    
    lastScrollY.current = currentScrollY;

    // Scroll Spy Logic for Tabs
    if (!isDesktop && !isScrollingRef.current) {
        const tabs = TABS_CONFIG.map(t => t.id);
        const containerRect = e.currentTarget.getBoundingClientRect();
        
        for (const tabId of tabs) {
            const element = document.getElementById(`mobile-${tabId}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                // Check if element is within view (with some offset)
                // We consider it active if its top is near the top of container
                // or if it takes up most of the view
                if (rect.top <= containerRect.top + 150 && rect.bottom > containerRect.top + 150) {
                    setLeftTab(tabId as ResourceType);
                    break;
                }
            }
        }
    }
  };
  
  const scrollToSection = (id: string) => {
    if (mobileContainerRef.current) {
        const element = document.getElementById(`mobile-${id}`);
        if (element) {
            isScrollingRef.current = true;
            
            // Calculate position
            const containerTop = mobileContainerRef.current.getBoundingClientRect().top;
            const elementTop = element.getBoundingClientRect().top;
            const relativeTop = elementTop - containerTop + mobileContainerRef.current.scrollTop;
            
            mobileContainerRef.current.scrollTo({
                top: relativeTop,
                behavior: 'smooth'
            });
            
            // Reset scrolling lock after animation
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 500);
        }
    }
  };

  return (
    /* 
       Fixed positioning adjusted for full screen immersive mode.
       z-[60] ensures it sits above the navbar (usually z-50).
    */
    <div className="bg-white fixed top-0 left-0 right-0 bottom-0 z-[60] flex flex-col shadow-2xl overflow-hidden">
      
      {/* 1. Header (Fixed) */}
      <header 
        className={cn(
            "h-14 bg-white border-b border-gray-200 flex items-center px-2 sm:px-4 z-50 flex-none shadow-sm gap-2 sm:gap-4 transition-all duration-300 ease-in-out",
            !isHeaderVisible && "min-[0px]:-mt-14 min-[480px]:mt-0" // Slide up on mobile, stay fixed on larger
        )}
      >
         {/* Left Side: Back + Title */}
         <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
             <button 
               onClick={onBack}
               className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 text-gray-500 font-bold hover:text-black transition-colors text-xs uppercase tracking-wide bg-gray-50 hover:bg-gray-100 px-2 sm:px-3 py-1.5 rounded-lg"
             >
               <ChevronLeft className="w-4 h-4" /> 
               <span>Back</span>
             </button>
             <div className="h-4 w-px bg-gray-200 flex-shrink-0" />
             <h1 className="text-sm font-bold text-gray-900 truncate">
                 {study.title}
             </h1>
         </div>

         {/* Right Side: Actions */}
         <div className="flex items-center gap-2 flex-shrink-0">
             {/* Global Video Toggle - Now External Link */}
             <a
                href="https://www.youtube.com/@LAUBF/streams"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "h-8 flex items-center justify-center rounded-md px-2 sm:px-3 text-xs font-bold uppercase tracking-wide gap-2 transition-all shadow-sm whitespace-nowrap",
                    "bg-[#3667B1] text-white hover:bg-[#2a5291] ring-1 ring-blue-700/10"
                )}
             >
                <Video className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Watch Sermon</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70 hidden lg:block" />
             </a>

             <div className="h-4 w-px bg-gray-200 hidden xs:block" />

             {/* Resources Dropdown - Hidden on < 480px */}
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 gap-2 text-gray-600 hover:text-black hover:bg-gray-50 hover:border-gray-300 transition-all font-bold uppercase tracking-wide text-xs group whitespace-nowrap px-2 sm:px-3 hidden min-[480px]:inline-flex"
                    >
                        <Paperclip className="w-3.5 h-3.5 text-gray-400 group-hover:text-black transition-colors" />
                        <span className="hidden lg:inline">
                            Attachments ({study.attachments?.length || 0})
                        </span>
                        <ChevronDown className="w-3 h-3 opacity-50 hidden lg:block" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 z-[70]">
                    <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Study Resources
                    </div>
                    
                    {/* Attachments */}
                    {study.attachments?.map((attachment, idx) => (
                        <DropdownMenuItem key={idx} asChild>
                            <a href={attachment.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 cursor-pointer py-2">
                                <div className="bg-gray-100 p-1.5 rounded-md text-gray-500">
                                    {attachment.type === 'image' ? (
                                        <ImageIcon className="w-4 h-4" />
                                    ) : (
                                        <File className="w-4 h-4" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-700 truncate">{attachment.name}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{attachment.type}</p>
                                </div>
                                <Download className="w-3.5 h-3.5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
             </DropdownMenu>
             
             {/* Font Controls - Visible on all screens, compact on mobile */}
             <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5 border border-gray-200 pl-1 sm:pl-2">
                 <Type className="w-3.5 h-3.5 text-gray-400 hidden sm:block" />
                 <div className="h-3 w-px bg-gray-300 mx-0.5 hidden sm:block" />
                 <button onClick={decreaseFont} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md text-gray-500 hover:text-black transition-colors"><Minus className="w-4 h-4" /></button>
                 <span className="text-[10px] font-bold text-gray-900 min-w-[3ch] text-center">{fontSize}%</span>
                 <button onClick={increaseFont} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md text-gray-500 hover:text-black transition-colors"><Plus className="w-4 h-4" /></button>
             </div>
         </div>
      </header>

      {/* Floating Video Player */}
      {isVideoOpen && videoId && (
        <motion.div
            drag
            dragListener={false}
            dragControls={dragControls}
            dragMomentum={false}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ 
                top: 'calc(100vh - 340px)', 
                left: 'calc(100vw - 515px)' 
            }}
            className="fixed z-50 bg-black rounded-xl shadow-2xl overflow-hidden border border-gray-800 ring-1 ring-white/10"
        >
            <Resizable
                defaultSize={{ width: 480, height: 306 }}
                minWidth={320}
                maxWidth={800}
                minHeight={216}
                lockAspectRatio={true}
                enable={{ top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:true, bottomLeft:false, topLeft:false }}
                handleClasses={{
                    bottomRight: "z-50"
                }}
            >
                <div className="flex flex-col h-full w-full relative group/player">
                    {/* Header */}
                    <div 
                        onPointerDown={(e) => dragControls.start(e)}
                        className="h-9 bg-neutral-900 flex items-center justify-between px-3 cursor-move active:cursor-grabbing border-b border-gray-800 group select-none shrink-0"
                    >
                        {/* Title/Drag Handle */}
                        <div className="flex items-center gap-2 text-white/90">
                            <GripHorizontal className="w-3 h-3 text-white/40 group-hover:text-white/80 transition-colors" />
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">Sermon Player</span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                             {linkedSermon && (
                                 <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onNavigate('sermon-detail', linkedSermon.id);
                                    }}
                                    className="flex items-center gap-1.5 px-2 py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-200 hover:text-white border border-blue-500/30 hover:border-blue-500 rounded text-[10px] font-bold uppercase tracking-wide transition-all mr-1"
                                 >
                                    <span>Open Page</span>
                                    <ExternalLink className="w-3 h-3" />
                                 </button>
                             )}
                            
                            <div className="w-px h-3 bg-white/20" />
                            
                            <button 
                                onClick={() => setIsVideoOpen(false)}
                                className="text-white/40 hover:text-white hover:bg-white/10 rounded-md p-1 transition-all"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Video */}
                    <div className="flex-1 bg-black relative w-full h-full">
                         <iframe 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                            title="Sermon Video" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        {/* Resize Handle Signifier */}
                        <div className="absolute bottom-0 right-0 p-1 pointer-events-none opacity-0 group-hover/player:opacity-100 transition-opacity">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L11 11L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5"/>
                                <path d="M8 4L8 8L4 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </Resizable>
        </motion.div>
      )}

      {/* 3. Main Workspace (Responsive) */}
      <div ref={containerRef} className="flex-1 flex overflow-hidden bg-gray-100 relative">
        
        {/* Mobile View (Single Pane - Consolidated Scroll) */}
        {!isDesktop ? (
             <div className="flex flex-col w-full h-full bg-white z-20">
                 <TabBar 
                    active={leftTab} 
                    onChange={(id) => {
                        setLeftTab(id);
                        scrollToSection(id);
                    }}
                    // No close button on mobile
                 />
                 <div 
                    ref={mobileContainerRef}
                    onScroll={handleMobileScroll}
                    className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full scroll-smooth"
                 >
                    {TABS_CONFIG.map((tab) => (
                        <div key={tab.id} id={`mobile-${tab.id}`} className="min-h-[50vh] pb-12 border-b-8 border-gray-100 last:border-0">
                             {/* Content */}
                             {renderContent(tab.id as ResourceType)}
                        </div>
                    ))}
                 </div>
             </div>
        ) : (
            <>
                {/* Desktop Left Pane */}
                 <div 
                    style={{ 
                        width: rightTab ? `${splitRatio}%` : 'auto',
                        flex: rightTab ? 'none' : '1'
                    }}
                    className={cn(
                        "flex flex-col bg-white h-full transition-shadow duration-300 z-10",
                        activePane === 'left' ? "shadow-md z-20" : "z-10"
                    )}
                    onClick={() => setActivePane('left')}
                 >
                     <TabBar 
                        active={leftTab} 
                        onChange={setLeftTab} 
                     />
                     <div className={cn("flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", activePane === 'left' ? "bg-white" : "bg-gray-50/30")}>
                        {renderContent(leftTab)}
                     </div>
                 </div>

                 {/* Desktop Resizer & Right Pane */}
                 {rightTab && (
                    <>
                        {/* Resizer Handle */}
                        <div
                            onMouseDown={startResizing}
                            className="w-1 relative z-30 cursor-col-resize flex items-center justify-center hover:bg-blue-500/10 -ml-0.5 group/resizer select-none transition-colors"
                        >
                             <div className="w-px h-full bg-gray-200 group-hover/resizer:bg-[#3667B1] transition-colors" />
                             <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-md p-0.5 text-gray-400 group-hover/resizer:text-[#3667B1] group-hover/resizer:border-[#3667B1] shadow-sm transition-all">
                                <GripVertical className="w-3 h-3" />
                             </div>
                        </div>

                        {/* Right Pane */}
                        <div 
                            className={cn(
                                "flex flex-col bg-white h-full z-10 flex-1 min-w-0",
                                activePane === 'right' ? "shadow-md z-20" : "z-10"
                            )}
                            onClick={() => setActivePane('right')}
                        >
                             <TabBar 
                                active={rightTab} 
                                onChange={setRightTab} 
                                onClose={() => setRightTab(null)}
                             />
                             <div className={cn("flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", activePane === 'right' ? "bg-white" : "bg-gray-50/30")}>
                                {renderContent(rightTab)}
                             </div>
                        </div>
                    </>
                 )}

                 {/* Add Pane Button (Desktop only, if right pane is closed) */}
                 {!rightTab && (
                     <div className="w-12 h-full bg-gray-50 border-l border-gray-200 flex flex-col items-center py-4 gap-4 flex-none">
                         <button 
                            onClick={() => {
                                setRightTab('guide');
                                setSplitRatio(50); // Reset split when opening
                            }}
                            className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-[#3667B1] hover:border-[#3667B1] hover:shadow-md transition-all"
                            title="Split View"
                         >
                             <Columns className="w-5 h-5" />
                         </button>
                     </div>
                 )}
            </>
        )}

      </div>
    </div>
  );
}
