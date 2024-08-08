// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector31Icon(props: Vector31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.031 5.188L0 5s.39-.063.594-.36C.719 4.47.75 4.25.719 4L.079.031.265 0l.64 3.969c.047.312 0 .578-.156.781-.25.375-.703.438-.719.438z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
