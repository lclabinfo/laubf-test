import HeroSection from "@/components/sections/HeroSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import FeaturedEventsSection from "@/components/sections/FeaturedEventsSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import SpiritualDirectionSection from "@/components/sections/SpiritualDirectionSection";
import NextStepsSection from "@/components/sections/NextStepsSection";
import CampusMinistriesSection from "@/components/sections/CampusMinistriesSection";
import ThisWeeksMessageSection from "@/components/sections/ThisWeeksMessageSection";
import FeaturedVideosSection from "@/components/sections/FeaturedVideosSection";
import VisitUsBannerSection from "@/components/sections/VisitUsBannerSection";
import FooterSection from "@/components/sections/FooterSection";

import type { HeroSectionProps } from "@/lib/types/sections";
import type { WhoWeAreSectionProps } from "@/lib/types/sections";
import type { FeaturedEventsSectionProps } from "@/lib/types/sections";
import type { ScheduleSectionProps } from "@/lib/types/sections";
import type { SpiritualDirectionSectionProps } from "@/lib/types/sections";
import type { NextStepsSectionProps } from "@/lib/types/sections";
import type { CampusMinistriesSectionProps } from "@/lib/types/sections";
import type { ThisWeeksMessageSectionProps } from "@/lib/types/sections";
import type { FeaturedVideosSectionProps } from "@/lib/types/sections";
import type { VisitUsBannerSectionProps } from "@/lib/types/sections";
import type { FooterSectionProps } from "@/lib/types/sections";

/* ================================================================
 * SAMPLE DATA — Exact content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: HeroSectionProps = {
  id: "hero",
  visible: true,
  colorScheme: "dark",
  content: {
    heading: { line1: "Welcome to", line2: "LA UBF" },
    subheading:
      "Where people find their community.\nWhere disciples are raised.\nWhere the Word of God is lived.",
    primaryButton: { label: "I'm new", href: "/im-new", visible: true },
    secondaryButton: {
      label: "Upcoming events",
      href: "/events",
      visible: true,
    },
    backgroundImage: {
      src: "/pics-temp/hero_video.mp4",
      alt: "LA UBF community gathering",
    },
  },
  showSubheading: true,
};

const whoWeAreData: WhoWeAreSectionProps = {
  id: "who-we-are",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "WHO WE ARE",
    heading: "Christian Ministry for College Students",
    body: "UBF is an international, non-denominational evangelical church. We serve college students from diverse backgrounds, helping them to grow in faith, build community, and find purpose through the Word of God.",
    button: { label: "More about us", href: "/about", visible: true },
    images: [
      { src: "/images/who-we-are-1.jpg", alt: "Bible study session" },
      { src: "/images/who-we-are-2.jpg", alt: "Community gathering" },
      { src: "/images/who-we-are-3.jpg", alt: "Worship service" },
    ],
  },
};

const featuredEventsData: FeaturedEventsSectionProps = {
  id: "featured-events",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Featured Events",
    subheading: "Highlights of what's happening in our community.",
    ctaLabel: "View All Events",
    ctaHref: "/events",
    featuredEvents: [
      {
        id: "evt-1",
        title: "New Year's Fellowship",
        date: "JAN 1, 2026",
        location: "LA UBF Center",
        imageUrl: "/images/event-1.jpg",
        imageAlt: "New Year fellowship gathering",
        badge: "UPCOMING",
        href: "/events/new-years-fellowship",
      },
      {
        id: "evt-2",
        title: "Winter Bible Conference",
        date: "JAN 15-17, 2026",
        location: "Thousand Oaks, CA",
        imageUrl: "/images/event-2.jpg",
        imageAlt: "Winter Bible conference",
        badge: "UPCOMING",
        href: "/events/winter-bible-conference",
      },
      {
        id: "evt-3",
        title: "Super Bowl Fellowship",
        date: "FEB 8, 2026",
        location: "LA UBF Center",
        imageUrl: "/images/event-3.jpg",
        imageAlt: "Super Bowl fellowship",
        href: "/events/super-bowl-fellowship",
      },
    ],
  },
};

const scheduleData: ScheduleSectionProps = {
  id: "schedule",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Schedule",
    currentMonth: "JANUARY 2026",
    filters: ["ALL", "Events", "Meetings", "Programs"],
    events: [
      {
        id: "sch-1",
        title: "New Year's Fellowship",
        dateStart: new Date("2026-01-01"),
        time: "11:00 AM – 2:00 PM",
        type: "event",
        location: "LA UBF Center",
        href: "/events/new-years-fellowship",
      },
      {
        id: "sch-2",
        title: "Sunday Worship Service",
        dateStart: new Date("2026-01-04"),
        time: "10:30 AM – 12:30 PM",
        type: "meeting",
        location: "LA UBF Center",
        href: "/events/sunday-worship",
      },
      {
        id: "sch-3",
        title: "Friday Bible Study",
        dateStart: new Date("2026-01-09"),
        time: "7:00 PM – 9:00 PM",
        type: "meeting",
        location: "Online",
        href: "/events/friday-bible-study",
      },
      {
        id: "sch-4",
        title: "Winter Bible Conference",
        dateStart: new Date("2026-01-15"),
        dateEnd: new Date("2026-01-17"),
        time: "All Day",
        type: "event",
        location: "Thousand Oaks, CA",
        href: "/events/winter-bible-conference",
      },
      {
        id: "sch-5",
        title: "Campus Outreach Program",
        dateStart: new Date("2026-01-20"),
        time: "3:00 PM – 5:00 PM",
        type: "program",
        location: "CSULB",
        href: "/events/campus-outreach",
      },
    ],
    ctaButtons: [
      { label: "Google Calendar", href: "/calendar", icon: true },
      { label: "View all events", href: "/events" },
    ],
  },
};

const spiritualDirectionData: SpiritualDirectionSectionProps = {
  id: "spiritual-direction",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "2026 SPIRITUAL DIRECTION",
    heading: "Not of the World",
    verse: {
      text: "16 They are not of the world, just as I am not of the world. 17 Sanctify them in the truth; your word is truth. 18 As you sent me into the world, so I have sent them into the world.",
      reference: "John 17:16-18",
    },
  },
};

const nextStepsData: NextStepsSectionProps = {
  id: "next-steps",
  visible: true,
  colorScheme: "light",
  content: {
    heading: { line1: "Your", line2: "Next Steps", line3: "at LA UBF" },
    subheading:
      "Explore different ways to connect, grow in faith, and be part of our community.",
    cards: [
      {
        id: "ns-1",
        title: "Sunday Worship",
        description:
          "Join us every Sunday for worship, teaching, and fellowship with believers.",
        imageUrl: "/images/next-step-1.jpg",
        imageAlt: "Sunday worship service",
        href: "/sunday-worship",
      },
      {
        id: "ns-2",
        title: "College Campus Ministries",
        description:
          "Connect with other students on your campus for Bible study and community.",
        imageUrl: "/images/next-step-2.jpg",
        imageAlt: "Campus ministry gathering",
        href: "/campus-ministries",
      },
      {
        id: "ns-3",
        title: "Personal Bible Studies",
        description:
          "Study the Bible one-on-one with a mentor at a time that works for you.",
        imageUrl: "/images/next-step-3.jpg",
        imageAlt: "One-on-one Bible study",
        href: "/bible-studies",
      },
      {
        id: "ns-4",
        title: "Fellowship",
        description:
          "Build lasting friendships through shared meals, activities, and life together.",
        imageUrl: "/images/next-step-4.jpg",
        imageAlt: "Fellowship dinner",
        href: "/fellowship",
      },
    ],
  },
};

const campusMinistriesData: CampusMinistriesSectionProps = {
  id: "campus-ministries",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Our Campus Ministries",
    campuses: [
      { id: "lbcc", name: "LBCC", active: true, href: "/campus/lbcc" },
      { id: "csulb", name: "CSULB", href: "/campus/csulb" },
      { id: "csuf", name: "CSUF", href: "/campus/csuf" },
      { id: "ucla", name: "UCLA", href: "/campus/ucla" },
      { id: "usc", name: "USC", href: "/campus/usc" },
      { id: "csudh", name: "CSUDH", href: "/campus/csudh" },
      { id: "ccc", name: "CCC", href: "/campus/ccc" },
      { id: "mt-sac", name: "MT. SAC", href: "/campus/mt-sac" },
      {
        id: "golden-state",
        name: "GOLDEN STATE",
        href: "/campus/golden-state",
      },
      { id: "cypress", name: "CYPRESS", href: "/campus/cypress" },
      {
        id: "cal-poly-pomona",
        name: "CAL POLY POMONA",
        href: "/campus/cal-poly-pomona",
      },
    ],
    image: {
      src: "/images/campus-ministry.jpg",
      alt: "Campus ministry students",
    },
    ctaHeading: "Don't see your campus?",
    ctaButton: {
      label: "Let us know your interest",
      href: "/contact",
    },
  },
};

const thisWeeksMessageData: ThisWeeksMessageSectionProps = {
  id: "this-weeks-message",
  visible: true,
  colorScheme: "light",
  content: {
    sectionHeading: "This Week's Message",
    sermon: {
      title: "Eternal Life",
      speaker: "Pastor William Larsen",
      date: "DEC 29",
      series: "SUNDAY WORSHIP",
      thumbnailUrl: "/images/sermon-thumbnail.jpg",
      videoUrl: "https://www.youtube.com/watch?v=example",
    },
  },
};

const featuredVideosData: FeaturedVideosSectionProps = {
  id: "featured-videos",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Featured Videos",
    ctaLabel: "View All Videos",
    ctaHref: "/videos",
    videos: [
      {
        id: "vid-1",
        title: "Sunday Worship Highlights",
        thumbnailUrl: "/images/video-1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=example1",
        duration: "45:30",
      },
      {
        id: "vid-2",
        title: "Campus Ministry Recap",
        thumbnailUrl: "/images/video-2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=example2",
        duration: "12:15",
      },
      {
        id: "vid-3",
        title: "Daily Bread Devotional",
        thumbnailUrl: "/images/video-3.jpg",
        videoUrl: "https://www.youtube.com/watch?v=example3",
        duration: "8:42",
      },
    ],
  },
};

const visitUsBannerData: VisitUsBannerSectionProps = {
  id: "visit-us-banner",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "New Here?",
    heading: "Visit us this Sunday",
    body: "All are welcome. Come connect with us and get to know our community.",
    primaryButton: {
      label: "Plan your visit",
      href: "/plan-your-visit",
      visible: true,
    },
    secondaryButton: {
      label: "See our ministries",
      href: "/ministries",
      visible: true,
    },
    backgroundImage: {
      src: "/images/visit-us-bg.jpg",
      alt: "LA UBF community",
    },
  },
};

const footerData: FooterSectionProps = {
  id: "footer",
  visible: true,
  colorScheme: "dark",
  content: {
    description:
      "A Bible-centered community raising lifelong disciples on campus and beyond.",
    socialLinks: [
      { platform: "instagram", href: "https://instagram.com/laubf" },
      { platform: "facebook", href: "https://facebook.com/laubf" },
      { platform: "youtube", href: "https://youtube.com/@laubf" },
    ],
    columns: [
      {
        heading: "EXPLORE",
        links: [
          { label: "About Us", href: "/about" },
          { label: "I'm New", href: "/im-new" },
          { label: "Ministries", href: "/ministries" },
          { label: "Events", href: "/events" },
          { label: "Messages", href: "/messages" },
          { label: "Giving", href: "/giving" },
        ],
      },
      {
        heading: "RESOURCES",
        links: [
          {
            label: "Daily Bread YouTube",
            href: "https://youtube.com/@dailybread",
            external: true,
          },
          {
            label: "UBF HQ YouTube",
            href: "https://youtube.com/@ubfhq",
            external: true,
          },
          {
            label: "UBF TV YouTube",
            href: "https://youtube.com/@ubftv",
            external: true,
          },
          { label: "UBF HQ", href: "https://ubf.org", external: true },
          {
            label: "Chicago UBF",
            href: "https://chicagoubf.org",
            external: true,
          },
          {
            label: "Korea UBF",
            href: "https://koreaubf.org",
            external: true,
          },
        ],
      },
    ],
    contactInfo: {
      address: ["11625 Paramount Blvd", "Downey, CA 90241"],
      phone: "(562) 396-6350",
      email: "laubf.downey@gmail.com",
    },
  },
};

/* ================================================================
 * HOMEPAGE
 * Section order: Dark→Dark→Light→Dark→Light→Light→Light→Dark→Dark
 * ================================================================ */

export default function HomePage() {
  return (
    <main>
      <HeroSection settings={heroData} />
      <WhoWeAreSection settings={whoWeAreData} />
      <FeaturedEventsSection settings={featuredEventsData} />
      <ScheduleSection settings={scheduleData} />
      <SpiritualDirectionSection settings={spiritualDirectionData} />
      <NextStepsSection settings={nextStepsData} />
      <CampusMinistriesSection settings={campusMinistriesData} />
      <ThisWeeksMessageSection settings={thisWeeksMessageData} />
      <FeaturedVideosSection settings={featuredVideosData} />
      <VisitUsBannerSection settings={visitUsBannerData} />
      <FooterSection settings={footerData} />
    </main>
  );
}
