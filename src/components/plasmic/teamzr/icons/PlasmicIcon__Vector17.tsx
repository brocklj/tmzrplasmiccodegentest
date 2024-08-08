// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector17Icon(props: Vector17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.031.833A1.084 1.084 0 008.703.037c-2.656.656-4.5 1.25-5.781 1.796C-.031 3.083 0 4.005 0 4.474c.016.531.125 1.578 6.484 3.89 0 .188-.203.907-.328 1.141-.297.532.016 1.047.328 1.563.11.172.36.39.657.39.39 0 .875-.5.937-.906.235-1.484.203-2.36.125-2.531 0-.016-.015-.031-.015-.047-.032-.047-.047-.094-.079-.14-.015-.032-.046-.047-.062-.079-.031-.03-.047-.062-.078-.078-.047-.047-.094-.078-.14-.11-.016 0-.016-.015-.032-.015-.078-.047-.156-.094-.234-.125C5.406 6.537 3.39 5.1 2.5 4.474a9.68 9.68 0 011.297-.594c1.36-.547 3.36-1.187 5.406-1.687.61-.172.969-.766.828-1.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
