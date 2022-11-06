import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBorderColor = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M22 24H2v-4h20v4ZM13.06 5.19l3.75 3.75L7.75 18H4v-3.75l9.06-9.06Zm4.82 2.68-3.75-3.75 1.83-1.83a.996.996 0 0 1 1.41 0l2.34 2.34c.39.39.39 1.02 0 1.41l-1.83 1.83Z"
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

export default SvgBorderColor;
