// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector14Icon(props: Vector14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.564 9.958c-.125-.703-.984-2.5-1.937-4.375A156.259 156.259 0 003.939.568 1.12 1.12 0 002.44.13a1.12 1.12 0 00-.437 1.5c.812 1.469 1.64 3.016 2.375 4.406C5.205 7.63 6.002 8.6 6.33 9.38c-.594.516-2.078.563-3.25.485-.328-.032-1.578-.125-2.406.64-.328.297-.703.844-.672 1.703.031.594.11.828.64 1.094.22.11.5.125.735.11.61-.079.656-.407.656-1.11 0-.5.266-1 .266-1s1.78.438 3.265.625c1.485.188 2.094-.11 2.64-.719.313-.36.438-.812.36-1.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
