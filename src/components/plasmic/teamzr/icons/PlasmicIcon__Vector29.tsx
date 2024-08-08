// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.233 2.144C6.983.128 3.905-.028 3.31.004c-.312.015-1 .202-1.297.671-.015-.328 0-.625 0-.625-.265.328-.312.61-.265.828-.188-.25-.313-.515-.313-.515-.047.343.047.547.188.656C.78 1.222-.298 2.409.077 4.847c.156 1.063 2.562.25 3.234-.812.453.734 1.36.89 1.36.89-.313-.312-.594-.781-.813-1.25 1.281.781 2.984 1.625 3.187 2.14 0 0 .375-.827.094-1.359 0 0 1.016.25 1.14 1.266-.015-.031 1.282-1.422-.046-3.578z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
