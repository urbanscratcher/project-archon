import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import WhatsTrendingAsideLoader from "../molecules/WhatsTrendingAsideLoader";

function WhatsTrendingAside({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>What&apos;s Trending</SectionHead>
      <List vertical>
        <WhatsTrendingAsideLoader />
      </List>
    </SectionContainer>
  );
}

export default WhatsTrendingAside;
