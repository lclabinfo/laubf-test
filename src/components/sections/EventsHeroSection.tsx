/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   heading: string -- hero heading (e.g. "Events")
 *   subtitle: string -- supporting text
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: events_hero_sections (id, heading, subtitle, visible, color_scheme)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { EventsHeroSectionProps } from "@/lib/types/sections";

export default function EventsHeroSection(props: {
  settings: EventsHeroSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];

  return (
    <SectionContainer settings={settings}>
      <div className="flex flex-col items-center text-center">
        <h1 className={`text-h1 ${t.textPrimary}`}>{content.heading}</h1>
        <p className={`text-body-1 ${t.textSecondary} mt-4 max-w-[600px]`}>
          {content.subtitle}
        </p>
      </div>
    </SectionContainer>
  );
}
