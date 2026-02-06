"use client";

import Link from "next/link";
import Image from "next/image";
import type { NavDropdown } from "./nav-data";
import { IconExternalLink } from "./icons";

interface DropdownMenuProps {
  dropdown: NavDropdown;
  onClose: () => void;
}

export default function DropdownMenu({ dropdown, onClose }: DropdownMenuProps) {
  return (
    <div
      className="absolute top-full left-0 right-0 bg-white-0 border-t border-white-2 shadow-[0_4px_12px_rgba(0,0,0,0.08)] animate-dropdown-in"
      onMouseLeave={onClose}
    >
      <div className="container-nav py-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Links column */}
          <div className="flex flex-col gap-1">
            {dropdown.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-body-1 text-black-1 transition-colors duration-150 hover:bg-white-1-5"
              >
                {link.label}
                {link.external && (
                  <IconExternalLink width={16} height={16} className="text-black-3" />
                )}
              </Link>
            ))}
          </div>

          {/* Featured card (only Ministries) */}
          {dropdown.featuredCard && (
            <Link
              href={dropdown.featuredCard.href}
              onClick={onClose}
              className="group block overflow-hidden rounded-xl"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src={dropdown.featuredCard.image}
                  alt={dropdown.featuredCard.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-1/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-body-2 font-medium text-white-1">
                    {dropdown.featuredCard.title}
                  </p>
                  <p className="text-body-3 text-white-2 mt-1">
                    {dropdown.featuredCard.description}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
