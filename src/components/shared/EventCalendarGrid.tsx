/*
 * EventCalendarGrid — Interactive month calendar with event dots and popover
 *
 * Features:
 * - Full month grid (Sun–Sat) with prev/next navigation
 * - Colored dots on dates that have events (green=meeting, blue=event, gray=program)
 * - Click a date to see events; click an event to open a popover with quick info
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

const TYPE_DOT_COLORS: Record<string, string> = {
  meeting: "bg-accent-green",
  event: "bg-accent-blue",
  program: "bg-black-3",
};

const TYPE_PILL_COLORS: Record<string, string> = {
  meeting: "bg-accent-green",
  event: "bg-accent-blue",
  program: "bg-black-3",
};

interface EventCalendarGridProps {
  events: Event[];
}

export default function EventCalendarGrid({ events }: EventCalendarGridProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
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

  // Group events by date key (YYYY-MM-DD)
  const eventsByDate = useMemo(() => {
    const map = new Map<string, Event[]>();
    for (const event of events) {
      const key = event.dateStart;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);

      // Multi-day events: add dots for each day in range
      if (event.dateEnd) {
        const start = new Date(event.dateStart + "T00:00:00");
        const end = new Date(event.dateEnd + "T00:00:00");
        const cursor = new Date(start);
        cursor.setDate(cursor.getDate() + 1);
        while (cursor <= end) {
          const dayKey = cursor.toISOString().slice(0, 10);
          if (!map.has(dayKey)) map.set(dayKey, []);
          if (!map.get(dayKey)!.find((e) => e.slug === event.slug)) {
            map.get(dayKey)!.push(event);
          }
          cursor.setDate(cursor.getDate() + 1);
        }
      }
    }
    return map;
  }, [events]);

  // Calendar grid computation
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startWeekday = firstDay.getDay(); // 0=Sun
    const daysInMonth = lastDay.getDate();

    const days: { date: number; key: string; isCurrentMonth: boolean; isToday: boolean }[] = [];

    // Previous month padding
    const prevMonthLast = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = startWeekday - 1; i >= 0; i--) {
      const d = prevMonthLast - i;
      const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const key = `${prevYear}-${String(prevMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      days.push({ date: d, key, isCurrentMonth: false, isToday: false });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const key = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const isToday =
        d === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      days.push({ date: d, key, isCurrentMonth: true, isToday });
    }

    // Next month padding (fill to complete weeks)
    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let d = 1; d <= remaining; d++) {
        const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        const key = `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        days.push({ date: d, key, isCurrentMonth: false, isToday: false });
      }
    }

    return days;
  }, [currentMonth, currentYear, today]);

  const monthLabel = new Date(currentYear, currentMonth, 1).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" },
  );

  function goToPrevMonth() {
    setSelectedDate(null);
    setSelectedEvent(null);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    setSelectedDate(null);
    setSelectedEvent(null);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }

  function goToToday() {
    setSelectedDate(null);
    setSelectedEvent(null);
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  }

  // Events for the selected date
  const selectedDateEvents = selectedDate ? (eventsByDate.get(selectedDate) ?? []) : [];

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

        {/* Day cells */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, i) => {
            const dayEvents = eventsByDate.get(day.key) ?? [];
            const hasEvents = dayEvents.length > 0;
            const isSelected = selectedDate === day.key;

            return (
              <button
                key={`${day.key}-${i}`}
                onClick={() => {
                  if (hasEvents) {
                    setSelectedDate(isSelected ? null : day.key);
                    setSelectedEvent(null);
                  }
                }}
                className={`relative flex flex-col items-center gap-1 py-2 min-h-[72px] lg:min-h-[80px] border-b border-r border-white-2/50 transition-colors ${
                  !day.isCurrentMonth
                    ? "bg-white-1-5 text-black-3/40"
                    : isSelected
                      ? "bg-accent-blue/5"
                      : hasEvents
                        ? "hover:bg-white-1-5 cursor-pointer"
                        : ""
                }`}
              >
                {/* Date number */}
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

                {/* Event dots */}
                {hasEvents && day.isCurrentMonth && (
                  <div className="flex gap-0.5 flex-wrap justify-center max-w-[40px]">
                    {dayEvents.slice(0, 4).map((evt) => (
                      <span
                        key={evt.slug}
                        className={`size-[6px] rounded-full ${TYPE_DOT_COLORS[evt.type] ?? "bg-black-3"}`}
                      />
                    ))}
                    {dayEvents.length > 4 && (
                      <span className="text-[9px] text-black-3 leading-none">
                        +{dayEvents.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected date events panel */}
      {selectedDate && selectedDateEvents.length > 0 && (
        <div className="rounded-[16px] border border-white-2-5 bg-white-0 p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-[16px] font-medium text-black-1">
              {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h4>
            <span className="text-[13px] text-black-3">
              {selectedDateEvents.length} event{selectedDateEvents.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {selectedDateEvents.map((evt) => (
              <button
                key={evt.slug}
                onClick={() => setSelectedEvent(evt)}
                className="flex items-center gap-3 rounded-[12px] p-3 text-left transition-colors hover:bg-white-1-5"
              >
                <span
                  className={`size-2.5 rounded-full shrink-0 ${TYPE_DOT_COLORS[evt.type] ?? "bg-black-3"}`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-black-1 truncate">
                    {evt.title}
                  </p>
                  <p className="text-[13px] text-black-3">
                    {evt.time} &middot; {evt.location}
                  </p>
                </div>
                <IconChevronRight className="size-4 text-black-3 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

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
