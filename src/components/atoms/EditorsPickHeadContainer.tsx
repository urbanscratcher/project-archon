import { WrapperProps } from "@/types/CommonTypes";

function EditorsPickHeadContainer({ children }: WrapperProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export default EditorsPickHeadContainer;
