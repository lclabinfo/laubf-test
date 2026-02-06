import { useState } from 'react';
import { ArrowLeft, MessageSquare, Heart, Share2, Send, Lock, FileText, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface PrayerTopicsPageProps {
  onNavigate: (page: any) => void;
}

// Mock Data
const MOCK_PRAYERS = [
  {
    id: 1,
    author: "Sarah Lee",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    date: "2 hours ago",
    content: "Please pray for my grandmother who is undergoing surgery tomorrow. Pray for the doctors' wisdom and a quick recovery.",
    topic: "Health",
    prayingCount: 12,
    comments: 3
  },
  {
    id: 2,
    author: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    date: "1 day ago",
    content: "Praise God! I finally found a job after months of searching. Thank you everyone for your prayers during this season.",
    topic: "Thanksgiving",
    prayingCount: 45,
    comments: 8
  },
  {
    id: 3,
    author: "Grace Chen",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    date: "2 days ago",
    content: "Please pray for our campus ministry outreach this week. We are hoping to connect with many new students.",
    topic: "Mission",
    prayingCount: 28,
    comments: 5
  }
];

export default function PrayerTopicsPage({ onNavigate }: PrayerTopicsPageProps) {
  const [newPrayer, setNewPrayer] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => onNavigate('home')} className="mr-2 -ml-3">
                <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">Prayer Topics</h1>
                <p className="text-sm text-gray-500 font-medium">Share burdens and praise with the community</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Main Content (Feed) */}
            <div className="flex-1 lg:w-2/3">
                {/* Create Post */}
                <Card className="mb-8 border-0 shadow-sm">
                    <CardContent className="p-6">
                        <div className="flex gap-4">
                            <Avatar>
                                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <Textarea 
                                    placeholder="Share a prayer request or praise report..." 
                                    className="min-h-[100px] bg-gray-50 border-0 focus-visible:ring-1 focus-visible:ring-[#3667B1] resize-none"
                                    value={newPrayer}
                                    onChange={(e) => setNewPrayer(e.target.value)}
                                />
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex gap-2">
                                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Health</Badge>
                                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Family</Badge>
                                        <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">Mission</Badge>
                                    </div>
                                    <Button className="bg-[#3667B1] hover:bg-[#2d5491] text-xs font-bold uppercase tracking-wider">
                                        Post Request
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Feed */}
                <div className="space-y-6">
                    {MOCK_PRAYERS.map((prayer) => (
                        <Card key={prayer.id} className="border-0 shadow-sm overflow-hidden">
                            <CardHeader className="p-6 pb-4 flex flex-row items-start gap-4 space-y-0">
                                <Avatar>
                                    <AvatarImage src={prayer.avatar} />
                                    <AvatarFallback>{prayer.author[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900">{prayer.author}</h3>
                                            <span className="text-xs text-gray-500">{prayer.date}</span>
                                        </div>
                                        <Badge variant="secondary" className="bg-blue-50 text-[#3667B1] hover:bg-blue-100">
                                            {prayer.topic}
                                        </Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 pb-4">
                                <p className="text-gray-700 leading-relaxed">{prayer.content}</p>
                            </CardContent>
                            <CardFooter className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-between items-center">
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#3667B1] transition-colors">
                                        <Heart className="w-4 h-4" />
                                        {prayer.prayingCount} Praying
                                    </button>
                                    <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#3667B1] transition-colors">
                                        <MessageSquare className="w-4 h-4" />
                                        {prayer.comments} Comments
                                    </button>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Sidebar Resources */}
            <div className="lg:w-1/3 space-y-6">
                <Card className="border-0 shadow-sm sticky top-40">
                    <CardHeader className="bg-[#3667B1] text-white rounded-t-xl">
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="w-5 h-5" /> Prayer Resources
                        </CardTitle>
                        <CardDescription className="text-blue-100">
                            Essential documents for your spiritual walk.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-gray-100">
                            <a href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#3667B1]">Prayer Outline</h4>
                                    <p className="text-xs text-gray-500">Download PDF Guide</p>
                                </div>
                            </a>
                            <a href="#" className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Download className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#3667B1]">2026 Yearly Topics</h4>
                                    <p className="text-xs text-gray-500">Download PDF Guide</p>
                                </div>
                            </a>
                        </div>
                    </CardContent>
                </Card>

                {/* Optional: Encouragement Widget */}
                <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <h3 className="font-serif italic text-xl text-gray-400 mb-2">"Rejoice always, pray continually, give thanks in all circumstances..."</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">1 Thessalonians 5:16-18</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}