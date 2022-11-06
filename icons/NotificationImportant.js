import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgNotificationImportant = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2Zm-5 0h-2v-2h2v2Zm0-4h-2V8h2v4Zm-1 10c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2Z"
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

export default SvgNotificationImportant;
