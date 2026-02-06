import { createElement, type ReactNode } from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

function icon(
  d: string,
  defaultSize = 24,
  viewBox = "0 0 24 24",
  strokeWidth = 2,
) {
  return function Icon(props: IconProps) {
    return createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: defaultSize,
        height: defaultSize,
        viewBox,
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        ...props,
      },
      createElement("path", { d }),
    );
  };
}

function multiIcon(
  children: ReactNode[],
  defaultSize = 24,
  viewBox = "0 0 24 24",
  strokeWidth = 2,
) {
  return function Icon(props: IconProps) {
    return createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: defaultSize,
        height: defaultSize,
        viewBox,
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        ...props,
      },
      ...children,
    );
  };
}

// ── Existing icons ──────────────────────────────────────────────

export const IconHamburger = icon("M3 12h18M3 6h18M3 18h18");

export const IconClose = icon("M18 6L6 18M6 6l12 12");

// ── New icons ───────────────────────────────────────────────────

/** Open book icon - for "Join us on Sunday" pathway card */
export const IconBookOpen = multiIcon([
  createElement("path", {
    key: "1",
    d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",
  }),
  createElement("path", {
    key: "2",
    d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  }),
]);

/** Graduation cap icon - for "Are you a College Student?" pathway card */
export const IconGraduationCap = multiIcon([
  createElement("path", {
    key: "1",
    d: "M22 10v6M2 10l10-5 10 5-10 5z",
  }),
  createElement("path", {
    key: "2",
    d: "M6 12v5c0 0 3 3 6 3s6-3 6-3v-5",
  }),
]);

/** Calendar icon - for "Not sure where to start?" pathway card */
export const IconCalendar = multiIcon([
  createElement("rect", {
    key: "1",
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2",
  }),
  createElement("line", { key: "2", x1: "16", y1: "2", x2: "16", y2: "6" }),
  createElement("line", { key: "3", x1: "8", y1: "2", x2: "8", y2: "6" }),
  createElement("line", { key: "4", x1: "3", y1: "10", x2: "21", y2: "10" }),
]);

/** Chevron pointing down - for FAQ accordion and dropdowns */
export const IconChevronDown = icon("M6 9l6 6 6-6");

/** Arrow pointing right - for buttons/links */
export const IconArrowRight = icon("M5 12h14M12 5l7 7-7 7");

/** Question mark icon - for FAQ section header */
export const IconQuestionMark = multiIcon([
  createElement("circle", { key: "1", cx: "12", cy: "12", r: "10" }),
  createElement("path", {
    key: "2",
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  }),
  createElement("line", { key: "3", x1: "12", y1: "17", x2: "12.01", y2: "17" }),
]);

/** Checkmark icon - for form success state */
export const IconCheck = icon("M20 6L9 17l-5-5");

/** Map pin location icon - for directions */
export const IconMapPin = multiIcon([
  createElement("path", {
    key: "1",
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
  }),
  createElement("circle", { key: "2", cx: "12", cy: "10", r: "3" }),
]);

/** External link arrow icon - for "Get Directions" link */
export const IconExternalLink = multiIcon([
  createElement("path", {
    key: "1",
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  }),
  createElement("polyline", { key: "2", points: "15 3 21 3 21 9" }),
  createElement("line", { key: "3", x1: "10", y1: "14", x2: "21", y2: "3" }),
]);

/** Play button triangle - for video overlay */
export const IconPlay = icon(
  "M5 3l14 9-14 9V3z",
);
