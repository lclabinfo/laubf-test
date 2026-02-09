import SpotlightMediaSection from "@/components/sections/SpotlightMediaSection";
import AllMessagesSection from "@/components/sections/AllMessagesSection";

import type {
  SpotlightMediaSectionProps,
  AllMessagesSectionProps,
} from "@/lib/types/sections";

import { MOCK_MESSAGES } from "@/lib/mock-data/messages";

/* ================================================================
 * SAMPLE DATA — Content from Figma design
 * In production, this data comes from PostgreSQL via CMS API.
 * ================================================================ */

const spotlightData: SpotlightMediaSectionProps = {
  id: "this-weeks-message",
  visible: true,
  colorScheme: "dark",
  paddingY: "compact",
  content: {
    sectionHeading: "This Week\u2019s Message",
    sermon: {
      slug: "as-the-spirit-gave-them-utterance",
      title: "As The Spirit Gave Them Utterance",
      speaker: "P. William",
      date: "FEB 8",
      series: "SUNDAY MESSAGE",
      thumbnailUrl: "https://img.youtube.com/vi/U-vvxbOHQEM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=U-vvxbOHQEM",
    },
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
    <main className="-mt-[76px] pt-[76px]" style={{ background: "var(--color-black-1)" }}>
      <SpotlightMediaSection settings={spotlightData} />
      <AllMessagesSection settings={allMessagesData} messages={MOCK_MESSAGES} />
    </main>
  );
}
