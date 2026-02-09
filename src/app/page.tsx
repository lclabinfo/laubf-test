import HeroBannerSection from "@/components/sections/HeroBannerSection";
import MediaTextSection from "@/components/sections/MediaTextSection";
import HighlightCardsSection from "@/components/sections/HighlightCardsSection";
import EventCalendarSection from "@/components/sections/EventCalendarSection";
import QuoteBannerSection from "@/components/sections/QuoteBannerSection";
import ActionCardGridSection from "@/components/sections/ActionCardGridSection";
import DirectoryListSection from "@/components/sections/DirectoryListSection";
import SpotlightMediaSection from "@/components/sections/SpotlightMediaSection";
import MediaGridSection from "@/components/sections/MediaGridSection";
import CTABannerSection from "@/components/sections/CTABannerSection";

import { FEATURED_EVENTS, MOCK_EVENTS } from "@/lib/mock-data/events";
import { toEventCardData, toEventListItemData } from "@/lib/types/events";

import type {
  HeroBannerSectionProps,
  MediaTextSectionProps,
  HighlightCardsSectionProps,
  EventCalendarSectionProps,
  QuoteBannerSectionProps,
  ActionCardGridSectionProps,
  DirectoryListSectionProps,
  SpotlightMediaSectionProps,
  MediaGridSectionProps,
  CTABannerSectionProps,
} from "@/lib/types/sections";

/* ================================================================
 * SAMPLE DATA — Exact content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroBannerData: HeroBannerSectionProps = {
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

const mediaTextData: MediaTextSectionProps = {
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

const highlightCardsData: HighlightCardsSectionProps = {
  id: "featured-events",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Featured Events",
    subheading: "Highlights of what's happening in our community.",
    ctaLabel: "View All Events",
    ctaHref: "/events",
    featuredEvents: FEATURED_EVENTS.slice(0, 3).map(toEventCardData),
  },
};

const eventCalendarData: EventCalendarSectionProps = {
  id: "schedule",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Schedule",
    currentMonth: "FEBRUARY 2026",
    filters: ["ALL", "Events", "Meetings", "Programs"],
    events: MOCK_EVENTS.slice(0, 5).map(toEventListItemData),
    ctaButtons: [
      { label: "Google Calendar", href: "/calendar", icon: true },
      { label: "View all events", href: "/events" },
    ],
  },
};

const quoteBannerData: QuoteBannerSectionProps = {
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

const actionCardGridData: ActionCardGridSectionProps = {
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

const directoryListData: DirectoryListSectionProps = {
  id: "campus-ministries",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Our Campus Ministries",
    items: [
      { id: "lbcc", name: "LBCC", active: true, href: "/ministries/campus/lbcc" },
      { id: "csulb", name: "CSULB", href: "/ministries/campus/csulb" },
      { id: "csuf", name: "CSUF", href: "/ministries/campus/csuf" },
      { id: "ucla", name: "UCLA", href: "/ministries/campus/ucla" },
      { id: "usc", name: "USC", href: "/ministries/campus/usc" },
      { id: "csudh", name: "CSUDH", href: "/ministries/campus/csudh" },
      { id: "ccc", name: "CCC", href: "/ministries/campus/ccc" },
      { id: "mt-sac", name: "MT. SAC", href: "/ministries/campus/mt-sac" },
      {
        id: "golden-west",
        name: "GOLDEN WEST",
        href: "/ministries/campus/golden-west",
      },
      { id: "cypress", name: "CYPRESS", href: "/ministries/campus/cypress" },
      {
        id: "cal-poly-pomona",
        name: "CAL POLY POMONA",
        href: "/ministries/campus/cal-poly-pomona",
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

const spotlightMediaData: SpotlightMediaSectionProps = {
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

const mediaGridData: MediaGridSectionProps = {
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

const ctaBannerData: CTABannerSectionProps = {
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

/* ================================================================
 * HOMEPAGE
 * Section order: Dark→Dark→Light→Dark→Light→Light→Light→Dark→Dark
 * ================================================================ */

export default function HomePage() {
  return (
    <main>
      <HeroBannerSection settings={heroBannerData} />
      <MediaTextSection settings={mediaTextData} />
      <HighlightCardsSection settings={highlightCardsData} />
      <EventCalendarSection settings={eventCalendarData} events={MOCK_EVENTS} />
      <QuoteBannerSection settings={quoteBannerData} />
      <ActionCardGridSection settings={actionCardGridData} />
      <DirectoryListSection settings={directoryListData} />
      <SpotlightMediaSection settings={spotlightMediaData} />
      <MediaGridSection settings={mediaGridData} />
      <CTABannerSection settings={ctaBannerData} />
    </main>
  );
}
