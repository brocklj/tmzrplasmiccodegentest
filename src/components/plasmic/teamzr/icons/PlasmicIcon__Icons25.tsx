// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons25Icon(props: Icons25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#jJs2vHT4Nwiha)"}>
        <path
          d={"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"jJs2vHT4Nwiha"}>
          <path fill={"currentColor"} d={"M0 0h24v24H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icons25Icon;
/* prettier-ignore-end */
