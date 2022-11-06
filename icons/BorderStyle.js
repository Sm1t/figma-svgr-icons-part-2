import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderStyle = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M15 21h2v-2h-2v2Zm4 0h2v-2h-2v2ZM7 21h2v-2H7v2Zm4 0h2v-2h-2v2Zm8-4h2v-2h-2v2Zm0-4h2v-2h-2v2ZM3 3v18h2V5h16V3H3Zm16 6h2V7h-2v2Z"
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

export default SvgBorderStyle;
