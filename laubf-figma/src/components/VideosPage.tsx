import { useState, useEffect, useMemo } from 'react';
import { Search, Play, Clock, ArrowRight } from 'lucide-react';
import { videos, VideoResource } from '../lib/videos';
import { Button } from './ui/button';
import { cn } from "./ui/utils";

interface VideosPageProps {
  onNavigate: (page: 'home' | 'about' | 'sermons' | 'sermon-detail' | 'resources' | 'daily-bread' | 'videos', id?: string) => void;
}

const ITEMS_PER_PAGE = 12;

export default function VideosPage({ onNavigate }: VideosPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Featured Content Logic (Top 3 featured items)
  const featuredContent = useMemo(() => {
    return videos.filter(v => v.featured).slice(0, 3);
  }, []);

  const mainFeature = featuredContent[0];
  const secondaryFeatures = featuredContent.slice(1, 3);

  // Archive Content Logic
  const archiveContent = useMemo(() => {
     return videos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              video.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
        return matchesSearch && matchesCategory;
     });
  }, [searchTerm, selectedCategory]);

  const visibleVideos = archiveContent.slice(0, visibleCount);
  const hasMore = visibleCount < archiveContent.length;

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedCategory]);

  const uniqueCategories = ['All', ...Array.from(new Set(videos.map(v => v.category)))];

  const VideoCard = ({ video, className, large = false }: { video: VideoResource, className?: string, large?: boolean }) => (
    <div className={cn("group relative overflow-hidden rounded-[24px] cursor-pointer", className)}>
       {/* Thumbnail */}
       <div className="absolute inset-0 bg-gray-900">
          <img 
            src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
            alt={video.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
          />
       </div>
       
       {/* Overlay Gradient */}
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

       {/* Content */}
       <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded-[4px] tracking-widest border border-white/10">
                   {video.category}
                </span>
                <span className="text-white/70 text-[11px] font-bold flex items-center gap-1 uppercase tracking-wider">
                   <Clock className="w-3 h-3" /> {video.duration}
                </span>
             </div>
             
             <h3 className={cn("font-medium text-white leading-[1.1] mb-2 group-hover:text-[#dcdcdc] transition-colors tracking-tight", large ? "text-[32px] md:text-[48px]" : "text-[20px]")}>
               {video.title}
             </h3>
             
             <div className={cn("opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100", large ? "mt-6" : "mt-4")}>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors">
                   <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="bg-[#fafafa] min-h-screen pb-40 font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="bg-white pt-[60px] pb-[40px] px-6 border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
           <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
              <Play className="w-3 h-3" /> Media Hub
           </div>
           <h1 className="text-[60px] md:text-[80px] leading-[0.9] font-medium tracking-[-0.04em] text-[#0d0d0d] mb-4">
               Videos
           </h1>
           <p className="text-[#676767] text-[18px] font-normal max-w-2xl">
              Testimonies, event recaps, worship sessions, and special features from our community.
           </p>
        </div>
      </div>

      {/* 2. FEATURED BENTO BOX */}
      <section className="px-6 py-12 border-b border-[#e8e8e8]">
         <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af] mb-8 flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d]" /> Featured Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
               {/* Main Feature (2/3 width) */}
               {mainFeature && (
                 <VideoCard video={mainFeature} className="md:col-span-2 h-full shadow-sm" large />
               )}
               
               {/* Secondary Column (1/3 width, stacked) */}
               <div className="flex flex-col gap-6 h-full">
                  {secondaryFeatures.map(video => (
                    <VideoCard key={video.id} video={video} className="flex-1 shadow-sm" />
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 3. FILTERS & ARCHIVE */}
      <section className="px-6 pt-12">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
             
             {/* Categories (Pills) */}
             <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar bg-white p-1.5 rounded-[12px] border border-[#e8e8e8] shadow-sm">
                {uniqueCategories.map(cat => (
                   <button
                     key={cat}
                     onClick={() => setSelectedCategory(cat)}
                     className={cn(
                       "px-4 py-2 rounded-[8px] text-[13px] font-bold uppercase tracking-wide transition-all whitespace-nowrap",
                       selectedCategory === cat 
                         ? "bg-[#0d0d0d] text-white shadow-md" 
                         : "bg-transparent text-[#676767] hover:bg-[#f3f4f6]"
                     )}
                   >
                     {cat}
                   </button>
                ))}
             </div>

             {/* Search */}
             <div className="relative w-full md:w-[320px]">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a0a0] w-4 h-4" />
               <input 
                 type="text" 
                 placeholder="Search videos..." 
                 className="w-full pl-10 pr-4 h-12 bg-white rounded-[12px] border border-[#e8e8e8] focus:outline-none focus:border-[#0d0d0d] focus:ring-0 font-medium text-[14px] placeholder:text-[#a0a0a0] transition-all shadow-sm"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
             </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {visibleVideos.map(video => (
              <div key={video.id} className="group cursor-pointer flex flex-col gap-4">
                 {/* Thumbnail */}
                 <div className="relative aspect-video rounded-[16px] overflow-hidden bg-gray-100 border border-[#e8e8e8] group-hover:border-[#0d0d0d] transition-all duration-300">
                    <img 
                       src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
                       alt={video.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                       </div>
                    </div>
                    
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-[6px] text-white text-[10px] font-bold tracking-wide border border-white/10">
                      {video.duration}
                    </div>
                 </div>

                 {/* Info */}
                 <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                       <span className="text-[#0d0d0d]">{video.category}</span>
                       <span className="w-1 h-1 bg-[#dcdcdc] rounded-full" />
                       <span>{video.date}</span>
                    </div>
                    <h3 className="text-[18px] font-medium leading-[1.2] text-[#0d0d0d] tracking-[-0.02em] group-hover:text-[#3667B1] transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                 </div>
              </div>
            ))}
          </div>

          {archiveContent.length === 0 && (
            <div className="text-center py-40 text-[#676767]">
               <p className="text-[18px] font-medium">No videos found matching your criteria.</p>
               <button 
                 onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                 className="mt-4 text-[#0d0d0d] font-bold text-[13px] uppercase tracking-widest hover:underline"
               >
                 Clear Filters
               </button>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
             <div className="flex justify-center mb-20">
               <Button 
                 onClick={() => setVisibleCount(prev => prev + 12)}
                 variant="outline"
                 className="h-14 px-8 rounded-full border-[#dcdcdc] text-[#0d0d0d] font-bold uppercase tracking-widest text-[11px] hover:bg-[#0d0d0d] hover:text-white transition-all"
               >
                 Load More Videos
               </Button>
             </div>
          )}

        </div>
      </section>
    </div>
  );
}