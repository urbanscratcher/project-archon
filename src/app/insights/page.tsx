import InsightsByTopicSection from "@/app/insights/components/InsightsByTopicSection";
import Loader from "@/components/atoms/Loader";
import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";
import { Suspense } from "react";

function InsightsPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <Suspense fallback={<Loader />}>
          <InsightsByTopicSection />
        </Suspense>
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
