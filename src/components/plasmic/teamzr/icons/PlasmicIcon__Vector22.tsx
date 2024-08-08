// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector22Icon(props: Vector22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.313 2.171c-2.047.5-4.047 1.14-5.407 1.688L0 1.827C1.281 1.297 3.125.687 5.781.03A1.1 1.1 0 017.11.827a1.086 1.086 0 01-.796 1.344z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
