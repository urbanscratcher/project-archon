import { type PropsWithChildren } from "react";
import SectionContainer from "./SectionContainer";

function TheLatestSectionGrid({ children }: PropsWithChildren) {
  return (
    <SectionContainer
      className={`grid grid-cols-1 gap-4 bg-mint-100 lg:grid-cols-[1fr_2fr_1fr] [&>section:first-child]:lg:col-start-1`}
    >
      {children}
    </SectionContainer>
  );
}

export default TheLatestSectionGrid;
