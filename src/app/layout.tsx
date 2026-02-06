import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { Agentation } from "agentation";
import Navbar from "@/components/layout/Navbar";
import type { NavbarSettings } from "@/lib/types/sections";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
});

export const metadata: Metadata = {
  title: "LA UBF | Los Angeles University Bible Fellowship",
  description:
    "A Bible-centered community raising lifelong disciples on campus and beyond.",
};

const navbarSettings: NavbarSettings = {
  id: "navbar",
  visible: true,
  colorScheme: "dark",
  content: {
    logo: {
      lightSrc: "/logo/laubf-logo.svg",
      darkSrc: "/logo/laubf-logo-colored.png",
      alt: "LA UBF",
    },
    ctaButton: {
      label: "I\u2019m new",
      href: "/im-new",
      visible: true,
    },
    memberLogin: {
      label: "Member Login",
      href: "/member-login",
      visible: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSerifDisplay.variable}>
      <body className="bg-white-1 text-black-1 font-sans antialiased">
        <Navbar settings={navbarSettings} />
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
