import { type WrapperProps } from "@/types/CommonTypes";

function HorizontalBox({ children, className }: WrapperProps) {
  return <div className={`flex ${className || ""}`}>{children}</div>;
}

export default HorizontalBox;
