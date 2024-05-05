import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import WhatsTrendingContentGrid from "../atoms/WhatsTrendingContentGrid";
import WhatsTrendingWithCover from "../organisms/WhatsTrendingWithCover";

function WhatsTrendingSection() {
  return (
    <SectionContainer whitespace="no">
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAll to={"/insights"} />
      </SectionHead>
      <WhatsTrendingContentGrid>
        <WhatsTrendingWithCover />
      </WhatsTrendingContentGrid>
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
