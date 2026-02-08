/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   heading: string -- section heading (e.g. "All Bible studies")
 * -- Data --
 *   studies: BibleStudy[] -- all bible studies from database
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: all_bible_studies_sections (id, heading, visible, color_scheme)
 * Studies fetched from bible_studies table with client-side filtering
 *
 * TABS: All Studies | Series | Books
 */
"use client";

import { useState, useMemo } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import FilterToolbar from "@/components/shared/FilterToolbar";
import BibleStudyCard from "@/components/shared/BibleStudyCard";
import { themeTokens } from "@/lib/theme";
import type { AllBibleStudiesSectionProps } from "@/lib/types/sections";
import type { BibleStudy, BibleBook, BibleStudyFilters } from "@/lib/types/bible-study";
import {
  filterBibleStudies,
  deriveSeries,
  countStudiesByBook,
  BIBLE_BOOKS,
} from "@/lib/types/bible-study";
import {
  IconGrid,
  IconListView,
  IconFolder,
  IconBookOpen,
  IconArrowUpRight,
  IconFileText,
  IconHelpCircle,
  IconVideo,
  IconChevronRight,
} from "@/components/layout/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TabView = "all" | "series" | "books";
type ViewMode = "card" | "list";

const INITIAL_COUNT = 9;
const LOAD_MORE_COUNT = 9;

export default function AllBibleStudiesSection(props: {
  settings: AllBibleStudiesSectionProps;
  studies: BibleStudy[];
}) {
  const { settings, studies } = props;
  const t = themeTokens[settings.colorScheme];

  /* ── State ── */
  const [tab, setTab] = useState<TabView>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<BibleStudyFilters>({});
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);

  /* ── Derived data ── */
  const seriesList = useMemo(() => deriveSeries(studies), [studies]);
  const bookCounts = useMemo(() => countStudiesByBook(studies), [studies]);

  const seriesOptions = useMemo(
    () => seriesList.map((s) => ({ value: s.name, label: s.name })),
    [seriesList],
  );

  const bookOptions = useMemo(() => {
    const booksWithStudies = BIBLE_BOOKS.filter((b) => bookCounts.has(b.name));
    return booksWithStudies.map((b) => ({
      value: b.name,
      label: `${b.name} (${bookCounts.get(b.name)})`,
    }));
  }, [bookCounts]);

  /* ── Filtering (All Studies tab) ── */
  const filteredStudies = useMemo(
    () => filterBibleStudies(studies, { ...filters, search: search || undefined }),
    [studies, filters, search],
  );

  const visibleStudies = filteredStudies.slice(0, displayCount);
  const hasMore = displayCount < filteredStudies.length;

  function updateFilter<K extends keyof BibleStudyFilters>(
    key: K,
    value: BibleStudyFilters[K],
  ) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(INITIAL_COUNT);
  }

  const tabs: { key: TabView; label: string }[] = [
    { key: "all", label: "ALL STUDIES" },
    { key: "series", label: "SERIES" },
    { key: "books", label: "BOOKS" },
  ];

  return (
    <SectionContainer settings={settings}>
      {/* Tab Navigation */}
      <div className="flex gap-1 mb-10">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setTab(t.key);
              setDisplayCount(INITIAL_COUNT);
            }}
            className={cn(
              "rounded-full px-5 py-2 text-[13px] font-medium tracking-[0.26px] transition-colors",
              tab === t.key
                ? "bg-black-1 text-white-0"
                : "text-black-3 hover:text-black-1",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── All Studies Tab ── */}
      {tab === "all" && (
        <>
          <h2 className={`text-h2 ${themeTokens[settings.colorScheme].textPrimary} mb-8`}>
            All Bible studies
          </h2>

          <FilterToolbar
            disclosure
            viewModes={{
              options: [
                { value: "card", label: "Card", icon: <IconGrid className="size-4" /> },
                { value: "list", label: "List", icon: <IconListView className="size-4" /> },
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
              placeholder: "Search studies, passages, series...",
            }}
            filters={[
              {
                id: "series",
                label: "Series",
                value: filters.series ?? "all",
                options: [
                  { value: "all", label: "All Series" },
                  ...seriesOptions,
                ],
                onChange: (v) =>
                  updateFilter("series", v === "all" ? undefined : v),
              },
              {
                id: "book",
                label: "Book",
                value: filters.book ?? "all",
                options: [
                  { value: "all", label: "All Books" },
                  ...bookOptions,
                ],
                onChange: (v) =>
                  updateFilter(
                    "book",
                    v === "all" ? undefined : (v as BibleBook),
                  ),
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
          />

          {/* Results count */}
          <p className={`text-body-3 ${themeTokens[settings.colorScheme].textMuted} mb-6`}>
            Showing {visibleStudies.length} of {filteredStudies.length} studies
          </p>

          {/* Studies display */}
          {filteredStudies.length === 0 ? (
            <div className="flex flex-col items-center py-20">
              <p className={`text-body-1 ${themeTokens[settings.colorScheme].textSecondary}`}>
                No studies found matching your criteria.
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
            <CardGrid studies={visibleStudies} />
          ) : (
            <StudyListView studies={visibleStudies} />
          )}

          {/* Load more */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setDisplayCount((c) => c + LOAD_MORE_COUNT)}
                className="inline-flex items-center justify-center rounded-full border border-black-1/30 px-8 py-4 text-button-1 text-black-1 transition-colors hover:bg-black-1 hover:text-white-1"
              >
                Load More Studies
              </button>
            </div>
          )}
        </>
      )}

      {/* ── Series Tab ── */}
      {tab === "series" && (
        <>
          <h2 className={`text-h2 ${themeTokens[settings.colorScheme].textPrimary} mb-8`}>
            Series
          </h2>
          <SeriesGrid series={seriesList} />
        </>
      )}

      {/* ── Books Tab ── */}
      {tab === "books" && (
        <>
          <h2 className={`text-h2 ${themeTokens[settings.colorScheme].textPrimary} mb-8`}>
            Books
          </h2>
          <BooksView bookCounts={bookCounts} />
        </>
      )}
    </SectionContainer>
  );
}

/* ── Card Grid (All Studies) ── */

function CardGrid({ studies }: { studies: BibleStudy[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {studies.map((study) => (
        <BibleStudyCard key={study.id} study={study} />
      ))}
    </div>
  );
}

/* ── List View (All Studies) ── */

function StudyListView({ studies }: { studies: BibleStudy[] }) {
  return (
    <div className="flex flex-col divide-y divide-white-2/50">
      {studies.map((study) => (
        <Link
          key={study.id}
          href={`/bible-study/${study.slug}`}
          className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-white-1-5 -mx-4 px-4 rounded-[12px]"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-[#e8e8e8] px-[8px] py-[4px] rounded-[6px] text-[11px] font-medium text-[#676767] tracking-[0.22px] shrink-0">
                {study.series}
              </span>
              <span className="text-[13px] text-[#676767]">
                {new Date(study.dateFor + "T00:00:00").toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <h3 className="text-[18px] font-medium text-black-1 mb-1 truncate">
              {study.title}
            </h3>
            <div className="flex items-center gap-2">
              <IconBookOpen className="size-[14px] text-[#676767] shrink-0" />
              <span className="text-[14px] text-[#676767]">{study.passage}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Resource indicators */}
            <div className="flex gap-1.5">
              {study.hasQuestions && (
                <div className="bg-[#f2f2f2] p-[6px] rounded-[6px]">
                  <IconFileText className="size-[14px] text-[#313131]" />
                </div>
              )}
              {study.hasAnswers && (
                <div className="bg-[#f2f2f2] p-[6px] rounded-[6px]">
                  <IconHelpCircle className="size-[14px] text-[#313131]" />
                </div>
              )}
              {study.hasTranscript && (
                <div className="bg-[#f2f2f2] p-[6px] rounded-[6px]">
                  <IconVideo className="size-[14px] text-[#313131]" />
                </div>
              )}
            </div>
            <IconChevronRight className="size-5 text-[#676767] transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ── Series Grid ── */

function SeriesGrid({
  series,
}: {
  series: { name: string; slug: string; studyCount: number; lastUpdated: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {series.map((s) => (
        <SeriesCard key={s.slug} series={s} />
      ))}
    </div>
  );
}

function SeriesCard({
  series,
}: {
  series: { name: string; slug: string; studyCount: number; lastUpdated: string };
}) {
  return (
    <div className="group relative rounded-[20px] bg-white-0 p-7 min-h-[180px] flex flex-col cursor-pointer transition-all hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]">
      {/* Folder icon */}
      <div className="mb-4">
        <div className="bg-[#f2f2f2] inline-flex items-center p-[8px] rounded-[8px]">
          <IconFolder className="size-[16px] text-[#313131]" />
        </div>
      </div>

      {/* Series name */}
      <h3 className="text-[20px] font-medium text-black-1 tracking-[-0.4px] mb-2">
        {series.name}
      </h3>

      {/* Meta */}
      <p className="text-[13px] text-[#676767] mb-4">
        {series.studyCount} {series.studyCount === 1 ? "Study" : "Studies"} · Last
        updated {series.lastUpdated}
      </p>

      {/* View collection link */}
      <p className="mt-auto text-[12px] font-semibold text-accent-blue tracking-[0.24px] uppercase">
        VIEW COLLECTION
      </p>

      {/* Border overlay */}
      <div
        aria-hidden="true"
        className="absolute border border-[#dcdcdc] inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] transition-shadow group-hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]"
      />
    </div>
  );
}

/* ── Books View ── */

function BooksView({ bookCounts }: { bookCounts: Map<string, number> }) {
  const otBooks = BIBLE_BOOKS.filter((b) => b.testament === "old");
  const ntBooks = BIBLE_BOOKS.filter((b) => b.testament === "new");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Old Testament */}
      <div>
        <h3 className="text-[22px] font-semibold text-black-1 tracking-[-0.44px] mb-1">
          Old Testament
        </h3>
        <p className="text-[13px] text-[#676767] mb-6">
          39 Books · Genesis through Malachi
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
          {otBooks.map((book) => (
            <BookRow
              key={book.name}
              name={book.name}
              chapters={book.chapters}
              studyCount={bookCounts.get(book.name) ?? 0}
            />
          ))}
        </div>
      </div>

      {/* New Testament */}
      <div>
        <h3 className="text-[22px] font-semibold text-black-1 tracking-[-0.44px] mb-1">
          New Testament
        </h3>
        <p className="text-[13px] text-[#676767] mb-6">
          27 Books · Matthew through Revelation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0">
          {ntBooks.map((book) => (
            <BookRow
              key={book.name}
              name={book.name}
              chapters={book.chapters}
              studyCount={bookCounts.get(book.name) ?? 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BookRow({
  name,
  chapters,
  studyCount,
}: {
  name: string;
  chapters: number;
  studyCount: number;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 py-3 border-b border-white-2/30",
        studyCount > 0 && "cursor-pointer hover:bg-white-1-5 -mx-2 px-2 rounded-[8px]",
      )}
    >
      {/* Book icon */}
      <div className="bg-[#f2f2f2] flex items-center p-[6px] rounded-[6px] shrink-0">
        <IconBookOpen className="size-[14px] text-[#676767]" />
      </div>

      {/* Name and chapters */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-medium text-black-1 truncate">{name}</p>
        <p className="text-[12px] text-[#9e9e9e]">
          {chapters} {chapters === 1 ? "chapter" : "chapters"}
        </p>
      </div>

      {/* Study count badge */}
      {studyCount > 0 && (
        <span className="flex items-center justify-center min-w-[24px] h-[24px] rounded-full bg-accent-blue text-white-0 text-[12px] font-semibold px-1.5">
          {studyCount}
        </span>
      )}
    </div>
  );
}
