// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 53"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39.598 8.456l-.5-.187-3.25-1.203-1.719-.64-9.234-3.423L17.02.081a1.314 1.314 0 00-1.688.782l-4.234 11.406-4.766 12.828-.89 2.39-1.672 4.516-3.688 9.938c-.046.125-.062.25-.078.375-.047.562.297 1.11.86 1.312l4.187 1.563 3.156 1.172 8.344 3.093 3.047 1.125 3.844 1.422a1.32 1.32 0 001.687-.765l14.969-40.313.281-.75c.25-.719-.093-1.469-.781-1.719zm-2.14 2.547l-.313.86-12.89 34.734a.724.724 0 01-.923.422l-2.828-1.047-3.422-1.266-7.062-2.625-3.234-1.203-2.579-.953a.686.686 0 01-.453-.64c0-.094 0-.188.047-.282l3.469-9.328 1.672-4.515.89-2.391 4.766-12.828 2.422-6.516c.14-.36.547-.562.906-.422l4.5 1.672 9.235 3.422 1.718.64 3.25 1.204.422.156c.36.14.547.547.406.906z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
