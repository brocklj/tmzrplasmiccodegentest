// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons3Icon(props: Icons3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#M-0V2l81gIZOa)"}>
        <path
          d={
            "M12.167 3.5H3.833v-.333h8.334V3.5zM6.5 9.333v-.5H4.54L8 5.373l3.46 3.46H9.5v4h-3v-3.5z"
          }
          fill={"currentColor"}
          stroke={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"M-0V2l81gIZOa"}>
          <path fill={"currentColor"} d={"M0 0h16v16H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icons3Icon;
/* prettier-ignore-end */
