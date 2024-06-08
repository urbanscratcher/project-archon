import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import WhatsTrendingAside from "./WhatsTrendingAside";

function WhatsTrendingAsideSection({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>What&apos;s Trending</SectionHead>
      <List vertical>
        <WhatsTrendingAside />
      </List>
    </SectionContainer>
  );
}

export default WhatsTrendingAsideSection;
