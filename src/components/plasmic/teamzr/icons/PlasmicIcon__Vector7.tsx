// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.425 4.57a3.197 3.197 0 00-1.188-1.61l-.234-.718A2.578 2.578 0 002.19.508L2.128.305a.443.443 0 00-.563-.282.443.443 0 00-.28.563l.062.203A2.568 2.568 0 00.128 3.85l.234.72a3.239 3.239 0 000 2l.11.312c.047.156.218.25.375.187l1.203-.406c.015.094.062.187.172.219a2.59 2.59 0 001.61 0 2.513 2.513 0 001.296-.954.264.264 0 00.016-.28l1.203-.407a.285.285 0 00.187-.375l-.11-.297z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
