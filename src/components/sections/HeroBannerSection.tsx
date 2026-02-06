/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading.line1: string — top line ("Welcome to")
 *   heading.line2: string — bottom line in DM Serif Display italic ("LA UBF")
 *   subheading: string — multi-line descriptor
 * ── Buttons (BASIC) ──
 *   primaryButton: { label, href, visible }
 *   secondaryButton: { label, href, visible }
 * ── Media (BASIC) ──
 *   backgroundImage: { src, alt }
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: hero_banner_sections (id, heading_line1, heading_line2, subheading,
 *   primary_btn_label, primary_btn_href, secondary_btn_label, secondary_btn_href,
 *   background_image_url, background_image_alt, visible, color_scheme)
 */
"use client";

import { SectionThemeContext } from "@/lib/theme";
import type { HeroBannerSectionProps } from "@/lib/types/sections";
import CTAButton from "@/components/shared/CTAButton";
import Image from "next/image";

export default function HeroBannerSection(props: { settings: HeroBannerSectionProps }) {
  const { settings } = props;
  if (!settings.visible) return null;

  const { content } = settings;

  return (
    <SectionThemeContext.Provider value="dark">
      <section id="hero-section" className="relative flex min-h-screen items-end overflow-hidden bg-black-1">
        {/* Background media */}
        {content.backgroundImage.src.endsWith(".mp4") ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={content.backgroundImage.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={content.backgroundImage.src}
            alt={content.backgroundImage.alt}
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Top navbar overlay — darkens top so nav text is readable */}
        <div
          className="absolute inset-x-0 top-0 z-1 h-[200px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(196deg, rgba(13,13,13,0) 50%, rgba(13,13,13,0.5) 64%, rgb(13,13,13) 86%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-1 w-full pb-20 lg:pb-28">
          <div className="container-standard lg:px-0 lg:ml-20 lg:max-w-none">
            <div className="flex flex-col gap-10 max-w-[500px]">
              {/* Heading */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col leading-[0.8] text-white-1 drop-shadow-lg">
                  <span className="text-h1">{content.heading.line1}</span>
                  <span className="text-hero-accent">
                    {content.heading.line2}
                  </span>
                </div>

                {/* Subheading */}
                {settings.showSubheading && content.subheading && (
                  <div className="text-[20px] lg:text-[32px] leading-[1.2] tracking-[-0.04em]">
                    {content.subheading.split("\n").map((line, i) => {
                      const parts = line.split(
                        /(\b(?:people find their community|disciples are raised|the Word of God is lived)\b)/,
                      );
                      return (
                        <p key={i} className="mb-0">
                          {parts.map((part, j) =>
                            /people find|disciples are|the Word of/.test(
                              part,
                            ) ? (
                              <span key={j} className="text-white-2">
                                {part}
                              </span>
                            ) : (
                              <span key={j} className="text-white-3">
                                {part}
                              </span>
                            ),
                          )}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
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
        </div>
      </section>
    </SectionThemeContext.Provider>
  );
}
