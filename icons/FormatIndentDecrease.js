import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatIndentDecrease = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M11 17h10v-2H11v2Zm-8-5 4 4V8l-4 4Zm0 9h18v-2H3v2ZM3 3v2h18V3H3Zm8 6h10V7H11v2Zm0 4h10v-2H11v2Z"
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

export default SvgFormatIndentDecrease;
