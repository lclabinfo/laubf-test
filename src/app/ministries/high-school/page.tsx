import MinistryHeroSection from "@/components/sections/MinistryHeroSection";
import MinistryIntroSection from "@/components/sections/MinistryIntroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import MeetTeamSection from "@/components/sections/MeetTeamSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import FormSection from "@/components/sections/FormSection";
import PathwayCardSection from "@/components/sections/PathwayCardSection";
import { getEventsByMinistry } from "@/lib/mock-data/events";
import { toUpcomingEventItem } from "@/lib/types/events";

import type {
  MinistryHeroSectionProps,
  MinistryIntroSectionProps,
  PillarsSectionProps,
  PhotoGallerySectionProps,
  MeetTeamSectionProps,
  UpcomingEventsSectionProps,
  FormSectionProps,
  PathwayCardSectionProps,
} from "@/lib/types/sections";

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: MinistryHeroSectionProps = {
  id: "high-school-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "MINISTRY",
    heading: "Middle & High School",
    headingStyle: "sans",
    heroImage: {
      src: "/images/ministries/middle%20n%20high/header.JPG",
      alt: "Middle and high school ministry group photo",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "high-school-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "JBF & HBF",
    description:
      "JBF (Junior Bible Fellowship) and HBF (High School Bible Fellowship) are our youth ministries for middle school and high school students. Through engaging Bible studies, fun fellowship activities, and a supportive community, we help young people build a strong foundation of faith during these formative years.",
    image: {
      src: "/images/ministries/middle%20n%20high/introduction.jpg",
      alt: "JBF and HBF youth ministry",
    },
  },
};

const whatWeDoData: PillarsSectionProps = {
  id: "high-school-what-we-do",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "",
    heading: "What We Do",
    items: [
      {
        title: "Praise Night",
        description:
          "Praise Night is a time for our youth to come together in worship through music, prayer, and fellowship. It\u2019s an uplifting experience where students can express their faith and grow closer to God and each other.",
        images: [
          { src: "/images/ministries/middle%20n%20high/praise%20night.jpg", alt: "Youth praise night" },
        ],
      },
      {
        title: "Fellowship",
        description:
          "Fellowship activities give our youth the opportunity to build friendships, have fun, and strengthen their bonds within the church community through games, outings, and shared experiences.",
        images: [
          { src: "/images/ministries/middle%20n%20high/fellowship.JPG", alt: "Youth fellowship" },
        ],
      },
      {
        title: "Youth Conference",
        description:
          "Our annual Youth Conference brings together students for an immersive experience of worship, Bible study, and community. It\u2019s a highlight of the year where young people are inspired and challenged in their faith.",
        images: [
          { src: "/images/ministries/middle%20n%20high/jbfhbf%20conference.jpg", alt: "Youth conference" },
        ],
      },
    ],
  },
};

const galleryData: PhotoGallerySectionProps = {
  id: "high-school-gallery",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Snippets from the Ministry",
    images: [
      { src: "/images/ministries/middle%20n%20high/header.JPG", alt: "Youth ministry moment 1" },
      { src: "/images/ministries/middle%20n%20high/introduction.jpg", alt: "Youth ministry moment 2" },
      { src: "/images/ministries/middle%20n%20high/praise%20night.jpg", alt: "Youth ministry moment 3" },
      { src: "/images/ministries/middle%20n%20high/fellowship.JPG", alt: "Youth ministry moment 4" },
      { src: "/images/ministries/middle%20n%20high/jbfhbf%20conference.jpg", alt: "Youth ministry moment 5" },
    ],
  },
};

const teamData: MeetTeamSectionProps = {
  id: "high-school-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "JBF & HBF",
    heading: "Meet Our Team",
    members: [
      {
        name: "William Larsen",
        role: "Campus ministry leader",
        image: { src: "/pics-temp/DSC05222.jpg", alt: "William Larsen" },
      },
      {
        name: "William Larsen",
        role: "Campus ministry leader",
        image: { src: "/pics-temp/DSC05299.jpg", alt: "William Larsen" },
      },
      {
        name: "William Larsen",
        role: "Campus ministry leader",
        image: { src: "/pics-temp/DSC01195.jpg", alt: "William Larsen" },
      },
    ],
  },
};

const eventsData: UpcomingEventsSectionProps = {
  id: "high-school-events",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "YOUTH MINISTRY",
    heading: "Upcoming Events",
    events: getEventsByMinistry("high-school").slice(0, 3).map(toUpcomingEventItem),
    ctaButton: { label: "View all events", href: "/events" },
  },
};

const formData: FormSectionProps = {
  id: "plan-visit",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "Plan Your Visit",
    heading: "Let us help you start",
    description:
      "Let us know you\u2019re coming and we\u2019ll save a seat for you! We can also help match you with a Bible teacher or answer any questions about our ministries.",
    interestOptions: [
      { label: "Sunday Service", value: "sunday-service" },
      { label: "College Campus Group", value: "college-group" },
      { label: "Personal Bible Study", value: "personal-bible-study" },
      { label: "Group Bible Study", value: "group-bible-study" },
      { label: "Giving", value: "giving" },
      { label: "Other", value: "other" },
    ],
    campusOptions: [
      { label: "LBCC", value: "lbcc" },
      { label: "CSULB", value: "csulb" },
      { label: "CSUF", value: "csuf" },
      { label: "UCLA", value: "ucla" },
      { label: "USC", value: "usc" },
      { label: "CSUDH", value: "csudh" },
      { label: "Cerritos Community College", value: "ccc" },
      { label: "Mt. San Antonio College", value: "mt-sac" },
      { label: "Golden West College", value: "golden-west" },
      { label: "Cypress College", value: "cypress" },
      { label: "Cal Poly Pomona", value: "cal-poly-pomona" },
    ],
    bibleTeacherLabel:
      "I\u2019d like to be matched with a personal bible teacher for bible studies or spiritual guidance",
    submitLabel: "Submit",
    successMessage:
      "Thank you! We\u2019ve received your message and will get back to you soon.",
  },
};

const pathwayData: PathwayCardSectionProps = {
  id: "get-started",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "How to Get Started at LA UBF",
    description:
      "We know that visiting a new church can be intimidating. We want to make your first experience as seamless and welcoming as possible. Here are the best ways to connect with our community.",
    cards: [
      {
        icon: "book-open",
        title: "Join us on Sunday",
        description:
          "Experience our main worship service, where we gather to listen to the sermon and learn through the Word of God together.",
        buttonLabel: "Service Info",
        buttonHref: "/im-new#what-to-expect",
        buttonVariant: "primary",
      },
      {
        icon: "graduation-cap",
        title: "Are you a\nCollege Student?",
        description:
          "Join one of our campus ministries to attend group Bible studies and grow in faith alongside fellow students.",
        buttonLabel: "View Our Campuses",
        buttonHref: "/ministries#campus-ministry",
        buttonVariant: "primary",
      },
      {
        icon: "calendar",
        title: "Not sure\nwhere to start?",
        description:
          "Start with an upcoming event\u2014an easy way to join and get to know our community.",
        buttonLabel: "View all events",
        buttonHref: "/events",
        buttonVariant: "secondary",
      },
    ],
  },
};

/* ================================================================
 * MIDDLE & HIGH SCHOOL (JBF & HBF) MINISTRY PAGE
 * Section order: Light → Light → Light → Light → Light → Dark → Light → Light
 * ================================================================ */

export default function HighSchoolPage() {
  return (
    <main>
      <MinistryHeroSection settings={heroData} />
      <MinistryIntroSection settings={introData} />
      <PillarsSection settings={whatWeDoData} />
      <PhotoGallerySection settings={galleryData} />
      <MeetTeamSection settings={teamData} />
      <UpcomingEventsSection settings={eventsData} />
      <FormSection settings={formData} />
      <PathwayCardSection settings={pathwayData} />
    </main>
  );
}
