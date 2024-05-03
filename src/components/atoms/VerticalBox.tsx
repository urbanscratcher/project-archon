import { WrapperProps } from "@/types/CommonTypes";

function VerticalBox({ children, className }: WrapperProps) {
  return <div className={`flex flex-col ${className || ""}`}>{children}</div>;
}

export default VerticalBox;
