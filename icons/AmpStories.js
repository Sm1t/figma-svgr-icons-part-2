import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgAmpStories = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M17 4H7v15h10V4ZM5 6H3v11h2V6ZM21 6h-2v11h2V6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default SvgAmpStories;
