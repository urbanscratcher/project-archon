import Box from "@/components/atoms/Box";
import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import ViewAllButton from "../../components/atoms/ViewAllButton";
import WhatsTrendingLoader from "./WhatsTrendingLoader";

function WhatsTrendingSection() {
  return (
    <SectionContainer whitespace="none">
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAllButton to={"/insights"} />
      </SectionHead>
      <Box
        className={`grid grid-cols-1 gap-6
            sm:grid-cols-[1fr_auto_1fr]
            lg:grid-cols-[3fr_auto_2fr] lg:gap-4
            xl:lg:grid-cols-[3fr_auto_2fr_auto]`}
      >
        <WhatsTrendingLoader />
      </Box>
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
