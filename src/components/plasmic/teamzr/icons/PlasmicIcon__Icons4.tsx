// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons4Icon(props: Icons4IconProps) {
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
        d={
          "M8.5 1.5h-5c-.55 0-.995.45-.995 1l-.005 8L6 9l3.5 1.5v-8c0-.55-.45-1-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons4Icon;
/* prettier-ignore-end */
