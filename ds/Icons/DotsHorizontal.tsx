import * as React from "react";
import { SVGProps } from "react";

const SvgDotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      stroke="currentColor"
    />
  </svg>
);

export default SvgDotsHorizontal;
