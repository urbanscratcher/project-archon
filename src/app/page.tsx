import HighlightSectionGrid from "@/components/atoms/HighlightSectionGrid";
import EditorsPickSection from "@/components/templates/EditorsPickSection";
import HeadlineSection from "@/components/templates/HeadlineSection";
import NewsletterSection from "@/components/templates/NewsletterSection";
import SavedForLaterSection from "@/components/templates/SavedForLaterSection";
import StayConnectedSection from "@/components/templates/StayConnectedSection";
import TheLatest from "@/components/templates/TheLatest";
import TopTopicSection from "@/components/templates/TopTopicSection";
import Videos from "@/components/templates/Videos";
import WhatsTrendingSection from "@/components/templates/WhatsTrendingSection";
import WhatsTrendingSectionGrid from "@/components/atoms/WhatsTrendingSectionGrid";

export default function Home() {
  return (
    <main>
      <HighlightSectionGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightSectionGrid>
      <TopTopicSection />
      {/* <MonthlyAwards /> */}
      <WhatsTrendingSectionGrid>
        <WhatsTrendingSection
          className="
      col-span-full lg:col-start-1 lg:row-span-full
      xl:col-end-4"
        />
        <StayConnectedSection
          className="
      lg:col-start-1 lg:col-end-3
      xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2"
        />
        <NewsletterSection
          className="
        lg:col-start-3 lg:col-end-5
      xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3"
        />
      </WhatsTrendingSectionGrid>
      <SavedForLaterSection />
      <TheLatest />
      <Videos />
    </main>
  );
}
