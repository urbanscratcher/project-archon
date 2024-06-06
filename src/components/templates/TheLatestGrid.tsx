import { type PropsWithChildren } from "react";
import SectionContainer from "../atoms/SectionContainer";

function TheLatestGrid({ children }: PropsWithChildren) {
  return (
    <SectionContainer
      className={`grid grid-cols-1 gap-4
      bg-mint-100
      lg:grid-rows-[auto_auto_auto]	
      xl:grid-cols-[1fr_2fr_1fr]
      lg:[&>section:first-child]:col-start-2
      xl:[&>section:first-child]:col-start-1
      lg:[&>section:nth-child(2)]:col-start-1
      lg:[&>section:nth-child(2)]:row-span-full
      lg:[&>section:nth-child(2)]:row-start-1
      xl:[&>section:nth-child(2)]:col-start-2
      lg:[&>section:nth-child(3)]:col-start-2
      lg:[&>section:nth-child(3)]:col-end-3
      `}
    >
      {children}
    </SectionContainer>
  );
}

export default TheLatestGrid;
