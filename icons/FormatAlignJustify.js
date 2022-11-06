import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatAlignJustify = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3 21h18v-2H3v2Zm0-4h18v-2H3v2Zm0-4h18v-2H3v2Zm0-4h18V7H3v2Zm0-6v2h18V3H3Z"
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

export default SvgFormatAlignJustify;
