import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import WhatsTrendingAsideContent from "../molecules/WhatsTrendingAsideContent";

function WhatsTrendingAsideSection({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>What&apos;s Trending</SectionHead>
      <List vertical>
        <WhatsTrendingAsideContent />
      </List>
    </SectionContainer>
  );
}

export default WhatsTrendingAsideSection;
