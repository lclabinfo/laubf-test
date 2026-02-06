import { useParams } from 'react-router-dom';
import { meetings } from '../lib/meetings';
import { getMinistryColor } from '../lib/events';
import { Calendar, MapPin, ArrowLeft, Clock, Users, Video } from 'lucide-react';
import { cn } from "./ui/utils";
import { Button } from './ui/button';

interface MeetingDetailPageProps {
  meetingId?: string; // Optional prop if passed directly
  onNavigate: (page: any, id?: string) => void;
}

export default function MeetingDetailPage({ meetingId, onNavigate }: MeetingDetailPageProps) {
  // Try to get id from props first, but we are likely using a custom router state in App.tsx
  // In App.tsx logic: <MeetingDetailPage meetingId={currentMeetingId!} ... />
  
  const meeting = meetings.find(m => m.id === meetingId);

  if (!meeting) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Meeting Not Found</h2>
        <Button onClick={() => onNavigate('meetings')}>Back to Meetings</Button>
      </div>
    );
  }

  const ministryColor = getMinistryColor(meeting.ministry);

  return (
    <div className="bg-white min-h-screen pb-20 pt-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => onNavigate('meetings')}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Meetings
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider", ministryColor)}>
                        {meeting.ministry}
                    </span>
                    {meeting.isOnline && (
                         <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 flex items-center gap-1">
                             <Video className="w-3 h-3" /> Online
                         </span>
                    )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-6">
                    {meeting.title}
                </h1>

                <div className="flex flex-col gap-4 text-gray-600 font-medium">
                     <div className="flex items-center gap-3">
                         <Calendar className="w-5 h-5 text-[#3667B1]" />
                         <span className="text-lg">{meeting.day}s</span>
                     </div>
                     <div className="flex items-center gap-3">
                         <Clock className="w-5 h-5 text-[#3667B1]" />
                         <span className="text-lg">{meeting.time}</span>
                     </div>
                     <div className="flex items-center gap-3">
                         <MapPin className="w-5 h-5 text-[#3667B1]" />
                         <span className="text-lg">{meeting.location}</span>
                     </div>
                     {meeting.leader && (
                        <div className="flex items-center gap-3">
                             <Users className="w-5 h-5 text-[#3667B1]" />
                             <span className="text-lg">Led by {meeting.leader}</span>
                        </div>
                     )}
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 w-full mb-12" />

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif italic">About this Gathering</h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                    <p>{meeting.description}</p>
                    <p className="mt-4">
                        Join us as we gather to strengthen our faith and encourage one another. 
                        These meetings are a core part of our community life, offering a smaller, 
                        more intimate setting for fellowship and prayer.
                    </p>
                </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 h-fit border border-gray-100">
                <h3 className="font-bold uppercase tracking-wider text-sm text-gray-900 mb-6">Join Us</h3>
                
                {meeting.isOnline && meeting.zoomUrl ? (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500 mb-4">
                            This meeting is held online via Zoom. Click the button below to join at the scheduled time.
                        </p>
                        <a 
                            href={meeting.zoomUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-4 bg-[#3667B1] text-white font-bold uppercase tracking-wider rounded-xl hover:bg-[#2d5491] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <Video className="w-4 h-4 mr-2" />
                            Launch Zoom
                        </a>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500">
                            This is an in-person gathering. We look forward to seeing you there!
                        </p>
                        <div className="bg-white p-4 rounded-xl border border-gray-200">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">Location</span>
                            <p className="font-medium text-gray-900">{meeting.location}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

      </div>
    </div>
  );
}
