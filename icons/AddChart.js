import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgAddChart = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M6 9.99h2v7H6v-7Zm8 3h2v4h-2v-4Zm-4-6h2v10h-2v-10ZM20 7V4h-2v3h-3v2h3v3h2V9h3V7h-3Zm-2 12H4V5h12V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5Z"
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

export default SvgAddChart;
