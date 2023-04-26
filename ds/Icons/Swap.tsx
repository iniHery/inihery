import * as React from "react";
import { SVGProps } from "react";

const SvgSwap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26 16a1 1 0 1 1 2 0h-2ZM5 24a1 1 0 1 1 0-2v2Zm21-5v-3h2v3h-2Zm-3 5H5v-2h18v2Zm5-5a5 5 0 0 1-5 5v-2a3 3 0 0 0 3-3h2ZM6 16a1 1 0 1 1-2 0h2Zm21-8a1 1 0 1 1 0 2V8ZM6 13v3H4v-3h2Zm3-5h18v2H9V8Zm-5 5a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3H4Z"
      fill="currentColor"
    />
    <path
      d="m9 19-4 4 4 4M23 13l4-4-4-4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSwap;
