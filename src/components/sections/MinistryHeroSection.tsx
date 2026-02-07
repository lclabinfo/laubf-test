/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline?: string -- small label above heading (e.g. "MINISTRY")
 *   heading: string -- large display heading (e.g. "Adult", "Children")
 *   headingStyle?: "display" | "sans" -- "display" = serif italic (default for age-group pages), "sans" = Helvetica (campus pages)
 * -- Buttons (BASIC) --
 *   ctaButton?: { label, href, visible }
 *   socialLinks?: { platform, href }[] -- social media icon links
 * -- Media (BASIC) --
 *   heroImage?: { src, alt } -- full-width landscape image below heading
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: ministry_hero_sections (id, overline, heading, heading_style, cta_label, cta_href, cta_visible, hero_image_src, hero_image_alt, visible, color_scheme)
 * DB SCHEMA: ministry_hero_social_links (id, section_id, platform, href, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { MinistryHeroSectionProps } from "@/lib/types/sections";
import Image from "next/image";
import Link from "next/link";
import { IconExternalLink, IconMail, IconInstagram, IconFacebook } from "@/components/layout/icons";

function getSocialIcon(platform: string) {
  const p = platform.toLowerCase();
  if (p === "email" || p === "mail") return IconMail;
  if (p === "instagram") return IconInstagram;
  if (p === "facebook") return IconFacebook;
  return null;
}

export default function MinistryHeroSection(props: {
  settings: MinistryHeroSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];
  const isSans = content.headingStyle === "sans";

  return (
    <SectionContainer settings={settings} className="pt-28 lg:pt-36 !pb-0">
      {/* Centered text content */}
      <div className="container-standard flex flex-col items-center text-center mb-10 lg:mb-14">
        {content.overline && (
          <p className={`${isSans ? "text-h4 font-normal" : "text-overline"} ${t.textMuted} mb-4`}>
            {content.overline}
          </p>
        )}

        <h1 className={`${isSans ? "text-h1" : "text-hero-accent"} ${t.textPrimary}`}>
          {content.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        {/* CTA button + social icons */}
        {(content.ctaButton?.visible || content.socialLinks) && (
          <div className="flex items-center gap-3 mt-8">
            {content.ctaButton?.visible && (
              <Link
                href={content.ctaButton.href}
                target={content.ctaButton.href.startsWith("http") ? "_blank" : undefined}
                rel={content.ctaButton.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${isSans ? "bg-white-2 rounded-lg px-4 py-3 text-button-1 font-medium text-black-1 hover:bg-white-2-5 transition-colors inline-flex items-center gap-2" : "bg-black-1 text-white-1 rounded-full px-6 py-3 text-button-1 font-medium hover:bg-black-2 transition-colors inline-flex items-center gap-2"}`}
              >
                {content.ctaButton.label}
                <IconExternalLink className="size-4" />
              </Link>
            )}
            {content.socialLinks && content.socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {content.socialLinks.map((link, i) => {
                  const SocialIcon = getSocialIcon(link.platform);
                  return (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${isSans ? "w-[44px] h-[44px] rounded-lg bg-white-2 hover:bg-white-2-5" : "w-9 h-9 rounded-full border " + t.borderSubtle} flex items-center justify-center ${t.textMuted} transition-colors`}
                      aria-label={link.platform}
                    >
                      {SocialIcon ? (
                        <SocialIcon className="size-5" />
                      ) : (
                        <span className="text-body-3">{link.platform[0]?.toUpperCase()}</span>
                      )}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Full-width hero image */}
      {content.heroImage && (
        <div className="container-standard pb-0">
          <div className={`relative w-full ${isSans ? "h-[320px] lg:h-[480px] rounded-xl" : "aspect-[16/7] rounded-2xl"} overflow-hidden`}>
            <Image
              src={content.heroImage.src}
              alt={content.heroImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
