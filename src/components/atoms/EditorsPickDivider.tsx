import { WrapperProps } from "@/types/CommonTypes";

function Divider({ className }: WrapperProps) {
  return <hr className={`h-[1px] border-sky-700 ${className || ""}`} />;
}

export default Divider;
