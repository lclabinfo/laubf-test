import MinistryHeroSection from "@/components/sections/MinistryHeroSection";
import MinistryIntroSection from "@/components/sections/MinistryIntroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import CampusCardGridSection from "@/components/sections/CampusCardGridSection";
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
  CampusCardGridSectionProps,
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
  id: "college-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "MINISTRY",
    heading: "Young Adult / College",
    headingStyle: "sans",
    heroImage: {
      src: "/images/ministries/young%20adults.jpg",
      alt: "Young adult and college ministry group",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "college-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "Young Adult Ministry (YAM)",
    description:
      "The Young Adult Ministry (YAM) at LA UBF is a vibrant community of college students and young professionals growing together in faith. Through campus Bible study groups, fellowship activities, and shared worship, we create a space where young adults can explore God\u2019s Word, build meaningful friendships, and discover their calling. Whether you\u2019re on campus or in the workforce, you\u2019ll find a welcoming community here.",
    image: {
      src: "/images/ministries/young%20adults/yam.png",
      alt: "Young adult ministry fellowship",
    },
  },
};

const whatWeDoData: PillarsSectionProps = {
  id: "college-what-we-do",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "",
    heading: "What We Do",
    items: [
      {
        title: "Fellowship",
        description:
          "Our young adult fellowship is a space to build authentic friendships and grow together. From shared meals to group outings, we create opportunities for meaningful connection and community among college students and young professionals.",
        images: [
          { src: "/images/ministries/young%20adults/fellowship.png", alt: "Young adult fellowship" },
        ],
      },
      {
        title: "Discipleship Training",
        description:
          "Through personal and group Bible study, we help young adults develop a strong foundation in God\u2019s Word. Our discipleship training equips students to grow as leaders, mentors, and faithful followers of Christ.",
        images: [
          { src: "/pics-temp/DSC05299.jpg", alt: "Discipleship training" },
        ],
      },
      {
        title: "Serving Opportunities",
        description:
          "We believe in learning by serving. Young adults have the opportunity to serve through campus outreach, community events, conferences, and supporting the church\u2019s mission locally and beyond.",
        images: [
          { src: "/images/ministries/young%20adults/serving.JPG", alt: "Serving opportunities" },
        ],
      },
    ],
  },
};

const galleryData: PhotoGallerySectionProps = {
  id: "college-gallery",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Snippets from the Ministry",
    images: [
      { src: "/images/ministries/young%20adults/carousel/1.jpg", alt: "YAM moment 1" },
      { src: "/images/ministries/young%20adults/carousel/2.jpg", alt: "YAM moment 2" },
      { src: "/images/ministries/young%20adults/carousel/3.JPG", alt: "YAM moment 3" },
      { src: "/images/ministries/young%20adults/carousel/4.jpg", alt: "YAM moment 4" },
      { src: "/images/ministries/young%20adults/carousel/5.jpg", alt: "YAM moment 5" },
      { src: "/images/ministries/young%20adults/carousel/6.jpg", alt: "YAM moment 6" },
      { src: "/images/ministries/young%20adults/carousel/7.jpg", alt: "YAM moment 7" },
      { src: "/images/ministries/young%20adults/carousel/8.jpg", alt: "YAM moment 8" },
      { src: "/images/ministries/young%20adults/carousel/9.jpg", alt: "YAM moment 9" },
      { src: "/images/ministries/young%20adults/carousel/10.JPG", alt: "YAM moment 10" },
    ],
  },
};

const campusGridData: CampusCardGridSectionProps = {
  id: "campus-ministry",
  visible: true,
  colorScheme: "light",
  content: {
    decorativeImages: [
      { src: "/images/ministries/join-campus-ministry-section/1.JPG", alt: "Campus group photo", rotation: -8 },
      { src: "/images/ministries/join-campus-ministry-section/2.jpg", alt: "Bible study outdoors", rotation: 3 },
      { src: "/images/ministries/join-campus-ministry-section/3.png", alt: "Fellowship event", rotation: -5 },
    ],
    heading: "Join a Campus Ministry",
    description:
      "We have Bible study groups meeting on campuses across Southern California. Find a group near you and start studying the Bible with fellow students.",
    campuses: [
      { id: "lbcc", abbreviation: "LBCC", fullName: "Long Beach City College", href: "/ministries/campus/lbcc" },
      { id: "csulb", abbreviation: "CSULB", fullName: "Cal State Long Beach", href: "/ministries/campus/csulb" },
      { id: "csuf", abbreviation: "CSUF", fullName: "Cal State Fullerton", href: "/ministries/campus/csuf" },
      { id: "ucla", abbreviation: "UCLA", fullName: "University of California, Los Angeles", href: "/ministries/campus/ucla" },
      { id: "usc", abbreviation: "USC", fullName: "University of Southern California", href: "/ministries/campus/usc" },
      { id: "csudh", abbreviation: "CSUDH", fullName: "Cal State Dominguez Hills", href: "/ministries/campus/csudh" },
      { id: "ccc", abbreviation: "CCC", fullName: "Cerritos Community College", href: "/ministries/campus/ccc" },
      { id: "mt-sac", abbreviation: "MT. SAC", fullName: "Mt. San Antonio College", href: "/ministries/campus/mt-sac" },
      { id: "golden-west", abbreviation: "GWC", fullName: "Golden West College", href: "/ministries/campus/golden-west" },
      { id: "cypress", abbreviation: "", fullName: "Cypress College", href: "/ministries/campus/cypress" },
      { id: "cal-poly-pomona", abbreviation: "", fullName: "Cal Poly Pomona", href: "/ministries/campus/cal-poly-pomona" },
    ],
    ctaHeading: "Don\u2019t see your campus?",
    ctaButton: { label: "Contact Us", href: "#plan-visit" },
  },
};

const teamData: MeetTeamSectionProps = {
  id: "college-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "YOUNG ADULT MINISTRY",
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
  id: "college-events",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "YOUNG ADULT MINISTRY",
    heading: "Upcoming Events",
    events: getEventsByMinistry("young-adult").slice(0, 3).map(toUpcomingEventItem),
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
 * YOUNG ADULT / COLLEGE MINISTRY PAGE
 * Section order: Light → Light → Light → Light → Light → Light → Dark → Light → Light
 * ================================================================ */

export default function CollegePage() {
  return (
    <main>
      <MinistryHeroSection settings={heroData} />
      <MinistryIntroSection settings={introData} />
      <PillarsSection settings={whatWeDoData} />
      <PhotoGallerySection settings={galleryData} />
      <CampusCardGridSection settings={campusGridData} />
      <MeetTeamSection settings={teamData} />
      <UpcomingEventsSection settings={eventsData} />
      <FormSection settings={formData} />
      <PathwayCardSection settings={pathwayData} />
    </main>
  );
}
