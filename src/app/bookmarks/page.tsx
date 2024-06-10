/**
 * [ ] 북마크 버튼 누르면 메뉴 버튼에 애니메이션 적용
 * [ ] inifinite scroll?
 */

import BookmarksSection from "@/app/bookmarks/components/BookmarksSection";
import MainSideContainer from "@/components/atoms/MainSideContainer";
import PageContainer from "@/components/atoms/PageContainer";
import RightSideContainer from "@/components/atoms/RightSideContainer";
import InspirationAside from "@/components/organisms/InspirationAside";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";

function BookmarkPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <BookmarksSection />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAside />
        <InspirationAside />
      </RightSideContainer>
    </PageContainer>
  );
}

export default BookmarkPage;
