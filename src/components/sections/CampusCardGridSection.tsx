/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline: string -- text above heading (e.g. "Are you a college student?")
 *   heading: string -- section heading (e.g. "Join a Campus Ministry")
 *   description: string -- paragraph below heading
 * -- Decorative (BASIC) --
 *   decorativeImages[]: { src, alt, rotation } -- overlapping tilted photos
 * -- Campuses (BASIC) --
 *   campuses[]: { id, abbreviation, fullName }
 * -- CTA (BASIC) --
 *   ctaHeading: string -- fallback prompt (e.g. "Don't see your campus?")
 *   ctaButton: { label, href }
 * -- Animation (ADVANCED) --
 *   enableAnimations?: boolean (default true) — toggle scroll-reveal animations
 *     Animations: decorative photos scale in, header fades up, campus cards stagger in.
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: campus_card_sections (id, overline, heading, description, cta_heading, cta_btn_label, cta_btn_href, visible, color_scheme)
 * DB SCHEMA: campus_cards (id, section_id, abbreviation, full_name, sort_order)
 * DB SCHEMA: campus_decorative_images (id, section_id, src, alt, rotation, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import CTAButton from "@/components/shared/CTAButton";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { themeTokens } from "@/lib/theme";
import { IconChevronDown } from "@/components/layout/icons";
import type { CampusCardGridSectionProps } from "@/lib/types/sections";
import Image from "next/image";
import Link from "next/link";

export default function CampusCardGridSection(props: {
  settings: CampusCardGridSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];
  const animate = settings.enableAnimations !== false;

  return (
    <SectionContainer settings={settings}>
      {/* Decorative overlapping photos */}
      {content.decorativeImages && content.decorativeImages.length > 0 && (
        <AnimateOnScroll animation="scale-up" enabled={animate} className="flex items-center justify-center mb-12 overflow-hidden">
          <div className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px]">
            {content.decorativeImages.map((img, i) => {
              /* Stack images with overlapping positions */
              const positions = [
                { top: "30%", left: "0%", zIndex: 1 },
                { top: "0%", left: "25%", zIndex: 3 },
                { top: "25%", left: "55%", zIndex: 2 },
              ];
              const pos = positions[i % positions.length];

              return (
                <div
                  key={i}
                  className="absolute w-[160px] h-[120px] md:w-[200px] md:h-[150px] rounded-2xl overflow-hidden shadow-lg border-[3px] border-white-0"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    zIndex: pos.zIndex,
                    transform: `rotate(${img.rotation}deg)`,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>
      )}

      {/* Section header */}
      <AnimateOnScroll animation="fade-up" enabled={animate} className="text-center mb-10">
        {content.overline && (
          <p className={`text-body-1 ${t.textSecondary} mb-2`}>
            {content.overline}
          </p>
        )}
        <h2 className={`text-h2 ${t.textPrimary} mb-4`}>
          {content.heading}
        </h2>
        {content.description && (
          <p className={`text-body-1 ${t.textSecondary} max-w-3xl mx-auto`}>
            {content.description}
          </p>
        )}
      </AnimateOnScroll>

      {/* Campus cards grid — rectangular cards matching Figma */}
      <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
        {content.campuses.map((campus) => {
          const cardClasses = `rounded-2xl border ${t.cardBorder} ${t.cardBg} min-h-[80px] px-7 py-5 flex flex-col items-center justify-center gap-2 text-center transition-colors hover:bg-white-2`;
          const cardContent = (
            <>
              {campus.abbreviation && (
                <p className={`text-button-2 ${t.textMuted}`}>
                  {campus.abbreviation}
                </p>
              )}
              <p className={`text-body-2 font-medium ${t.textPrimary} tracking-tight`}>
                {campus.fullName}
              </p>
            </>
          );

          if (campus.href) {
            return (
              <Link key={campus.id} href={campus.href} className={cardClasses}>
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={campus.id} className={cardClasses}>
              {cardContent}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA area */}
      {content.ctaHeading && content.ctaButton && (
        <div className="mt-16 text-center">
          <h3 className={`text-h3 ${t.textPrimary} mb-4`}>{content.ctaHeading}</h3>
          <CTAButton
            label={content.ctaButton.label}
            href={content.ctaButton.href}
            variant="secondary"
            icon={<IconChevronDown className="ml-2 size-5" />}
          />
        </div>
      )}
    </SectionContainer>
  );
}
