import { createElement } from "react";

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

export const IconHamburger = icon("M3 12h18M3 6h18M3 18h18");

export const IconClose = icon("M18 6L6 18M6 6l12 12");
