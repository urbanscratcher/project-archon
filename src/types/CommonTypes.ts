import { type ReactNode } from "react";

export type WrapperProps = {
  children?: ReactNode;
  className?: string;
};

type VerticalProp = {
  vertical: boolean;
  horizontal?: never;
};

type HorizontalProp = {
  horizontal: boolean;
  vertical?: never;
};

export type DirectionProps = VerticalProp | HorizontalProp;
