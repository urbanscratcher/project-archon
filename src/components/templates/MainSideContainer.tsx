import type { PropsWithChildren } from "react";

function MainSideContainer({ children }: PropsWithChildren) {
  return <div className="w-full lg:w-2/3">{children}</div>;
}

export default MainSideContainer;
