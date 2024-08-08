// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector33Icon(props: Vector33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 10h2V4H0v6zm11-5.5c0-.55-.45-1-1-1H6.845l.475-2.285.015-.16a.753.753 0 00-.22-.53L6.585 0l-3.29 3.295A.978.978 0 003 4v5c0 .55.45 1 1 1h4.5c.415 0 .77-.25.92-.61l1.51-3.525A.988.988 0 0011 5.5v-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
