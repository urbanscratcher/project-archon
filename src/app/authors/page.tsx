import Authors from "@/components/sections/Authors";
import Inspirations from "@/components/sections/Inspirations";
import WhatsTrendingAside from "@/components/sections/WhatsTrendingAside";

function AuthorsPage() {
  return (
    <main className="flex flex-col gap-4 py-[96px] lg:flex-row lg:gap-0 ">
      {/* @ts-expect-error Async Server Component */}
      <Authors />
      <aside className="my-4 flex w-full flex-col gap-8 px-8 lg:w-1/3">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />
      </aside>
    </main>
  );
}

export default AuthorsPage;
