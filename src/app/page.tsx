import AdSection from "@/app/components/AdSection";
import HighlightGrid from "@/app/components/HighlightSectionGrid";
import SavedForLaterSection from "@/app/components/SavedForLaterSection";
import TheLatestGrid from "@/app/components/TheLatestGrid";
import TheLatestSection from "@/app/components/TheLatestSection";
import VideoSection from "@/app/components/VideoSection";
import WhatsTrendingGrid from "@/app/components/WhatsTrendingGrid";
import Box from "@/components/atoms/Box";
import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import EditorsPickSection from "./components/EditorsPickSection";
import HeadlineSection from "./components/HeadlineSection";
import NewsletterSection from "./components/NewsletterSection";
import StayConnectedSection from "./components/StayConnectedSection";
import TopTopicSection from "./components/TopTopicSection";
import WhatsTrendingSection from "./components/WhatsTrendingSection";

export default function Home() {
  return (
    <main>
      <HighlightGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightGrid>
      <TopTopicSection />
      <WhatsTrendingGrid>
        <WhatsTrendingSection />
        <StayConnectedSection />
        <NewsletterSection />
      </WhatsTrendingGrid>
      <SavedForLaterSection />
      <TheLatestGrid>
        <InspirationSection />
        <TheLatestSection />
        <Box vertical className="h-fit gap-4">
          <FeaturedAuthorSection border />
          <AdSection />
        </Box>
      </TheLatestGrid>
      <VideoSection />
    </main>
  );
}
