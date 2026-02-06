/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   overline: string — "WHO WE ARE"
 *   heading: string — "Christian Ministry for College Students"
 *   body: string — paragraph description
 * ── Buttons (BASIC) ──
 *   button: { label, href, visible }
 * ── Images (BASIC) ──
 *   images[]: array of { src, alt } — photo collage (up to 3)
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: media_text_sections (id, overline, heading, body,
 *   btn_label, btn_href, image1_url, image2_url, image3_url, visible)
 */
"use client";

import SectionContainer from "@/components/shared/SectionContainer";
import OverlineLabel from "@/components/shared/OverlineLabel";
import CTAButton from "@/components/shared/CTAButton";
import type { MediaTextSectionProps } from "@/lib/types/sections";
import Image from "next/image";

export default function MediaTextSection(props: {
  settings: MediaTextSectionProps;
}) {
  const { settings } = props;
  const { content } = settings;

  return (
    <SectionContainer settings={settings} noContainer>
      <div className="container-standard flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Photo collage left */}
        <div className="relative hidden w-full max-w-[600px] lg:block lg:h-[573px]">
          {content.images.slice(0, 3).map((img, i) => {
            const positions = [
              "top-[166px] left-[154px] w-[390px] h-[222px] z-20",
              "top-[-30px] left-[73px] w-[387px] h-[317px] z-10",
              "top-[410px] left-[154px] w-[387px] h-[163px] z-10",
            ];
            return (
              <div
                key={i}
                className={`absolute overflow-hidden rounded-xl ${positions[i]}`}
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
          {/* Overlay tint */}
          <div className="absolute inset-0 bg-black-1/40 z-30" />
        </div>

        {/* Text content right */}
        <div className="flex flex-col justify-center gap-8 lg:gap-10 lg:py-[130px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <OverlineLabel text={content.overline} />
              <h2 className="text-h2 text-white-1 max-w-[656px]">
                {content.heading}
              </h2>
            </div>
            <p className="text-body-1 text-white-2 max-w-[656px]">
              {content.body}
            </p>
          </div>

          {content.button.visible && (
            <CTAButton
              label={content.button.label}
              href={content.button.href}
              variant="secondary"
              className="self-start"
            />
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
