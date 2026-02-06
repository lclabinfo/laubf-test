/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: { line1, line2 (DM Serif Display italic), line3 }
 *   subheading: string — description paragraph
 * ── Cards (BASIC) ──
 *   cards[]: ImageCardData[] — 4 step cards (title, description, imageUrl, href)
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: action_card_grid_sections (id, heading_line1, heading_line2, heading_line3,
 *   subheading, visible)
 *   + action_cards (id, section_id, title, description, image_url, href, position)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import ImageCard from "@/components/shared/ImageCard";
import type { ActionCardGridSectionProps } from "@/lib/types/sections";

export default function ActionCardGridSection(props: {
  settings: ActionCardGridSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;

  return (
    <SectionContainer settings={settings}>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
        {/* Left header */}
        <div className="flex flex-col gap-5 lg:w-[280px] lg:shrink-0">
          <h2 className="text-h2 text-black-1 leading-none">
            <span>{content.heading.line1}</span>
            <br />
            <span className="text-display-heading">
              {content.heading.line2}
            </span>
            <br />
            <span>{content.heading.line3}</span>
          </h2>
          <p className="text-h4 text-black-2">{content.subheading}</p>
        </div>

        {/* 2×2 grid */}
        <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
          {content.cards.map((card) => (
            <ImageCard key={card.id} data={card} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
