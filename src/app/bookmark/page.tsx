/**
 * CHECK

 * [ ] 북마크 페이지에서 처음에 localStorage에 북마크 리스트 있는지 확인
 * [ ] 북마크 리스트 있으면 불러와서 렌더링
 * [ ] 북마크 리스트 없으면 없다는 메시지 렌더링
 * [ ] 시간 남으면 inifinite scroll
 * [ ] newsletter 동의 없으면 모달창 띄워서 동의하라고 확인 메시지하고 진행 중지
 * [ ] 모달창 만들기
 * [ ] saved for later에 북마크 리스트 띄우기
 * [ ] saved for later에 view all
 * [ ] 비디오 재생 버튼 누르면 비디오 띄우기
 * [ ] 비디오 띄울 때 webm 파일은 클라우디나리에서 가져오기
 * [ ] 여력 있으면 북마크 버튼 누르면 메뉴 버튼에 애니메이션 적용
 */

import Authors from "@/components/sections/Authors";
import Inspirations from "@/components/sections/Inspirations";
import WhatsTrendingAside from "@/components/sections/WhatsTrendingAside";

function BookmarkPage() {
  return (
    <main className="flex py-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <Authors />
      <aside className="my-4 flex w-1/3 flex-col gap-8 px-8">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />ㄴ
      </aside>
    </main>
  );
}

export default BookmarkPage;
