/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline?: string -- label above heading (e.g. "YOUNG ADULT MINISTRY")
 *   heading: string -- section heading (e.g. "Upcoming Events")
 * -- Events (BASIC) --
 *   events[]: { title, date, time, location, image, eventType?, badge?, tags? }
 * -- CTA (BASIC) --
 *   ctaButton?: { label, href }
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: upcoming_events_sections (id, overline, heading, cta_label, cta_href, visible, color_scheme)
 * DB SCHEMA: upcoming_event_items (id, section_id, title, date, time, location, image_src, image_alt, event_type, badge, sort_order)
 * DB SCHEMA: upcoming_event_tags (id, event_id, label, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import OverlineLabel from "@/components/shared/OverlineLabel";
import CTAButton from "@/components/shared/CTAButton";
import { themeTokens } from "@/lib/theme";
import type { UpcomingEventsSectionProps } from "@/lib/types/sections";
import { IconCalendar, IconMapPin, IconArrowRight } from "@/components/layout/icons";
import Image from "next/image";

export default function UpcomingEventsSection(props: {
  settings: UpcomingEventsSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];

  return (
    <SectionContainer settings={settings}>
      {/* Header — centered */}
      <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
        {content.overline && (
          <OverlineLabel text={content.overline} className="mb-3" />
        )}
        <h2 className={`text-h2 ${t.textPrimary}`}>{content.heading}</h2>
      </div>

      {/* Event cards — horizontal scrollable row */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory lg:snap-none pb-2">
        {content.events.map((event, i) => (
          <div
            key={i}
            className="flex-none w-[85%] sm:w-[320px] lg:flex-1 lg:w-auto bg-white-0 rounded-[20px] border border-white-2-5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] overflow-hidden snap-start"
          >
            {/* Event image with badge */}
            <div className="relative h-[200px] w-full">
              <Image
                src={event.image.src}
                alt={event.image.alt}
                fill
                className="object-cover"
              />
              {event.badge && (
                <span className="absolute top-3 right-3 bg-black-1/80 text-white-0 text-[11px] tracking-wider font-medium px-3 py-1 rounded-full uppercase">
                  {event.badge}
                </span>
              )}
            </div>

            {/* Event details */}
            <div className="p-5">
              {/* Event type badge */}
              {event.eventType && (
                <span className="inline-block bg-accent-blue text-white-0 text-[12px] tracking-[0.24px] font-medium px-3 py-1 rounded-full mb-3 uppercase">
                  {event.eventType}
                </span>
              )}

              <h3 className="text-[20px] font-medium text-black-1 mb-3">
                {event.title}
              </h3>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <IconCalendar className="size-4 text-black-2 shrink-0" />
                  <span className="text-[14px] text-black-2">
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconMapPin className="size-4 text-black-2 shrink-0" />
                  <span className="text-[14px] text-black-2">
                    {event.location}
                  </span>
                </div>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {event.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-white-2 text-black-2 text-[12px] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA button */}
      {content.ctaButton && (
        <div className="flex justify-center mt-10">
          <CTAButton
            label={content.ctaButton.label}
            href={content.ctaButton.href}
            variant="secondary"
            icon={<IconArrowRight className="ml-2 size-4" />}
          />
        </div>
      )}
    </SectionContainer>
  );
}
