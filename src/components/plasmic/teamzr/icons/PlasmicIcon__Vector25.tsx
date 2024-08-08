// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector25Icon(props: Vector25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.323 4.453c-.516 2.39-1.844 4.14-4.141 4.14-2.281 0-3.719-1.734-4.14-4.14C-.335 2.203 1.9 0 4.181 0c2.313-.016 4.625 2.219 4.14 4.453z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector25Icon;
/* prettier-ignore-end */
