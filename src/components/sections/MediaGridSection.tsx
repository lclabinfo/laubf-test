/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — "Featured Videos"
 *   ctaLabel: string — "View All Videos"
 *   ctaHref: string — "/videos"
 * ── Videos (BASIC) ──
 *   videos[]: VideoThumbnailData[] — 3 featured videos
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: videos (id, title, video_url, thumbnail_url, duration, featured, created_at)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import VideoThumbnail from "@/components/shared/VideoThumbnail";
import type { MediaGridSectionProps } from "@/lib/types/sections";

export default function MediaGridSection(props: {
  settings: MediaGridSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;

  return (
    <SectionContainer settings={settings} className="!pt-0">
      <div className="flex flex-col gap-8">
        <SectionHeader
          heading={content.heading}
          ctaLabel={content.ctaLabel}
          ctaHref={content.ctaHref}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.videos.map((video) => (
            <VideoThumbnail key={video.id} data={video} size="grid" />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
