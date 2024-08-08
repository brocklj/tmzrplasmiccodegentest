// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector19Icon(props: Vector19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.531 16.249c-.14.906-.625 1.89-1.312 3.094-1.156 2-2.922 4.234-4.516 6.093-1.11 1.297-2.125 2.422-2.766 3.188-.28.328-.5.594-.625.766L0 27.702c.484-.688.938-1.61 1.5-2.469.016-.015.031-.047.047-.062 1.062-1.61 2.203-3.422 3.11-5.078.03-.063.062-.11.093-.172.969-1.75 1.688-3.297 1.828-4.203.25-1.61-2.172-6.641-4.562-11.079-.266-.515-.547-1.015-.813-1.5a1.303 1.303 0 01-.156-.53C.984 1.795 1.578.858 2.313.451c.89-.5 2.046-.75 2.546.14 1.016 1.844 6.282 11.704 5.672 15.657z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
