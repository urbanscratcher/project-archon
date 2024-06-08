import EditorsPickSection from "@/app/_components/EditorsPickSection";
import HeadlineSection from "@/app/_components/HeadlineSection";
import HighlightGrid from "@/components/templates/HighlightSectionGrid";

export default function Home() {
  return (
    <main>
      <HighlightGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightGrid>
      {/* <TopTopicSection />
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
      <VideoSection /> */}
    </main>
  );
}
