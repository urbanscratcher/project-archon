import InsightsByTopicSection from "@/app/insights/components/InsightsByTopicSection";
import MainSideContainer from "@/components/atoms/MainSideContainer";
import PageContainer from "@/components/atoms/PageContainer";
import RightSideContainer from "@/components/atoms/RightSideContainer";
import InspirationAside from "@/components/organisms/InspirationAside";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";
import { Suspense } from "react";

function InsightsPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <Suspense>
          <InsightsByTopicSection />
        </Suspense>
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAside />
        <InspirationAside />
      </RightSideContainer>
    </PageContainer>
  );
}

export default InsightsPage;
