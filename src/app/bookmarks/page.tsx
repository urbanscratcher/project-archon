/**
 * [ ] 북마크 리스트 없으면 없다는 메시지 렌더링
 * [ ] newsletter 동의 없으면 모달창 띄워서 동의하라고 확인 메시지하고 진행 중지
 * [ ] 북마크 버튼 누르면 메뉴 버튼에 애니메이션 적용
 * [ ] inifinite scroll?
 * [ ] UI - 리스트 뿌릴 떄 좌우 여백?
 */

import Bookmarks from "@/components/templates/Bookmarks";
import Inspirations from "@/components/templates/Inspirations";
import WhatsTrendingAside from "@/components/templates/WhatsTrendingAside";

function BookmarkPage() {
  return (
    <main className="flex flex-col py-[96px] lg:flex-row">
      <Bookmarks />
      <aside className="my-4 flex w-full flex-col gap-8 px-4 lg:w-1/3 lg:px-8">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />
      </aside>
    </main>
  );
}

export default BookmarkPage;
