import { getInsight } from "@/services/insights.api";
import InsightPost from "@/components/organisms/InsightPost";
import Related from "@/components/organisms/Related";

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
