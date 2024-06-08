import SavedForLaterSection from "@/app/components/SavedForLaterSection";

export default function Home() {
  return (
    <main>
      {/* <HighlightGrid>
        <HeadlineSection />
        <EditorsPickSection />
      </HighlightGrid>
      <TopTopicSection />
      <WhatsTrendingGrid>
        <WhatsTrendingSection />
        <StayConnectedSection />
        <NewsletterSection />
      </WhatsTrendingGrid> */}
      <SavedForLaterSection />
      {/* <TheLatestGrid>
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
