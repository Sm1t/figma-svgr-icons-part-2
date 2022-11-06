import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderOuter = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M13 7h-2v2h2V7Zm0 4h-2v2h2v-2Zm4 0h-2v2h2v-2ZM3 3v18h18V3H3Zm16 16H5V5h14v14Zm-6-4h-2v2h2v-2Zm-4-4H7v2h2v-2Z"
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

export default SvgBorderOuter;
