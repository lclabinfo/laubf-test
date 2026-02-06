/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline: string -- label above heading (e.g. "STATEMENT OF FAITH")
 *   heading: string -- section heading in DM Serif italic (e.g. "What We Believe")
 *   leadIn: string -- left-column intro phrase (e.g. "We believe that")
 *   showIcon: boolean -- show cross/plus icon above overline
 * -- Paragraphs (BASIC) --
 *   paragraphs[]: { text, isBold } -- belief statement paragraphs
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: statement_sections (id, overline, heading, lead_in, show_icon, visible, color_scheme)
 * DB SCHEMA: statement_paragraphs (id, section_id, text, is_bold, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { StatementSectionProps } from "@/lib/types/sections";

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      width="67"
      height="92"
      viewBox="0 0 67 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="25" y="0" width="17" height="92" rx="2" fill="currentColor" />
      <rect x="0" y="25" width="67" height="17" rx="2" fill="currentColor" />
    </svg>
  );
}

export default function StatementSection(props: {
  settings: StatementSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];

  return (
    <SectionContainer settings={settings}>
      {/* Header — centered */}
      <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
        {content.showIcon && (
          <CrossIcon className={`${t.textPrimary} mb-6`} />
        )}
        <p className={`text-overline ${t.textMuted} mb-4`}>{content.overline}</p>
        <h2 className={`text-display-heading ${t.textPrimary}`}>{content.heading}</h2>
      </div>

      {/* Two-column belief content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left column — lead-in phrase */}
        <div className="lg:w-[27%] shrink-0">
          <p className={`text-h2 font-medium ${t.textPrimary} leading-tight`}>
            {content.leadIn}
          </p>
        </div>

        {/* Right column — statement paragraphs */}
        <div className="lg:w-[73%] flex flex-col gap-8">
          {content.paragraphs.map((para, i) => (
            <p
              key={i}
              className={`text-body-1 leading-relaxed ${
                para.isBold
                  ? `font-medium ${t.textPrimary}`
                  : t.textSecondary
              }`}
            >
              {para.text}
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
