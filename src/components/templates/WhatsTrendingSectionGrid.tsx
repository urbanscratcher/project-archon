import { WrapperProps } from "@/types/CommonTypes";
import SectionContainer from "../atoms/SectionContainer";

function WhatsTrendingSectionGrid({ children }: WrapperProps) {
  return (
    <SectionContainer
      className="
      grid grid-cols-1
      gap-6
      bg-y-100
      sm:grid-cols-2
      lg:grid-cols-[1fr_1fr]
      lg:grid-rows-[1fr_auto]
      xl:grid-cols-[3fr_1fr]
      xl:grid-rows-[auto_auto_auto]
      [&>section:first-child]:col-span-full
      xl:[&>section:first-child]:col-end-2
      xl:[&>section:first-child]:row-span-full
      "
    >
      {children}
    </SectionContainer>
  );
}

export default WhatsTrendingSectionGrid;
