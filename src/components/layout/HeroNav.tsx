"use client";

import Link from "next/link";
import { IconHamburger } from "./icons";

interface HeroNavProps {
  onMobileMenuOpen: () => void;
}

export default function HeroNav({ onMobileMenuOpen }: HeroNavProps) {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 py-7">
      <div className="container-nav flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-h4 font-medium text-white-1">
          <svg
            width="62"
            height="52"
            viewBox="0 0 62 52"
            fill="none"
            className="text-white-1"
          >
            <rect
              width="62"
              height="52"
              rx="4"
              fill="currentColor"
              fillOpacity="0.2"
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

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-5">
          {["Our Church", "Ministries", "Resources", "Giving"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-nav text-white-1 px-2 py-4 transition-opacity hover:opacity-80"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-nav text-white-1 px-2 py-4">
            Member Login
          </a>
          <Link
            href="/im-new"
            className="rounded-full bg-white-1 px-8 py-4 text-nav text-black-1"
          >
            I&apos;m new
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={onMobileMenuOpen}
          className="lg:hidden p-2 text-white-1"
          aria-label="Open menu"
        >
          <IconHamburger width={28} height={28} />
        </button>
      </div>
    </nav>
  );
}
