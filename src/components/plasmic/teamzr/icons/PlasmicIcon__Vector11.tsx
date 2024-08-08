// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        d={
          "M18.763 2.732c-.188-.797-1.25-.969-1.688-.266l-1.75 2.828-.984-4.11a1.542 1.542 0 00-1.86-1.14L1.186 2.732a1.541 1.541 0 00-1.14 1.86l2.687 11.296a1.541 1.541 0 001.86 1.14l11.296-2.687a1.542 1.542 0 001.14-1.86l-.984-4.109 2.828 1.75c.704.438 1.579-.203 1.375-1l-1.484-6.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
