// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.648 3.427c.234-.407.297-.907.14-1.39l-.265-.798C3.226.35 2.288-.198 1.383.067A1.72 1.72 0 00.241 2.255l.28.875c.157.484.516.844.938 1.031a3.658 3.658 0 00-1.453 3.14c.031.485.516.782.969.641l5.281-1.75A.748.748 0 006.663 5.1a3.522 3.522 0 00-3.015-1.672z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
