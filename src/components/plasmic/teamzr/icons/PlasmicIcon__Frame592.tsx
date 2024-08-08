// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame592IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame592Icon(props: Frame592IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.792 11.996a.958.958 0 01-.642-.245.813.813 0 01-.274-.66v-.022a.883.883 0 01.27-.646.916.916 0 01.565-.26h.16a.887.887 0 01.864.906v.026a.831.831 0 01-.271.656.909.909 0 01-.63.249l-.042-.004zm-.208-3.272a.698.698 0 01-.478-.186.846.846 0 01-.19-.623 2.597 2.597 0 01.706-1.885c.296-.308.612-.613.942-.895.33-.282.627-.564.794-.742a2.89 2.89 0 00.456-.6c.133-.246.203-.52.205-.799a1.83 1.83 0 00-.605-1.376 2.156 2.156 0 00-1.436-.546h-.082a2.096 2.096 0 00-1.584.56 4.03 4.03 0 00-.817 1.485c-.189.627-.504.709-.742.709a.742.742 0 01-.538-.23A.668.668 0 010 3.12c.01-.51.167-1.006.453-1.429A3.614 3.614 0 011.773.494 4.382 4.382 0 013.789 0h.22c.657 0 1.306.141 1.903.416.525.246.974.631 1.299 1.113.296.438.452.955.449 1.484.007.377-.078.75-.249 1.087-.167.312-.38.597-.63.846a44.58 44.58 0 01-1.407 1.295 5.01 5.01 0 00-.49.468 2.252 2.252 0 00-.453.797l-.018.064c-.03.115-.074.293-.126.534-.075.423-.271.594-.672.594l-.03.026z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame592Icon;
/* prettier-ignore-end */
