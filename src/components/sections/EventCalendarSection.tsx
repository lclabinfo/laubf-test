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

import { useState, useMemo } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import CTAButton from "@/components/shared/CTAButton";
import EventCalendarGrid from "@/components/shared/EventCalendarGrid";
import EventListItem from "@/components/shared/EventListItem";
import type { EventCalendarSectionProps } from "@/lib/types/sections";
import type { Event } from "@/lib/types/events";
import { toEventListItemData } from "@/lib/types/events";
import {
  IconChevronLeft,
  IconChevronRight,
  IconListView,
  IconCalendar,
} from "@/components/layout/icons";
import { cn } from "@/lib/utils";

type ViewMode = "list" | "calendar";
type FilterType = "all" | "event" | "meeting" | "program";

const FILTERS: { value: FilterType; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "event", label: "Events" },
  { value: "meeting", label: "Meetings" },
  { value: "program", label: "Programs" },
];

export default function EventCalendarSection(props: {
  settings: EventCalendarSectionProps;
  events: Event[];
}) {
  const { settings, events } = props;
  const { content } = settings;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  /* ── Filtered events ── */
  const filteredEvents = useMemo(() => {
    let filtered = events;
    if (activeFilter !== "all") {
      filtered = filtered.filter((e) => e.type === activeFilter);
    }
    return filtered;
  }, [events, activeFilter]);

  /* ── Events for current month (list view) ── */
  const monthEvents = useMemo(() => {
    const monthStr = String(currentMonth + 1).padStart(2, "0");
    const yearStr = String(currentYear);
    return filteredEvents.filter((e) => {
      const start = e.dateStart;
      const end = e.dateEnd || e.dateStart;
      const monthStart = `${yearStr}-${monthStr}-01`;
      const monthEnd = `${yearStr}-${monthStr}-31`;
      return start <= monthEnd && end >= monthStart;
    });
  }, [filteredEvents, currentMonth, currentYear]);

  const monthLabel = new Date(currentYear, currentMonth, 1).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  const upcomingMonthName = new Date(
    currentYear,
    currentMonth,
    1,
  ).toLocaleDateString("en-US", { month: "long" });

  function goToPrevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  return (
    <SectionContainer settings={settings} className="!pt-0 !pb-24 lg:!pb-30">
      <div className="flex flex-col gap-10">
        {/* Schedule heading */}
        <h2 className="text-h2 text-black-1">{content.heading}</h2>

        {/* Calendar/List container */}
        <div className="flex flex-col gap-5">
          {/* Header row: month toggle + view toggle */}
          <div className="flex items-center justify-between">
            {/* Month navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={goToPrevMonth}
                className="flex size-8 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
                aria-label="Previous month"
              >
                <IconChevronLeft className="size-4" />
              </button>
              <h3 className="min-w-[180px] text-center text-[16px] font-medium uppercase tracking-wide text-black-1">
                {monthLabel}
              </h3>
              <button
                onClick={goToNextMonth}
                className="flex size-8 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
                aria-label="Next month"
              >
                <IconChevronRight className="size-4" />
              </button>
            </div>

            {/* List / Month toggle */}
            <div className="flex rounded-[14px] bg-white-2 p-1">
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors",
                  viewMode === "list"
                    ? "bg-white-0 text-black-1 shadow-sm"
                    : "text-black-3 hover:text-black-2",
                )}
              >
                <IconListView className="size-4" />
                <span>List</span>
              </button>
              <button
                onClick={() => setViewMode("calendar")}
                className={cn(
                  "flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors",
                  viewMode === "calendar"
                    ? "bg-white-0 text-black-1 shadow-sm"
                    : "text-black-3 hover:text-black-2",
                )}
              >
                <IconCalendar className="size-4" />
                <span>Month</span>
              </button>
            </div>
          </div>

          {/* Filter pills + upcoming count (list view only) */}
          {viewMode === "list" && (
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors",
                      activeFilter === filter.value
                        ? "bg-black-1 text-white-0"
                        : "bg-white-2 text-black-3 hover:bg-white-2-5 hover:text-black-2",
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] text-black-3">
                  Upcoming in {upcomingMonthName}
                </span>
                <span className="flex size-[26px] items-center justify-center rounded-full bg-black-1 text-[12px] font-medium text-white-0">
                  {monthEvents.length}
                </span>
              </div>
            </div>
          )}

          {/* Content: List or Calendar */}
          {viewMode === "list" ? (
            <div className="flex flex-col">
              {monthEvents.length === 0 ? (
                <div className="flex items-center justify-center py-16">
                  <p className="text-body-2 text-black-3">
                    No events this month.
                  </p>
                </div>
              ) : (
                monthEvents.map((event) => {
                  const data = toEventListItemData(event);
                  return <EventListItem key={event.slug} data={data} />;
                })
              )}
            </div>
          ) : (
            <EventCalendarGrid events={filteredEvents} />
          )}
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M5 13l8-8M13 5v8M13 5H5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
