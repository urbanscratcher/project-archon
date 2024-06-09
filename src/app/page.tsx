import AdSection from "@/app/components/AdSection";
import HighlightGrid from "@/app/components/HighlightSectionGrid";
import SavedForLaterSection from "@/app/components/SavedForLaterSection";
import TheLatestGrid from "@/app/components/TheLatestGrid";
import TheLatestSection from "@/app/components/TheLatestSection";
import VideoSection from "@/app/components/VideoSection";
import WhatsTrendingGrid from "@/app/components/WhatsTrendingGrid";
import Box from "@/components/atoms/Box";
import FeaturedAuthorAside from "@/components/organisms/FeaturedAuthorAside";
import InspirationAside from "@/components/organisms/InspirationAside";
import EditorsPickSection from "./components/EditorsPickSection";
import HeadlineSection from "./components/HeadlineLoader";
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
        <InspirationAside />
        <TheLatestSection />
        <Box vertical className="h-fit gap-4">
          <FeaturedAuthorAside border />
          <AdSection />
        </Box>
      </TheLatestGrid>
      <VideoSection />
    </main>
  );
}
