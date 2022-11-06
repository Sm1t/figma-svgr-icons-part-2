import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgAutoDelete = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)" fill="currentColor">
      <path d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14V2ZM16 9c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7Zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
      <path d="M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7V12Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default SvgAutoDelete;
