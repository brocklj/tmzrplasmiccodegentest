// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector24Icon(props: Vector24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.694 3.843h-.172a4.016 4.016 0 01-2.516-.86 9.675 9.675 0 01.11-1.874A1.306 1.306 0 011.6.015c.703.11 1.203.766 1.094 1.484a7.733 7.733 0 00-.078 1.22c-.032.405 0 .812.078 1.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
