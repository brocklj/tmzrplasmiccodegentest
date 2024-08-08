// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".09"}
        d={
          "M22.962 39.729c-.563 0-1.14-.016-1.735-.047-8.765-.484-15.922-4.39-19.14-10.438-5.14-9.656-.094-23.109 7.64-27.343C13.634-.256 17.024-.193 19.18.244c3.688.735 6.407 2.438 7.657 4.782 1.343 2.515.625 4.875-.14 7.36-.688 2.233-1.392 4.53-.548 7.015.75 2.218 2.703 2.906 4.781 3.64 2.11.75 4.297 1.516 5.47 3.938 1.234 2.562 1.077 6.062-.344 8.172-1.938 2.812-7.063 4.578-13.094 4.578zM16.743.182c-1.922 0-4.312.437-6.922 1.875C2.165 6.26-2.835 19.604 2.26 29.167c3.187 6 10.296 9.859 19 10.343 6.687.375 12.578-1.422 14.656-4.453 1.39-2.047 1.547-5.484.328-7.984-1.14-2.36-3.281-3.11-5.36-3.844-2.109-.75-4.109-1.453-4.89-3.75-.86-2.547-.14-4.875.547-7.14.75-2.454 1.469-4.782.156-7.235-1.219-2.297-3.906-3.969-7.531-4.688a12.358 12.358 0 00-2.422-.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
