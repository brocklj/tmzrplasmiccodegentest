// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        d={
          "M16.623 1.389A1.978 1.978 0 0014.14.092L1.389 4.123A1.978 1.978 0 00.092 6.608l2.625 8.296A1.978 1.978 0 005.2 16.201l1.25-.39s2.328 1.609 3.14 2.093c.579.344 1.376.094 1.657-.53.39-.86 1.36-3.516 1.36-3.516l5.343-1.688a1.978 1.978 0 001.297-2.484l-2.625-8.297z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
