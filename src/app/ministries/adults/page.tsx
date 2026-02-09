import MinistryHeroSection from "@/components/sections/MinistryHeroSection";
import MinistryIntroSection from "@/components/sections/MinistryIntroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import MeetTeamSection from "@/components/sections/MeetTeamSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import FormSection from "@/components/sections/FormSection";
import PathwayCardSection from "@/components/sections/PathwayCardSection";
import { getEventsByMinistry } from "@/lib/mock-data/events";

import type {
  MinistryHeroSectionProps,
  MinistryIntroSectionProps,
  PillarsSectionProps,
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
  id: "adults-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "MINISTRY",
    heading: "Adult",
    headingStyle: "sans",
    heroImage: {
      src: "/images/ministries/adults/introduction.jpg",
      alt: "Adult ministry worship service",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "adults-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "Adult Ministry",
    description:
      "Our adult ministry brings together people from many walks of life, including campus leaders, Bible teachers, parents, missionaries, and members growing in faith. Within the adult ministry, there are opportunities for personal and group Bible study, special conferences, campus outreach, and opportunities to support the church\u2019s mission in various mission fields and beyond. Join us for Sunday worship to learn more about how you can find your place at LA UBF.",
    image: {
      src: "/images/ministries/adults/introduction.jpg",
      alt: "Adult ministry group photo",
    },
  },
};

const whatWeDoData: PillarsSectionProps = {
  id: "adults-what-we-do",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "",
    heading: "What We Do",
    items: [
      {
        title: "Growing in Faith",
        description:
          "Adult ministry includes opportunities for Bible study, prayer, and spiritual growth to be built up and be established in God\u2019s grace, devotionals, and shared learning, adults grow together in the Word.",
        images: [{ src: "/images/ministries/adults/growing.jpg", alt: "Growing in faith" }],
      },
      {
        title: "Raising Disciples",
        description:
          "Many adults learn to grow in leadership, mentoring, teaching personal Bible studies, or guiding others in faith. Teaching helps to grow in understanding by sharing God\u2019s Word with others. Key to our ministry is raising others as lifelong disciples of Christ.",
        images: [{ src: "/images/ministries/adults/disciples.jpg", alt: "Raising disciples" }],
      },
      {
        title: "Serving & Mission",
        description:
          "Adults take part and serve together through short-term and long-term service opportunities, seasonal conferences, campus outreach, and opportunities to support the church\u2019s mission in various mission fields and beyond.",
        images: [{ src: "/images/ministries/adults/serving.JPG", alt: "Serving and mission" }],
      },
      {
        title: "Community & Fellowship",
        description:
          "Adult ministry is also a place to build relationships through simple shared meals as a church, joyful worship, time spent together at various studies, and fellowship time together as a church community.",
        images: [{ src: "/pics-temp/DSC01195.jpg", alt: "Community fellowship" }],
      },
    ],
  },
};

const teamData: MeetTeamSectionProps = {
  id: "adults-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "ADULT",
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

const adultEvents = getEventsByMinistry("adult").slice(0, 3);

const eventsData: UpcomingEventsSectionProps = {
  id: "adults-events",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "ADULT MINISTRY",
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
 * ADULTS MINISTRY PAGE
 * Section order: Light → Light → Light → Light → Dark → Light → Light
 * ================================================================ */

export default function AdultsPage() {
  return (
    <main>
      <MinistryHeroSection settings={heroData} />
      <MinistryIntroSection settings={introData} />
      <PillarsSection settings={whatWeDoData} />
      <MeetTeamSection settings={teamData} />
      <UpcomingEventsSection settings={eventsData} events={adultEvents} />
      <FormSection settings={formData} />
      <PathwayCardSection settings={pathwayData} />
    </main>
  );
}
