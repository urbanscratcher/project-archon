import InsightsByTopic from "@/components/sections/InsightsByTopic";
import Inspirations from "@/components/sections/Inspirations";
import WhatsTrendingAside from "@/components/sections/WhatsTrendingAside";

function InsightsPage() {
  return (
    <main className="flex py-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <InsightsByTopic />
      <aside className="my-4 flex w-1/3 flex-col gap-8 px-8">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <Inspirations applyContainer={false} />
      </aside>
    </main>
  );
}

export default InsightsPage;
