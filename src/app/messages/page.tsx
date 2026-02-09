import EventsHeroSection from "@/components/sections/EventsHeroSection";
import AllMessagesSection from "@/components/sections/AllMessagesSection";

import type {
  EventsHeroSectionProps,
  AllMessagesSectionProps,
} from "@/lib/types/sections";

import { MOCK_MESSAGES } from "@/lib/mock-data/messages";

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const heroData: EventsHeroSectionProps = {
  id: "messages-hero",
  visible: true,
  colorScheme: "dark",
  paddingY: "compact",
  content: {
    heading: "Sunday Messages",
    subtitle:
      "Watch and listen to sermons from our Sunday worship services and special events.",
  },
};

const allMessagesData: AllMessagesSectionProps = {
  id: "all-messages",
  visible: true,
  colorScheme: "light",
  paddingY: "compact",
  content: {
    heading: "All Messages",
  },
};

export default function MessagesPage() {
  return (
    <main>
      <EventsHeroSection settings={heroData} />
      <AllMessagesSection settings={allMessagesData} messages={MOCK_MESSAGES} />
    </main>
  );
}
