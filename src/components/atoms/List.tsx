import { type DirectionProps, type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

type ListProps = WrapperProps &
  Partial<DirectionProps> &
  ComponentPropsWithoutRef<"ul">;

function List({
  className,
  children,
  vertical,
  horizontal,
  ...restProps
}: ListProps) {
  return (
    <ul
      className={`
    ${vertical ? "flex flex-col" : ""}
    ${horizontal ? "flex" : ""}
    ${className || ""}`}
      {...restProps}
    >
      {children}
    </ul>
  );
}

export default List;
