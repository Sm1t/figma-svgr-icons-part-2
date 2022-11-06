import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatAlignRight = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3 21h18v-2H3v2Zm6-4h12v-2H9v2Zm-6-4h18v-2H3v2Zm6-4h12V7H9v2ZM3 3v2h18V3H3Z"
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

export default SvgFormatAlignRight;
