"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { dropdowns, directLinks } from "./nav-data";
import { IconClose } from "./icons";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSection = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const menu = (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[9998] bg-black-1/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed inset-y-0 right-0 z-[9999] w-full max-w-sm bg-white-0 transition-transform duration-300 ease-smooth overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white-2">
          <Link href="/" onClick={onClose} className="text-h4 font-medium text-black-1">
            <svg
              width="50"
              height="42"
              viewBox="0 0 62 52"
              fill="none"
              className="text-black-1"
            >
              <rect
                width="62"
                height="52"
                rx="4"
                fill="currentColor"
                fillOpacity="0.15"
              />
              <text
                x="31"
                y="30"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
                fontWeight="500"
              >
                UBF
              </text>
            </svg>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-black-1"
            aria-label="Close menu"
          >
            <IconClose width={24} height={24} />
          </button>
        </div>

        {/* Nav sections */}
        <div className="p-4 flex flex-col gap-1">
          {dropdowns.map((dropdown) => (
            <div key={dropdown.id}>
              {/* Accordion header */}
              <button
                onClick={() => toggleSection(dropdown.id)}
                className="flex items-center justify-between w-full px-4 py-4 rounded-lg text-nav text-black-1 transition-colors duration-150 hover:bg-white-1-5"
              >
                {dropdown.label}
                <ChevronDown
                  className={cn(
                    "size-5 transition-transform duration-200",
                    expanded === dropdown.id && "rotate-180",
                  )}
                  strokeWidth={2}
                />
              </button>

              {/* Accordion content */}
              <div
                className={cn(
                  "overflow-hidden transition-[grid-template-rows] duration-300 ease-smooth grid",
                  expanded === dropdown.id
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <div className="pl-4 flex flex-col gap-0.5 pb-2">
                    {/* Ministry overview link for the ministries dropdown */}
                    {dropdown.featuredCard && (
                      <Link
                        href={dropdown.featuredCard.href}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-body-1 font-medium text-black-1 transition-colors duration-150 hover:bg-white-1-5"
                      >
                        Ministries Overview
                      </Link>
                    )}
                    {dropdown.sections.map((section) => (
                      <div key={section.title}>
                        {/* Section title */}
                        <div className="px-4 pt-3 pb-1 text-overline text-black-3 text-[0.6875rem]">
                          {section.title}
                        </div>
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={
                                item.external ? "noopener noreferrer" : undefined
                              }
                              onClick={onClose}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-body-1 text-black-2 transition-colors duration-150 hover:bg-white-1-5"
                            >
                              <Icon
                                className="size-5 text-black-3 shrink-0"
                                strokeWidth={1.5}
                              />
                              {item.label}
                              {item.external && (
                                <SquareArrowOutUpRight
                                  className="size-3.5 text-black-3 ml-auto shrink-0"
                                  strokeWidth={1.5}
                                />
                              )}
                            </Link>
                          );
                        })}
                        {section.footerLink && (
                          <Link
                            href={section.footerLink.href}
                            onClick={onClose}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg text-body-2 text-brand-1 transition-colors duration-150 hover:bg-white-1-5"
                          >
                            {section.footerLink.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Direct links */}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-4 rounded-lg text-nav text-black-1 transition-colors duration-150 hover:bg-white-1-5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-4 mt-auto border-t border-white-2">
          <Link
            href="/im-new"
            onClick={onClose}
            className="flex items-center justify-center w-full rounded-full bg-black-1 px-8 py-4 text-nav text-white-1 transition-opacity hover:opacity-90"
          >
            I&apos;m new
          </Link>
        </div>
      </div>
    </>
  );

  // Render via portal to avoid overflow-x-hidden clipping
  if (!mounted) return null;
  return createPortal(menu, document.body);
}
