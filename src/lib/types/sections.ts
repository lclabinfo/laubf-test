import type { SectionTheme } from "../theme";
import type {
  EventCardData,
  EventListItemData,
  ImageCardData,
  VideoThumbnailData,
} from "./shared";

/* ---- Navbar ---- */
export interface NavbarContent {
  logo: { lightSrc: string; darkSrc: string; alt: string };
  ctaButton: { label: string; href: string; visible: boolean };
  memberLogin: { label: string; href: string; visible: boolean };
}

export interface NavbarSettings extends BaseSectionSettings {
  content: NavbarContent;
}

/* ---- Section Type Registry ---- */
export type SectionType =
  | "hero-banner"
  | "media-text"
  | "highlight-cards"
  | "event-calendar"
  | "quote-banner"
  | "action-card-grid"
  | "directory-list"
  | "spotlight-media"
  | "media-grid"
  | "cta-banner"
  | "footer"
  | "page-hero"
  | "feature-breakdown"
  | "pathway-card"
  | "timeline"
  | "location-detail"
  | "campus-card-grid"
  | "form"
  | "faq"
  | "text-image-hero"
  | "about-description"
  | "pillars"
  | "statement";

/* ---- Base Settings ---- */
export interface BaseSectionSettings {
  id: string;
  visible: boolean;
  colorScheme: SectionTheme;
  paddingY?: "compact" | "default" | "spacious";
  containerWidth?: "standard" | "narrow" | "full";
  enableAnimations?: boolean;
}

/* ---- Hero Banner ---- */
export interface HeroBannerContent {
  heading: { line1: string; line2: string };
  subheading: string;
  primaryButton: { label: string; href: string; visible: boolean };
  secondaryButton: { label: string; href: string; visible: boolean };
  backgroundImage: { src: string; alt: string };
}

export interface HeroBannerSectionProps extends BaseSectionSettings {
  content: HeroBannerContent;
  showSubheading: boolean;
}

/* ---- Media Text ---- */
export interface MediaTextContent {
  overline: string;
  heading: string;
  body: string;
  button: { label: string; href: string; visible: boolean };
  images: { src: string; alt: string }[];
  /** Seconds for one full rotation (desktop wheel). Default 40. */
  rotationSpeed?: number;
}

export interface MediaTextSectionProps extends BaseSectionSettings {
  content: MediaTextContent;
}

/* ---- Highlight Cards ---- */
export interface HighlightCardsContent {
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
  featuredEvents: EventCardData[];
}

export interface HighlightCardsSectionProps extends BaseSectionSettings {
  content: HighlightCardsContent;
}

/* ---- Event Calendar ---- */
export interface EventCalendarContent {
  heading: string;
  currentMonth: string;
  filters: string[];
  events: EventListItemData[];
  ctaButtons: { label: string; href: string; icon?: boolean }[];
}

export interface EventCalendarSectionProps extends BaseSectionSettings {
  content: EventCalendarContent;
}

/* ---- Quote Banner ---- */
export interface QuoteBannerContent {
  overline: string;
  heading: string;
  verse: { text: string; reference: string };
}

export interface QuoteBannerSectionProps extends BaseSectionSettings {
  content: QuoteBannerContent;
}

/* ---- Action Card Grid ---- */
export interface ActionCardGridContent {
  heading: { line1: string; line2: string; line3: string };
  subheading: string;
  cards: ImageCardData[];
}

export interface ActionCardGridSectionProps extends BaseSectionSettings {
  content: ActionCardGridContent;
}

/* ---- Directory List ---- */
export interface DirectoryItemData {
  id: string;
  name: string;
  active?: boolean;
  href?: string;
}

export interface DirectoryListContent {
  heading: string;
  items: DirectoryItemData[];
  image: { src: string; alt: string };
  ctaHeading: string;
  ctaButton: { label: string; href: string };
}

export interface DirectoryListSectionProps extends BaseSectionSettings {
  content: DirectoryListContent;
}

/* ---- Spotlight Media ---- */
export interface SpotlightMediaContent {
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

export interface SpotlightMediaSectionProps extends BaseSectionSettings {
  content: SpotlightMediaContent;
}

/* ---- Media Grid ---- */
export interface MediaGridContent {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  videos: VideoThumbnailData[];
}

export interface MediaGridSectionProps extends BaseSectionSettings {
  content: MediaGridContent;
}

/* ---- CTA Banner ---- */
export interface CTABannerContent {
  overline: string;
  heading: string;
  body: string;
  primaryButton: { label: string; href: string; visible: boolean };
  secondaryButton: { label: string; href: string; visible: boolean };
  backgroundImage?: { src: string; alt: string };
}

export interface CTABannerSectionProps extends BaseSectionSettings {
  content: CTABannerContent;
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

/* ---- Page Hero (inner pages) ---- */
export interface FloatingImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PageHeroContent {
  overline: string;
  heading: string;
  primaryButton: { label: string; href: string; visible: boolean };
  secondaryButton: { label: string; href: string; visible: boolean };
  floatingImages: FloatingImage[];
}

export interface PageHeroSectionProps extends BaseSectionSettings {
  content: PageHeroContent;
}

/* ---- Feature Breakdown ---- */
export interface FeatureBreakdownContent {
  heading: string;
  acronymLines: string[];
  description: string;
  button: { label: string; href: string; visible: boolean };
}

export interface FeatureBreakdownSectionProps extends BaseSectionSettings {
  content: FeatureBreakdownContent;
}

/* ---- Pathway Card ---- */
export interface PathwayCardItem {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonVariant: "primary" | "secondary";
}

export interface PathwayCardContent {
  heading: string;
  description: string;
  cards: PathwayCardItem[];
}

export interface PathwayCardSectionProps extends BaseSectionSettings {
  content: PathwayCardContent;
}

/* ---- Timeline ---- */
export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface TimelineContent {
  overline: string;
  heading: string;
  description?: string;
  videoUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  items: TimelineItem[];
}

export interface TimelineSectionProps extends BaseSectionSettings {
  content: TimelineContent;
}

/* ---- Location Detail ---- */
export interface LocationDetailContent {
  overline: string;
  timeLabel: string;
  timeValue: string;
  locationLabel: string;
  address: string[];
  directionsUrl: string;
  directionsLabel: string;
  images: { src: string; alt: string }[];
}

export interface LocationDetailSectionProps extends BaseSectionSettings {
  content: LocationDetailContent;
}

/* ---- Campus Card Grid ---- */
export interface CampusCardItem {
  id: string;
  abbreviation: string;
  fullName: string;
}

export interface CampusCardGridContent {
  overline: string;
  heading: string;
  description: string;
  decorativeImages: { src: string; alt: string; rotation: number }[];
  campuses: CampusCardItem[];
  ctaHeading: string;
  ctaButton: { label: string; href: string };
}

export interface CampusCardGridSectionProps extends BaseSectionSettings {
  content: CampusCardGridContent;
}

/* ---- Form Section ---- */
export interface FormInterestOption {
  label: string;
  value: string;
}

export interface FormContent {
  overline: string;
  heading: string;
  description: string;
  interestOptions: FormInterestOption[];
  campusOptions: { label: string; value: string }[];
  bibleTeacherLabel: string;
  submitLabel: string;
  successMessage: string;
}

export interface FormSectionProps extends BaseSectionSettings {
  content: FormContent;
}

/* ---- FAQ ---- */
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  heading: string;
  showIcon?: boolean;
  items: FAQItem[];
}

export interface FAQSectionProps extends BaseSectionSettings {
  content: FAQContent;
}

/* ---- Text + Image Hero (inner pages — simple variant) ---- */
export interface TextImageHeroContent {
  overline: string;
  headingLine1: string;
  headingAccent?: string;
  description: string;
  image: { src: string; alt: string };
}

export interface TextImageHeroSectionProps extends BaseSectionSettings {
  content: TextImageHeroContent;
  textAlign?: "left" | "center" | "right";
}

/* ---- About Description ---- */
export interface AboutDescriptionContent {
  logoSrc: string;
  heading: string;
  description: string;
  videoUrl?: string;
  videoTitle?: string;
}

export interface AboutDescriptionSectionProps extends BaseSectionSettings {
  content: AboutDescriptionContent;
}

/* ---- Pillars (alternating image/text) ---- */
export interface PillarItem {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  button?: { label: string; href: string };
}

export interface PillarsContent {
  overline: string;
  heading: string;
  items: PillarItem[];
}

export interface PillarsSectionProps extends BaseSectionSettings {
  content: PillarsContent;
}

/* ---- Statement (faith / belief) ---- */
export interface StatementParagraph {
  text: string;
  isBold?: boolean;
}

export interface StatementContent {
  overline: string;
  heading: string;
  leadIn: string;
  paragraphs: StatementParagraph[];
  showIcon?: boolean;
}

export interface StatementSectionProps extends BaseSectionSettings {
  content: StatementContent;
}
