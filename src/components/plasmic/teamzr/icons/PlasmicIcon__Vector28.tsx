// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector28Icon(props: Vector28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0c.39.688 1.563 1.125 2.578 1.125 1.016 0 1.313-.5 1.313-1.125H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector28Icon;
/* prettier-ignore-end */
