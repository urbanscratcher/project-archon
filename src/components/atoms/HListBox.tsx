import { WrapperProps } from "@/types/CommonTypes";

function HListBox({ children, className }: WrapperProps) {
  return (
    <ul role="list" className={`flex flex-row ${className || ""}`}>
      {children}
    </ul>
  );
}

export default HListBox;
