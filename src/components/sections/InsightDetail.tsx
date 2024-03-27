import { getInsight } from "@/api/insights.api";
import InsightPost from "@/components/modules/InsightPost";
import Related from "@/components/modules/Related";

async function InsightDetail({ idx }: { idx: number }) {
  const insight = await getInsight(idx);

  return (
    <>
      <InsightPost insight={insight} />
      <Related topic={insight.topic} />
    </>
  );
}

export default InsightDetail;
