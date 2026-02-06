/*
 * CMS SETTINGS:
 * - type: 'meeting' | 'event' | 'program' — determines color
 */
import type { TypePillProps } from "@/lib/types/shared";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  meeting: "bg-accent-green",
  event: "bg-accent-blue",
  program: "bg-black-3",
};

export default function TypePill({ type, className }: TypePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1.5 text-pill text-white-1",
        typeColors[type] ?? "bg-black-3",
        className
      )}
    >
      {type.toUpperCase()}
    </span>
  );
}
