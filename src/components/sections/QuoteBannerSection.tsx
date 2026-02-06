/*
 * CMS SETTINGS:
 * ── Theme (BASIC) ──
 *   overline: string — "2026 SPIRITUAL DIRECTION"
 * ── Heading (BASIC) ──
 *   heading: string — rendered in strude script font ("Not of the World")
 * ── Verse (BASIC) ──
 *   verse.text: string — Bible verse text
 *   verse.reference: string — "John 17:16-18"
 * ── Background (ADVANCED) ──
 *   backgroundStyle: 'gradient' | 'solid'
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: quote_banner_sections (id, overline, heading, verse_text,
 *   verse_reference, visible, background_style)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import OverlineLabel from "@/components/shared/OverlineLabel";
import type { QuoteBannerSectionProps } from "@/lib/types/sections";

export default function QuoteBannerSection(props: {
  settings: QuoteBannerSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;

  return (
    <SectionContainer
      settings={{
        ...settings,
        containerWidth: "narrow",
      }}
      bgOverride="bg-gradient-to-b from-black-gradient to-black-1 to-[67%]"
    >
      <div className="relative flex flex-col items-center gap-10 text-center">
        {/* Decorative vector */}
        <svg
          className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-[600px] lg:w-[926px] h-auto opacity-10 pointer-events-none"
          viewBox="0 0 926 383"
          fill="none"
        >
          <path
            d="M0 383C0 171.4 207.5 0 463 0s463 171.4 463 383"
            stroke="#FAFAFA"
            strokeWidth="1"
          />
        </svg>

        {/* Content */}
        <div className="relative flex flex-col items-center gap-4 lg:gap-6">
          <OverlineLabel text={content.overline} className="text-white-3" />
          <h2 className="text-script-heading text-white-1">
            {content.heading}
          </h2>
        </div>

        <div className="relative flex flex-col items-center gap-4">
          <p className="text-body-1 text-white-2 max-w-[960px] leading-[1.5]">
            {content.verse.text}
          </p>
          <p className="text-h4 text-white-3">{content.verse.reference}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
