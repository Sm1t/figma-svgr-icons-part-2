import * as React from "react";
import { SvgIcon } from "../SvgIcon";

const SvgFormatColorText = (props) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M2 20h20v4H2v-4Zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17Zm4.42-5.61 2.03-5.79h.12l2.03 5.79H9.91Z"
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

export default SvgFormatColorText;
