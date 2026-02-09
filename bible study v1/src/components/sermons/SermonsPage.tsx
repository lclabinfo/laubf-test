import { useState } from 'react';
import { Play, Calendar, User, BookOpen, Search, Filter, ArrowRight } from 'lucide-react';
import { sermons } from '../../lib/sermons';
import { Button } from '../ui/button';

interface SermonsPageProps {
  onNavigate: (page: 'home' | 'about' | 'sermons' | 'sermon-detail', sermonId?: string) => void;
}

export default function SermonsPage({ onNavigate }: SermonsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<string>('All');
  
  // Logic
  const latestSermon = sermons?.[0];
  const otherSermons = sermons?.slice(1) || [];

  if (!latestSermon) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">No sermons found</h1>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      </div>
    );
  }
  
  // Filter logic
  const filteredSermons = otherSermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sermon.passage.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpeaker = selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker;
    
    return matchesSearch && matchesSpeaker;
  });

  const uniqueSpeakers = ['All', ...Array.from(new Set(sermons.map(s => s.speaker)))];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-black text-white pt-32 pb-20 px-6">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider mb-8">
            Media Library
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            The Message
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Watch recent sermons, download study guides, and grow in your faith.
          </p>
        </div>
      </div>

      {/* Featured Sermon (Hero) */}
      <section className="px-6 -mt-12 mb-20">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden group shadow-2xl cursor-pointer"
               onClick={() => onNavigate('sermon-detail', latestSermon.id)}>
            <img 
              src={`https://img.youtube.com/vi/${latestSermon.videoId}/maxresdefault.jpg`} 
              alt={latestSermon.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#3667B1] text-white px-3 py-1 rounded-lg text-sm font-bold uppercase tracking-wide">
                  Latest Message
                </span>
                <span className="text-white/80 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {latestSermon.date}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
                {latestSermon.title}
              </h2>
              
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-white/90">
                     <User className="w-5 h-5 text-[#3667B1]" />
                     <span className="font-bold text-lg">{latestSermon.speaker}</span>
                   </div>
                   <div className="flex items-center gap-2 text-white/70">
                     <BookOpen className="w-5 h-5" />
                     <span className="font-medium">{latestSermon.passage}</span>
                   </div>
                </div>

                <Button 
                  className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-bold group-hover:translate-x-2 transition-transform w-fit"
                >
                  <Play className="w-5 h-5 mr-2 fill-black" /> Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="px-6">
        <div className="w-[90%] max-w-[1400px] mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 sticky top-24 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm">
             <div className="relative w-full md:w-auto md:min-w-[300px]">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
               <input 
                 type="text" 
                 placeholder="Search titles, passages..." 
                 className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#3667B1] outline-none font-medium"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
               />
             </div>

             <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-sm tracking-wide shrink-0">
                   <Filter className="w-4 h-4" /> Filter by:
                </div>
                {uniqueSpeakers.map(speaker => (
                  <button
                    key={speaker}
                    onClick={() => setSelectedSpeaker(speaker)}
                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                      selectedSpeaker === speaker 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {speaker}
                  </button>
                ))}
             </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map(sermon => (
              <div 
                key={sermon.id} 
                className="group cursor-pointer flex flex-col gap-4"
                onClick={() => onNavigate('sermon-detail', sermon.id)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                   <img 
                      src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`} 
                      alt={sermon.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                   </div>
                   <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-white text-xs font-bold">
                     24:15
                   </div>
                </div>

                {/* Info */}
                <div>
                   <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-2">
                      <span className="text-[#3667B1] font-bold uppercase tracking-wide">{sermon.series}</span>
                      <span>•</span>
                      <span>{sermon.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold leading-tight mb-2 group-hover:text-[#3667B1] transition-colors">
                     {sermon.title}
                   </h3>
                   <div className="flex flex-wrap gap-2 mb-3">
                     {sermon.tags.map(tag => (
                       <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-bold rounded uppercase">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-4">
                     {sermon.description}
                   </p>
                   
                   <div className="flex items-center gap-2 text-sm font-bold text-gray-900 border-t border-gray-100 pt-4">
                      <User className="w-4 h-4 text-gray-400" />
                      {sermon.speaker}
                   </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSermons.length === 0 && (
            <div className="text-center py-20 text-gray-500">
               <p className="text-xl">No sermons found matching your criteria.</p>
               <button 
                 onClick={() => {setSearchTerm(''); setSelectedSpeaker('All');}}
                 className="mt-4 text-[#3667B1] font-bold hover:underline"
               >
                 Clear Filters
               </button>
            </div>
          )}

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center">
            <button className="px-8 py-3 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
              Load More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
