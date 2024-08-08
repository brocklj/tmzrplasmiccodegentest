// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 13.333h2.667v-8H0v8zM14.667 6c0-.733-.6-1.333-1.334-1.333H9.127L9.76 1.62l.02-.213c0-.274-.113-.527-.293-.707L8.78 0 4.393 4.393c-.246.24-.393.574-.393.94V12c0 .733.6 1.333 1.333 1.333h6c.554 0 1.027-.333 1.227-.813l2.013-4.7c.06-.153.094-.313.094-.487V6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
