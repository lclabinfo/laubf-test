/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — "Our Campus Ministries"
 *   campuses[]: { id, name, active?, href? }
 *   image: { src, alt }
 * ── CTA (BASIC) ──
 *   ctaHeading: string — "Don't see your campus?"
 *   ctaButton: { label, href }
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: campus_ministries_sections (id, heading, cta_heading, cta_btn_label,
 *   cta_btn_href, image_url, visible)
 *   + campuses (id, name, short_name, slug, active, position)
 */
"use client";

import { useRef, useEffect, useCallback } from "react";
import { SectionThemeContext } from "@/lib/theme";
import CTAButton from "@/components/shared/CTAButton";
import type { CampusMinistriesSectionProps } from "@/lib/types/sections";
import Image from "next/image";
import Link from "next/link";

export default function CampusMinistriesSection(props: {
  settings: CampusMinistriesSectionProps;
}) {
  const { settings } = props;
  if (!settings.visible) return null;

  const { content } = settings;

  return (
    <SectionThemeContext.Provider value="light">
      <div className="bg-white-1">
        {/* Main parallax section */}
        <CampusParallaxBlock
          heading={content.heading}
          campuses={content.campuses}
          image={content.image}
        />

        {/* CTA block */}
        <section className="flex flex-col items-center gap-5 pb-30 pt-8 text-center">
          <h3 className="text-h3 text-black-1">{content.ctaHeading}</h3>
          <CTAButton
            label={content.ctaButton.label}
            href={content.ctaButton.href}
            variant="primary"
          />
        </section>
      </div>
    </SectionThemeContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Parallax block — campus list (left) + heading & image (right)     */
/* ------------------------------------------------------------------ */

function CampusParallaxBlock({
  heading,
  campuses,
  image,
}: {
  heading: string;
  campuses: CampusMinistriesSectionProps["content"]["campuses"];
  image: CampusMinistriesSectionProps["content"]["image"];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    const parallaxEl = parallaxRef.current;
    if (!el || !parallaxEl) return;

    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;

    // Progress: 0 when top of section is 25% down viewport, 1 when section top reaches viewport top
    const start = viewH * 0.25;
    const end = 0;
    const raw = 1 - (rect.top - end) / (start - end);
    const clamped = Math.max(0, Math.min(1, raw));

    // Ease out (circOut): fast start, slow end
    const eased = Math.sqrt(1 - Math.pow(clamped - 1, 2));

    // Direct DOM update — no React re-render, no hover state interruption
    parallaxEl.style.transform = `translateY(${eased * 235}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={containerRef} className="relative h-[900px] overflow-hidden pt-30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-0">
        <div className="flex justify-center gap-12">
          {/* Left column: campus list — sticky */}
          <div className="sticky top-30 w-[540px] shrink-0 self-start">
            <div className="flex flex-col items-end gap-4">
              {campuses.map((campus) => (
                <CampusLink
                  key={campus.id}
                  name={campus.name}
                  href={campus.href ?? `/campus/${campus.id}`}
                />
              ))}
            </div>
          </div>

          {/* Right column: heading + image — sticky with parallax */}
          <div className="sticky top-30 w-full max-w-[480px] self-start">
            <div
              ref={parallaxRef}
              className="flex flex-col gap-6 will-change-transform"
            >
              <h2 className="text-h2 max-w-[280px] text-black-1">
                {heading}
              </h2>
              <div className="relative h-[381px] w-[480px] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual campus link with hover arrow animation                  */
/* ------------------------------------------------------------------ */

function CampusLink({ name, href }: { name: string; href: string }) {
  return (
    <div className="group w-full">
      <Link
        href={href}
        className="relative flex h-12 items-center justify-end"
      >
        {/* Text — shifts left via transform (no layout reflow) */}
        <span className="text-h2 font-medium leading-none text-white-3 transition-[color,translate] duration-300 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:-translate-x-[60px] group-hover:text-black-1">
          {name}
        </span>
        {/* Arrow — slides in from right via transform + opacity (no layout reflow) */}
        <span className="absolute right-0 flex h-full w-[60px] items-center justify-center opacity-0 translate-x-full transition-[translate,opacity] duration-300 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:translate-x-0 group-hover:opacity-100">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="text-black-1"
          >
            <path
              d="M14 34L34 14M34 14H14M34 14V34"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
