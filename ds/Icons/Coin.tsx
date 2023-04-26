import * as React from "react";
import { SVGProps } from "react";

const SvgCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 12c0 3.866-2.239 7-5 7s-5-3.134-5-7 2.239-7 5-7 5 3.134 5 7Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 5h3c3 0 6 1 6 7s-3 7-6 7h-3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 7.25h-.75v1.5H15v-1.5Zm3 1.5h.75v-1.5H18v1.5Zm-3 0h3v-1.5h-3v1.5ZM15 11.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5h-4v1.5ZM15 15.25h-.75v1.5H15v-1.5Zm3 1.5h.75v-1.5H18v1.5Zm-3 0h3v-1.5h-3v1.5Z"
      fill="currentColor"
    />
    <path
      d="m10 10 .54 1.46L12 12l-1.46.54L10 14l-.54-1.46L8 12l1.46-.54L10 10Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgCoin;
