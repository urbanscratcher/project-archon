import SectionContainer from "../templates/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import WhatsTrendingContent from "./WhatsTrendingContent";

function WhatsTrendingSection() {
  return (
    <SectionContainer whitespace="no">
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAll to={"/insights"} />
      </SectionHead>
      <WhatsTrendingContent />
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
