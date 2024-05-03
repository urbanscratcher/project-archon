import { WrapperProps } from "@/types/CommonTypes";

function EditorsPickContainer({ children }: WrapperProps) {
  return <div className="flex flex-col gap-6 text-sky-700">{children}</div>;
}
export default EditorsPickContainer;
