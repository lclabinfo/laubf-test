/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   sectionHeading: string — "This Week's Message"
 *   sermon.title: string — sermon series/title name
 *   sermon.speaker: string — pastor name
 *   sermon.date: string — formatted date
 *   sermon.series: string — service type
 *   sermon.thumbnailUrl: string — video thumbnail
 *   sermon.videoUrl: string — YouTube/Vimeo embed URL
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: sermons (id, title, speaker, date, series, video_url,
 *   thumbnail_url, featured, created_at)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import VideoThumbnail from "@/components/shared/VideoThumbnail";
import type { SpotlightMediaSectionProps } from "@/lib/types/sections";

export default function SpotlightMediaSection(props: {
  settings: SpotlightMediaSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const { sermon } = content;

  return (
    <SectionContainer settings={settings}>
      <div className="flex flex-col gap-10">
        {/* Header row */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-body-1 text-black-1">
              {content.sectionHeading}
            </span>
            <h2 className="text-h1 text-black-1">{sermon.title}</h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="text-h4 text-black-1">{sermon.speaker}</span>
            <span className="text-h4 text-black-3 uppercase">
              {sermon.series} &bull; {sermon.date}
            </span>
          </div>
        </div>

        {/* Video player */}
        <VideoThumbnail
          data={{
            id: "sermon-video",
            title: sermon.title,
            thumbnailUrl: sermon.thumbnailUrl,
            videoUrl: sermon.videoUrl,
          }}
          size="featured"
        />
      </div>
    </SectionContainer>
  );
}
