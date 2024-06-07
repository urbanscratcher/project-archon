/**
 * [ ] 북마크 리스트 없으면 없다는 메시지 렌더링
 * [ ] newsletter 동의 없으면 모달창 띄워서 동의하라고 확인 메시지하고 진행 중지
 * [ ] 북마크 버튼 누르면 메뉴 버튼에 애니메이션 적용
 * [ ] inifinite scroll?
 * [ ] UI - 리스트 뿌릴 떄 좌우 여백?
 */

import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";
import Bookmarks from "@/components/templates/Bookmarks";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";

function BookmarkPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <Bookmarks />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAside />
        <InspirationSection />
      </RightSideContainer>
    </PageContainer>
  );
}

export default BookmarkPage;
