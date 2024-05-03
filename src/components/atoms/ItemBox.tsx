import { WrapperProps } from "@/types/CommonTypes";

function ItemBox({ children, className }: WrapperProps) {
  return <li className={className}>{children}</li>;
}
export default ItemBox;
