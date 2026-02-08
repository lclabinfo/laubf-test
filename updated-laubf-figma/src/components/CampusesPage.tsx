import { MapPin, ArrowRight, Clock } from 'lucide-react';
import { campuses } from '../lib/campuses';
import { cn } from "./ui/utils";

interface CampusesPageProps {
  onNavigate: (page: any, id?: string) => void;
}

export default function CampusesPage({ onNavigate }: CampusesPageProps) {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3667B1]/30 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10">
          <span className="inline-block px-4 py-1 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider mb-6">
              Campus Mission
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Campus Ministries
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl leading-relaxed">
             We believe in raising disciples of Jesus among college students. Find a community at your campus.
          </p>
        </div>
      </div>

      <div className="px-6 -mt-16 relative z-20">
        <div className="w-[90%] max-w-[1400px] mx-auto">
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campuses.map(campus => (
                <div 
                  key={campus.id}
                  onClick={() => onNavigate('campus-detail', campus.id)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 cursor-pointer hover:-translate-y-2 transition-all duration-300"
                >
                   {/* Image */}
                   <div className="h-64 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/0 transition-colors z-10" />
                      <img 
                        src={campus.imageUrl} 
                        alt={campus.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                         <span className="bg-white/90 backdrop-blur text-black text-xs font-black uppercase px-3 py-1 rounded-md tracking-wider">
                            {campus.shortName}
                         </span>
                      </div>
                   </div>

                   {/* Content */}
                   <div className="p-8">
                      <h3 className="text-2xl font-black uppercase leading-tight mb-2 group-hover:text-[#3667B1] transition-colors">
                        {campus.name}
                      </h3>
                      <p className="text-gray-500 font-medium mb-6 line-clamp-2">
                        {campus.description}
                      </p>

                      <div className="space-y-3 mb-8">
                         <div className="flex items-center gap-3 text-sm font-bold text-gray-600">
                            <Clock className="w-4 h-4 text-[#3667B1]" />
                            {campus.meetingTime}
                         </div>
                         <div className="flex items-center gap-3 text-sm font-bold text-gray-600">
                            <MapPin className="w-4 h-4 text-[#3667B1]" />
                            {campus.location}
                         </div>
                      </div>

                      <div className="flex items-center text-[#3667B1] font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                         View Ministry <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                   </div>
                </div>
              ))}
           </div>

        </div>
      </div>
    </div>
  );
}
