import MinistryHeroSection from "@/components/sections/MinistryHeroSection";
import MinistryIntroSection from "@/components/sections/MinistryIntroSection";
import MinistryScheduleSection from "@/components/sections/MinistryScheduleSection";
import MeetTeamSection from "@/components/sections/MeetTeamSection";
import FormSection from "@/components/sections/FormSection";
import FAQSection from "@/components/sections/FAQSection";
import CampusCardGridSection from "@/components/sections/CampusCardGridSection";

import type {
  MinistryHeroSectionProps,
  MinistryIntroSectionProps,
  MinistryScheduleSectionProps,
  MeetTeamSectionProps,
  FormSectionProps,
  FAQSectionProps,
  CampusCardGridSectionProps,
} from "@/lib/types/sections";

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: MinistryHeroSectionProps = {
  id: "mt-sac-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "CAMPUS MINISTRY",
    heading: "MT. SAC",
    headingStyle: "sans",
    ctaButton: {
      label: "Start Bible Study",
      href: "https://startbiblestudy.org/mt-sac",
      visible: true,
    },
    socialLinks: [
      { platform: "Email", href: "mailto:mtsac@laubf.org" },
      { platform: "Instagram", href: "https://instagram.com/mtsac.ubf" },
      { platform: "Facebook", href: "https://facebook.com/mtsac.ubf" },
    ],
    heroImage: {
      src: "/pics-temp/csulb/IMG_1408.JPG",
      alt: "Mt. SAC campus ministry",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "mt-sac-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "About the Ministry",
    description:
      "\u201CI am like an olive tree flourishing in the house of God; I trust in God\u2019s unfailing love for ever and ever.\u201D (Psalm 52:8)\n\nMt. SAC Olive Tree Club is our campus ministry at Mt. San Antonio College. We help students grow and flourish in their faith through Bible study, that through studying God\u2019s Word each student may come to know God personally and discover their clear purpose and meaning of life in our Lord Jesus Christ. We have group Bible studies at Mt. SAC campus.",
  },
};

const scheduleData: MinistryScheduleSectionProps = {
  id: "mt-sac-schedule",
  visible: true,
  colorScheme: "dark",
  content: {
    heading: "Join Us",
    description:
      "Whether you're a believer or just curious, you're welcome here.",
    scheduleLabel: "WHEN & WHERE",
    scheduleEntries: [
      {
        day: "Wednesdays",
        time: "12:00 PM - 1:00 PM",
        location: "Building 9B",
      },
      {
        day: "Fridays",
        time: "3:00 PM - 4:00 PM",
        location: "Building 9B",
      },
    ],
    buttons: [
      { label: "Start Bible Study", href: "https://startbiblestudy.org/mt-sac", variant: "primary" },
      {
        label: "Visit our website",
        href: "https://mtsacolivetree.org/",
        variant: "secondary",
      },
    ],
  },
};

const teamData: MeetTeamSectionProps = {
  id: "mt-sac-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "MT. SAC",
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

const formData: FormSectionProps = {
  id: "plan-visit",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "Plan Your Visit",
    heading: "Let us help you start",
    description:
      "Let us know you're coming and we'll save a seat for you! We can also help match you with a Bible teacher or answer any questions about our ministries.",
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
      "I'd like to be matched with a personal bible teacher for bible studies or spiritual guidance",
    submitLabel: "Submit",
    successMessage:
      "Thank you! We've received your message and will get back to you soon.",
  },
};

const faqData: FAQSectionProps = {
  id: "faq",
  visible: true,
  colorScheme: "light",
  containerWidth: "narrow",
  content: {
    heading: "Frequently Asked Questions",
    showIcon: true,
    items: [
      {
        question: "Where and when do campus groups meet?",
        answer:
          "Campus Bible study groups meet at various times throughout the week depending on the campus. Most groups meet once or twice a week. Fill out the contact form above and we'll connect you with the group nearest to you.",
      },
      {
        question: "Do I need to bring anything?",
        answer:
          "Just bring yourself! We provide study materials and Bibles. Feel free to bring your own Bible if you have one.",
      },
      {
        question: "Is this only for Mt. SAC students?",
        answer:
          "While our group is based at Mt. SAC, anyone is welcome to join. You don't have to be a current student to attend.",
      },
      {
        question: "What denomination is UBF?",
        answer:
          "UBF is a non-denominational evangelical Christian organization. We focus on Bible study and discipleship across all Christian traditions.",
      },
      {
        question: "How can I get involved beyond Bible study?",
        answer:
          "There are many ways to get involved! Join us for fellowship meals, outreach events, conferences, and worship services. Talk to a group leader to learn more.",
      },
    ],
  },
};

const campusGridData: CampusCardGridSectionProps = {
  id: "other-campuses",
  visible: true,
  colorScheme: "light",
  content: {
    decorativeImages: [
      { src: "/images/ministries/join-campus-ministry-section/1.JPG", alt: "Campus group photo", rotation: -8 },
      { src: "/images/ministries/join-campus-ministry-section/2.jpg", alt: "Bible study outdoors", rotation: 3 },
      { src: "/images/ministries/join-campus-ministry-section/3.png", alt: "Fellowship event", rotation: -5 },
    ],
    heading: "Check out other campuses",
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
  },
};

/* ================================================================
 * MT. SAC CAMPUS MINISTRY PAGE
 * Section order: Light → Light → Dark → Light → Light → Light → Light
 * ================================================================ */

export default function MtSacPage() {
  return (
    <main>
      <MinistryHeroSection settings={heroData} />
      <MinistryIntroSection settings={introData} />
      <MinistryScheduleSection settings={scheduleData} />
      <MeetTeamSection settings={teamData} />
      <FormSection settings={formData} />
      <FAQSection settings={faqData} />
      <CampusCardGridSection settings={campusGridData} />
    </main>
  );
}
