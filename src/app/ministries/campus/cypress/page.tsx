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
  id: "cypress-hero",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "CAMPUS MINISTRY",
    heading: "Cypress College",
    headingStyle: "sans",
    ctaButton: {
      label: "Start Bible Study",
      href: "https://startbiblestudy.org/cypress",
      visible: true,
    },
    socialLinks: [
      { platform: "Email", href: "mailto:cypress@laubf.org" },
      { platform: "Instagram", href: "https://instagram.com/cypress.ubf" },
      { platform: "Facebook", href: "https://facebook.com/cypress.ubf" },
    ],
    heroImage: {
      src: "/pics-temp/csulb/IMG_1408.JPG",
      alt: "Cypress College campus ministry",
    },
  },
};

const introData: MinistryIntroSectionProps = {
  id: "cypress-intro",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "INTRODUCTION",
    heading: "About the Ministry",
    description:
      "\u201CI, Jesus, have sent my angel to give you this testimony for the churches. I am the Root and the Offspring of David, and the bright Morning Star.\u201D (Revelation 22:16)\n\nCypress College Morning Star Club is our campus ministry at Cypress College. We help students find hope and direction through Bible study, guiding each person to know God personally and discover the clear purpose and meaning of life in our Lord Jesus Christ. We have group Bible studies at the Student Center.",
  },
};

const scheduleData: MinistryScheduleSectionProps = {
  id: "cypress-schedule",
  visible: true,
  colorScheme: "dark",
  content: {
    heading: "Join Us",
    description:
      "Whether you're a believer or just curious, you're welcome here.",
    scheduleLabel: "WHEN & WHERE",
    scheduleEntries: [
      {
        day: "Mondays",
        time: "12:00 PM - 1:00 PM",
        location: "Student Center",
      },
      {
        day: "Wednesdays",
        time: "4:00 PM - 5:00 PM",
        location: "Student Center",
      },
    ],
    buttons: [
      { label: "Start Bible Study", href: "https://startbiblestudy.org/cypress", variant: "primary" },
      {
        label: "Visit our website",
        href: "https://cypressmorningstar.org/",
        variant: "secondary",
      },
    ],
  },
};

const teamData: MeetTeamSectionProps = {
  id: "cypress-team",
  visible: true,
  colorScheme: "light",
  content: {
    overline: "CYPRESS COLLEGE",
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
        question: "Is this only for Cypress College students?",
        answer:
          "While our group is based at Cypress College, anyone is welcome to join. You don't have to be a current student to attend.",
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
 * CYPRESS COLLEGE CAMPUS MINISTRY PAGE
 * Section order: Light → Light → Dark → Light → Light → Light → Light
 * ================================================================ */

export default function CypressPage() {
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
