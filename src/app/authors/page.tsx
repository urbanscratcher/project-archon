import Authors from "@/components/sections/Authors";
import Inspirations from "@/components/sections/Inspirations";
import WhatsTrendingAside from "@/components/sections/WhatsTrendingAside";

function AuthorsPage() {
  return (
    <main className="flex flex-col gap-4 py-[32px] sm:flex-row sm:gap-0 sm:py-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <Authors />
      <aside className="my-4 flex w-full flex-col gap-8 px-8 sm:w-1/3">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />
      </aside>
    </main>
  );
}

export default AuthorsPage;
