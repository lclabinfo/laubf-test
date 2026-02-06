/*
 * CMS SETTINGS (per card):
 * - title: string — card heading
 * - description: string — card body text
 * - imageUrl: string — background image
 * - href: string — link destination
 */
import type { ImageCardProps } from "@/lib/types/shared";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ArrowButton from "./ArrowButton";

export default function ImageCard({ data, className }: ImageCardProps) {
  return (
    <a
      href={data.href ?? "#"}
      className={cn(
        "group relative flex flex-col items-start justify-end overflow-hidden rounded-xl",
        "aspect-[430/370] p-7 lg:p-8",
        className
      )}
    >
      <Image
        src={data.imageUrl}
        alt={data.imageAlt ?? data.title}
        fill
        className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent from-[44%] to-[rgba(0,0,0,0.71)] to-[69%]" />
      <div className="relative flex w-full items-end justify-between gap-4">
        <div className="flex flex-col gap-2 text-white-1">
          <h3 className="text-h3">{data.title}</h3>
          <p className="text-body-2 max-w-[302px]">{data.description}</p>
        </div>
        <ArrowButton
          size={48}
          className="shrink-0 border border-white-1 text-white-1"
        />
      </div>
    </a>
  );
}
