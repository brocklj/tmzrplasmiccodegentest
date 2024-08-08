// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
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

      <path
        opacity={".1"}
        d={
          "M10.427 1.037L1.787.005a.67.67 0 00-.75.594L.005 9.24a.67.67 0 00.594.75l8.64 1.032a.67.67 0 00.75-.594l1.032-8.64a.68.68 0 00-.594-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
