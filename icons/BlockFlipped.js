import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBlockFlipped = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10ZM5.7 7.1l11.2 11.2c-1.3 1.1-3 1.7-4.9 1.7-4.4 0-8-3.6-8-8 0-1.9.6-3.6 1.7-4.9ZM20 12c0 1.9-.6 3.6-1.7 4.9L7.1 5.7C8.4 4.6 10.1 4 12 4c4.4 0 8 3.6 8 8Z"
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

export default SvgBlockFlipped;
