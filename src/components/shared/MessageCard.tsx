/*
 * MessageCard — Card component for Sunday message/sermon entries
 *
 * Matches the BibleStudyCard aesthetic with the addition of a YouTube
 * thumbnail area at the top. Displays: thumbnail with play button,
 * series pill, date, title, speaker, passage, and an arrow link.
 */
import Link from "next/link";
import type { Message } from "@/lib/types/message";
import {
  IconBookOpen,
  IconUser,
  IconVideo,
  IconFileText,
  IconArrowUpRight,
} from "@/components/layout/icons";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const month = date
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

export default function MessageCard({ message }: { message: Message }) {
  return (
    <Link
      href={`/messages/${message.slug}`}
      className="group relative rounded-[24px] cursor-pointer transition-all hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]"
    >
      {/* YouTube Thumbnail */}
      <div className="relative aspect-video rounded-t-[24px] overflow-hidden bg-black-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${message.youtubeId}/maxresdefault.jpg`}
          alt={message.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full bg-white-0/90 backdrop-blur-sm size-12 transition-transform group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 ml-0.5 text-black-1"
            >
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </svg>
          </div>
        </div>
        {/* Duration badge */}
        {message.duration && (
          <span className="absolute bottom-2 right-2 bg-black-1/80 text-white-0 text-[12px] font-medium px-2 py-0.5 rounded-[6px]">
            {message.duration}
          </span>
        )}
      </div>

      {/* Content area */}
      <div className="flex flex-col items-start p-[28px]">
        {/* Series pill + date row */}
        <div className="flex items-center justify-between w-full mb-[12px]">
          <div className="bg-white-2 flex flex-col items-start px-[8px] py-[6px] rounded-[8px] shrink-0">
            <p className="font-medium leading-none text-black-3 text-[12px] text-center tracking-[0.24px]">
              {message.series}
            </p>
          </div>
          <p className="font-medium leading-none text-black-3 text-[14px] tracking-[-0.42px]">
            {formatDate(message.dateFor)}
          </p>
        </div>

        {/* Title */}
        <div className="w-full px-[8px] mb-[12px]">
          <p className="font-medium leading-[1.2] text-black-1 text-[24px] tracking-[-0.72px] line-clamp-2">
            {message.title}
          </p>
        </div>

        {/* Speaker + Passage */}
        <div className="flex flex-col gap-[6px] px-[8px] w-full mb-[20px]">
          <div className="flex gap-[8px] items-center">
            <IconUser className="shrink-0 size-[16px] text-black-3" />
            <p className="leading-[1.4] text-black-3 text-[16px] tracking-[-0.32px]">
              {message.speaker}
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <IconBookOpen className="shrink-0 size-[16px] text-black-3" />
            <p className="leading-[1.4] text-black-3 text-[16px] tracking-[-0.32px]">
              {message.passage}
            </p>
          </div>
        </div>

        {/* Bottom row: resource indicators + arrow */}
        <div className="flex h-[32px] items-center justify-between w-full mt-auto">
          <div className="flex gap-[8px] items-center">
            {/* Video indicator (always present) */}
            <div className="bg-white-1-5 flex items-center overflow-clip p-[8px] rounded-[8px] shrink-0">
              <IconVideo className="shrink-0 size-[16px] text-black-2" />
            </div>
            {/* Live transcript indicator */}
            {message.liveTranscript && (
              <div className="bg-white-1-5 flex items-center overflow-clip p-[8px] rounded-[8px] shrink-0">
                <IconFileText className="shrink-0 size-[16px] text-black-2" />
              </div>
            )}
          </div>
          <IconArrowUpRight className="shrink-0 size-[24px] text-black-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* Border and Shadow overlay */}
      <div
        aria-hidden="true"
        className="absolute border border-white-2-5 inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.04)] transition-shadow group-hover:shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]"
      />
    </Link>
  );
}
