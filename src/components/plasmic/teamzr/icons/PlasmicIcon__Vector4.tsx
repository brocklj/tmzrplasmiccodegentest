// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        d={
          "M32.511.074L.996 10.51a1.447 1.447 0 00-.922 1.828l3.062 9.219a1.447 1.447 0 001.828.922l3.11-1.031 1.515-.5c.39.25 1.36.906 1.75 1.14a.722.722 0 001-.328c.188-.422.578-1.515.735-1.953l7.656-2.547 15.75-5.219a1.447 1.447 0 00.922-1.828L34.339.995a1.44 1.44 0 00-1.828-.921z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
