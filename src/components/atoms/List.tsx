import { type WrapperProps } from "@/types/CommonTypes";
import { type ComponentPropsWithoutRef } from "react";

type DirectionProp = {
  direction: "vertical" | "horizontal" | "none";
};

type ListProp = WrapperProps & DirectionProp & ComponentPropsWithoutRef<"ul">;

type ItemProp = WrapperProps & DirectionProp & ComponentPropsWithoutRef<"li">;

function List({
  className,
  children,
  direction = "none",
  ...restProps
}: ListProp) {
  return (
    <ul className={`${className || ""}`} {...restProps}>
      {children}
    </ul>
  );
}

function Item({
  className,
  children,
  direction = "none",
  ...restProps
}: ItemProp) {
  return (
    <li className={`${className || ""}`} {...restProps}>
      {children}
    </li>
  );
}

List.Item = Item;

export default List;
