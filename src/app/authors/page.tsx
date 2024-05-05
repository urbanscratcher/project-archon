import Authors from "@/components/templates/Authors";
import InspirationSection from "@/components/organisms/InspirationSection";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";

function AuthorsPage() {
  return (
    <main className="flex max-w-[1920px] flex-col gap-4 py-[96px] lg:flex-row lg:gap-0">
      <Authors />
      <aside className="my-4 flex w-full flex-col gap-8 px-8 lg:w-1/3">
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <InspirationSection applyContainer={false} />
      </aside>
    </main>
  );
}

export default AuthorsPage;
