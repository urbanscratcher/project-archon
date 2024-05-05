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
  key,
  id,
  ...restProps
}: ListItemProps) {
  return (
    <li
      key={key}
      id={id}
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
