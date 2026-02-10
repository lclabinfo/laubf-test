import TextImageHeroSection from "@/components/sections/TextImageHeroSection";
import PillarsSection from "@/components/sections/PillarsSection";
import CampusCardGridSection from "@/components/sections/CampusCardGridSection";
import PathwayCardSection from "@/components/sections/PathwayCardSection";

import type {
  TextImageHeroSectionProps,
  PillarsSectionProps,
  CampusCardGridSectionProps,
  PathwayCardSectionProps,
} from "@/lib/types/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministries",
  description: "Explore LA UBF ministries — campus, college, young adult, high school, and children's programs.",
};

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const textImageHeroData: TextImageHeroSectionProps = {
  id: "ministries-hero",
  visible: true,
  colorScheme: "light",
  textAlign: "center",
  content: {
    overline: "WHO WE ARE",
    headingLine1: "Our Ministries",
    description:
      "At LA UBF, we believe that spiritual growth happens best in community. Whether you are a student, a working professional, or a parent, there is a place for you here.",
    image: {
      src: "/images/ministries/congregation.jpg",
      alt: "LA UBF community gathering",
    },
  },
};

const ageGroupsData: PillarsSectionProps = {
  id: "age-groups",
  visible: true,
  colorScheme: "dark",
  content: {
    overline: "MINISTRIES",
    heading: "Age Groups",
    items: [
      {
        title: "Young Adults",
        description:
          "A community of college students and young professionals growing together through campus Bible studies, fellowship, and shared worship.",
        images: [{ src: "/images/ministries/young%20adults.jpg", alt: "Young adults Bible study" }],
        button: { label: "Learn more", href: "/ministries/college" },
      },
      {
        title: "Adults",
        description:
          "Adults from many walks of life\u2014campus leaders, Bible teachers, parents, and missionaries\u2014growing in faith through personal and group Bible study, conferences, and outreach.",
        images: [
          { src: "/images/ministries/adults.webp", alt: "Adult fellowship" },
        ],
        button: { label: "Learn more", href: "/ministries/adults" },
      },
      {
        title: "Middle & High School\n(HBF / JBF)",
        description:
          "Our youth ministries for middle and high school students, with engaging Bible studies, fun fellowship activities, and a supportive community during these formative years.",
        images: [
          { src: "/images/ministries/middle%20n%20high.JPG", alt: "HBF JBF students" },
        ],
        button: { label: "Learn more", href: "/ministries/high-school" },
      },
      {
        title: "Children (CBF)",
        description:
          "A safe, engaging, and age-appropriate environment where children can learn about God\u2019s Word and build friendships while growing in faith.",
        images: [
          { src: "/images/ministries/children.webp", alt: "Children Bible fellowship" },
        ],
        button: { label: "Learn more", href: "/ministries/children" },
      },
    ],
  },
};

const campusCardGridData: CampusCardGridSectionProps = {
  id: "campus-ministry",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "Are you a college student?",
    heading: "Join a Campus Ministry",
    description:
      "We have bible study clubs all across different college campuses. Join us for weekly group bible studies and get to know each other through fellowship.",
    decorativeImages: [
      { src: "/images/ministries/join-campus-ministry-section/1.JPG", alt: "Campus group photo" },
      { src: "/images/ministries/join-campus-ministry-section/2.jpg", alt: "Bible study outdoors" },
      { src: "/images/ministries/join-campus-ministry-section/3.png", alt: "Fellowship event" },
    ],
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
    ctaButton: {
      label: "Let us know your interest",
      href: "/im-new#plan-visit",
    },
  },
};

const pathwayCardData: PathwayCardSectionProps = {
  id: "get-started",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "How to Get Started at LA UBF",
    description:
      "We know that visiting a new church can be intimidating. We want to make your first experience as seamless and welcoming as possible. Here are the two best ways to connect with our community.",
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
        title: "Are you a College Student?",
        description:
          "Join one of our campus ministries to attend group Bible studies and grow in faith alongside fellow students.",
        buttonLabel: "View Our Campuses",
        buttonHref: "#campus-ministry",
        buttonVariant: "primary",
      },
      {
        icon: "calendar",
        title: "Not sure where to start?",
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
 * MINISTRIES PAGE
 * Section order: Light → Dark → Light → Light
 * ================================================================ */

export default function MinistriesPage() {
  return (
    <main>
      <TextImageHeroSection settings={textImageHeroData} />
      <PillarsSection settings={ageGroupsData} />
      <CampusCardGridSection settings={campusCardGridData} />
      <PathwayCardSection settings={pathwayCardData} />
    </main>
  );
}
