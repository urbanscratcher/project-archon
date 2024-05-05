import { WrapperProps } from "@/types/CommonTypes";

function ListVerticalBox({ children, className }: WrapperProps) {
  return (
    <ul role="list" className={`flex flex-col ${className || ""}`}>
      {children}
    </ul>
  );
}

export default ListVerticalBox;
