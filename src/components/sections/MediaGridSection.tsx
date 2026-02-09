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

import { useState } from "react";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";
import VideoThumbnail from "@/components/shared/VideoThumbnail";
import VideoModal from "@/components/shared/VideoModal";
import type { MediaGridSectionProps } from "@/lib/types/sections";
import type { Video } from "@/lib/types/video";

export default function MediaGridSection(props: {
  settings: MediaGridSectionProps;
  videos?: Video[];
}) {
  const { settings, videos } = props;
  const { content } = settings;
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <SectionContainer settings={settings} className="!pt-0">
      <div className="flex flex-col gap-8">
        <SectionHeader
          heading={content.heading}
          ctaLabel={content.ctaLabel}
          ctaHref={content.ctaHref}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.videos.map((video, i) => (
            <VideoThumbnail
              key={video.id}
              data={video}
              size="grid"
              onClick={
                videos && videos[i]
                  ? () => setSelectedVideo(videos[i])
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </SectionContainer>
  );
}
