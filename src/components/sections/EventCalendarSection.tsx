/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — "Schedule"
 * ── Buttons (BASIC) ──
 *   ctaButtons[]: { label, href, icon? }
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: Fetched from events collection
 *   events (id, title, start_date, end_date, time, type, location, slug)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import CTAButton from "@/components/shared/CTAButton";
import EventCalendarGrid from "@/components/shared/EventCalendarGrid";
import type { EventCalendarSectionProps } from "@/lib/types/sections";
import type { Event } from "@/lib/types/events";

export default function EventCalendarSection(props: {
  settings: EventCalendarSectionProps;
  events: Event[];
}) {
  const { settings, events } = props;
  const { content } = settings;

  return (
    <SectionContainer settings={settings} className="!pt-0 !pb-24 lg:!pb-30">
      <div className="flex flex-col gap-10">
        {/* Schedule heading */}
        <h2 className="text-h2 text-black-1">{content.heading}</h2>

        {/* Interactive calendar grid */}
        <EventCalendarGrid events={events} />

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {content.ctaButtons.map((btn) => (
            <CTAButton
              key={btn.label}
              label={btn.label}
              href={btn.href}
              variant={btn.icon ? "primary" : "secondary"}
              icon={
                btn.icon ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="ml-2">
                    <path d="M5 13l8-8M13 5v8M13 5H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : undefined
              }
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
