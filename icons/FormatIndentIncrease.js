import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatIndentIncrease = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3 21h18v-2H3v2ZM3 8v8l4-4-4-4Zm8 9h10v-2H11v2ZM3 3v2h18V3H3Zm8 6h10V7H11v2Zm0 4h10v-2H11v2Z"
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

export default SvgFormatIndentIncrease;
