import { Ministry } from './events';

export interface Meeting {
  id: string;
  title: string;
  description: string;
  day: string; // e.g. "Monday - Friday" or "Wednesdays"
  time: string; // e.g. "6:00 AM"
  location: string;
  isOnline: boolean;
  zoomUrl?: string;
  ministry: Ministry;
  leader?: string;
}

export const meetings: Meeting[] = [
  {
    id: 'morning-bread',
    title: "Morning Daily Bread & Prayer",
    description: "Start your day with spiritual nourishment. We read the Daily Bread passage together and share prayer topics.",
    day: "Monday - Friday",
    time: "6:00 AM",
    location: "Zoom",
    isOnline: true,
    zoomUrl: "https://zoom.us/j/123456789",
    ministry: "General",
    leader: "P. Abraham Kim"
  },
  {
    id: 'evening-prayer',
    title: "Evening Prayer Meeting",
    description: "A dedicated time to pray for our church, our nation, and world mission.",
    day: "Fridays",
    time: "8:30 PM",
    location: "Zoom & Main Sanctuary",
    isOnline: true,
    zoomUrl: "https://zoom.us/j/987654321",
    ministry: "General"
  },
  {
    id: 'yam-friday',
    title: "YAM Friday Fellowship",
    description: "Weekly gathering for young adults (college & post-grad) for dinner, Bible study, and fellowship.",
    day: "Fridays",
    time: "7:00 PM",
    location: "LA UBF Center",
    isOnline: false,
    ministry: "YAM"
  },
  {
    id: 'jbf-saturday',
    title: "JBF Saturday Study",
    description: "Interactive Bible study and activities for Junior High students.",
    day: "Saturdays",
    time: "10:00 AM",
    location: "Education Building, Room 201",
    isOnline: false,
    ministry: "JBF"
  },
  {
    id: 'hbf-sunday',
    title: "HBF Sunday Group Study",
    description: "Group Bible study for High School students before the main service.",
    day: "Sundays",
    time: "10:00 AM",
    location: "High School Room",
    isOnline: false,
    ministry: "HBF"
  },
  {
    id: 'campus-prayer',
    title: "Campus Mission Prayer",
    description: "Praying specifically for campus evangelism and student leaders.",
    day: "Tuesdays",
    time: "6:00 AM",
    location: "Zoom",
    isOnline: true,
    zoomUrl: "https://zoom.us/j/456123789",
    ministry: "YAM"
  }
];
