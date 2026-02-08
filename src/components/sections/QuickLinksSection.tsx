/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   heading: string -- section heading (e.g. "Quick Links")
 *   subtitle?: string -- supporting text
 * -- Data --
 *   meetings: fetched from RECURRING_MEETINGS (Event[])
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: quick_links_sections (id, heading, subtitle, visible, color_scheme)
 * Meetings come from events table WHERE is_recurring = true
 */
"use client";

import { useRef } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { QuickLinksSectionProps } from "@/lib/types/sections";
import type { Event } from "@/lib/types/events";
import {
  IconClock,
  IconLink,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@/components/layout/icons";
import Link from "next/link";

const TYPE_COLORS: Record<string, string> = {
  meeting: "bg-accent-blue",
  event: "bg-accent-green",
  program: "bg-brand-1",
};

export default function QuickLinksSection(props: {
  settings: QuickLinksSectionProps;
  meetings: Event[];
}) {
  const { settings, meetings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: "left" | "right") {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <SectionContainer settings={settings}>
      {/* Header — left aligned with nav arrows */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className={`text-h2 ${t.textPrimary}`}>{content.heading}</h2>
          {content.subtitle && (
            <p className={`text-body-1 ${t.textSecondary} mt-2 max-w-[600px]`}>
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Carousel nav arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scrollBy("left")}
            className="flex size-10 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
            aria-label="Scroll left"
          >
            <IconChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="flex size-10 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
            aria-label="Scroll right"
          >
            <IconChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Horizontal scrolling carousel — single row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 pb-2"
      >
        {meetings.map((meeting) => (
          <div
            key={meeting.slug}
            className="min-w-[280px] max-w-[300px] shrink-0 snap-start bg-white-0 rounded-[20px] border border-white-2-5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col"
          >
            {/* Type pill + title row */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-[18px] font-medium text-black-1 leading-snug">
                {meeting.title}
              </h3>
              <span
                className={`shrink-0 text-white-0 text-[11px] tracking-[0.24px] font-medium px-2.5 py-0.5 rounded-full uppercase ${TYPE_COLORS[meeting.type] ?? "bg-black-2"}`}
              >
                {meeting.type}
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 mb-5">
              <IconClock className="size-4 text-black-3 shrink-0" />
              <span className="text-[14px] text-black-2">{meeting.time}</span>
            </div>

            {/* Spacer + actions */}
            <div className="mt-auto flex flex-col gap-2">
              {/* Online meeting link */}
              {meeting.meetingUrl && (
                <a
                  href={meeting.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-black-1 px-4 py-2.5 text-[14px] font-medium text-white-0 transition-colors hover:bg-black-2"
                >
                  <IconLink className="size-4" />
                  Join online meeting
                </a>
              )}

              {/* View detail link */}
              <Link
                href={`/events/${meeting.slug}`}
                className="flex items-center justify-center gap-1 text-[14px] font-medium text-black-2 transition-colors hover:text-black-1 py-2"
              >
                View event detail
                <IconArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
