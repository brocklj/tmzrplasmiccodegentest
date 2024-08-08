// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector32Icon(props: Vector32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.128.817c-.188.406-.157.844.015 1.219.203.437.844.406 1.031-.032L1.706.817A.578.578 0 001.034.02C.644.145.299.426.128.817z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
