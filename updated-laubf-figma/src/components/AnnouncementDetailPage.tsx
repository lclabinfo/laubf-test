import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { mockAnnouncements } from '../data/mockAnnouncements';

interface AnnouncementDetailPageProps {
  announcementId: string;
  onNavigate: (page: any, id?: string) => void;
  onBack: () => void;
}

export default function AnnouncementDetailPage({ announcementId, onNavigate, onBack }: AnnouncementDetailPageProps) {
  const announcement = mockAnnouncements.find(a => a.id === announcementId);

  if (!announcement) {
      return <div>Announcement not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); onNavigate('member-hub'); }}>Member Hub</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Announcements</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="truncate max-w-[200px] md:max-w-md">{announcement.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex items-center gap-3 mt-4">
            <Button variant="ghost" size="icon" onClick={onBack} className="mr-2 -ml-3">
                <ArrowLeft className="w-5 h-5" />
            </Button>
             <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight truncate flex-1">{announcement.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <header className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-[#3667B1] hover:bg-[#2d5491] text-white border-0 capitalize">
                        {announcement.type}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                        <Calendar className="w-4 h-4" /> {announcement.date}
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                    {announcement.title}
                </h2>
            </header>
            
            <div 
                className="prose prose-blue max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: announcement.content }}
            />
        </article>
      </div>
    </div>
  );
}
