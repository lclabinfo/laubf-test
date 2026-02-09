export type Ministry = 'General' | 'CBF' | 'BBF' | 'HBF' | 'YAM';

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
  campusId?: string; // Optional: Link to specific campus
  imageUrl?: string; // Optional
  videoUrl?: string; // Optional
  contactName?: string;
  contactEmail?: string;
}

const longDescPlaceholder = `
<p>Join us for this special gathering as we come together to fellowship, learn, and grow in our faith. This event is designed to be a time of refreshment and encouragement for everyone who attends.</p>
<p>Whether you are new to our community or have been with us for years, you are warmly invited. We believe that God has something special in store for us, and we don't want you to miss it.</p>
<h3>What to Expect</h3>
<ul>
  <li>Inspiring messages and teaching</li>
  <li>Meaningful worship and prayer</li>
  <li>Great food and fellowship</li>
  <li>Opportunities to meet new people</li>
</ul>
<p>Please invite your friends and family! We look forward to seeing you there.</p>
`;

export const events: Event[] = [
  {
    id: '1',
    title: "Summer Retreat 2025: Renewal",
    description: "Our annual church-wide summer retreat in the mountains.",
    longDescription: longDescPlaceholder,
    startDate: "2025-08-15T17:00:00",
    endDate: "2025-08-17T12:00:00",
    location: "Oak Glen Christian Conference Center",
    address: "39364 Oak Glen Rd, Yucaipa, CA 92399",
    ministry: "General",
    imageUrl: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2000&auto=format&fit=crop",
    contactName: "David Kim",
    contactEmail: "david.kim@example.com"
  },
  {
    id: '2',
    title: "YAM Friday Night Fellowship",
    description: "Weekly gathering for young adults with dinner and Bible study.",
    longDescription: longDescPlaceholder,
    startDate: "2025-12-19T19:00:00", // Upcoming (relative to mock "today" Dec 12 2025)
    endDate: "2025-12-19T21:30:00",
    location: "LA UBF Center",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "YAM",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: '3',
    title: "Christmas Service 2025",
    description: "Celebrating the birth of our Savior Jesus Christ.",
    longDescription: longDescPlaceholder,
    startDate: "2025-12-25T10:00:00",
    endDate: "2025-12-25T13:00:00",
    location: "Main Sanctuary",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "General",
    // No image - test case
  },
  {
    id: '4',
    title: "CBF Bible School",
    description: "Fun and learning for children grades K-6.",
    longDescription: longDescPlaceholder,
    startDate: "2025-12-14T09:00:00", // Very soon upcoming
    endDate: "2025-12-14T12:00:00",
    location: "Education Building, Room 101",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "CBF",
    imageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '5',
    title: "Thanksgiving Potluck",
    description: "A time of giving thanks and sharing a meal together.",
    longDescription: longDescPlaceholder,
    startDate: "2025-11-27T11:00:00", // Past
    endDate: "2025-11-27T14:00:00",
    location: "Fellowship Hall",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "General",
    imageUrl: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '6',
    title: "BBF Hiking Trip",
    description: "High school ministry hike at Griffith Park.",
    longDescription: longDescPlaceholder,
    startDate: "2025-10-15T08:00:00", // Past
    endDate: "2025-10-15T14:00:00",
    location: "Griffith Park Observatory Trail",
    address: "2800 E Observatory Rd, Los Angeles, CA 90027",
    ministry: "BBF",
    // No image
  },
  {
    id: '8',
    title: "CBF Christmas Party",
    description: "Games, crafts, and the story of Jesus' birth for kids.",
    longDescription: longDescPlaceholder,
    startDate: "2025-12-21T14:00:00",
    endDate: "2025-12-21T16:00:00",
    location: "Fellowship Hall",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "CBF",
    imageUrl: "https://images.unsplash.com/photo-1545629173-365e5dd5551f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: '9',
    title: "Kids Summer Day Camp",
    description: "A week of fun, friends, and faith for grades 1-6.",
    longDescription: longDescPlaceholder,
    startDate: "2026-07-10T09:00:00",
    endDate: "2026-07-14T15:00:00",
    location: "LA UBF Center",
    address: "123 Faith Street, Los Angeles, CA 90001",
    ministry: "CBF",
    imageUrl: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2000&auto=format&fit=crop"
  },
  // CAMPUS SPECIFIC EVENTS
  {
    id: 'ucla-1',
    title: "UCLA Welcome Night",
    description: "Welcome back Bruins! Join us for tacos and games.",
    longDescription: longDescPlaceholder,
    startDate: "2025-09-25T18:00:00",
    endDate: "2025-09-25T21:00:00",
    location: "Sunset Rec",
    address: "UCLA Campus",
    ministry: "YAM",
    campusId: "ucla", // UCLA
    imageUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'usc-1',
    title: "USC Bible Study Kickoff",
    description: "First Bible study of the semester. Fight On!",
    longDescription: longDescPlaceholder,
    startDate: "2025-08-25T18:30:00",
    endDate: "2025-08-25T20:30:00",
    location: "TCC Building",
    address: "USC Campus",
    ministry: "YAM",
    campusId: "usc", // USC
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'lbcc-1',
    title: "True Vine Club Rush",
    description: "Meet the club members and learn about our bible studies.",
    longDescription: longDescPlaceholder,
    startDate: "2025-09-10T11:00:00",
    endDate: "2025-09-10T14:00:00",
    location: "LBCC Quad",
    address: "4901 E Carson St",
    ministry: "YAM",
    campusId: "lbcc",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'csulb-1',
    title: "Beach Worship Night",
    description: "A night of praise and worship at the beach.",
    longDescription: longDescPlaceholder,
    startDate: "2025-10-05T19:00:00",
    endDate: "2025-10-05T21:00:00",
    location: "CSULB USU",
    address: "1250 Bellflower Blvd",
    ministry: "YAM",
    campusId: "csulb",
    imageUrl: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'csuf-1',
    title: "Titan Fellowship Dinner",
    description: "Delicious food and great company. Bring a friend!",
    longDescription: longDescPlaceholder,
    startDate: "2025-11-12T18:00:00",
    endDate: "2025-11-12T20:00:00",
    location: "CSUF TSU",
    address: "800 N State College Blvd",
    ministry: "YAM",
    campusId: "csuf",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'cpp-1',
    title: "Bronco Bible Study",
    description: "Join us as we dive into the Gospel of John.",
    longDescription: longDescPlaceholder,
    startDate: "2025-09-20T12:00:00",
    endDate: "2025-09-20T13:00:00",
    location: "BSC Building",
    address: "3801 W Temple Ave",
    ministry: "YAM",
    campusId: "cal-poly-pomona",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
  }
];

export const getMinistryColor = (ministry: Ministry) => {
  switch (ministry) {
    case 'CBF': return 'bg-yellow-400 text-yellow-950'; // Kids - Bright/Fun
    case 'BBF': return 'bg-orange-500 text-white'; // High School - Energetic
    case 'HBF': return 'bg-green-600 text-white'; // Families - Growth
    case 'YAM': return 'bg-indigo-600 text-white'; // Young Adult - Modern
    default: return 'bg-gray-900 text-white'; // General
  }
};
