"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { dropdowns, directLinks } from "./nav-data";
import { IconChevronDown, IconHamburger } from "./icons";
import DropdownMenu from "./DropdownMenu";
import { cn } from "@/lib/utils";

interface ScrollNavProps {
  visible: boolean;
  onMobileMenuOpen: () => void;
}

export default function ScrollNav({ visible, onMobileMenuOpen }: ScrollNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = useCallback((id: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setActiveDropdown(id);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const activeDropdownData = dropdowns.find((d) => d.id === activeDropdown);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white-0 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-smooth",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      <div className="container-nav flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-h4 font-medium text-black-1">
          <svg
            width="62"
            height="52"
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {dropdowns.map((dropdown) => (
            <button
              key={dropdown.id}
              onMouseEnter={() => openDropdown(dropdown.id)}
              onClick={() =>
                setActiveDropdown((prev) =>
                  prev === dropdown.id ? null : dropdown.id,
                )
              }
              className={cn(
                "flex items-center gap-1 px-4 py-3 rounded-lg text-nav text-black-1 transition-colors duration-150",
                activeDropdown === dropdown.id
                  ? "bg-white-1-5"
                  : "hover:bg-white-1-5",
              )}
            >
              {dropdown.label}
              <IconChevronDown
                width={16}
                height={16}
                className={cn(
                  "transition-transform duration-200",
                  activeDropdown === dropdown.id && "rotate-180",
                )}
              />
            </button>
          ))}
          {directLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-lg text-nav text-black-1 transition-colors duration-150 hover:bg-white-1-5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/member-login"
            className="text-nav text-black-1 px-2 py-4 transition-opacity hover:opacity-80"
          >
            Member Login
          </Link>
          <Link
            href="/im-new"
            className="rounded-full bg-black-1 px-8 py-4 text-nav text-white-1 transition-opacity hover:opacity-90"
          >
            I&apos;m new
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={onMobileMenuOpen}
          className="lg:hidden p-2 text-black-1"
          aria-label="Open menu"
        >
          <IconHamburger width={28} height={28} />
        </button>
      </div>

      {/* Dropdown panel */}
      {activeDropdownData && (
        <DropdownMenu dropdown={activeDropdownData} onClose={closeDropdown} />
      )}
    </header>
  );
}
