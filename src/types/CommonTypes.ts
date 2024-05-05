import { type ReactNode } from "react";

export type WrapperProps = {
  children?: ReactNode;
  className?: string;
};

export type DirectionProp = {
  vertical?: boolean;
  horizontal?: boolean;
};
