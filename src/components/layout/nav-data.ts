import type { LucideIcon } from "lucide-react";
import {
  Info,
  MapPin,
  Youtube,
  Calendar,
  Megaphone,
  Heart,
  GraduationCap,
  Users,
  Landmark,
  School,
  Baby,
  Video,
  BookOpen,
  BookText,
  MonitorPlay,
  Image as ImageIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavSubItem {
  label: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

export interface NavSection {
  title: string;
  items: NavSubItem[];
  footerLink?: {
    label: string;
    href: string;
  };
}

export interface NavDropdown {
  id: string;
  label: string;
  sections: NavSection[];
  featuredCard?: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    href: string;
  };
}

export const dropdowns: NavDropdown[] = [
  {
    id: "our-church",
    label: "Our Church",
    sections: [
      {
        title: "About",
        items: [
          {
            label: "Who We Are",
            description: "Our mission & vision",
            href: "/about",
            icon: Info,
          },
          {
            label: "I'm New",
            description: "Plan your visit",
            href: "/im-new",
            icon: MapPin,
          },
          {
            label: "Livestream",
            description: "Our mission & vision",
            href: "https://youtube.com/@laubf",
            icon: Youtube,
            external: true,
          },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            label: "Events",
            description: "Our mission & vision",
            href: "/events",
            icon: Calendar,
          },
          // {
          //   label: "Announcements",
          //   description: "Latest updates",
          //   href: "/announcements",
          //   icon: Megaphone,
          // },
          // {
          //   label: "Prayer",
          //   description: "Prayer requests",
          //   href: "/prayer",
          //   icon: Heart,
          // },
        ],
      },
    ],
  },
  {
    id: "ministries",
    label: "Ministries",
    sections: [
      {
        title: "Ministry Groups",
        items: [
          {
            label: "College & Young Adults",
            href: "/ministries/college",
            icon: GraduationCap,
          },
          {
            label: "Adults",
            href: "/ministries/adults",
            icon: Users,
          },
          {
            label: "High School (HBF)",
            href: "/ministries/high-school",
            icon: Landmark,
          },
          {
            label: "Junior High (JBF)",
            href: "/ministries/junior-high",
            icon: School,
          },
          {
            label: "Children (BBF /CBF)",
            href: "/ministries/children",
            icon: Baby,
          },
        ],
      },
      {
        title: "Campus Ministries",
        items: [
          {
            label: "LBCC",
            description: "Long Beach City College",
            href: "/ministries/campus/lbcc",
            icon: MapPin,
          },
          {
            label: "CSULB",
            description: "Cal State Long Beach",
            href: "/ministries/campus/csulb",
            icon: MapPin,
          },
          {
            label: "CSUF",
            description: "Cal State Fullerton",
            href: "/ministries/campus/csuf",
            icon: MapPin,
          },
          {
            label: "UCLA",
            description: "University of California, Los Angeles",
            href: "/ministries/campus/ucla",
            icon: MapPin,
          },
        ],
        footerLink: {
          label: "View all campus ministries",
          href: "/ministries#campus-ministry",
        },
      },
    ],
    featuredCard: {
      image: "/pics-temp/csulb/waving.JPG",
      imageAlt: "Students waving at campus ministry",
      title: "Ministries\nOverview",
      description:
        "Learn about the ministries that shape our community",
      href: "/ministries",
    },
  },
  {
    id: "resources",
    label: "Resources",
    sections: [
      {
        title: "The Word",
        items: [
          {
            label: "Sunday Messages",
            description: "Sermon Videos",
            href: "/messages",
            icon: Video,
          },
          {
            label: "Bible Studies",
            description: "Study questions & answers",
            href: "/bible-study",
            icon: BookOpen,
          },
          {
            label: "Daily Bread",
            description: "Daily Devotionals",
            href: "/daily-bread",
            icon: BookText,
          },
        ],
      },
      {
        title: "Media",
        items: [
          {
            label: "Videos",
            href: "/videos",
            icon: MonitorPlay,
          },
          {
            label: "Photos",
            href: "/photos",
            icon: ImageIcon,
          },
        ],
      },
    ],
  },
];

export const directLinks: NavLink[] = [
  { label: "Giving", href: "/giving" },
];
