import { WrapperProps } from "@/types/CommonTypes";
import SectionContainer from "./SectionContainer";

function WhatsTrendingSectionGrid({ children }: WrapperProps) {
  return (
    <SectionContainer
      className="
      grid grid-cols-1 gap-6
      bg-y-100
      sm:grid-cols-2
      lg:grid-cols-4 lg:grid-rows-[1fr_auto]
      xl:grid-rows-[auto_auto_auto]"
    >
      {children}
    </SectionContainer>
  );
}

export default WhatsTrendingSectionGrid;
