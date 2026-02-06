export type Ministry = 'General' | 'CBF' | 'BBF' | 'JBF' | 'HBF' | 'YAM' | 'Adults';

export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  startDate: string; // ISO string
  endDate: string; // ISO string
  location: string;
  address: string;
  ministry: Ministry;
  campusId?: string;
  imageUrl?: string;
  videoUrl?: string;
  contactName?: string;
  contactEmail?: string;
  tags?: string[];
  type: 'event' | 'meeting' | 'program';
  // Specific fields for the new design
  zoomUrl?: string;
  badge?: string; // "GENERAL", "YAM" for quick access
  recurrence?: string; // "Monday - Fridays @ 6:00 AM"
  programDetails?: {
    duration?: string;
    semester?: string;
    weeklySchedule?: string;
  };
  isRegistrationClosed?: boolean;
}

const longDescPlaceholder = `
<p>We are delighted to invite you to join us for this transformative experience. This program is designed to equip you with the spiritual tools and community support needed to grow deeper in your faith.</p>

<p>Through a combination of structured teaching, small group discussion, and practical application, we aim to foster an environment where discipleship happens naturally. Whether you are exploring Christianity for the first time or have walked with Jesus for years, there is a place for you here.</p>

<h3>Program Overview</h3>
<p>The curriculum covers key biblical themes, including the nature of God, the work of Christ, and the role of the Holy Spirit in our daily lives. Each session builds upon the last, creating a cohesive journey of discovery.</p>

<h3>What to Bring</h3>
<p>Please bring a Bible, a notebook, and an open heart. All other materials will be provided.</p>
`;

export const events: Event[] = [
  // --- QUICK ACCESS (Recurring Online Meetings) ---
  {
    id: 'daily-bread',
    title: "Morning Daily Bread & Prayer",
    description: "Start your day with scripture and prayer.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-06T06:00:00",
    endDate: "2026-02-06T07:00:00",
    location: "Online (Zoom)",
    address: "Zoom Link",
    ministry: "General",
    type: 'meeting',
    badge: "GENERAL",
    recurrence: "Monday - Fridays @ 6:00 AM",
    zoomUrl: "https://zoom.us/j/123456789"
  },
  {
    id: 'evening-prayer',
    title: "Evening Prayer Meeting",
    description: "Close the week with corporate prayer.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-06T20:30:00",
    endDate: "2026-02-06T21:30:00",
    location: "Online (Zoom)",
    address: "Zoom Link",
    ministry: "General",
    type: 'meeting',
    badge: "GENERAL",
    recurrence: "Fridays @ 8:30 PM",
    zoomUrl: "https://zoom.us/j/987654321"
  },
  {
    id: 'campus-mission-prayer',
    title: "Campus Mission Prayer",
    description: "Praying for our local campuses.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-10T06:00:00",
    endDate: "2026-02-10T07:00:00",
    location: "Online (Zoom)",
    address: "Zoom Link",
    ministry: "YAM",
    type: 'meeting',
    badge: "YAM",
    recurrence: "Tuesdays @ 6:00 AM",
    zoomUrl: "https://zoom.us/j/456123789"
  },

  // --- PROGRAMS & EVENTS (Grid Items) ---
  {
    id: 'campus-shepherd-internship',
    title: "Campus Shepherd Internship",
    description: "Intensive training for students who feel called to serve their campus community.",
    longDescription: `
      <p>The Campus Shepherd Internship (CSI) is our premier leadership development program for college students. It is designed for those who desire to take their faith seriously and learn what it means to be a spiritual leader on campus.</p>
      <p>Over the course of one semester, interns will receive mentorship from experienced campus pastors, engage in deep theological study, and gain practical experience in leading small groups and evangelism.</p>
      <h3>Curriculum Highlights</h3>
      <ul>
        <li>Biblical Foundations of Leadership</li>
        <li>Effective Communication of the Gospel</li>
        <li>Pastoral Care and Counseling Basics</li>
        <li>Time Management and Spiritual Disciplines</li>
      </ul>
    `,
    startDate: "2025-08-25T09:00:00",
    endDate: "2025-12-15T17:00:00",
    location: "Various Campuses",
    address: "LA UBF Center & Local Campuses",
    ministry: "YAM",
    type: 'program',
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
    programDetails: {
      duration: "1 Semester",
      semester: "August 25 - December 15, 2025",
      weeklySchedule: "Weekly Mentoring"
    },
    isRegistrationClosed: true,
    badge: "PROGRAM"
  },
  {
    id: '16-steps-bible-study',
    title: "16 Steps Bible Study",
    description: "A foundational Bible study series covering the key events of redemptive history.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-01T19:00:00",
    endDate: "2026-05-01T21:00:00",
    location: "LA UBF Center",
    address: "123 Faith Street",
    ministry: "General",
    type: 'program',
    imageUrl: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2000&auto=format&fit=crop",
    recurrence: "7:00 PM"
  },
  {
    id: 'levite-music-academy',
    title: "Levite Music Academy",
    description: "Music lessons and worship team training for youth and young adults.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-15T14:00:00",
    endDate: "2026-06-15T16:00:00",
    location: "Music Room",
    address: "123 Faith Street",
    ministry: "HBF",
    type: 'program',
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop",
    recurrence: "2:00 PM"
  },
  {
    id: 'discipleship-training',
    title: "Discipleship Training Program",
    description: "A comprehensive 12-week program designed to help you grow deeper in your faith and leadership.",
    longDescription: longDescPlaceholder,
    startDate: "2026-02-01T09:00:00",
    endDate: "2026-04-25T12:00:00",
    location: "Room 201",
    address: "123 Faith Street",
    ministry: "General",
    type: 'program',
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    badge: "PROGRAM",
    recurrence: "9:00 AM"
  },
  {
    id: 'marriage-course',
    title: "The Marriage Course",
    description: "Practical tools to strengthen your relationship, whether you've been married for 6 months or 40 years.",
    longDescription: longDescPlaceholder,
    startDate: "2026-03-10T19:30:00",
    endDate: "2026-05-10T21:30:00",
    location: "Fellowship Hall",
    address: "123 Faith Street",
    ministry: "Adults",
    type: 'program',
    imageUrl: "https://images.unsplash.com/photo-1628891388568-da71286b976d?q=80&w=2000&auto=format&fit=crop",
    badge: "PROGRAM",
    recurrence: "7:30 PM"
  }
];

export const getMinistryColor = (ministry: Ministry) => {
  switch (ministry) {
    case 'YAM': return 'bg-[#6366f1] text-white'; // Indigo
    default: return 'bg-[#0d0d0d] text-white'; // Black
  }
};