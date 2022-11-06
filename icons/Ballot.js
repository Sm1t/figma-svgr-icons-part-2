import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgBallot = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9.5h5v-2h-5v2Zm0 7h5v-2h-5v2Zm6 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2ZM6 11h5V6H6v5Zm1-4h3v3H7V7ZM6 18h5v-5H6v5Zm1-4h3v3H7v-3Z"
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

export default SvgBallot;
