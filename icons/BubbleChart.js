import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBubbleChart = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M7.2 17.6a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM14.8 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15.2 13.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default SvgBubbleChart;
