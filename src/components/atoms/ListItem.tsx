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
      className={`
    ${vertical ? "flex flex-col" : ""}
    ${horizontal ? "flex" : ""}
    ${className || ""}`}
      {...restProps}
    >
      {children}
    </li>
  );
}

export default ListItem;
