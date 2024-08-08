// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 33"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.493 32.844l-.016-.063C6.852 28.906 5.9 23.063 5.43 19.375 5.087 16.687 1.758 8.719.508 5.875c-.015-.016-.015-.047-.015-.063 0-.015 0-.015-.016-.03C.274 5.233-.335 3.202.243 0L.43.031c-.578 3.156.032 5.14.22 5.688 0 .015.015.031.015.047 0 .015 0 .03.015.046C1.93 8.656 5.258 16.657 5.602 19.36c.485 3.672 1.422 9.532 2.047 13.407l.016.062-.172.016z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
