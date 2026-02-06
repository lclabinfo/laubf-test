import type { SectionTheme } from "../theme";
import type {
  EventCardData,
  EventListItemData,
  ImageCardData,
  VideoThumbnailData,
} from "./shared";

/* ---- Section Type Registry ---- */
export type SectionType =
  | "hero"
  | "who-we-are"
  | "featured-events"
  | "schedule"
  | "spiritual-direction"
  | "next-steps"
  | "campus-ministries"
  | "this-weeks-message"
  | "featured-videos"
  | "visit-us-banner"
  | "footer";

/* ---- Base Settings ---- */
export interface BaseSectionSettings {
  id: string;
  visible: boolean;
  colorScheme: SectionTheme;
  paddingY?: "compact" | "default" | "spacious";
  containerWidth?: "standard" | "narrow" | "full";
  enableAnimations?: boolean;
}

/* ---- Hero ---- */
export interface HeroContent {
  heading: { line1: string; line2: string };
  subheading: string;
  primaryButton: { label: string; href: string; visible: boolean };
  secondaryButton: { label: string; href: string; visible: boolean };
  backgroundImage: { src: string; alt: string };
}

export interface HeroSectionProps extends BaseSectionSettings {
  content: HeroContent;
  showSubheading: boolean;
}

/* ---- Who We Are ---- */
export interface WhoWeAreContent {
  overline: string;
  heading: string;
  body: string;
  button: { label: string; href: string; visible: boolean };
  images: { src: string; alt: string }[];
}

export interface WhoWeAreSectionProps extends BaseSectionSettings {
  content: WhoWeAreContent;
}

/* ---- Featured Events ---- */
export interface FeaturedEventsContent {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
  featuredEvents: EventCardData[];
}

export interface FeaturedEventsSectionProps extends BaseSectionSettings {
  content: FeaturedEventsContent;
}

/* ---- Schedule ---- */
export interface ScheduleContent {
  heading: string;
  currentMonth: string;
  filters: string[];
  events: EventListItemData[];
  ctaButtons: { label: string; href: string; icon?: boolean }[];
}

export interface ScheduleSectionProps extends BaseSectionSettings {
  content: ScheduleContent;
}

/* ---- Spiritual Direction ---- */
export interface SpiritualDirectionContent {
  overline: string;
  heading: string;
  verse: { text: string; reference: string };
}

export interface SpiritualDirectionSectionProps extends BaseSectionSettings {
  content: SpiritualDirectionContent;
}

/* ---- Next Steps ---- */
export interface NextStepsContent {
  heading: { line1: string; line2: string; line3: string };
  subheading: string;
  cards: ImageCardData[];
}

export interface NextStepsSectionProps extends BaseSectionSettings {
  content: NextStepsContent;
}

/* ---- Campus Ministries ---- */
export interface CampusData {
  id: string;
  name: string;
  active?: boolean;
  href?: string;
}

export interface CampusMinistriesContent {
  heading: string;
  campuses: CampusData[];
  image: { src: string; alt: string };
  ctaHeading: string;
  ctaButton: { label: string; href: string };
}

export interface CampusMinistriesSectionProps extends BaseSectionSettings {
  content: CampusMinistriesContent;
}

/* ---- This Week's Message ---- */
export interface ThisWeeksMessageContent {
  sectionHeading: string;
  sermon: {
    title: string;
    speaker: string;
    date: string;
    series?: string;
    thumbnailUrl: string;
    videoUrl?: string;
  };
}

export interface ThisWeeksMessageSectionProps extends BaseSectionSettings {
  content: ThisWeeksMessageContent;
}

/* ---- Featured Videos ---- */
export interface FeaturedVideosContent {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  videos: VideoThumbnailData[];
}

export interface FeaturedVideosSectionProps extends BaseSectionSettings {
  content: FeaturedVideosContent;
}

/* ---- Visit Us Banner ---- */
export interface VisitUsBannerContent {
  overline: string;
  heading: string;
  body: string;
  primaryButton: { label: string; href: string; visible: boolean };
  secondaryButton: { label: string; href: string; visible: boolean };
  backgroundImage?: { src: string; alt: string };
}

export interface VisitUsBannerSectionProps extends BaseSectionSettings {
  content: VisitUsBannerContent;
}

/* ---- Footer ---- */
export interface FooterColumn {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface FooterContent {
  description: string;
  socialLinks: { platform: string; href: string }[];
  columns: FooterColumn[];
  contactInfo: { address: string[]; phone: string; email: string };
}

export interface FooterSectionProps extends BaseSectionSettings {
  content: FooterContent;
}
