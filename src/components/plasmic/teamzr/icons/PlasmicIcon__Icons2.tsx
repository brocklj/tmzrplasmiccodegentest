// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons2Icon(props: Icons2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#O8GxLZg2lRMIa)"}>
        <path
          d={
            "M6 2.25A5.913 5.913 0 00.5 6c.865 2.195 3 3.75 5.5 3.75S10.635 8.195 11.5 6A5.913 5.913 0 006 2.25zM6 8.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5zm0-4c-.83 0-1.5.67-1.5 1.5S5.17 7.5 6 7.5 7.5 6.83 7.5 6 6.83 4.5 6 4.5z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"O8GxLZg2lRMIa"}>
          <path fill={"currentColor"} d={"M0 0h12v12H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icons2Icon;
/* prettier-ignore-end */
