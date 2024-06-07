import InsightPostSection from "@/components/organisms/InsightPostSection";
import Related from "@/components/organisms/Related";
import { getInsight } from "@/services/insights.api";

async function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;
  const insight = await getInsight(idx);

  return (
    <main className="py-[96px]">
      <InsightPostSection insight={insight} />
      <Related topic={insight.topic} />
    </main>
  );
}

export default InsightPage;
