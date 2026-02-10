/*
 * FilterToolbar — Reusable filter/search toolbar component
 *
 * A composable toolbar with:
 * - View mode toggle (optional)
 * - Search input (optional)
 * - Dropdown filters with labels (configurable)
 * - Date range pickers (optional)
 * - Progressive disclosure mode (filters hidden behind a button)
 *
 * Designed to be used across different pages (events, messages, photos, etc.)
 * with different data types and filter fields while maintaining consistent UI.
 */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconSearch,
  IconChevronDown,
  IconCalendar,
  IconFilter,
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
}

export interface DateRangeConfig {
  fromLabel?: string;
  toLabel?: string;
  fromValue: string;
  toValue: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
}

export interface FilterToolbarProps {
  /** View mode toggle buttons (e.g. Card, List, Calendar) */
  viewModes?: {
    options: ViewModeOption[];
    active: string;
    onChange: (value: string) => void;
  };
  /** Search input configuration */
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  /** Dropdown filter configurations */
  filters?: FilterDropdownConfig[];
  /** Date range picker configuration */
  dateRange?: DateRangeConfig;
  /** Callback to reset all filters (shows "Clear all" button when active) */
  onReset?: () => void;
  /** Additional class name for the outer container */
  className?: string;
  /** Whether the toolbar sticks to the top on scroll */
  sticky?: boolean;
  /** Top offset for sticky positioning (e.g. "76px" for navbar) */
  stickyTop?: string;
  /** When true, filters are hidden behind a "Filter" button (progressive disclosure) */
  disclosure?: boolean;
}

/* ── Component ── */

export default function FilterToolbar({
  viewModes,
  search,
  filters,
  dateRange,
  onReset,
  className,
  sticky = true,
  stickyTop = "76px",
  disclosure = false,
}: FilterToolbarProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const hasFiltersRow =
    (filters && filters.length > 0) || dateRange;

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

  // Whether any filter (including search) is active
  const hasActiveFilters = activeFilterCount > 0 || (search && search.value.length > 0);

  const showFiltersRow = disclosure ? filtersOpen : true;

  return (
    <div
      className={cn(
        "relative z-30 pt-2 lg:pt-4 pb-2 lg:pb-0",
        sticky && "sticky",
        className,
      )}
      style={sticky ? { top: stickyTop } : undefined}
    >
      {/* Solid background — extends above to cover the gap behind navbar */}
      <div className="absolute inset-x-0 -top-2 lg:-top-4 -bottom-2 lg:bottom-0 bg-white-1 rounded-b-[20px]" />
      <div className="relative rounded-[20px] border border-white-2-5 bg-white-0 overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.06)]">
        {/* Row 1: View toggle + Search + Filter button (disclosure mode) */}
        {(viewModes || search || (disclosure && hasFiltersRow)) && (
          <div
            className={cn(
              "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4",
              !disclosure && hasFiltersRow && "border-b border-white-2/50",
              disclosure && filtersOpen && hasFiltersRow && "border-b border-white-2/50",
            )}
          >
            {/* Search — left side */}
            {search && (
              <div className="relative w-full sm:w-[400px]">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-black-3" />
                <input
                  type="text"
                  placeholder={search.placeholder ?? "Search..."}
                  value={search.value}
                  onChange={(e) => search.onChange(e.target.value)}
                  className="w-full rounded-full border border-white-2 bg-white-1-5 py-3 pl-10 pr-4 text-[14px] text-black-1 placeholder:text-black-3 outline-none transition-colors focus:border-black-2"
                />
              </div>
            )}

            {/* Right side — filter toggle + clear + view modes */}
            <div className="flex items-center gap-3">
              {/* Filter toggle button (disclosure mode only) */}
              {disclosure && hasFiltersRow && (
                <button
                  onClick={() => setFiltersOpen((prev) => !prev)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-[10px] border px-4 py-2 text-[14px] font-medium transition-colors",
                    filtersOpen
                      ? "border-black-2 bg-black-1 text-white-0"
                      : "border-white-2 bg-white-0 text-black-2 hover:border-black-2",
                  )}
                >
                  <IconFilter className="size-4" />
                  <span>Filter</span>
                  {activeFilterCount > 0 && (
                    <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-accent-blue text-[11px] font-semibold text-white-0">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
              )}

              {/* Clear all filters button */}
              {onReset && hasActiveFilters && (
                <button
                  onClick={() => {
                    onReset();
                    setFiltersOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-[10px] border border-white-2 px-4 py-2 text-[14px] font-medium text-black-3 transition-colors hover:border-black-2 hover:text-black-1"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>Clear all</span>
                </button>
              )}

              {/* View toggle */}
              {viewModes && (
                <div className="flex rounded-[14px] bg-white-1-5 p-1">
                  {viewModes.options.map((mode) => (
                    <button
                      key={mode.value}
                      onClick={() => viewModes.onChange(mode.value)}
                      className={cn(
                        "flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[14px] font-medium transition-colors",
                        viewModes.active === mode.value
                          ? "bg-white-0 text-black-1 shadow-sm"
                          : "text-black-3 hover:text-black-2",
                      )}
                    >
                      {mode.icon}
                      <span className="hidden sm:inline">{mode.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Row 2: Filters + Date range */}
        {hasFiltersRow && showFiltersRow && (
          <div
            className={cn(
              "flex flex-wrap gap-4 p-4",
              disclosure && "animate-in fade-in slide-in-from-top-2 duration-200",
            )}
          >
            {/* Dropdown filters */}
            {filters?.map((filter) => (
              <FilterDropdown key={filter.id} config={filter} />
            ))}

            {/* Date range */}
            {dateRange && (
              <>
                <DatePickerField
                  label={dateRange.fromLabel ?? "From"}
                  value={dateRange.fromValue}
                  onChange={dateRange.onFromChange}
                />
                <DatePickerField
                  label={dateRange.toLabel ?? "To"}
                  value={dateRange.toValue}
                  onChange={dateRange.onToChange}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function FilterDropdown({ config }: { config: FilterDropdownConfig }) {
  const selectId = `filter-${config.id}`;
  return (
    <div className="flex flex-col gap-1 min-w-[180px]">
      <label htmlFor={selectId} className="text-[11px] font-medium text-black-3 uppercase tracking-wider pl-1">
        {config.label}
      </label>
      <div className="relative">
        <select
          id={selectId}
          value={config.value}
          onChange={(e) => config.onChange(e.target.value)}
          className="w-full appearance-none rounded-[10px] border border-white-2 bg-white-0 py-2.5 pl-3.5 pr-10 text-[14px] text-black-2 outline-none transition-colors focus:border-black-2 cursor-pointer"
        >
          {config.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-black-3" />
      </div>
    </div>
  );
}

function DatePickerField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const inputId = `date-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="flex flex-col gap-1 min-w-[180px]">
      <label htmlFor={inputId} className="text-[11px] font-medium text-black-3 uppercase tracking-wider pl-1">
        {label}
      </label>
      <div className="relative">
        <IconCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-black-3 pointer-events-none" />
        <input
          id={inputId}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-[10px] border border-white-2 bg-white-0 py-2.5 pl-10 pr-4 text-[14px] text-black-2 outline-none transition-colors focus:border-black-2 cursor-pointer"
          placeholder="Pick a date"
        />
      </div>
    </div>
  );
}
