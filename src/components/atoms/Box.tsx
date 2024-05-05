/**
 * stateless
 * abstracted box component considering direction
 */

import { DirectionProps, type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

type BoxProp = WrapperProps &
  Partial<DirectionProps> &
  ComponentPropsWithoutRef<"div">;

function Box({
  className,
  children,
  vertical,
  horizontal,
  ...restProps
}: BoxProp) {
  return (
    <div
      className={`
    ${vertical ? "flex flex-col" : ""}
    ${horizontal ? "flex" : ""}
    ${className || ""}`}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Box;
