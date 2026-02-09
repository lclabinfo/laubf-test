/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   heading: string -- section heading (e.g. "All Events")
 * -- Data --
 *   events: Event[] -- all events from database
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: all_events_sections (id, heading, visible, color_scheme)
 * Events fetched from events table with client-side filtering
 */
"use client";

import { useState, useMemo } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import EventListItem from "@/components/shared/EventListItem";
import FilterToolbar from "@/components/shared/FilterToolbar";
import { themeTokens } from "@/lib/theme";
import type { AllEventsSectionProps } from "@/lib/types/sections";
import type { Event } from "@/lib/types/events";
import {
  filterEvents,
  getEventBadge,
  toEventListItemData,
  MINISTRY_LABELS,
  CAMPUS_LABELS,
  type EventFilters,
  type MinistryTag,
  type CampusTag,
} from "@/lib/types/events";
import EventCalendarGrid from "@/components/shared/EventCalendarGrid";
import type { EventType } from "@/lib/types/shared";
import {
  IconGrid,
  IconListView,
  IconCalendar,
  IconMapPin,
  IconClock,
} from "@/components/layout/icons";
import Image from "next/image";
import Link from "next/link";

type ViewMode = "card" | "list" | "calendar";

const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 9;

export default function AllEventsSection(props: {
  settings: AllEventsSectionProps;
  events: Event[];
}) {
  const { settings, events } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];

  /* ── State ── */
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<EventFilters>({});
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);

  /* ── Filtering ── */
  const filteredEvents = useMemo(() => {
    return filterEvents(events, { ...filters, search: search || undefined });
  }, [events, filters, search]);

  const visibleEvents = filteredEvents.slice(0, displayCount);
  const hasMore = displayCount < filteredEvents.length;

  function updateFilter<K extends keyof EventFilters>(
    key: K,
    value: EventFilters[K],
  ) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_COUNT);
  }

  return (
    <SectionContainer settings={settings}>
      {/* Section heading */}
      <h2 className={`text-h2 ${t.textPrimary} mb-8`}>{content.heading}</h2>

      {/* Reusable filter toolbar */}
      <FilterToolbar
        disclosure
        viewModes={{
          options: [
            { value: "card", label: "Card", icon: <IconGrid className="size-4" /> },
            { value: "list", label: "List", icon: <IconListView className="size-4" /> },
            { value: "calendar", label: "Calendar", icon: <IconCalendar className="size-4" /> },
          ],
          active: viewMode,
          onChange: (v) => setViewMode(v as ViewMode),
        }}
        search={{
          value: search,
          onChange: (v) => {
            setSearch(v);
            setDisplayCount(INITIAL_COUNT);
          },
          placeholder: "Search events, meetings, programs...",
        }}
        filters={[
          {
            id: "type",
            label: "Type",
            value: filters.type ?? "all",
            options: [
              { value: "all", label: "All Types" },
              { value: "meeting", label: "Meeting" },
              { value: "event", label: "Event" },
              { value: "program", label: "Program" },
            ],
            onChange: (v) =>
              updateFilter("type", v === "all" ? undefined : (v as EventType)),
          },
          {
            id: "ministry",
            label: "Ministry",
            value: filters.ministry ?? "all",
            options: [
              { value: "all", label: "All Ministries" },
              ...Object.entries(MINISTRY_LABELS).map(([value, label]) => ({
                value,
                label,
              })),
            ],
            onChange: (v) =>
              updateFilter(
                "ministry",
                v === "all" ? undefined : (v as MinistryTag),
              ),
          },
          {
            id: "campus",
            label: "Campus",
            value: filters.campus ?? "all",
            options: [
              { value: "all", label: "All Campuses" },
              ...Object.entries(CAMPUS_LABELS)
                .filter(([k]) => k !== "all")
                .map(([value, label]) => ({ value, label })),
            ],
            onChange: (v) =>
              updateFilter("campus", v === "all" ? undefined : (v as CampusTag)),
          },
        ]}
        dateRange={{
          fromLabel: "From",
          toLabel: "To",
          fromValue: filters.dateFrom ?? "",
          toValue: filters.dateTo ?? "",
          onFromChange: (v) => updateFilter("dateFrom", v || undefined),
          onToChange: (v) => updateFilter("dateTo", v || undefined),
        }}
        onReset={() => {
          setSearch("");
          setFilters({});
          setDisplayCount(INITIAL_COUNT);
        }}
      />

      {/* Results count */}
      <p className={`text-body-3 ${t.textMuted} mb-6`}>
        Showing {visibleEvents.length} of {filteredEvents.length} events
      </p>

      {/* Events display */}
      {filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center py-20">
          <p className={`text-body-1 ${t.textSecondary}`}>
            No events found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setFilters({});
              setDisplayCount(INITIAL_COUNT);
            }}
            className="mt-4 text-accent-blue text-[14px] font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : viewMode === "card" ? (
        <CardView events={visibleEvents} />
      ) : viewMode === "list" ? (
        <ListView events={visibleEvents} />
      ) : (
        <EventCalendarGrid events={filteredEvents} />
      )}

      {/* Load more (hidden in calendar view since calendar shows all events for the month) */}
      {hasMore && viewMode !== "calendar" && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setDisplayCount((c) => c + LOAD_MORE_COUNT)}
            className="inline-flex items-center justify-center rounded-full border border-black-1/30 px-8 py-4 text-button-1 text-black-1 transition-colors hover:bg-black-1 hover:text-white-1"
          >
            Load More Events
          </button>
        </div>
      )}
    </SectionContainer>
  );
}

/* ── Card View ── */

function CardView({ events }: { events: Event[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}

const MAX_VISIBLE_TAGS = 3;

function EventCard({ event }: { event: Event }) {
  const badge = getEventBadge(event);
  const visibleTags = event.tags.slice(0, MAX_VISIBLE_TAGS);
  const overflowCount = event.tags.length - MAX_VISIBLE_TAGS;

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col bg-white-0 rounded-[20px] border border-white-2-5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] overflow-clip transition-shadow hover:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.10)] h-full"
    >
      {/* Image */}
      <div className="relative h-[160px] w-full overflow-clip shrink-0">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-4 right-4 bg-black-1 border-[0.5px] border-white-2 text-white-1 text-[12px] tracking-[0.24px] font-medium leading-none px-5 py-3 rounded-full uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 pt-[18px] pb-5 px-7 flex-1">
        {/* Type + Title */}
        <div className="flex flex-col gap-2 items-start">
          <span
            className={`text-white-1 text-[12px] tracking-[0.24px] font-medium leading-none px-2 py-1.5 rounded-lg uppercase ${
              event.type === "meeting"
                ? "bg-accent-green"
                : event.type === "event"
                  ? "bg-accent-blue"
                  : "bg-black-3"
            }`}
          >
            {event.type}
          </span>

          <h3 className="text-[20px] font-medium text-black-1 leading-none tracking-[-0.4px] truncate w-full">
            {event.title}
          </h3>
        </div>

        {/* Time & Location */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <IconClock className="size-5 text-black-2 shrink-0" />
            <span className="text-[14px] text-black-2 tracking-[-0.28px] leading-[1.4]">
              {new Date(event.dateStart + "T00:00:00").toLocaleDateString(
                "en-US",
                { weekday: "short", month: "short", day: "numeric" },
              )}{" "}
              @ {event.time.split(" - ")[0]}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconMapPin className="size-5 text-black-2 shrink-0" />
            <span className="text-[14px] text-black-2 tracking-[-0.28px] leading-[1.4] line-clamp-1">
              {event.location}
            </span>
          </div>
        </div>

        {/* Tags — pinned to bottom edge */}
        {event.tags.length > 0 && (
          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-2 items-center overflow-clip flex-1 min-w-0">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 bg-white-2 text-black-3 text-[12px] tracking-[0.24px] font-medium leading-none text-center px-2 py-1.5 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            {overflowCount > 0 && (
              <span className="shrink-0 bg-white-2 text-black-3 text-[12px] tracking-[0.24px] font-medium leading-none text-center px-2 py-1.5 rounded-lg ml-2">
                +{overflowCount}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}

/* ── List View ── */

function ListView({ events }: { events: Event[] }) {
  return (
    <div className="flex flex-col">
      {events.map((event) => {
        const data = toEventListItemData(event);
        return <EventListItem key={event.slug} data={data} />;
      })}
    </div>
  );
}
