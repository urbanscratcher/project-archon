import type { PropsWithChildren } from "react";
import Box from "./Box";

function MainSideContainer({ children }: PropsWithChildren) {
  return <Box className="w-full lg:w-2/3">{children}</Box>;
}

export default MainSideContainer;
