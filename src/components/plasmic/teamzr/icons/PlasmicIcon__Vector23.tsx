// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector23Icon(props: Vector23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.453.02c.703-.11 1.219.234 1.406.922.188.687-.28 1.219-.906 1.578-.75.437-1.016.531-4.187 1.625L0 1.707C4.063.13 4.266.192 5.453.02z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
