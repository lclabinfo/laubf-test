import { useState, useEffect } from 'react';
import { Video, BookOpen, FileText, ChevronRight, ExternalLink, Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { mockAnnouncements } from '../data/mockAnnouncements';
import { useNotifications } from '../lib/NotificationContext';

interface MemberHubProps {
  onNavigate: (page: any, id?: string) => void;
  onLogout: () => void;
}

export default function MemberHub({ onNavigate, onLogout }: MemberHubProps) {
  const { notifications, clearNotifications } = useNotifications();
  const [displayNotifications, setDisplayNotifications] = useState(notifications);

  useEffect(() => {
    // Capture the initial notification state to display "New" badges
    setDisplayNotifications(notifications);
    // Clear the global notifications so the navbar badge disappears
    clearNotifications();
    // We only want this to run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Member Hub</h1>
              <p className="text-gray-500 font-medium">Internal resources and quick links for church members</p>
            </div>
            <Button 
              variant="outline" 
              onClick={onLogout}
              className="self-start md:self-auto"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Announcements Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="w-5 h-5 text-[#3667B1]" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Internal Announcements</h2>
            {displayNotifications.announcements > 0 && (
              <span className="flex items-center justify-center bg-[#eef2f6] text-[#3667B1] text-[10px] font-black px-2 py-0.5 rounded-full ml-1 animate-in zoom-in duration-300 border border-[#3667B1]/20">
                {displayNotifications.announcements} NEW
              </span>
            )}
          </div>
          
          <div className="relative px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {mockAnnouncements.slice(0, 5).map((announcement) => (
                  <CarouselItem key={announcement.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                     <Card 
                        className="h-full border-0 shadow-sm hover:shadow-md transition-all cursor-pointer group select-none"
                        onClick={() => onNavigate('announcement-detail', announcement.id)}
                     >
                       <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center gap-2 mb-3">
                             <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider text-gray-500 border-gray-300">
                               {announcement.type}
                             </Badge>
                             <span className="text-[10px] font-bold text-gray-400">
                               {announcement.date}
                             </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#3667B1] transition-colors line-clamp-2">
                            {announcement.title}
                          </h3>
                          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4 flex-grow">
                             {announcement.summary}
                          </p>
                          <div className="flex items-center text-[#3667B1] text-xs font-bold uppercase tracking-wide mt-auto">
                            Read More <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
                       </CardContent>
                     </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4" />
              <CarouselNext className="hidden md:flex -right-4" />
            </Carousel>
          </div>

          <div className="mt-6 text-center">
             <Button 
                variant="ghost" 
                className="text-gray-500 hover:text-[#3667B1] font-bold text-sm"
                onClick={() => onNavigate('announcements')}
             >
                View All Announcements <ChevronRight className="w-4 h-4 ml-1" />
             </Button>
          </div>
        </section>

        {/* Weekly Meetings Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Video className="w-5 h-5 text-[#3667B1]" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Weekly Meetings</h2>
            {displayNotifications.meetings > 0 && (
              <span className="flex items-center justify-center bg-[#eef2f6] text-[#3667B1] text-[10px] font-black px-2 py-0.5 rounded-full ml-1 animate-in zoom-in duration-300 border border-[#3667B1]/20">
                {displayNotifications.meetings} NEW
              </span>
            )}
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
             {/* 16 Steps Bible Study */}
             <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6">
                 <Badge className="bg-blue-100 text-[#3667B1] hover:bg-blue-200 border-0 mb-4 rounded-md">Wednesdays @ 7:00 PM</Badge>
                 <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">16 Steps Bible Study</h3>
                 <p className="text-sm text-gray-500 mb-6">Join us for deep dive study and discussion.</p>
                 
                 <div className="flex flex-col gap-3">
                   <Button className="w-full bg-[#3667B1] hover:bg-[#2a5291] font-bold">
                     Join Zoom Meeting
                   </Button>
                   <a href="#" className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-[#3667B1] uppercase tracking-wide py-2">
                     <FileText className="w-3 h-3" /> Study Questions
                   </a>
                 </div>
               </CardContent>
             </Card>

             {/* Morning Daily Bread */}
             <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6">
                 <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-0 mb-4 rounded-md">Mon-Fri @ 6:00 AM</Badge>
                 <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Morning Daily Bread & Prayer</h3>
                 <p className="text-sm text-gray-500 mb-6">Start your day with the Word and prayer.</p>
                 
                 <div className="flex flex-col gap-3">
                   <Button className="w-full bg-white border-2 border-gray-100 text-gray-900 hover:bg-gray-50 font-bold shadow-sm">
                     Join Zoom Meeting
                   </Button>
                 </div>
               </CardContent>
             </Card>

             {/* Evening Prayer */}
             <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
               <CardContent className="p-6">
                 <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4 rounded-md">Daily @ 8:30 PM</Badge>
                 <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Evening Prayer Meeting</h3>
                 <p className="text-sm text-gray-500 mb-6">Wrap up the day with community prayer.</p>
                 
                 <div className="flex flex-col gap-3">
                   <Button className="w-full bg-white border-2 border-gray-100 text-gray-900 hover:bg-gray-50 font-bold shadow-sm">
                     Join Zoom Meeting
                   </Button>
                   <a href="#" className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-[#3667B1] uppercase tracking-wide py-2">
                     <FileText className="w-3 h-3" /> Prayer Outline
                   </a>
                 </div>
               </CardContent>
             </Card>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-[#3667B1]" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Resources</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {/* Prayer Topics */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#3667B1]/30 transition-colors">
               <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-1">2025 Prayer Topics & Key Verses</h3>
                 <p className="text-sm text-gray-500">Our spiritual direction for the year</p>
               </div>
               <Button variant="outline" className="shrink-0 font-bold">
                 View Document
               </Button>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="w-5 h-5 text-[#3667B1]" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Quick Shortcuts</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
             <button 
               onClick={() => onNavigate('studies')}
               className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#3667B1] hover:shadow-md transition-all text-left group"
             >
                <div className="font-bold text-gray-900 mb-1 group-hover:text-[#3667B1] transition-colors flex items-center justify-between">
                  Study Materials <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-gray-500">Access bible study questions</p>
             </button>

             <button 
               onClick={() => onNavigate('sermons')}
               className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#3667B1] hover:shadow-md transition-all text-left group"
             >
                <div className="font-bold text-gray-900 mb-1 group-hover:text-[#3667B1] transition-colors flex items-center justify-between">
                  Sermons <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-gray-500">Watch Sunday messages</p>
             </button>

             <button 
               onClick={() => onNavigate('daily-bread')}
               className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#3667B1] hover:shadow-md transition-all text-left group"
             >
                <div className="font-bold text-gray-900 mb-1 group-hover:text-[#3667B1] transition-colors flex items-center justify-between">
                  Daily Bread <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-gray-500">Daily devotionals</p>
             </button>
          </div>
        </section>

      </div>
    </div>
  );
}
