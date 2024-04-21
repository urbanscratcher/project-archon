import HighlightSection from "@/components/templates/HighlightSection";
import SavedForLater from "@/components/templates/SavedForLater";
import TheLatest from "@/components/templates/TheLatest";
import TopTopics from "@/components/templates/TopTopics";
import Videos from "@/components/templates/Videos";
import WhatsTrending from "@/components/templates/WhatsTrending";

export default function Home() {
  return (
    <main>
      <HighlightSection />
      <TopTopics />
      {/* <MonthlyAwards /> */}
      <WhatsTrending />
      <SavedForLater />
      {/* @ts-expect-error Async Server Component */}
      <TheLatest />
      <Videos />
    </main>
  );
}
