import InsightsByTopicSection from "@/app/insights/components/InsightsByTopicSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import MainSideContainer from "@/components/organisms/MainSideContainer";
import PageContainer from "@/components/organisms/PageContainer";
import PageDivider from "@/components/organisms/PageDivider";
import RightSideContainer from "@/components/organisms/RightSideContainer";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";

function InsightsPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <InsightsByTopicSection />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAsideSection />
        <InspirationSection />
      </RightSideContainer>
    </PageContainer>
  );
}

export default InsightsPage;
