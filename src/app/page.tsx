import HighlightSectionGrid from "@/components/atoms/HighlightSectionGrid";
import EditorsPickSection from "@/components/templates/EditorsPickSection";
import HeadlineSection from "@/components/templates/HeadlineSection";
import NewsletterSection from "@/components/templates/NewsletterSection";
import SavedForLaterSection from "@/components/templates/SavedForLaterSection";
import StayConnectedSection from "@/components/templates/StayConnectedSection";
import TheLatestSection from "@/components/templates/TheLatestSection";
import TopTopicSection from "@/components/templates/TopTopicSection";
import Videos from "@/components/templates/Videos";
import WhatsTrendingSection from "@/components/templates/WhatsTrendingSection";
import WhatsTrendingSectionGrid from "@/components/atoms/WhatsTrendingSectionGrid";
import TheLatestSectionGrid from "@/components/atoms/TheLatestSectionGrid";

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
        <WhatsTrendingSection />
        <StayConnectedSection />
        <NewsletterSection />
      </WhatsTrendingSectionGrid>
      <SavedForLaterSection />
      <TheLatestSectionGrid>
        <TheLatestSection />
      </TheLatestSectionGrid>
      <Videos />
    </main>
  );
}
