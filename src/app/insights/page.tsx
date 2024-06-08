import InsightsByTopicSection from "@/app/insights/components/InsightsByTopicSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";

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
