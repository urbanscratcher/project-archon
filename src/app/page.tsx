import EditorsPickSection from "@/app/components/EditorsPickSection";
import HeadlineSection from "@/app/components/HeadlineSection";
import TopTopicSection from "@/app/components/TopTopicSection";
import HighlightGrid from "@/components/templates/HighlightSectionGrid";

export default function Home() {
  return (
    <main>
      <HighlightGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightGrid>
      <TopTopicSection />
      {/* <WhatsTrendingGrid>
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
      <VideoSection /> */}
    </main>
  );
}
