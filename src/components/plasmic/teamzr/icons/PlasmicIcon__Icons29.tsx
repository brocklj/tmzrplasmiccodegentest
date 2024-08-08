// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons29Icon(props: Icons29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icons29Icon;
/* prettier-ignore-end */
