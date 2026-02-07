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
  IconSearch,
  IconGrid,
  IconListView,
  IconCalendar,
  IconChevronDown,
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
      <h2 className={`text-h1 ${t.textPrimary} mb-8`}>{content.heading}</h2>

      {/* Toolbar: view toggle + search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        {/* View toggle */}
        <div className="flex rounded-[14px] bg-white-2 p-1">
          <ViewButton
            active={viewMode === "card"}
            onClick={() => setViewMode("card")}
            label="Card"
            icon={<IconGrid className="size-4" />}
          />
          <ViewButton
            active={viewMode === "list"}
            onClick={() => setViewMode("list")}
            label="List"
            icon={<IconListView className="size-4" />}
          />
          <ViewButton
            active={viewMode === "calendar"}
            onClick={() => setViewMode("calendar")}
            label="Calendar"
            icon={<IconCalendar className="size-4" />}
          />
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-[320px]">
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-black-3" />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setDisplayCount(INITIAL_COUNT);
            }}
            className="w-full rounded-full border border-white-2 bg-white-0 py-2.5 pl-10 pr-4 text-[14px] text-black-1 placeholder:text-black-3 outline-none transition-colors focus:border-black-2"
          />
        </div>
      </div>

      {/* Filters row */}
      <div className="flex flex-wrap gap-3 mb-8">
        <FilterSelect
          value={filters.type ?? "all"}
          onChange={(v) =>
            updateFilter("type", v === "all" ? undefined : (v as EventType))
          }
          options={[
            { value: "all", label: "All Types" },
            { value: "meeting", label: "Meeting" },
            { value: "event", label: "Event" },
            { value: "program", label: "Program" },
          ]}
        />
        <FilterSelect
          value={filters.ministry ?? "all"}
          onChange={(v) =>
            updateFilter(
              "ministry",
              v === "all" ? undefined : (v as MinistryTag),
            )
          }
          options={[
            { value: "all", label: "All Ministries" },
            ...Object.entries(MINISTRY_LABELS).map(([value, label]) => ({
              value,
              label,
            })),
          ]}
        />
        <FilterSelect
          value={filters.campus ?? "all"}
          onChange={(v) =>
            updateFilter("campus", v === "all" ? undefined : (v as CampusTag))
          }
          options={[
            { value: "all", label: "All Campuses" },
            ...Object.entries(CAMPUS_LABELS)
              .filter(([k]) => k !== "all")
              .map(([value, label]) => ({ value, label })),
          ]}
        />
        <input
          type="date"
          value={filters.dateFrom ?? ""}
          onChange={(e) =>
            updateFilter("dateFrom", e.target.value || undefined)
          }
          className="rounded-full border border-white-2 bg-white-0 px-4 py-2 text-[14px] text-black-2 outline-none transition-colors focus:border-black-2"
          placeholder="From"
        />
        <input
          type="date"
          value={filters.dateTo ?? ""}
          onChange={(e) =>
            updateFilter("dateTo", e.target.value || undefined)
          }
          className="rounded-full border border-white-2 bg-white-0 px-4 py-2 text-[14px] text-black-2 outline-none transition-colors focus:border-black-2"
          placeholder="To"
        />
      </div>

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

/* ── Sub-components ── */

function ViewButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[14px] font-medium transition-colors ${
        active
          ? "bg-white-0 text-black-1 shadow-sm"
          : "text-black-3 hover:text-black-2"
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-full border border-white-2 bg-white-0 py-2.5 pl-4 pr-10 text-[14px] text-black-2 outline-none transition-colors focus:border-black-2 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-black-3" />
    </div>
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

function EventCard({ event }: { event: Event }) {
  const badge = getEventBadge(event);
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group bg-white-0 rounded-[20px] border border-white-2-5 shadow-[0px_12px_20px_0px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow hover:shadow-[0px_16px_32px_0px_rgba(0,0,0,0.10)]"
    >
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-black-1/80 text-white-0 text-[11px] tracking-wider font-medium px-3 py-1 rounded-full uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-5">
        {/* Type pill */}
        <span
          className={`inline-block text-white-0 text-[12px] tracking-[0.24px] font-medium px-3 py-1 rounded-full mb-3 uppercase ${
            event.type === "meeting"
              ? "bg-accent-green"
              : event.type === "event"
                ? "bg-accent-blue"
                : "bg-black-3"
          }`}
        >
          {event.type}
        </span>

        <h3 className="text-[20px] font-medium text-black-1 mb-3 leading-snug line-clamp-2">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <IconCalendar className="size-4 text-black-2 shrink-0" />
            <span className="text-[14px] text-black-2">
              {new Date(event.dateStart + "T00:00:00").toLocaleDateString(
                "en-US",
                { weekday: "short", month: "short", day: "numeric" },
              )}{" "}
              at {event.time.split(" - ")[0]}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <IconMapPin className="size-4 text-black-2 shrink-0" />
            <span className="text-[14px] text-black-2 line-clamp-1">
              {event.location}
            </span>
          </div>
        </div>

        {/* Tags */}
        {event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-white-2 text-black-2 text-[12px] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
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

