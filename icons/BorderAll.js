import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderAll = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3 3v18h18V3H3Zm8 16H5v-6h6v6Zm0-8H5V5h6v6Zm8 8h-6v-6h6v6Zm0-8h-6V5h6v6Z"
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

export default SvgBorderAll;
