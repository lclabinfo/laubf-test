/*
 * FilterToolbar — Redesigned flat, minimal filter/search toolbar
 *
 * Row 1 (main bar): Tabs (left) | Filter icon button | Sort dropdown | Search | Divider | View toggle (right)
 * Row 2 (filter panel): Collapsible row of styled dropdown buttons + date range + clear all
 */
"use client";

import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  IconSearch,
  IconChevronDown,
  IconCalendar,
  IconFilter,
  IconArrowDown,
  IconArrowUp,
  IconX,
} from "@/components/layout/icons";

/* ── Types ── */

export interface ViewModeOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface FilterDropdownConfig {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  /** Whether to show a search input inside the dropdown. Defaults to true. */
  searchable?: boolean;
}

export interface DateRangeConfig {
  fromLabel?: string;
  toLabel?: string;
  fromValue: string;
  toValue: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface TabConfig {
  key: string;
  label: string;
}

export interface FilterToolbarProps {
  /** Flat underline-style tab navigation rendered on the left side of the bar */
  tabs?: {
    options: TabConfig[];
    active: string;
    onChange: (key: string) => void;
  };
  viewModes?: {
    options: ViewModeOption[];
    active: string;
    onChange: (value: string) => void;
  };
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  filters?: FilterDropdownConfig[];
  dateRange?: DateRangeConfig;
  sort?: {
    options: SortOption[];
    active: string;
    direction: "asc" | "desc";
    onChange: (value: string, dir: "asc" | "desc") => void;
  };
  onReset?: () => void;
  className?: string;
  sticky?: boolean;
  stickyTop?: string;
  /** @deprecated No longer used in new design — filter panel is always toggle-based */
  disclosure?: boolean;
}

/* ── Component ── */

export default function FilterToolbar({
  tabs,
  viewModes,
  search,
  filters,
  dateRange,
  sort,
  onReset,
  className,
  sticky = true,
  stickyTop = "64px",
}: FilterToolbarProps) {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  // Track when the open animation finishes so we can remove overflow:hidden
  // and allow dropdowns inside the filter panel to overflow freely
  const [filterAnimDone, setFilterAnimDone] = useState(false);

  useEffect(() => {
    if (filtersOpen) {
      const timer = setTimeout(() => setFilterAnimDone(true), 310);
      return () => clearTimeout(timer);
    } else {
      setFilterAnimDone(false);
    }
  }, [filtersOpen]);

  const hasFiltersRow = (filters && filters.length > 0) || dateRange;

  // Count active filters for the badge
  const activeFilterCount = (() => {
    let count = 0;
    if (filters) {
      for (const f of filters) {
        if (f.value && f.value !== "all") count++;
      }
    }
    if (dateRange) {
      if (dateRange.fromValue) count++;
      if (dateRange.toValue) count++;
    }
    return count;
  })();

  const hasActiveFilters =
    activeFilterCount > 0 || (search && search.value.length > 0);

  return (
    <>
    {/* Invisible anchor for scroll position calculation — sits in normal document flow */}
    <div ref={scrollAnchorRef} className="h-0 w-0" />
    <div
      ref={toolbarRef}
      className={cn(
        "relative z-30",
        sticky && "sticky",
        className,
      )}
      style={sticky ? { top: stickyTop } : undefined}
    >
      {/* Row 1: Main bar — own positioning context so bg stays within this row */}
      <div className="relative">
        {/* Full-width background for top bar only */}
        <div
          className="absolute top-0 bottom-0 bg-white-1 border-b border-white-2-5 shadow-[0px_4px_12px_rgba(0,0,0,0.04)]"
          style={{ left: "50%", marginLeft: "-50vw", width: "100vw" }}
        />
        <div className="relative flex justify-between gap-4 h-[59px]">
          {/* Left: Tab navigation — buttons stretch full height */}
          {tabs ? (
            <TabBar tabs={tabs} toolbarRef={toolbarRef} scrollAnchorRef={scrollAnchorRef} />
          ) : (
            <div />
          )}

          {/* Right: Filter controls — vertically centered with own padding */}
          <div className="flex items-center gap-4 py-2.5">
            <div className="flex items-center gap-2">
              {/* Filter icon button */}
              {hasFiltersRow && (
                <FilterIconButton
                active={filtersOpen}
                count={activeFilterCount}
                onClick={() => setFiltersOpen((prev) => !prev)}
              />
              )}

              {/* Sort dropdown */}
              {sort && <SortDropdown sort={sort} />}

              {/* Search input */}
              {search && (
                <div
                  className={cn(
                    "relative transition-all duration-300 ease-out",
                    searchFocused || search.value ? "w-[320px]" : "w-[240px]",
                  )}
                >
                  <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-black-3" />
                  <input
                    type="text"
                    placeholder={search.placeholder ?? "Search..."}
                    value={search.value}
                    onChange={(e) => search.onChange(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className={cn(
                      "w-full rounded-[14px] bg-white-0 py-2.5 pl-[44px] text-[14px] text-black-1 placeholder:text-black-3 outline-none ring-0 focus:ring-0 focus:outline-none transition-colors border border-white-2-5 focus:border-white-3",
                      search.value ? "pr-9" : "pr-3",
                      searchFocused
                        ? "border-black-3/40"
                        : "border-transparent",
                    )}
                  />
                  {search.value && (
                    <button
                      onClick={() => search.onChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-black-3 hover:text-black-1 transition-colors"
                    >
                      <X className="size-4" />
                    </button>
                  )}
                </div>
              )}
            </div>
            
            {/* Vertical divider */}
            {viewModes && (
              <div className="w-[2px] h-[29px] bg-white-2-5 rounded-full shrink-0" />
            )}

            {/* View mode toggle */}
            {viewModes && (
              <div className="flex rounded-[14px] bg-white-2 p-1">
                {viewModes.options.map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => viewModes.onChange(mode.value)}
                    title={mode.label}
                    className={cn(
                      "flex items-center justify-center rounded-[10px] px-2.5 py-2 transition-colors",
                      viewModes.active === mode.value
                        ? "bg-white-1 text-black-1 shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.1)]"
                        : "text-black-3 hover:text-black-2",
                    )}
                  >
                    {mode.icon}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Row 2: Filter panel (collapsible) — grid transition for smooth height animation */}
      {hasFiltersRow && (
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: filtersOpen ? "1fr" : "0fr" }}
        >
          <div className={filterAnimDone ? "overflow-visible" : "overflow-hidden"}>
            <div className="relative">
              {/* Full-width background for filter panel */}
              <div
                className={cn(
                  "absolute inset-y-0 bg-white-1 transition-opacity duration-300",
                  filtersOpen ? "opacity-100 border-b border-white-2-5" : "opacity-0",
                )}
                style={{ left: "50%", marginLeft: "-50vw", width: "100vw" }}
              />
              <div className="relative flex flex-wrap items-center gap-3 py-4 px-2">
                {/* Dropdown filter buttons */}
                {filters?.map((filter) => (
                  <FilterDropdownButton key={filter.id} config={filter} />
                ))}

                {/* Date range buttons */}
                {dateRange && (
                  <>
                    <DateFilterButton
                      label={dateRange.fromLabel ?? "Date from"}
                      value={dateRange.fromValue}
                      onChange={dateRange.onFromChange}
                    />
                    <DateFilterButton
                      label={dateRange.toLabel ?? "Date to"}
                      value={dateRange.toValue}
                      onChange={dateRange.onToChange}
                    />
                  </>
                )}

                {/* Clear all */}
                {onReset && hasActiveFilters && (
                  <button
                    onClick={() => onReset()}
                    className="ml-auto flex items-center gap-2 rounded-[12px] border border-white-3 h-[40px] px-3.5 text-[14px] font-medium text-black-3 transition-colors hover:text-black-1 hover:border-black-3/40"
                  >
                    <IconX className="size-4" />
                    <span>Clear all ({activeFilterCount})</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

/* ── Sub-components ── */

/** Tab bar with animated sliding underline */
function TabBar({
  tabs,
  toolbarRef,
  scrollAnchorRef,
}: {
  tabs: NonNullable<FilterToolbarProps["tabs"]>;
  toolbarRef: React.RefObject<HTMLDivElement | null>;
  scrollAnchorRef: React.RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const activeEl = tabRefs.current.get(tabs.active);
    const container = containerRef.current;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: tabRect.left - containerRect.left + (tabRect.width - 56) / 2,
        width: 56,
      });
    }
  }, [tabs.active]);

  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div ref={containerRef} className="relative flex h-full">
      {tabs.options.map((tab) => (
        <button
          key={tab.key}
          ref={(el) => {
            if (el) tabRefs.current.set(tab.key, el);
          }}
          onClick={() => {
            tabs.onChange(tab.key);
            if (scrollAnchorRef.current && toolbarRef.current) {
              const stickyTopPx = parseFloat(toolbarRef.current.style.top || "0");
              // Anchor sits in normal document flow — its position is always reliable
              const anchorDocTop = scrollAnchorRef.current.getBoundingClientRect().top + window.scrollY;
              const stickyThreshold = anchorDocTop - stickyTopPx;
              // Only scroll if we're past the sticky threshold
              if (window.scrollY > stickyThreshold) {
                window.scrollTo({ top: stickyThreshold });
              }
            }
          }}
          className={cn(
            "relative flex items-end px-3 pb-4 text-[16px] font-medium transition-colors",
            tabs.active === tab.key
              ? "text-black-1"
              : "text-black-3 hover:text-black-2",
          )}
        >
          {tab.label}
        </button>
      ))}
      {/* Animated underline */}
      <span
        className="absolute bottom-0 h-[3px] bg-black-1 rounded-full transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />
    </div>
  );
}

/** Filter icon button — funnel icon with optional badge count */
function FilterIconButton({
  active,
  count,
  onClick,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center gap-2 rounded-[12px] border bg-white-0 h-[40px] px-3.5 transition-colors",
        count > 0 || active
          ? "border-white-3"
          : "border-white-2-5 hover:border-white-3",
      )}
    >
      <IconFilter className="size-4 text-black-2" />
      {count > 0 && (
        <span className="flex items-center justify-center min-w-[20px] h-[20px] rounded-full bg-black-1 text-[12px] font-medium text-white-1 px-1">
          {count}
        </span>
      )}
    </button>
  );
}

/** Sort dropdown — arrow icon + field label + chevron, custom dropdown */
function SortDropdown({
  sort,
}: {
  sort: NonNullable<FilterToolbarProps["sort"]>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const activeLabel =
    sort.options.find((o) => o.value === sort.active)?.label ?? "Sort";

  function handleOptionClick(value: string) {
    if (value === sort.active) {
      sort.onChange(value, sort.direction === "asc" ? "desc" : "asc");
    } else {
      sort.onChange(value, "desc");
    }
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-2 rounded-[12px] border h-[40px] px-3.5 text-[14px] font-medium transition-colors",
          open
            ? "border-white-3 bg-white-0 text-black-1"
            : "border-white-2-5 bg-white-0 text-black-2 hover:border-white-3",
        )}
      >
        {sort.direction === "asc" ? (
          <IconArrowUp className="size-4" />
        ) : (
          <IconArrowDown className="size-4" />
        )}
        <span>{activeLabel}</span>
        <IconChevronDown
          className={cn(
            "size-3.5 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-50 min-w-[180px] rounded-[12px] border border-white-2 bg-white-0 py-1 shadow-[0px_8px_24px_rgba(0,0,0,0.1)]">
          {sort.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={cn(
                "flex items-center justify-between w-full px-4 py-2.5 text-[14px] transition-colors hover:bg-white-1-5",
                sort.active === option.value
                  ? "text-black-1 font-medium"
                  : "text-black-3",
              )}
            >
              <span>{option.label}</span>
              {sort.active === option.value && (
                <span className="text-[12px] text-black-3">
                  {sort.direction === "asc" ? "A-Z" : "Z-A"}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Styled filter dropdown button with optional search — replaces native <select> */
function FilterDropdownButton({ config }: { config: FilterDropdownConfig }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchable = config.searchable !== false;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open && searchable) {
      // Small delay to ensure the dropdown is rendered
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [open, searchable]);

  const activeLabel =
    config.options.find((o) => o.value === config.value)?.label ?? config.label;
  const isActive = config.value && config.value !== "all";

  const filteredOptions = searchable && query
    ? config.options.filter((o) =>
        o.label.toLowerCase().includes(query.toLowerCase()),
      )
    : config.options;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-2 rounded-[12px] border h-[40px] px-3.5 text-[14px] font-medium transition-colors bg-white-0",
          isActive
            ? "border-white-3 text-black-1"
            : open
              ? "border-white-3 text-black-1"
              : "border-white-2-5 text-black-3 hover:border-white-3",
        )}
      >
        <span>{activeLabel}</span>
        <IconChevronDown
          className={cn(
            "size-3.5 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 z-50 min-w-[220px] max-h-[320px] rounded-[12px] border border-white-2 bg-white-0 shadow-[0px_8px_24px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Search input inside dropdown */}
          {searchable && (
            <div className="p-2 border-b border-white-2/50">
              <div className="relative">
                <IconSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-black-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-[8px] border border-white-2 bg-white-1-5 py-1.5 pl-8 pr-3 text-[13px] text-black-1 placeholder:text-black-3 outline-none ring-0 focus:ring-0 focus:outline-none transition-colors focus:border-black-3/40"
                />
              </div>
            </div>
          )}
          <div className="max-h-[260px] overflow-y-auto py-1">
            {filteredOptions.length === 0 ? (
              <p className="px-4 py-2.5 text-[13px] text-black-3">No results</p>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    config.onChange(option.value);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={cn(
                    "flex items-center w-full px-4 py-2.5 text-[14px] transition-colors hover:bg-white-1-5 text-left",
                    config.value === option.value
                      ? "text-black-1 font-medium"
                      : "text-black-3",
                  )}
                >
                  {option.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/** Date filter button — calendar icon + label, opens native date input */
function DateFilterButton({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = !!value;

  const displayLabel = value
    ? new Date(value + "T00:00:00").toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : label;

  return (
    <div className="relative">
      <button
        onClick={() => inputRef.current?.showPicker()}
        className={cn(
          "flex items-center gap-2 rounded-[12px] border h-[40px] px-3.5 text-[14px] font-medium transition-colors bg-white-0",
          isActive
            ? "border-white-3 text-black-1"
            : "border-white-2-5 text-black-3 hover:border-white-3",
        )}
      >
        <IconCalendar className="size-4" />
        <span>{displayLabel}</span>
        <IconChevronDown className="size-3.5" />
      </button>
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 opacity-0 pointer-events-none"
        tabIndex={-1}
      />
    </div>
  );
}
