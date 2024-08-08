// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector21Icon(props: Vector21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.748 15.678C8.295 11.975 5.186 2.022 4.701.928 4.295-.009 2.045-.212 1.108.21a1.851 1.851 0 00-.954 2.437c1.25 2.844 4.797 10.453 5.157 13.14.203 1.61.484 4.844.984 7.61.36 1.922.719 3.797.984 5.156.235 1.188.235.969.25 1.078l2.22-.343s-.47-9.235-1-13.61z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector21Icon;
/* prettier-ignore-end */
