import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgCalculate = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42Zm-6.78.66h5v1.5h-5v-1.5ZM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16Zm6.5 1.25h-5v-1.5h5v1.5Zm0-2.5h-5v-1.5h5v1.5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default SvgCalculate;
