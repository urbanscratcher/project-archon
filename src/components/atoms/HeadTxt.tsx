import { type ReactNode } from "react";

type HeadTxtType = {
  children: ReactNode;
  className?: string;
};

function HeadTxt({ children, className }: HeadTxtType) {
  return <h1 className={`text-head ${className || ""}`}>{children}</h1>;
}

export default HeadTxt;
