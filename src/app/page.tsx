import Highlights from "@/components/sections/Highlights";
import TopTopics from "@/components/sections/TopTopics";
import WhatsTrending from "@/components/sections/WhatsTrending";
import SavedForLater from "@/components/sections/SavedForLater";
import TheLatest from "@/components/sections/TheLatest";
import Videos from "@/components/sections/Videos";

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
