import { Instagram, ArrowUpRight } from 'lucide-react';

const photos = [
  'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY1NDcyMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1680022087238-eafecd5a8933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBtZWV0aW5nJTIwY29mZmVlfGVufDF8fHx8MTc2NTM3OTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzY1NDY1MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1722252799088-4781aabc3d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBldmVudHxlbnwxfHx8fDE3NjU0MDU3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function PhotoGallery() {
  return (
    <section className="py-24 bg-black text-white border-t border-white/20 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
           <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif italic text-2xl text-gray-500">06</span>
                <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-white/50">
                  Visual Archive
                </p>
              </div>
              <h2 className="font-serif italic text-white text-5xl md:text-7xl leading-none">
                Life Together
              </h2>
           </div>
           
           <a href="#" className="group flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white hover:text-[#3667B1] transition-colors">
              <Instagram className="w-4 h-4" /> @laubf_official <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>

        {/* Film Strip Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/20">
          {photos.map((url, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-[#111] border-r border-white/20 last:border-r-0">
              <img 
                src={url} 
                alt="Instagram Post"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              
              {/* Overlay Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                 <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-white border-l-2 border-[#3667B1] pl-2">
                   View Post
                 </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
