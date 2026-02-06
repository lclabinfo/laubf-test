/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — "Featured Events"
 *   subheading: string — description
 *   ctaLabel: string — "View All Events"
 *   ctaHref: string — "/events"
 * ── Events (BASIC) ──
 *   featuredEvents[]: EventCardData[] — 3 event cards (manual pick or auto-latest)
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: highlight_cards_sections (id, heading, subheading, cta_label, cta_href, visible)
 *   + junction: highlight_card_picks (section_id, card_id, position)
 *   Cards collection: cards (id, title, date, location, image_url, badge, slug)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import EventCard from "@/components/shared/EventCard";
import type { HighlightCardsSectionProps } from "@/lib/types/sections";

export default function HighlightCardsSection(props: {
  settings: HighlightCardsSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const events = content.featuredEvents;

  return (
    <SectionContainer settings={settings} className="!pt-24 lg:!pt-25">
      <div className="flex flex-col gap-8 lg:gap-10">
        <SectionHeader
          heading={content.heading}
          subheading={content.subheading}
          ctaLabel={content.ctaLabel}
          ctaHref={content.ctaHref}
        />

        {/* Events grid: 1 large + 2 small stacked */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Large card */}
          {events[0] && (
            <EventCard data={events[0]} size="large" />
          )}

          {/* Two small cards stacked */}
          <div className="flex flex-col gap-5">
            {events[1] && (
              <EventCard data={events[1]} size="small" />
            )}
            {events[2] && (
              <EventCard data={events[2]} size="small" />
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
