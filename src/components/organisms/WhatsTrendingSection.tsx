import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import WhatsTrending from "./WhatsTrending";

function WhatsTrendingSection() {
  return (
    <SectionContainer whitespace="none">
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAllButton to={"/insights"} />
      </SectionHead>
      <div
        className={`grid grid-cols-1 gap-6
            sm:grid-cols-[1fr_auto_1fr]
            lg:grid-cols-[3fr_auto_2fr] lg:gap-4
            xl:lg:grid-cols-[3fr_auto_2fr_auto]`}
      >
        <WhatsTrending />
      </div>
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
