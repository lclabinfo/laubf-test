import EventsHeroSection from "@/components/sections/EventsHeroSection";
import QuickLinksSection from "@/components/sections/QuickLinksSection";
import AllEventsSection from "@/components/sections/AllEventsSection";

import type {
  EventsHeroSectionProps,
  QuickLinksSectionProps,
  AllEventsSectionProps,
} from "@/lib/types/sections";

import { MOCK_EVENTS, RECURRING_MEETINGS } from "@/lib/mock-data/events";

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: EventsHeroSectionProps = {
  id: "events-hero",
  visible: true,
  colorScheme: "dark",
  paddingY: "compact",
  content: {
    heading: "Events",
    subtitle:
      "Stay connected with what's happening at LA UBF. From weekly gatherings to special events, there's always something for you.",
  },
};

const quickLinksData: QuickLinksSectionProps = {
  id: "quick-links",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "Quick Links",
    subtitle:
      "Jump to our recurring weekly meetings and find the one that fits you.",
  },
};

const allEventsData: AllEventsSectionProps = {
  id: "all-events",
  visible: true,
  colorScheme: "light",
  content: {
    heading: "All Events",
  },
};

export default function EventsPage() {
  return (
    <main>
      <EventsHeroSection settings={heroData} />
      <QuickLinksSection settings={quickLinksData} meetings={RECURRING_MEETINGS} />
      <AllEventsSection settings={allEventsData} events={MOCK_EVENTS} />
    </main>
  );
}
