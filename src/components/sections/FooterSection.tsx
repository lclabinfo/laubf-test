/*
 * CMS SETTINGS:
 * ── Content (BASIC) ──
 *   description: string — tagline
 *   socialLinks[]: { platform, href }
 *   columns[]: { heading, links[] }
 *   contactInfo: { address[], phone, email }
 * ── Visibility (BASIC) ──
 *   showSocialLinks, showContactInfo
 * ── Layout (ADVANCED) ──
 *   paddingY, colorScheme
 *
 * DB SCHEMA: site_settings (id, footer_description, phone, email, address_line1,
 *   address_line2, instagram_url, facebook_url, youtube_url)
 *   + footer_columns (id, heading, position)
 *   + footer_links (id, column_id, label, href, external, position)
 */
"use client";

import { SectionThemeContext } from "@/lib/theme";
import type { FooterSectionProps } from "@/lib/types/sections";
import Link from "next/link";

export default function FooterSection(props: {
  settings: FooterSectionProps;
}) {
  const { settings } = props;
  if (!settings.visible) return null;

  const { content } = settings;

  return (
    <SectionThemeContext.Provider value="dark">
      <footer className="bg-black-1 px-4 py-20 lg:px-30">
        <div className="container-standard">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand column */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                {/* Logo placeholder */}
                <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="text-white-1">
                  <rect width="120" height="100" rx="4" fill="currentColor" fillOpacity="0.15" />
                  <text x="60" y="55" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="500">LA UBF</text>
                </svg>
                <p className="text-body-2 text-white-3 max-w-[240px]">
                  {content.description}
                </p>
              </div>
              {/* Social links */}
              <div className="flex gap-3">
                {content.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-full bg-black-2 text-white-2 transition-colors hover:bg-black-3"
                    aria-label={social.platform}
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {content.columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className="text-button-2 text-white-3 uppercase">
                  {col.heading}
                </h4>
                <nav className="flex flex-col">
                  {col.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="px-2 py-1.5 text-body-2 text-white-2 transition-colors hover:text-white-1"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Contact column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-button-2 text-white-3 uppercase">
                VISIT US
              </h4>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col text-body-2 text-white-2">
                  {content.contactInfo.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
                <a
                  href={`tel:${content.contactInfo.phone.replace(/\D/g, "")}`}
                  className="text-body-2 text-white-2 transition-colors hover:text-white-1"
                >
                  {content.contactInfo.phone}
                </a>
                <a
                  href={`mailto:${content.contactInfo.email}`}
                  className="text-body-2 text-white-2 transition-colors hover:text-white-1"
                >
                  {content.contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SectionThemeContext.Provider>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.5.6c-1 .3-1.7 1.1-2 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8c.3 1 1 1.8 2 2.1 1.9.6 9.5.6 9.5.6s7.6 0 9.5-.6c1-.3 1.7-1.1 2-2.1.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.4 3.6-6.4 3.6z" />
        </svg>
      );
    default:
      return null;
  }
}
