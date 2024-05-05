import { type DirectionProps, type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

export type ListItemProps = WrapperProps &
  Partial<DirectionProps> &
  ComponentPropsWithoutRef<"li">;

function ListItem({
  className,
  children,
  vertical,
  horizontal,
  ...restProps
}: ListItemProps) {
  return (
    <li
      {...restProps}
      className={`
    ${vertical ? "flex flex-col" : ""}
    ${horizontal ? "flex" : ""}
    ${className || ""}`}
    >
      {children}
    </li>
  );
}

export default ListItem;
