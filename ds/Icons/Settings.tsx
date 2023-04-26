import * as React from "react";
import { SVGProps } from "react";

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17 5.423-.5.866.5-.866a2 2 0 0 0-2 0l.5.866-.5-.866-7.66 4.422a2 2 0 0 0-1 1.732v8.846a2 2 0 0 0 1 1.732L15 26.577a2 2 0 0 0 2 0l7.66-4.422a2 2 0 0 0 1-1.732v-8.846a2 2 0 0 0-1-1.732L17 5.423Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle
      cx={16}
      cy={16}
      r={5}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSettings;
