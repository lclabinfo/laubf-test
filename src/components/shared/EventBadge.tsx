/*
 * CMS SETTINGS:
 * - label: string — badge text (e.g. "UPCOMING", "FEATURED")
 */
import type { EventBadgeProps } from "@/lib/types/shared";
import { cn } from "@/lib/utils";

export default function EventBadge({ label, className }: EventBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white-1 bg-black-1 px-5 py-3 text-pill text-white-1",
        className
      )}
    >
      {label}
    </span>
  );
}
