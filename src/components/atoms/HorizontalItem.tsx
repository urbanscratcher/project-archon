import { type WrapperProps } from "@/types/CommonTypes";

function HorizontalItem({ children, className }: WrapperProps) {
  return <li className={`flex ${className || ""}`}>{children}</li>;
}

export default HorizontalItem;
