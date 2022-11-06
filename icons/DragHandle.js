import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgDragHandle = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path d="M20 9H4v2h16V9ZM4 15h16v-2H4v2Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default SvgDragHandle;
