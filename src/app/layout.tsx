import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import { Agentation } from "agentation";
import Navbar from "@/components/layout/Navbar";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSerifDisplay.variable}>
      <body className="bg-white-1 text-black-1 font-sans antialiased">
        <Navbar />
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
