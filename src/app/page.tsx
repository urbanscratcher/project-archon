import HighlightSection from "@/components/templates/HighlightSection";
import SavedForLater from "@/components/templates/SavedForLater";
import TheLatest from "@/components/templates/TheLatest";
import TopTopicSection from "@/components/templates/TopTopicSection";
import Videos from "@/components/templates/Videos";
import WhatsTrendingSection from "@/components/templates/WhatsTrendingSection";

export default function Home() {
  return (
    <main>
      <HighlightSection />
      <TopTopicSection />
      {/* <MonthlyAwards /> */}
      <WhatsTrendingSection />
      <SavedForLater />
      <TheLatest />
      <Videos />
    </main>
  );
}
