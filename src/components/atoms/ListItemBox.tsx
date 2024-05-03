import { WrapperProps } from "@/types/CommonTypes";

function ListItemBox({ children, className }: WrapperProps) {
  return <li className={className}>{children}</li>;
}
export default ListItemBox;
