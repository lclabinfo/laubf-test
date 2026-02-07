/*
 * CMS SETTINGS:
 * -- Content (BASIC) --
 *   overline?: string -- label above heading (e.g. "ADULT", "LBCC TRUE VINE CLUB")
 *   heading: string -- section heading (e.g. "Meet Our Team")
 * -- Team Members (BASIC) --
 *   members[]: { name, role, image: { src, alt } }
 * -- Layout (ADVANCED) --
 *   visible, colorScheme, paddingY, containerWidth
 *
 * DB SCHEMA: meet_team_sections (id, overline, heading, visible, color_scheme)
 * DB SCHEMA: team_members (id, section_id, name, role, image_src, image_alt, sort_order)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import { themeTokens } from "@/lib/theme";
import type { MeetTeamSectionProps } from "@/lib/types/sections";
import Image from "next/image";

export default function MeetTeamSection(props: {
  settings: MeetTeamSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;
  const t = themeTokens[settings.colorScheme];

  return (
    <SectionContainer settings={settings}>
      {/* Header — centered */}
      <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
        {content.overline && (
          <p className={`text-h4 font-normal ${t.textMuted} mb-3`}>
            {content.overline}
          </p>
        )}
        <h2 className={`text-h2 ${t.textPrimary}`}>{content.heading}</h2>
      </div>

      {/* Team member cards — 3-column grid, left-aligned text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.members.map((member, i) => (
          <div key={i} className="flex flex-col">
            {/* Photo — square */}
            <div className="relative w-full max-w-[400px] aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src={member.image.src}
                alt={member.image.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h3 className={`text-h3 ${t.textPrimary}`}>
              {member.name}
            </h3>

            {/* Role */}
            <p className={`text-h4 font-normal ${t.textMuted} mt-1`}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
