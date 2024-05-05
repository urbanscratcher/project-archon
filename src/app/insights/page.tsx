import InsightsByTopic from "@/components/templates/InsightsByTopic";
import InspirationSection from "@/components/organisms/InspirationSection";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";

function InsightsPage() {
  return (
    <main className="mx-auto my-0 flex max-w-[1920px] py-[96px] lg:flex-row">
      <InsightsByTopic />
      <aside className="my-4 flex w-full flex-col gap-8 px-8 lg:max-w-[300px]">
        <WhatsTrendingAside />
        {/* @ts-expect-error Async Server Component */}
        <InspirationSection applyContainer={false} />
      </aside>
    </main>
  );
}

export default InsightsPage;
