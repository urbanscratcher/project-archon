/**
 * CHECK
 * [x] 북마크 페이지에서 처음에 localStorage에 북마크 리스트 있는지 확인
 * [x] 북마크 리스트 있으면 불러와서 렌더링
 * [ ] 북마크 리스트 없으면 없다는 메시지 렌더링
 * [ ] inifinite scroll?
 * [ ] newsletter 동의 없으면 모달창 띄워서 동의하라고 확인 메시지하고 진행 중지
 * [x] saved for later에 북마크 리스트 띄우기
 * [x] saved for later에 view all
 * [ ] 북마크 버튼 누르면 메뉴 버튼에 애니메이션 적용
 * [ ] UI - 리스트 뿌릴 떄 좌우 여백 주기
 */

import Bookmarks from "@/components/sections/Bookmarks";
import Inspirations from "@/components/sections/Inspirations";
import WhatsTrendingAside from "@/components/sections/WhatsTrendingAside";

function BookmarkPage() {
  return (
    <main className="flex py-[96px]">
      <Bookmarks />
      <aside className="my-4 flex w-1/3 flex-col gap-8 px-8">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />
      </aside>
    </main>
  );
}

export default BookmarkPage;
