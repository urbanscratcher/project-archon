import { type DirectionProp, type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

// abstracted ul, li compound component considering direction, stateless

type ListProp = WrapperProps & DirectionProp & ComponentPropsWithoutRef<"ul">;

type ItemProp = WrapperProps & DirectionProp & ComponentPropsWithoutRef<"li">;

function List({
  className,
  children,
  vertical,
  horizontal,
  ...restProps
}: ListProp) {
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

function Item({
  className,
  children,
  vertical,
  horizontal,
  ...restProps
}: ItemProp) {
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

List.Item = Item;

export default List;
