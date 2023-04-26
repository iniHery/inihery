import * as React from "react";
import { SVGProps } from "react";

const SvgWarningTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.952 16.354 5.263-10.497c.738-1.472 2.839-1.472 3.576 0l5.258 10.497a2 2 0 0 1-1.788 2.896H6.741a2 2 0 0 1-1.789-2.896Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10v2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.5 16a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" stroke="currentColor" />
  </svg>
);

export default SvgWarningTriangle;
