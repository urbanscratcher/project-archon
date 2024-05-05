import HighlightSectionGrid from "@/components/templates/HighlightSectionGrid";
import EditorsPickSection from "@/components/organisms/EditorsPickSection";
import HeadlineSection from "@/components/organisms/HeadlineSection";
import NewsletterSection from "@/components/organisms/NewsletterSection";
import SavedForLaterSection from "@/components/organisms/SavedForLaterSection";
import StayConnectedSection from "@/components/organisms/StayConnectedSection";
import TheLatestSection from "@/components/organisms/TheLatestSection";
import TopTopicSection from "@/components/organisms/TopTopicSection";
import VideoSection from "@/components/templates/VideoSection";
import WhatsTrendingSection from "@/components/organisms/WhatsTrendingSection";
import WhatsTrendingSectionGrid from "@/components/templates/WhatsTrendingSectionGrid";
import TheLatestSectionGrid from "@/components/templates/TheLatestSectionGrid";
import InspirationSection from "@/components/organisms/InspirationSection";
import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import Box from "@/components/atoms/Box";
import AdSection from "@/components/organisms/AdSection";

export default function Home() {
  return (
    <main>
      <HighlightSectionGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightSectionGrid>
      <TopTopicSection />
      <WhatsTrendingSectionGrid>
        <WhatsTrendingSection />
        <StayConnectedSection />
        <NewsletterSection />
      </WhatsTrendingSectionGrid>
      <SavedForLaterSection />
      <TheLatestSectionGrid>
        <InspirationSection />
        <TheLatestSection />
        <Box vertical className="h-fit gap-4">
          <FeaturedAuthorSection />
          <AdSection />
        </Box>
      </TheLatestSectionGrid>
      <VideoSection />
    </main>
  );
}
