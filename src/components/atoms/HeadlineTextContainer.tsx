import { WrapperProps } from "@/types/CommonTypes";

function HeadlineTextContainer({ children }: WrapperProps) {
  return (
    <div
      className={`absolute bottom-0 mx-4 my-8 flex flex-col gap-3 text-white sm:mx-6 sm:my-16`}
    >
      {children}
    </div>
  );
}
export default HeadlineTextContainer;
