import { useState, useEffect } from 'react';
import { ChevronLeft, Menu, Video, BookOpen, ExternalLink, X, PanelLeftOpen, ChevronUp, ChevronDown, Minus, Plus, Headphones, ArrowRight } from 'lucide-react';
import { dailyBreads } from '../lib/dailyBread';
import { Button } from './ui/button';
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";
import { Resizable } from 're-resizable';
import { AudioPlayer } from './AudioPlayer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DailyBreadPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function DailyBreadPage({ onNavigate }: DailyBreadPageProps) {
  const todayBread = dailyBreads[0];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [sidebarWidth, setSidebarWidth] = useState(500);
  const [isResizing, setIsResizing] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [bibleVersion, setBibleVersion] = useState<'NIV' | 'ESV'>('NIV');
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);

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

  const getBibleGatewayUrl = (passage: string) => {
    const formatted = passage.replace(/ /g, '+').replace(/~/g, '-');
    return `https://www.biblegateway.com/passage/?search=${formatted}&version=${bibleVersion}&interface=print`;
  };

  const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 80));

  const displayBibleText = todayBread.bibleText || '';

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-300">
      
      {/* Top Navigation Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-100 h-16">
         <div className="w-full px-6 h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button 
                  onClick={() => onNavigate('home')}
                  className="flex items-center gap-2 text-gray-500 font-bold hover:text-black transition-colors text-xs uppercase tracking-wide"
                >
                  <ChevronLeft className="w-4 h-4" /> Home
                </button>
                <div className="h-4 w-px bg-gray-200" />
                <h1 className="text-sm font-bold text-gray-900 truncate max-w-[200px] md:max-w-md uppercase tracking-tight">
                    Daily Bread
                </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hidden md:flex gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-[#3667B1] hover:bg-blue-50"
                  asChild
                >
                  <a href="https://ubf.org/daily-breads/list" target="_blank" rel="noreferrer">
                     <Menu className="w-3 h-3" /> View Archive
                  </a>
                </Button>
                
                <div className="h-4 w-px bg-gray-200 hidden md:block" />

                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 border border-gray-200/50">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-2 hidden sm:inline-block">Text Size</span>
                    <div className="flex items-center">
                        <button 
                           onClick={decreaseFont}
                           className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600 hover:text-black"
                           title="Decrease Font Size"
                        >
                           <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-gray-900 w-9 text-center tabular-nums">{fontSize}%</span>
                        <button 
                           onClick={increaseFont}
                           className="p-1.5 hover:bg-white hover:shadow-sm rounded-md transition-all text-gray-600 hover:text-black"
                           title="Increase Font Size"
                        >
                           <Plus className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </div>
         </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-9rem)] items-start relative">
          
          {!isSidebarOpen && (
              <div className="fixed left-6 top-[160px] z-20">
                  <Button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="bg-white text-[#3667B1] border border-gray-200 shadow-md hover:bg-blue-50 hover:border-blue-200 font-bold uppercase text-xs tracking-wide flex items-center gap-2 transition-all rounded-full px-4 py-2 h-auto"
                  >
                     <PanelLeftOpen className="w-4 h-4" /> 
                     Show Scripture
                  </Button>
              </div>
          )}

          <Resizable
             size={{
                 width: !isSidebarOpen ? 0 : (isDesktop ? sidebarWidth : '100%'),
                 height: 'auto'
             }}
             minWidth={isSidebarOpen ? 300 : 0}
             maxWidth={800}
             enable={{ 
                 top: false, 
                 right: isDesktop && isSidebarOpen, 
                 bottom: false, 
                 left: false, 
                 topRight: false, 
                 bottomRight: false, 
                 bottomLeft: false, 
                 topLeft: false 
             }}
             onResizeStart={() => setIsResizing(true)}
             onResizeStop={(e, direction, ref, d) => {
                 setIsResizing(false);
                 setSidebarWidth(sidebarWidth + d.width);
             }}
             className={cn(
                "flex-shrink-0 relative flex flex-col bg-gray-50 border-r border-gray-200 transition-all duration-300 ease-in-out",
                isSidebarOpen 
                    ? "!h-[50vh] lg:!h-[calc(100vh-9rem)] lg:!sticky lg:top-36 opacity-100" 
                    : "!h-0 !w-0 !min-w-0 overflow-hidden opacity-0 border-none",
                !isResizing && "transition-all duration-300 ease-in-out"
             )}
             handleComponent={{
                 right: (
                    <div className={cn(
                        "w-4 h-full absolute -right-2 top-0 z-50 flex items-center justify-center cursor-col-resize group outline-none",
                        "hover:opacity-100 transition-opacity",
                        isResizing ? "opacity-100" : "opacity-0 hover:opacity-100"
                    )}>
                        <div className={cn(
                            "w-1 h-8 rounded-full transition-colors shadow-sm",
                            isResizing ? "bg-[#3667B1]" : "bg-gray-300 group-hover:bg-[#3667B1]"
                        )} />
                    </div>
                 )
             }}
          >
             <div className="flex-none sticky top-0 z-10 bg-gray-50/95 backdrop-blur border-b border-gray-200 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-2 text-gray-900 font-black uppercase text-sm tracking-wide">
                     <BookOpen className="w-4 h-4 text-[#3667B1]" />
                     Scripture
                 </div>
                 <div className="flex items-center gap-2">
                     <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                             <button className="text-xs font-bold text-gray-500 hover:text-black px-2 py-1 hover:bg-gray-200/50 rounded transition-colors flex items-center gap-1">
                                {bibleVersion} <ChevronDown className="w-3 h-3" />
                             </button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                             <DropdownMenuItem onClick={() => setBibleVersion('NIV')} className="font-bold text-xs">NIV</DropdownMenuItem>
                             <DropdownMenuItem onClick={() => setBibleVersion('ESV')} className="font-bold text-xs">ESV</DropdownMenuItem>
                         </DropdownMenuContent>
                     </DropdownMenu>

                     <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded-md transition-all"
                        title="Close Sidebar"
                     >
                        <X className="w-4 h-4" />
                     </button>
                 </div>
             </div>

             <div className="flex-1 overflow-y-auto p-6 md:p-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                 <div className="mb-8">
                     <h2 className="text-2xl font-black text-gray-900 uppercase mb-4 leading-tight">
                         {todayBread.passage}
                     </h2>
                     <div 
                       style={{ fontSize: `${fontSize}%` }}
                       className="prose prose-sm max-w-none prose-p:text-gray-600 prose-headings:font-bold font-serif leading-relaxed transition-all duration-200"
                       dangerouslySetInnerHTML={{ __html: displayBibleText }}
                     />
                 </div>
                 
                 <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <a 
                      href={getBibleGatewayUrl(todayBread.passage)}
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold text-gray-400 hover:text-[#3667B1] uppercase tracking-wide transition-colors flex items-center justify-center gap-2"
                    >
                      Read full chapter on BibleGateway <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
             </div>

             {todayBread.videoUrl && (
                 <div className={cn(
                     "flex-none border-t border-gray-200 bg-white transition-all duration-300 ease-in-out",
                     isVideoExpanded ? "h-auto" : "h-14"
                 )}>
                     <button 
                         onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                         className="w-full h-14 px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                     >
                         <div className="flex items-center gap-2 text-gray-900 font-bold text-xs uppercase tracking-wider">
                             <Video className="w-4 h-4 text-[#3667B1]" />
                             Video Message
                         </div>
                         <div className="text-gray-400">
                             {isVideoExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                         </div>
                     </button>

                     <div className={cn(
                         "px-6 pb-6 overflow-hidden transition-all duration-300",
                         isVideoExpanded ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 pb-0"
                     )}>
                         <div className="rounded-xl overflow-hidden shadow-lg bg-black aspect-video">
                             <iframe 
                               width="100%" 
                               height="100%" 
                               src={`https://www.youtube.com/embed/${todayBread.videoUrl.split('v=')[1]}`} 
                               title="Daily Bread Video" 
                               frameBorder="0" 
                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                               allowFullScreen
                             ></iframe>
                         </div>
                     </div>
                 </div>
             )}
          </Resizable>

          <div className="flex-1 min-w-0 bg-white relative">
              <div className="max-w-4xl mx-auto p-6 md:p-12 lg:px-16 lg:pt-8 lg:pb-40 pb-40">
                 
                 <div className="mb-8 h-10"></div>

                 <div className="mb-12 relative">
                     <div className="flex flex-col gap-6">
                         <div>
                             <div className="flex items-center gap-3 mb-4">
                                 <Badge className="bg-[#3667B1] text-white border-0 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg">
                                    Daily Devotional
                                 </Badge>
                                 <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                                    {todayBread.displayDate}
                                 </span>
                             </div>
                             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] text-gray-900 mb-8 tracking-tight max-w-none w-full">
                                {todayBread.title}
                             </h1>

                             {todayBread.audioUrl && (
                                <Button 
                                  onClick={() => setShowAudioPlayer(true)}
                                  className="rounded-full bg-black text-white hover:bg-[#3667B1] transition-all px-6 py-6 font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 mb-6"
                                >
                                   <Headphones className="w-5 h-5 mr-2" /> Listen to Audio
                                </Button>
                             )}

                             <div className="bg-[#3667B1]/5 p-8 rounded-2xl border border-[#3667B1]/10 mb-8">
                                <h4 className="text-xs font-bold text-[#3667B1] uppercase tracking-widest mb-3">Key Verse</h4>
                                <p className="text-2xl font-serif font-medium leading-relaxed italic text-gray-900">
                                   "{todayBread.keyVerse}"
                                </p>
                             </div>

                             <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-500">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xs text-gray-500">
                                        {todayBread.author.charAt(0)}
                                     </div>
                                     <span>By {todayBread.author}</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div 
                   style={{ fontSize: `${fontSize}%` }}
                   className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:text-gray-600 prose-a:text-[#3667B1] font-serif leading-relaxed transition-all duration-200"
                 >
                     <div dangerouslySetInnerHTML={{ __html: todayBread.body }} />
                 </div>
                 
                 <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-2">
                       {todayBread.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-gray-50 rounded-lg text-xs font-bold text-gray-400 uppercase tracking-wider">
                             #{tag}
                          </span>
                       ))}
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
