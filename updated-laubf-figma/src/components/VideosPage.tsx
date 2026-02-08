import { useState, useEffect, useMemo } from 'react';
import { Search, Play, Clock, ArrowRight, X, ExternalLink, Calendar, Filter, ChevronDown } from 'lucide-react';
import { videos, VideoResource } from '../lib/videos';
import { Button } from './ui/button';
import { cn } from "./ui/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface VideosPageProps {
  onNavigate: (page: 'home' | 'about' | 'sermons' | 'sermon-detail' | 'resources' | 'daily-bread' | 'videos', id?: string) => void;
}

const ITEMS_PER_PAGE = 12;

export default function VideosPage({ onNavigate }: VideosPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedVideo, setSelectedVideo] = useState<VideoResource | null>(null);

  // Featured Content Logic (Top 3 featured items)
  const featuredContent = useMemo(() => {
    return videos.filter(v => v.featured).slice(0, 3);
  }, []);

  const mainFeature = featuredContent[0];
  const secondaryFeatures = featuredContent.slice(1, 3);

  // Parse dates for filtering
  const parseVideoDate = (dateStr: string): Date => {
    // Handles formats like "Aug 15, 2023" or "2023-08-15"
    return new Date(dateStr);
  };

  // Archive Content Logic
  const archiveContent = useMemo(() => {
     return videos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              video.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(video.category);
        
        let matchesDate = true;
        if (dateFrom || dateTo) {
          const videoDate = parseVideoDate(video.date);
          if (dateFrom) {
            const fromDate = new Date(dateFrom);
            matchesDate = matchesDate && videoDate >= fromDate;
          }
          if (dateTo) {
            const toDate = new Date(dateTo);
            matchesDate = matchesDate && videoDate <= toDate;
          }
        }
        
        return matchesSearch && matchesCategory && matchesDate;
     });
  }, [searchTerm, selectedCategories, dateFrom, dateTo]);

  const visibleVideos = archiveContent.slice(0, visibleCount);
  const hasMore = visibleCount < archiveContent.length;

  // Reset pagination on filter change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedCategories, dateFrom, dateTo]);

  const uniqueCategories = Array.from(new Set(videos.map(v => v.category)));

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setDateFrom('');
    setDateTo('');
  };

  const hasActiveFilters = searchTerm || selectedCategories.length > 0 || dateFrom || dateTo;

  const VideoCard = ({ video, className, large = false }: { video: VideoResource, className?: string, large?: boolean }) => (
    <div 
      className={cn("group relative overflow-hidden rounded-[24px] cursor-pointer", className)}
      onClick={() => setSelectedVideo(video)}
    >
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
          
          {/* Advanced Filters */}
          <div className="mb-8 bg-white rounded-[20px] border border-[#e8e8e8] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-4 h-4 text-[#0d0d0d]" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0d0d0d]">Filters</h3>
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="ml-auto text-[11px] font-bold uppercase tracking-wider text-[#676767] hover:text-[#0d0d0d] transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search */}
              <div className="md:col-span-5">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search videos..." 
                    className="w-full pl-10 pr-4 h-11 bg-white rounded-[10px] border border-[#e8e8e8] focus:outline-none focus:border-[#0d0d0d] focus:ring-0 font-medium text-[14px] placeholder:text-[#a0a0a0] transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Date From */}
              <div className="md:col-span-3">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                  From Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] w-4 h-4 pointer-events-none" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 h-11 bg-white rounded-[10px] border border-[#e8e8e8] focus:outline-none focus:border-[#0d0d0d] focus:ring-0 font-medium text-[14px] transition-all"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                </div>
              </div>

              {/* Date To */}
              <div className="md:col-span-3">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                  To Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a0a0a0] w-4 h-4 pointer-events-none" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 h-11 bg-white rounded-[10px] border border-[#e8e8e8] focus:outline-none focus:border-[#0d0d0d] focus:ring-0 font-medium text-[14px] transition-all"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </div>
              </div>

              {/* Category Filter (Dropdown) */}
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                  Category
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="w-full h-11 bg-white rounded-[10px] border border-[#e8e8e8] hover:border-[#0d0d0d] focus:outline-none focus:border-[#0d0d0d] font-medium text-[14px] transition-all flex items-center justify-center gap-2">
                      <span className={cn(
                        "text-[13px] font-bold",
                        selectedCategories.length > 0 ? "text-[#0d0d0d]" : "text-[#a0a0a0]"
                      )}>
                        {selectedCategories.length > 0 ? `${selectedCategories.length} selected` : "All"}
                      </span>
                      <ChevronDown className="w-3 h-3 text-[#676767]" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px]">
                    {uniqueCategories.map(cat => (
                      <DropdownMenuItem 
                        key={cat}
                        onClick={() => toggleCategory(cat)}
                        className="text-xs font-bold cursor-pointer"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <div className={cn(
                            "w-4 h-4 rounded border-2 flex items-center justify-center transition-all",
                            selectedCategories.includes(cat) 
                              ? "bg-[#0d0d0d] border-[#0d0d0d]" 
                              : "border-[#e8e8e8]"
                          )}>
                            {selectedCategories.includes(cat) && (
                              <div className="w-2 h-2 bg-white rounded-sm" />
                            )}
                          </div>
                          <span>{cat}</span>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Active Filter Pills */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#f0f0f0]">
                {selectedCategories.map(cat => (
                  <span 
                    key={cat}
                    className="px-3 py-1.5 bg-[#0d0d0d] text-white rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    {cat}
                    <button 
                      onClick={() => toggleCategory(cat)}
                      className="hover:text-[#dcdcdc] transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {dateFrom && (
                  <span className="px-3 py-1.5 bg-[#f3f4f6] text-[#0d0d0d] rounded-full text-[11px] font-bold uppercase tracking-wider">
                    From: {new Date(dateFrom).toLocaleDateString()}
                  </span>
                )}
                {dateTo && (
                  <span className="px-3 py-1.5 bg-[#f3f4f6] text-[#0d0d0d] rounded-full text-[11px] font-bold uppercase tracking-wider">
                    To: {new Date(dateTo).toLocaleDateString()}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-[13px] text-[#676767] font-medium">
            Showing {visibleVideos.length} of {archiveContent.length} videos
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {visibleVideos.map(video => (
              <div 
                key={video.id} 
                className="group cursor-pointer flex flex-col gap-4"
                onClick={() => setSelectedVideo(video)}
              >
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
                 onClick={clearFilters}
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

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-[24px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center transition-all text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`} 
                title={selectedVideo.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-6 bg-white">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">
                    <span className="text-[#0d0d0d]">{selectedVideo.category}</span>
                    <span className="w-1 h-1 bg-[#dcdcdc] rounded-full" />
                    <span>{selectedVideo.date}</span>
                    <span className="w-1 h-1 bg-[#dcdcdc] rounded-full" />
                    <span>{selectedVideo.duration}</span>
                  </div>
                  <h2 className="text-[24px] font-medium leading-[1.2] text-[#0d0d0d] tracking-[-0.02em] mb-3">
                    {selectedVideo.title}
                  </h2>
                  <p className="text-[14px] text-[#676767] leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                <button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${selectedVideo.videoId}`, '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0d0d0d] text-white rounded-[10px] text-[12px] font-bold uppercase tracking-wider hover:bg-[#2a2a2a] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
