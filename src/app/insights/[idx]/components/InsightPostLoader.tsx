import RelatedSection from "@/components/organisms/RelatedSection";
import { getInsight } from "@/services/insights.api";
import InsightPostSection from "./InsightPostSection";

async function InsightPostLoader({ idx }: { idx: number }) {
  const insight = await getInsight(idx);
  return (
    <>
      <InsightPostSection insight={insight} />
      <RelatedSection topic={insight.topic} />
    </>
  );
}

export default InsightPostLoader;
