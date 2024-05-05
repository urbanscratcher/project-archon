import { DirectionProp, type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

// abstracted box component considering direction, stateless

type BoxProp = WrapperProps & DirectionProp & ComponentPropsWithoutRef<"div">;

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
