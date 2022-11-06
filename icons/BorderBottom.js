import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderBottom = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M9 11H7v2h2v-2Zm4 4h-2v2h2v-2ZM9 3H7v2h2V3Zm4 8h-2v2h2v-2ZM5 3H3v2h2V3Zm8 4h-2v2h2V7Zm4 4h-2v2h2v-2Zm-4-8h-2v2h2V3Zm4 0h-2v2h2V3Zm2 10h2v-2h-2v2Zm0 4h2v-2h-2v2ZM5 7H3v2h2V7Zm14-4v2h2V3h-2Zm0 6h2V7h-2v2ZM5 11H3v2h2v-2ZM3 21h18v-2H3v2Zm2-6H3v2h2v-2Z"
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

export default SvgBorderBottom;
