// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsIcon(props: IconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#DqeKEA3dUuoZa)"}>
        <path
          d={
            "M.5 10.5h2v-6h-2v6zm11-5.5c0-.55-.45-1-1-1H7.345l.475-2.285.015-.16a.753.753 0 00-.22-.53L7.085.5l-3.29 3.295A.978.978 0 003.5 4.5v5c0 .55.45 1 1 1H9c.415 0 .77-.25.92-.61l1.51-3.525A.988.988 0 0011.5 6V5z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"DqeKEA3dUuoZa"}>
          <path fill={"currentColor"} d={"M0 0h12v12H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconsIcon;
/* prettier-ignore-end */
