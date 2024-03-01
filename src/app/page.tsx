import Highlights from "@/components/sections/Highlights";
import SavedForLater from "@/components/sections/SavedForLater";
import TheLatest from "@/components/sections/TheLatest";
import TopTopics from "@/components/sections/TopTopics";
import Videos from "@/components/sections/Videos";
import WhatsTrending from "@/components/sections/WhatsTrending";

export default function Home() {
  return (
    <>
      <Highlights />
      <TopTopics />
      {/* <MonthlyAwards /> */}
      <WhatsTrending />
      <SavedForLater />
      <TheLatest />
      <Videos />
    </>
  );
}
