/*
 * EventCalendarGrid — Interactive month calendar with Google-Calendar-style event blocks
 *
 * Features:
 * - Full month grid (Sun–Sat) with prev/next navigation
 * - Events rendered as colored rectangular blocks that span across multi-day ranges
 * - Collision detection & vertical stacking for overlapping events
 * - Click an event block to open a popover with quick info
 * - "View Full Details" CTA in popover links to /events/[slug]
 *
 * Used by: AllEventsSection (calendar view toggle), EventCalendarSection (home page)
 */
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import type { Event } from "@/lib/types/events";
import {
  IconChevronLeft,
  IconChevronRight,
  IconClock,
  IconMapPin,
  IconClose,
  IconArrowRight,
} from "@/components/layout/icons";
import Link from "next/link";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* Color tokens per event type */
const TYPE_BLOCK_COLORS: Record<string, string> = {
  meeting: "bg-accent-green text-white-0",
  event: "bg-accent-blue text-white-0",
  program: "bg-black-3 text-white-0",
};

const TYPE_PILL_COLORS: Record<string, string> = {
  meeting: "bg-accent-green",
  event: "bg-accent-blue",
  program: "bg-black-3",
};

/* ---- Types ---- */

interface CalendarDay {
  date: number;
  key: string; // YYYY-MM-DD
  isCurrentMonth: boolean;
  isToday: boolean;
  dayOfWeek: number; // 0=Sun
}

interface EventSpan {
  event: Event;
  startCol: number; // 0–6 within the week
  span: number; // columns to occupy
  row: number; // stacking row
  isContinuation: boolean; // starts from a prior week
  isContinued: boolean; // extends into next week
}

/* Max event rows visible per week before "+N more" */
const MAX_VISIBLE_ROWS = 3;

/* ---- Component ---- */

interface EventCalendarGridProps {
  events: Event[];
}

export default function EventCalendarGrid({ events }: EventCalendarGridProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setSelectedEvent(null);
      }
    }
    if (selectedEvent) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [selectedEvent]);

  /* ---- Calendar grid computation ---- */
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startWeekday = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days: CalendarDay[] = [];

    // Previous month padding
    const prevMonthLast = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = startWeekday - 1; i >= 0; i--) {
      const d = prevMonthLast - i;
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const key = `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      days.push({ date: d, key, isCurrentMonth: false, isToday: false, dayOfWeek: days.length % 7 });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const isToday2 =
        d === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      days.push({ date: d, key, isCurrentMonth: true, isToday: isToday2, dayOfWeek: days.length % 7 });
    }

    // Next month padding
    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let d = 1; d <= remaining; d++) {
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        const key = `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        days.push({ date: d, key, isCurrentMonth: false, isToday: false, dayOfWeek: days.length % 7 });
      }
    }

    return days;
  }, [currentMonth, currentYear, today]);

  // Chunk into weeks
  const weeks = useMemo(() => {
    const result: CalendarDay[][] = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      result.push(calendarDays.slice(i, i + 7));
    }
    return result;
  }, [calendarDays]);

  /* ---- Build event spans per week ---- */
  const weekEventSpans = useMemo(() => {
    return weeks.map((week) => {
      const weekStartKey = week[0].key;
      const weekEndKey = week[6].key;

      // Find all events that overlap this week
      const overlapping = events.filter((evt) => {
        const evtStart = evt.dateStart;
        const evtEnd = evt.dateEnd || evt.dateStart;
        return evtStart <= weekEndKey && evtEnd >= weekStartKey;
      });

      // Build span objects
      const spans: Omit<EventSpan, "row">[] = overlapping.map((evt) => {
        const evtStart = evt.dateStart;
        const evtEnd = evt.dateEnd || evt.dateStart;

        // Clamp to this week
        const clampedStart = evtStart < weekStartKey ? weekStartKey : evtStart;
        const clampedEnd = evtEnd > weekEndKey ? weekEndKey : evtEnd;

        // Find column indices
        const startCol = week.findIndex((d) => d.key === clampedStart);
        const endCol = week.findIndex((d) => d.key === clampedEnd);
        const span = endCol - startCol + 1;

        return {
          event: evt,
          startCol: startCol === -1 ? 0 : startCol,
          span: span < 1 ? 1 : span,
          isContinuation: evtStart < weekStartKey,
          isContinued: evtEnd > weekEndKey,
        };
      });

      // Sort: longer spans first, then earlier start
      spans.sort((a, b) => {
        if (a.startCol !== b.startCol) return a.startCol - b.startCol;
        return b.span - a.span;
      });

      // Assign rows via greedy packing
      const rows: boolean[][] = [];
      const placed: EventSpan[] = [];

      for (const s of spans) {
        let rowIndex = 0;
        let isPlaced = false;

        while (!isPlaced) {
          if (!rows[rowIndex]) rows[rowIndex] = new Array(7).fill(false);

          let collision = false;
          for (let c = s.startCol; c < s.startCol + s.span; c++) {
            if (rows[rowIndex][c]) {
              collision = true;
              break;
            }
          }

          if (!collision) {
            for (let c = s.startCol; c < s.startCol + s.span; c++) {
              rows[rowIndex][c] = true;
            }
            placed.push({ ...s, row: rowIndex });
            isPlaced = true;
          } else {
            rowIndex++;
          }
        }
      }

      return { spans: placed, maxRows: rows.length };
    });
  }, [weeks, events]);

  const monthLabel = new Date(currentYear, currentMonth, 1).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  function goToPrevMonth() {
    setSelectedEvent(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    setSelectedEvent(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  function goToToday() {
    setSelectedEvent(null);
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Month navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevMonth}
            className="flex size-9 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
            aria-label="Previous month"
          >
            <IconChevronLeft className="size-4" />
          </button>
          <h3 className="text-[20px] font-medium text-black-1 min-w-[200px] text-center">
            {monthLabel}
          </h3>
          <button
            onClick={goToNextMonth}
            className="flex size-9 items-center justify-center rounded-full border border-white-2 text-black-2 transition-colors hover:bg-white-1-5"
            aria-label="Next month"
          >
            <IconChevronRight className="size-4" />
          </button>
        </div>
        <button
          onClick={goToToday}
          className="text-[14px] font-medium text-accent-blue hover:underline"
        >
          Today
        </button>
      </div>

      {/* Calendar grid */}
      <div className="rounded-[20px] border border-white-2-5 bg-white-0 overflow-hidden">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 border-b border-white-2">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="py-3 text-center text-[13px] font-medium text-black-3 uppercase tracking-wide"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Week rows */}
        {weeks.map((week, weekIndex) => {
          const { spans, maxRows } = weekEventSpans[weekIndex];
          const visibleSpans = spans.filter((s) => s.row < MAX_VISIBLE_ROWS);
          const hiddenCount = spans.length - visibleSpans.length;
          const eventAreaHeight = Math.min(maxRows, MAX_VISIBLE_ROWS) * 26 + (hiddenCount > 0 ? 18 : 0);

          return (
            <div
              key={weekIndex}
              className="relative border-b border-white-2/50 last:border-b-0"
              style={{ minHeight: `${44 + eventAreaHeight}px` }}
            >
              {/* Day numbers row */}
              <div className="grid grid-cols-7">
                {week.map((day) => (
                  <div
                    key={day.key}
                    className={`px-2 pt-2 pb-1 border-r border-white-2/50 last:border-r-0 ${
                      !day.isCurrentMonth ? "bg-white-1-5" : ""
                    }`}
                  >
                    <span
                      className={`flex size-7 items-center justify-center rounded-full text-[14px] ${
                        day.isToday
                          ? "bg-black-1 text-white-0 font-medium"
                          : day.isCurrentMonth
                            ? "text-black-1"
                            : "text-black-3/40"
                      }`}
                    >
                      {day.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Event blocks layer */}
              <div className="relative w-full" style={{ height: `${eventAreaHeight}px` }}>
                {/* Background column separators (so blocks line up visually) */}
                <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
                  {week.map((day) => (
                    <div
                      key={day.key}
                      className={`border-r border-white-2/50 last:border-r-0 ${
                        !day.isCurrentMonth ? "bg-white-1-5" : ""
                      }`}
                    />
                  ))}
                </div>

                {/* Positioned event spans */}
                {visibleSpans.map((s, i) => (
                  <button
                    key={`${s.event.slug}-${weekIndex}-${i}`}
                    onClick={() => setSelectedEvent(s.event)}
                    className={`absolute h-[22px] rounded px-2 text-[11px] font-medium leading-[22px] truncate cursor-pointer transition-all hover:brightness-90 z-10 ${
                      TYPE_BLOCK_COLORS[s.event.type] ?? "bg-black-3 text-white-0"
                    } ${s.isContinuation ? "rounded-l-none" : ""} ${s.isContinued ? "rounded-r-none" : ""}`}
                    style={{
                      top: `${s.row * 26 + 2}px`,
                      left: `calc(${(s.startCol / 7) * 100}% + 2px)`,
                      width: `calc(${(s.span / 7) * 100}% - 4px)`,
                    }}
                  >
                    {!s.isContinuation && (
                      <>
                        <span className="opacity-75">{s.event.time.split(" - ")[0]}</span>{" "}
                        {s.event.title}
                      </>
                    )}
                    {s.isContinuation && s.event.title}
                  </button>
                ))}

                {/* Overflow indicator */}
                {hiddenCount > 0 && (
                  <div
                    className="absolute left-2 text-[11px] font-medium text-black-3"
                    style={{ top: `${MAX_VISIBLE_ROWS * 26 + 2}px` }}
                  >
                    +{hiddenCount} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Event detail popover/modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black-1/40 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          />
          {/* Modal card */}
          <div
            ref={popoverRef}
            className="relative w-full max-w-[480px] bg-white-0 rounded-[24px] shadow-[0px_24px_48px_rgba(0,0,0,0.15)] p-8 z-10"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 flex size-8 items-center justify-center rounded-full text-black-3 transition-colors hover:bg-white-2 hover:text-black-1"
              aria-label="Close"
            >
              <IconClose className="size-5" />
            </button>

            {/* Type pill */}
            <span
              className={`inline-block text-white-0 text-[12px] tracking-[0.24px] font-medium px-3 py-1 rounded-full uppercase mb-4 ${TYPE_PILL_COLORS[selectedEvent.type] ?? "bg-black-3"}`}
            >
              {selectedEvent.type}
            </span>

            {/* Title */}
            <h3 className="text-h3 text-black-1 mb-1 pr-8">
              {selectedEvent.title}
            </h3>

            {/* Date */}
            <p className="text-body-2 text-black-3 mb-5">
              {new Date(selectedEvent.dateStart + "T00:00:00").toLocaleDateString(
                "en-US",
                { weekday: "long", month: "long", day: "numeric" },
              )}
              {selectedEvent.dateEnd && (
                <>
                  {" — "}
                  {new Date(selectedEvent.dateEnd + "T00:00:00").toLocaleDateString(
                    "en-US",
                    { weekday: "long", month: "long", day: "numeric" },
                  )}
                </>
              )}
            </p>

            {/* Time + Location */}
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-accent-blue/10">
                  <IconClock className="size-4 text-accent-blue" />
                </div>
                <span className="text-body-1 text-black-1">
                  {selectedEvent.time.split(" - ")[0]}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-accent-blue/10">
                  <IconMapPin className="size-4 text-accent-blue" />
                </div>
                <span className="text-body-1 text-black-1">
                  {selectedEvent.location}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-body-2 text-black-2 mb-6 line-clamp-3">
              {selectedEvent.description}
            </p>

            {/* CTA */}
            <Link
              href={`/events/${selectedEvent.slug}`}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-black-1 text-white-1 py-4 text-button-1 transition-colors hover:bg-black-2"
            >
              VIEW FULL DETAILS
              <IconArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
