import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";
import InsightsByTopicSection from "@/components/templates/InsightsByTopicSection";
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
        <WhatsTrendingAside />
        <InspirationSection />
      </RightSideContainer>
    </PageContainer>
  );
}

export default InsightsPage;
