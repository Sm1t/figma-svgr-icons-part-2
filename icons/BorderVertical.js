import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderVertical = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3 9h2V7H3v2Zm0-4h2V3H3v2Zm4 16h2v-2H7v2Zm0-8h2v-2H7v2Zm-4 0h2v-2H3v2Zm0 8h2v-2H3v2Zm0-4h2v-2H3v2ZM7 5h2V3H7v2Zm12 12h2v-2h-2v2Zm-8 4h2V3h-2v18Zm8 0h2v-2h-2v2Zm0-8h2v-2h-2v2Zm0-10v2h2V3h-2Zm0 6h2V7h-2v2Zm-4-4h2V3h-2v2Zm0 16h2v-2h-2v2Zm0-8h2v-2h-2v2Z"
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

export default SvgBorderVertical;
