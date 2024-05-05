import InsightsByTopic from "@/components/templates/InsightsByTopic";
import InspirationSection from "@/components/templates/InspirationSection";
import WhatsTrendingAside from "@/components/templates/WhatsTrendingAside";

function InsightsPage() {
  return (
    <main className="flex flex-col py-[96px] lg:flex-row">
      {/* @ts-expect-error Async Server Component */}
      <InsightsByTopic />
      <aside className="my-4 flex w-full flex-col gap-8 px-8 lg:w-1/3">
        {/* @ts-expect-error Async Server Component */}
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <InspirationSection applyContainer={false} />
      </aside>
    </main>
  );
}

export default InsightsPage;
