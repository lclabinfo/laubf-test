/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   heading: string — section heading
 *   items[]: { id, name, active?, href? }
 *   image: { src, alt }
 * ── CTA (BASIC) ──
 *   ctaHeading: string — CTA prompt text
 *   ctaButton: { label, href }
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: directory_list_sections (id, heading, cta_heading, cta_btn_label,
 *   cta_btn_href, image_url, visible)
 *   + directory_items (id, name, short_name, slug, active, position)
 */
"use client";

import { useRef, useEffect, useCallback } from "react";
import { useMotionValue, useSpring, motion } from "motion/react";
import { SectionThemeContext } from "@/lib/theme";
import CTAButton from "@/components/shared/CTAButton";
import type { DirectoryListSectionProps } from "@/lib/types/sections";
import Image from "next/image";
import Link from "next/link";

export default function DirectoryListSection(props: {
  settings: DirectoryListSectionProps;
}) {
  const { settings } = props;
  if (!settings.visible) return null;

  const { content } = settings;

  return (
    <SectionThemeContext.Provider value="light">
      <div className="bg-white-1">
        {/* Main parallax section */}
        <DirectoryParallaxBlock
          heading={content.heading}
          items={content.items}
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
/*  Parallax block — directory list (left) + heading & image (right)  */
/* ------------------------------------------------------------------ */

const PARALLAX_TRAVEL = 235;

function DirectoryParallaxBlock({
  heading,
  items,
  image,
}: {
  heading: string;
  items: DirectoryListSectionProps["content"]["items"];
  image: DirectoryListSectionProps["content"]["image"];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion value driven by scroll, spring smooths it with a slight lag
  const rawY = useMotionValue(0);
  const smoothY = useSpring(rawY, { stiffness: 150, damping: 30, mass: 0.5 });

  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewH = window.innerHeight;
    const sectionH = el.offsetHeight;

    // Progress 0 → 1 (moves WITH scroll):
    //   0 = ~85% of section is visible (delays start until CYPRESS text is on screen)
    //   1 = section top has reached viewport top
    const startTrigger = viewH - sectionH * 0.85;
    const endTrigger = 0;

    const raw = (startTrigger - rect.top) / (startTrigger - endTrigger);
    const clamped = Math.max(0, Math.min(1, raw));

    rawY.set(clamped * PARALLAX_TRAVEL);
  }, [rawY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={containerRef} className="relative h-[900px] overflow-hidden pt-30">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-0">
        <div className="flex justify-center gap-12">
          {/* Left column: campus list — sticky */}
          <div className="sticky top-30 w-[540px] shrink-0 self-start">
            <div className="flex flex-col items-end gap-4">
              {items.map((item) => (
                <DirectoryLink
                  key={item.id}
                  name={item.name}
                  href={item.href ?? `#${item.id}`}
                />
              ))}
            </div>
          </div>

          {/* Right column: heading + image — sticky with parallax */}
          <div className="sticky top-30 w-full max-w-[480px] self-start">
            <motion.div
              className="flex flex-col gap-6 will-change-transform"
              style={{ y: smoothY }}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Individual directory link with hover arrow animation               */
/* ------------------------------------------------------------------ */

function DirectoryLink({ name, href }: { name: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative flex h-12 w-full items-center justify-end"
    >
      {/* Text — shifts left via transform (no layout reflow) */}
      <span className="text-h2 font-medium leading-none text-white-3 transition-[color,translate] duration-300 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:-translate-x-[60px] group-hover:text-black-1">
        {name}
      </span>
      {/* Arrow — always positioned in place, only fades in (no translate shift = no jitter) */}
      <span className="absolute right-0 flex h-full w-[60px] items-center justify-center opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:opacity-100 pointer-events-none">
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
  );
}
