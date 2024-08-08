// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group35Icon(props: Group35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.306 2.501A.701.701 0 012.629 3H0L.703.499A.684.684 0 011.38 0H4l-.694 2.501zm11.992.034a.67.67 0 01-.652.493H9.24L6.198 13.507a.68.68 0 01-.66.493H3L6.085 3.02 6.905 0H16l-.702 2.535z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group35Icon;
/* prettier-ignore-end */
