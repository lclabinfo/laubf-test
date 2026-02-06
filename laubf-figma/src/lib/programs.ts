import { Ministry } from './events';

export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: string; // e.g. "6 Weeks" or "Ongoing"
  startDate: string; // ISO string if specific, or text if recurring
  endDate?: string; // Optional end date for specific date ranges
  schedule: string; // e.g. "Wednesdays @ 7:00 PM"
  location: string;
  ministry: Ministry;
  imageUrl?: string;
  registrationUrl?: string;
  status: 'Open' | 'Closed' | 'Coming Soon';
}

export const programs: Program[] = [
  {
    id: 'discipleship',
    title: "Discipleship Training Program",
    description: "A comprehensive 12-week program designed to help you grow deeper in your faith and leadership.",
    longDescription: "The Discipleship Training Program (DTP) is our core curriculum for those who want to commit to a life of following Jesus. Covering topics from basic doctrine to practical evangelism, this course is essential for future leaders.",
    duration: "12 Weeks",
    startDate: "2026-02-01T09:00:00",
    endDate: "2026-04-26T12:00:00",
    schedule: "Saturdays @ 9:00 AM",
    location: "Fellowship Hall",
    ministry: "General",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2000&auto=format&fit=crop",
    registrationUrl: "#",
    status: 'Open'
  },
  {
    id: '16-steps',
    title: "16 Steps Bible Study",
    description: "A foundational Bible study series covering the key events of redemptive history.",
    duration: "16 Weeks",
    startDate: "2026-01-07T19:00:00", // Updated to show in calendar
    schedule: "Wednesdays @ 7:00 PM",
    location: "Zoom",
    ministry: "General",
    imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2000&auto=format&fit=crop",
    status: 'Open'
  },
  {
    id: 'marriage-course',
    title: "The Marriage Course",
    description: "Practical tools to strengthen your relationship, whether you've been married for 6 months or 40 years.",
    duration: "7 Weeks",
    startDate: "2026-03-10T19:30:00",
    endDate: "2026-04-28T21:00:00",
    schedule: "Thursdays @ 7:30 PM",
    location: "Main Sanctuary",
    ministry: "Adults",
    imageUrl: "https://images.unsplash.com/photo-1628891515277-c923d3877983?q=80&w=2000&auto=format&fit=crop",
    status: 'Coming Soon'
  },
  {
    id: 'campus-internship',
    title: "Campus Shepherd Internship",
    description: "Intensive training for students who feel called to serve their campus community.",
    duration: "1 Semester",
    startDate: "2025-08-25T09:00:00",
    endDate: "2025-12-15T17:00:00",
    schedule: "Weekly Mentoring",
    location: "Various Campuses",
    ministry: "YAM",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    status: 'Closed'
  },
  {
    id: 'music-academy',
    title: "Levite Music Academy",
    description: "Music lessons and worship team training for youth and young adults.",
    duration: "Ongoing",
    startDate: "2026-01-10T14:00:00", // Updated to show in calendar
    endDate: "2026-12-31T14:00:00",
    schedule: "Saturdays @ 2:00 PM",
    location: "Music Room",
    ministry: "HBF",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
    status: 'Open'
  }
];
