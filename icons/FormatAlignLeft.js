import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatAlignLeft = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M15 15H3v2h12v-2Zm0-8H3v2h12V7ZM3 13h18v-2H3v2Zm0 8h18v-2H3v2ZM3 3v2h18V3H3Z"
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

export default SvgFormatAlignLeft;
