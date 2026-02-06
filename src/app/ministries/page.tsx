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
      src: "/pics-temp/DSC01654.JPG",
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
          "We help students study the Bible so they may come to know God personally, understand themselves, and find purpose in Jesus Christ. Bible studies are offered one-to-one with a mentor or in small groups centered around campuses and shared interests.",
        images: [{ src: "/yam/college.png", alt: "Young adults Bible study" }],
        button: { label: "Learn more", href: "/ministries/college" },
      },
      {
        title: "Adults",
        description:
          "We help students study the Bible so they may come to know God personally, understand themselves, and find purpose in Jesus Christ. Bible studies are offered one-to-one with a mentor or in small groups centered around campuses and shared interests.",
        images: [
          { src: "/pics-temp/DSC05222.jpg", alt: "Adult fellowship" },
          { src: "/pics-temp/DSC05299.jpg", alt: "Adult Bible study" },
          { src: "/pics-temp/DSC01195.jpg", alt: "Adult community" },
        ],
        button: { label: "Learn more", href: "/ministries/adults" },
      },
      {
        title: "Middle & High School\n(HBF / JBF)",
        description:
          "We help students study the Bible so they may come to know God personally, understand themselves, and find purpose in Jesus Christ. Bible studies are offered one-to-one with a mentor or in small groups centered around campuses and shared interests.",
        images: [
          { src: "/jbf/hbf.png", alt: "HBF JBF students" },
        ],
        button: { label: "Learn more", href: "/ministries/high-school" },
      },
      {
        title: "Children (CBF)",
        description:
          "We help students study the Bible so they may come to know God personally, understand themselves, and find purpose in Jesus Christ. Bible studies are offered one-to-one with a mentor or in small groups centered around campuses and shared interests.",
        images: [
          { src: "/pics-temp/cbf.jpeg", alt: "Children Bible fellowship" },
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
      {
        src: "/pics-temp/csulb/IMG_1408.JPG",
        alt: "Campus group photo",
        rotation: -8,
      },
      {
        src: "/pics-temp/csulb/IMG_1410.JPG",
        alt: "Bible study outdoors",
        rotation: 3,
      },
      {
        src: "/pics-temp/csulb/IMG_1407.JPG",
        alt: "Fellowship event",
        rotation: -5,
      },
    ],
    campuses: [
      {
        id: "lbcc",
        abbreviation: "LBCC",
        fullName: "Long Beach City College",
      },
      { id: "csulb", abbreviation: "CSULB", fullName: "Cal State Long Beach" },
      { id: "csuf", abbreviation: "CSUF", fullName: "Cal State Fullerton" },
      {
        id: "ucla",
        abbreviation: "UCLA",
        fullName: "University of California, Los Angeles",
      },
      {
        id: "usc",
        abbreviation: "USC",
        fullName: "University of Southern California",
      },
      {
        id: "csudh",
        abbreviation: "CSUDH",
        fullName: "Cal State Dominguez Hills",
      },
      {
        id: "ccc",
        abbreviation: "CCC",
        fullName: "Cerritos Community College",
      },
      {
        id: "mt-sac",
        abbreviation: "MT. SAC",
        fullName: "Mt. San Antonio College",
      },
      {
        id: "golden-west",
        abbreviation: "GWC",
        fullName: "Golden West College",
      },
      { id: "cypress", abbreviation: "", fullName: "Cypress College" },
      {
        id: "cal-poly-pomona",
        abbreviation: "",
        fullName: "Cal Poly Pomona",
      },
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
