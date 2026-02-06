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
