import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import WhatsTrendingGrid from "../atoms/WhatsTrendingGrid";
import WhatsTrendingWithCover from "../organisms/WhatsTrendingWithCover";

function WhatsTrendingSection({ className }: { className?: string }) {
  return (
    <SectionContainer whitespace="no" className={`${className || ""}`}>
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAll to={"/insights"} />
      </SectionHead>
      <WhatsTrendingGrid>
        <WhatsTrendingWithCover />
      </WhatsTrendingGrid>
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
