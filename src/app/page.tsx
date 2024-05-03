import HighlightSectionGrid from "@/components/atoms/HighlightSectionGrid";
import EditorsPickSection from "@/components/templates/EditorsPickSection";
import HeadlineSection from "@/components/templates/HeadlineSection";
import SavedForLaterSection from "@/components/templates/SavedForLaterSection";
import TheLatest from "@/components/templates/TheLatest";
import TopTopicSection from "@/components/templates/TopTopicSection";
import Videos from "@/components/templates/Videos";
import WhatsTrendingGridSection from "@/components/templates/WhatsTrendingGridSection";

export default function Home() {
  return (
    <main>
      <HighlightSectionGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightSectionGrid>
      <TopTopicSection />
      {/* <MonthlyAwards /> */}
      <WhatsTrendingGridSection />
      <SavedForLaterSection />
      <TheLatest />
      <Videos />
    </main>
  );
}
