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

import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { QuickLinksSectionProps } from "@/lib/types/sections";
import type { Event } from "@/lib/types/events";
import { IconClock, IconLink, IconArrowRight } from "@/components/layout/icons";
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

  return (
    <SectionContainer settings={settings}>
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className={`text-h2 ${t.textPrimary}`}>{content.heading}</h2>
        {content.subtitle && (
          <p className={`text-body-1 ${t.textSecondary} mt-3 max-w-[600px]`}>
            {content.subtitle}
          </p>
        )}
      </div>

      {/* Quick links grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {meetings.map((meeting) => (
          <div
            key={meeting.slug}
            className="bg-white-0 rounded-[20px] border border-white-2-5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] p-6 flex flex-col"
          >
            {/* Type pill */}
            <span
              className={`inline-block w-fit text-white-0 text-[12px] tracking-[0.24px] font-medium px-3 py-1 rounded-full uppercase mb-4 ${TYPE_COLORS[meeting.type] ?? "bg-black-2"}`}
            >
              {meeting.type}
            </span>

            {/* Title */}
            <h3 className="text-[18px] font-medium text-black-1 mb-3 leading-snug">
              {meeting.title}
            </h3>

            {/* Time */}
            <div className="flex items-center gap-2 mb-4">
              <IconClock className="size-4 text-black-3 shrink-0" />
              <span className="text-[14px] text-black-2">{meeting.time}</span>
            </div>

            {/* Spacer */}
            <div className="mt-auto flex flex-col gap-2">
              {/* Online meeting link */}
              {meeting.meetingUrl && (
                <a
                  href={meeting.meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full border border-accent-blue/30 px-4 py-2.5 text-[14px] font-medium text-accent-blue transition-colors hover:bg-accent-blue/5"
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
