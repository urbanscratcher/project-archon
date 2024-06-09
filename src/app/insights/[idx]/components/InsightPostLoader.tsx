import RelatedAside from "@/components/organisms/RelatedAside";
import { getInsight } from "@/services/insights.api";
import InsightPostSection from "./InsightPostSection";

async function InsightPostLoader({ idx }: { idx: number }) {
  const insight = await getInsight(idx);
  return (
    <>
      <InsightPostSection insight={insight} />
      <RelatedAside topic={insight.topic} />
    </>
  );
}

export default InsightPostLoader;
