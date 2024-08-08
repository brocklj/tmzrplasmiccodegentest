// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.24 5.147l-1.484.28-1.157.22-.984.187C.349 3.35.052 2.787.005 1.944-.04.99.21.506.835.162a1.284 1.284 0 011.75.5c.03.047 1.375 1.97 2.656 4.485z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
