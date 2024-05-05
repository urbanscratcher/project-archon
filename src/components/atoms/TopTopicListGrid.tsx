import { type WrapperProps } from "@/types/CommonTypes";

function TopTopicListGrid({ children }: WrapperProps) {
  return (
    <ul
      className={`grid grid-cols-1 gap-y-4 sm:gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
    >
      {children}
    </ul>
  );
}

export default TopTopicListGrid;
