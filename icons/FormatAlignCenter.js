import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatAlignCenter = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M7 15v2h10v-2H7Zm-4 6h18v-2H3v2Zm0-8h18v-2H3v2Zm4-6v2h10V7H7ZM3 3v2h18V3H3Z"
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

export default SvgFormatAlignCenter;
