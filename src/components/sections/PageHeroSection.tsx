/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline: string — small label above heading (e.g. "New here?")
 *   heading: string — DM Serif italic main heading
 * -- Buttons (BASIC) --
 *   primaryButton: { label, href, visible }
 *   secondaryButton: { label, href, visible }
 * -- Media (BASIC) --
 *   floatingImages[]: { src, alt, width, height, top, left, rotation }
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: page_hero_sections (id, overline, heading, primary_btn_label, primary_btn_href, primary_btn_visible, secondary_btn_label, secondary_btn_href, secondary_btn_visible, visible, color_scheme)
 * DB SCHEMA: page_hero_floating_images (id, section_id, src, alt, width, height, css_top, css_left, rotation, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import OverlineLabel from "@/components/shared/OverlineLabel";
import CTAButton from "@/components/shared/CTAButton";
import { themeTokens } from "@/lib/theme";
import type { PageHeroSectionProps } from "@/lib/types/sections";
import Image from "next/image";

/* Pre-computed positions along an elliptical orbit (6 slots).
 * Values are percentages relative to the orbit container center.
 * Small random-like offsets make the placement look natural. */
const orbitPositions = [
  { xPct: 0, yPct: -42 },      // top-center
  { xPct: 38, yPct: -18 },     // top-right
  { xPct: -40, yPct: -8 },     // left
  { xPct: 40, yPct: 15 },      // right
  { xPct: -25, yPct: 38 },     // bottom-left
  { xPct: 15, yPct: 42 },      // bottom-center-right
];

export default function PageHeroSection(props: {
  settings: PageHeroSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];
  const gradientColor = settings.colorScheme === "dark" ? "var(--color-black-1)" : "var(--color-white-1)";

  return (
    <SectionContainer settings={settings} className="!py-0" noContainer>
      {/* Orbital + counter-rotation keyframes */}
      <style>{`
        @keyframes orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes counter-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>

      <div className="relative min-h-[600px] lg:min-h-[860px] w-full overflow-hidden">
        {/* Orbital container — centered, rotates as a whole */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            width: "140%",
            height: "140%",
            animation: "orbit-spin 90s linear infinite",
          }}
        >
          {content.floatingImages.map((img, i) => {
            const pos = orbitPositions[i % orbitPositions.length];

            return (
              <div
                key={i}
                className="absolute rounded-2xl overflow-hidden shadow-lg"
                style={{
                  top: `calc(50% + ${pos.yPct}%)`,
                  left: `calc(50% + ${pos.xPct}%)`,
                  transform: "translate(-50%, -50%)",
                  animation: "counter-spin 90s linear infinite",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="object-cover rounded-2xl"
                />
              </div>
            );
          })}
        </div>

        {/* Radial gradient overlay — fades photos at edges */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              `radial-gradient(ellipse at center, transparent 20%, ${gradientColor} 70%)`,
          }}
        />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[600px] lg:min-h-[860px] px-4">
          {content.overline && (
            <OverlineLabel text={content.overline} className="mb-6" />
          )}

          <h1 className={`font-display italic text-h1 ${t.textPrimary} mb-10`}>
            {content.heading}
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {content.primaryButton.visible && (
              <CTAButton
                label={content.primaryButton.label}
                href={content.primaryButton.href}
                variant="primary"
              />
            )}
            {content.secondaryButton.visible && (
              <CTAButton
                label={content.secondaryButton.label}
                href={content.secondaryButton.href}
                variant="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
