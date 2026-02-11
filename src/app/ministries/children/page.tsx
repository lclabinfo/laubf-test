import MinistryHeroSection from "@/components/sections/MinistryHeroSection";
import MinistryIntroSection from "@/components/sections/MinistryIntroSection";
import MinistryScheduleSection from "@/components/sections/MinistryScheduleSection";
import PillarsSection from "@/components/sections/PillarsSection";
import MeetTeamSection from "@/components/sections/MeetTeamSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import FormSection from "@/components/sections/FormSection";
import PathwayCardSection from "@/components/sections/PathwayCardSection";
import { getEventsByMinistry } from "@/lib/mock-data/events";

import type {
  MinistryHeroSectionProps,
  MinistryIntroSectionProps,
  MinistryScheduleSectionProps,
  PillarsSectionProps,
  MeetTeamSectionProps,
  UpcomingEventsSectionProps,
  FormSectionProps,
  PathwayCardSectionProps,
} from "@/lib/types/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children's Ministry",
  description: "LA UBF children's ministry — nurturing young hearts in faith and community.",
};

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: MinistryHeroSectionProps = {
  id: "children-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "MINISTRY",
    heading: "Children",
    headingStyle: "sans",
    heroImage: {
      src: "/images/ministries/children.webp",
      alt: "Children ministry group photo",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "children-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "CBF",
    description:
      "CBF (Children\u2019s Bible Fellowship) is our ministry for children, where they can learn about God\u2019s Word in a safe, engaging, and age-appropriate environment while building friendships and growing in faith.",
    image: {
      src: "/images/ministries/children/introduction.png",
      alt: "Children bible fellowship",
    },
  },
};

const scheduleData: MinistryScheduleSectionProps = {
  id: "children-schedule",
  visible: true,
  colorScheme: "dark",
  content: {
    heading: "Children\u2019s\nSunday Service",
    headingStyle: "script",
    timeValue: "Every Sunday\n@ 1:30 PM (after lunch)",
    address: ["11625 Paramount Blvd,", "Downey, CA 90241"],
    directionsUrl:
      "https://maps.google.com/?q=11625+Paramount+Blvd+Downey+CA+90241",
    image: {
      src: "/images/ministries/children/service.png",
      alt: "Children sunday service",
    },
  },
};

const whatWeDoData: PillarsSectionProps = {
  id: "children-what-we-do",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "",
    heading: "What We Do",
    items: [
      {
        title: "Singspiration",
        description:
          "Singspiration is a time for children to sing, dance, and share music\u2019s simple joy. It helps them learn about God\u2019s love through song, building worship skills early on.",
        images: [
          { src: "/images/ministries/children/singspiration.JPG", alt: "Children singspiration" },
        ],
      },
      {
        title: "Children\u2019s Bible Class",
        description:
          "In Children\u2019s Bible Class, kids learn about the Bible through lessons designed to be fun, interactive, and easy to understand for their age.",
        images: [
          { src: "/images/ministries/children/class.JPG", alt: "Children bible class" },
        ],
      },
      {
        title: "Child Care During Sunday Service",
        description:
          "We also offer child care during the Sunday worship service, providing a safe and engaging space for children so parents can attend the adult service with peace of mind.",
        images: [
          { src: "/images/ministries/children/child%20care.JPG", alt: "Child care during service" },
        ],
      },
    ],
  },
};

const teamData: MeetTeamSectionProps = {
  id: "children-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "CBF",
    heading: "Meet Our Team",
    members: [
      {
        name: "Leader name",
        role: "",
        bio: "Bio here",
        image: { src: "/pics-temp/DSC05222.jpg", alt: "Leader name" },
      },
      {
        name: "Leader name",
        role: "",
        bio: "Bio here",
        image: { src: "/pics-temp/DSC05299.jpg", alt: "Leader name" },
      },
      {
        name: "Leader name",
        role: "",
        bio: "Bio here",
        image: { src: "/pics-temp/DSC01195.jpg", alt: "Leader name" },
      },
    ],
  },
};

const childrenEvents = getEventsByMinistry("children").slice(0, 3);

const eventsData: UpcomingEventsSectionProps = {
  id: "children-events",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "CHILDREN'S MINISTRY",
    heading: "Upcoming Events",
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
 * CHILDREN (CBF) MINISTRY PAGE
 * Section order: Light → Light → Dark → Light → Light → Dark → Light → Light
 * ================================================================ */

export default function ChildrenPage() {
  return (
    <main>
      <MinistryHeroSection settings={heroData} />
      <MinistryIntroSection settings={introData} />
      <MinistryScheduleSection settings={scheduleData} />
      <PillarsSection settings={whatWeDoData} />
      <MeetTeamSection settings={teamData} />
      <UpcomingEventsSection settings={eventsData} events={childrenEvents} />
      <FormSection settings={formData} />
      <PathwayCardSection settings={pathwayData} />
    </main>
  );
}
