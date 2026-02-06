/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — "Schedule"
 *   currentMonth: string — "SEPTEMBER 2026"
 *   filters: string[] — ["ALL", "Events", "Meetings", "Programs"]
 * ── Events (fetched from DB) ──
 *   events[]: EventListItemData[]
 * ── Buttons (BASIC) ──
 *   ctaButtons[]: { label, href, icon? }
 * ── Visibility (BASIC) ──
 *   showFilters: boolean
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: Fetched from events collection
 *   events (id, title, start_date, end_date, time, type, location, slug)
 */
"use client";

import { useState } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import FilterPill from "@/components/shared/FilterPill";
import EventListItem from "@/components/shared/EventListItem";
import CTAButton from "@/components/shared/CTAButton";
import type { ScheduleSectionProps } from "@/lib/types/sections";

export default function ScheduleSection(props: {
  settings: ScheduleSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredEvents =
    activeFilter === "ALL"
      ? content.events
      : content.events.filter(
          (e) => e.type.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <SectionContainer settings={settings} className="!pt-0 !pb-24 lg:!pb-30">
      <div className="flex flex-col gap-10">
        {/* Schedule heading */}
        <h2 className="text-h2 text-black-1">{content.heading}</h2>

        {/* Calendar header */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            {/* Month toggle */}
            <div className="flex items-center gap-2">
              <button className="flex size-8 items-center justify-center rounded-full border border-border-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-overline text-black-1 min-w-[180px] text-center">
                {content.currentMonth}
              </span>
              <button className="flex size-8 items-center justify-center rounded-full border border-border-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* View toggle */}
            <div className="hidden lg:flex rounded-xl border border-border-light p-1">
              <button className="flex items-center gap-2 rounded-lg bg-white-1 px-4 py-3 text-body-3 font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                List
              </button>
              <button className="flex items-center gap-2 rounded-lg px-4 py-3 text-body-3 text-black-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Month
              </button>
            </div>
          </div>

          {/* Filter pills + count */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {content.filters.map((filter) => (
                <FilterPill
                  key={filter}
                  label={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-2 text-body-3 text-black-2">
              <span>Upcoming in January</span>
              <span className="flex size-6 items-center justify-center rounded-full bg-black-1 text-pill text-white-1">
                {filteredEvents.length}
              </span>
            </div>
          </div>

          {/* Event list */}
          <div className="flex flex-col">
            {filteredEvents.map((event) => (
              <EventListItem key={event.id} data={event} />
            ))}
          </div>
        </div>

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
