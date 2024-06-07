import type { PropsWithChildren } from "react";

function RightSideContainer({ children }: PropsWithChildren) {
  return (
    <aside className="flex w-full flex-col lg:w-1/3 lg:py-12">{children}</aside>
  );
}

export default RightSideContainer;
