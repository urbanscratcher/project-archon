import Box from "@/components/atoms/Box";
import AdSection from "@/components/organisms/AdSection";
import EditorsPickSection from "@/components/organisms/EditorsPickSection";
import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import HeadlineSection from "@/components/organisms/HeadlineSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import NewsletterSection from "@/components/organisms/NewsletterSection";
import SavedForLaterSection from "@/components/organisms/SavedForLaterSection";
import StayConnectedSection from "@/components/organisms/StayConnectedSection";
import TheLatestSection from "@/components/organisms/TheLatestSection";
import TopTopicSection from "@/components/organisms/TopTopicSection";
import WhatsTrendingSection from "@/components/organisms/WhatsTrendingSection";
import HighlightGrid from "@/components/templates/HighlightSectionGrid";
import TheLatestGrid from "@/components/templates/TheLatestGrid";
import VideoSection from "@/components/templates/VideoSection";
import WhatsTrendingGrid from "@/components/templates/WhatsTrendingGrid";

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
          <FeaturedAuthorSection />
          <AdSection />
        </Box>
      </TheLatestGrid>
      <VideoSection />
    </main>
  );
}
