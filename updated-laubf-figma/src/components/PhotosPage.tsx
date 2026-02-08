import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Grid, Folder, Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { albums, Album, Photo } from '../lib/photos';
import { cn } from "./ui/utils";
import { Button } from './ui/button';

interface PhotosPageProps {
  onNavigate: (page: any) => void;
}

export default function PhotosPage({ onNavigate }: PhotosPageProps) {
  const [viewMode, setViewMode] = useState<'folder' | 'list'>('folder');
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedAlbum || selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedAlbum, selectedPhoto]);

  const FolderCard = ({ album, index }: { album: Album; index: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedAlbum(album)}
            className="group cursor-pointer flex flex-col gap-4"
        >
            <div className="relative w-full aspect-[4/3] bg-[#f3f4f6] rounded-[24px] overflow-hidden border border-[#e8e8e8] group-hover:border-[#0d0d0d] transition-colors shadow-sm">
                
                {/* Stack Effect (Subtle) */}
                <div className="absolute top-2 left-2 right-2 bottom-0 bg-white border border-[#e8e8e8] rounded-t-[20px] transform -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
                
                {/* Main Cover */}
                <div className="absolute inset-0 z-10">
                    <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                     <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-[8px] flex items-center gap-2 border border-white/20 shadow-sm">
                         <ImageIcon className="w-3 h-3 text-[#0d0d0d]" />
                         <span className="text-[10px] font-bold text-[#0d0d0d] uppercase tracking-wide">{album.photoCount} Photos</span>
                     </div>
                </div>
            </div>

            <div className="px-1">
                <div className="flex justify-between items-start mb-1">
                     <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#9ca3af]">{album.date}</span>
                </div>
                <h3 className="text-[20px] font-medium leading-[1.2] text-[#0d0d0d] tracking-[-0.02em] group-hover:text-[#3667B1] transition-colors">
                    {album.title}
                </h3>
            </div>
        </motion.div>
    );
  };

  const ListView = () => (
      <div className="bg-white rounded-[24px] border border-[#e8e8e8] overflow-hidden shadow-sm">
          {albums.map((album, i) => (
              <div 
                key={album.id} 
                onClick={() => setSelectedAlbum(album)}
                className="group flex items-center gap-6 p-6 border-b border-[#f0f0f0] last:border-0 hover:bg-[#fafafa] cursor-pointer transition-colors"
              >
                  <div className="w-32 h-24 rounded-[12px] overflow-hidden shrink-0 relative border border-[#e8e8e8]">
                      <img src={album.coverImage} alt={album.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                           <span className="px-2 py-0.5 bg-[#f3f4f6] rounded-[4px] text-[10px] font-bold uppercase tracking-wider text-[#6b7280]">
                               Album
                           </span>
                           <span className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af]">{album.date}</span>
                      </div>
                      <h3 className="text-[20px] font-medium text-[#0d0d0d] mb-1 group-hover:text-[#3667B1] transition-colors tracking-tight">{album.title}</h3>
                      <p className="text-[13px] text-[#676767]">{album.photoCount} photos</p>
                  </div>
                  <div className="hidden sm:block pr-4">
                       <Button variant="ghost" className="rounded-full h-10 w-10 p-0 border border-[#e8e8e8] hover:bg-[#0d0d0d] hover:text-white hover:border-[#0d0d0d] transition-all">
                           <ChevronRight className="w-5 h-5" />
                       </Button>
                  </div>
              </div>
          ))}
      </div>
  );

  const AlbumModal = ({ album }: { album: Album }) => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-white"
      >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e8e8] bg-white sticky top-0 z-10">
              <div className="flex items-center gap-6">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedAlbum(null)}
                    className="hover:bg-[#f3f4f6] rounded-[8px] h-10 px-3 text-[#0d0d0d] font-medium text-sm"
                  >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back to Gallery
                  </Button>
                  <div className="h-6 w-px bg-[#e8e8e8]" />
                  <div>
                      <h2 className="text-[18px] font-bold text-[#0d0d0d] tracking-tight leading-none">{album.title}</h2>
                      <p className="text-[11px] text-[#9ca3af] font-bold uppercase tracking-wider mt-1">{album.date} • {album.photoCount} photos</p>
                  </div>
              </div>
              <div className="flex items-center gap-3">
                  <Button className="hidden sm:flex bg-[#0d0d0d] text-white hover:bg-[#333] rounded-[8px] h-9 text-[11px] font-bold uppercase tracking-widest px-5">
                      <Download className="w-3.5 h-3.5 mr-2" />
                      Download Album
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedAlbum(null)}
                    className="rounded-full hover:bg-[#f3f4f6] h-10 w-10"
                  >
                      <X className="w-5 h-5 text-[#0d0d0d]" />
                  </Button>
              </div>
          </div>

          {/* Photos Grid */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#fafafa]">
               <div className="max-w-[1600px] mx-auto columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                   {album.photos.map((photo, i) => (
                       <div 
                         key={photo.id}
                         onClick={() => setSelectedPhoto(photo)}
                         className="break-inside-avoid relative group rounded-[16px] overflow-hidden cursor-zoom-in bg-gray-200 mb-4 shadow-sm"
                       >
                           <img 
                             src={photo.url} 
                             alt="" 
                             className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                             loading="lazy"
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                           <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                               <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
                                   <Maximize2 className="w-4 h-4 text-[#0d0d0d]" />
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
          </div>
      </motion.div>
  );

  const PhotoLightbox = ({ photo }: { photo: Photo }) => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/98 flex items-center justify-center p-6"
        onClick={() => setSelectedPhoto(null)}
      >
          <Button 
            variant="ghost" 
            className="absolute top-6 right-6 text-white/50 hover:text-white hover:bg-white/10 rounded-full h-12 w-12 p-0 z-20 transition-all"
            onClick={() => setSelectedPhoto(null)}
          >
              <X className="w-6 h-6" />
          </Button>

          <div className="absolute top-6 left-6 z-20">
               <Button className="bg-white text-black hover:bg-[#e8e8e8] rounded-[8px] h-10 text-[11px] font-bold uppercase tracking-widest px-5 border-none" onClick={(e) => e.stopPropagation()}>
                   <Download className="w-3.5 h-3.5 mr-2" />
                   Download Original
               </Button>
          </div>

          <motion.img 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={photo.url} 
            className="max-w-full max-h-full object-contain shadow-2xl rounded-[4px]"
            onClick={(e) => e.stopPropagation()}
          />
      </motion.div>
  );

  return (
    <div className="bg-[#fafafa] min-h-screen pb-40 font-['Helvetica_Neue',_sans-serif] text-[#0d0d0d]">
      
      {/* 1. EDITORIAL HEADER */}
      <div className="bg-white pt-[60px] pb-[40px] px-6 border-b border-[#e8e8e8]">
        <div className="max-w-[1400px] mx-auto">
           <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9ca3af]">
              <ImageIcon className="w-3 h-3" /> Memories
           </div>
           <h1 className="text-[60px] md:text-[80px] leading-[0.9] font-medium tracking-[-0.04em] text-[#0d0d0d] mb-4">
               Photo Gallery
           </h1>
           <p className="text-[#676767] text-[18px] font-normal max-w-2xl">
              Capturing moments of fellowship, worship, and joy in our community.
           </p>
        </div>
      </div>

      <div className="px-6 py-8">
          <div className="max-w-[1400px] mx-auto">
              
              {/* Controls */}
              <div className="flex justify-end mb-8">
                  <div className="bg-white p-1 rounded-[12px] flex gap-1 border border-[#e8e8e8] shadow-sm">
                      <button 
                        onClick={() => setViewMode('folder')}
                        className={cn(
                            "px-4 py-2 rounded-[8px] transition-all text-[12px] font-bold uppercase tracking-wide flex items-center gap-2",
                            viewMode === 'folder' ? "bg-[#0d0d0d] text-white shadow-md" : "text-[#676767] hover:bg-[#f3f4f6]"
                        )}
                      >
                          <Folder className="w-3.5 h-3.5" />
                          Folders
                      </button>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={cn(
                            "px-4 py-2 rounded-[8px] transition-all text-[12px] font-bold uppercase tracking-wide flex items-center gap-2",
                            viewMode === 'list' ? "bg-[#0d0d0d] text-white shadow-md" : "text-[#676767] hover:bg-[#f3f4f6]"
                        )}
                      >
                          <Grid className="w-3.5 h-3.5" />
                          List
                      </button>
                  </div>
              </div>

              {/* Main Content */}
              {viewMode === 'folder' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {albums.map((album, i) => (
                          <FolderCard key={album.id} album={album} index={i} />
                      ))}
                  </div>
              ) : (
                  <ListView />
              )}
          </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
          {selectedAlbum && <AlbumModal album={selectedAlbum} />}
          {selectedPhoto && <PhotoLightbox photo={selectedPhoto} />}
      </AnimatePresence>
    </div>
  );
}