import { getInsightsByTopic } from "@/services/insights.api";
import InsightsItem from "./InsightsItem";

async function RelatedLoader({ topicIdx }: { topicIdx: number }) {
  const insights = await getInsightsByTopic({ topicIdx: topicIdx, limit: 4 });
  return (
    <>
      {insights.data.map((insight) => (
        <InsightsItem
          squared
          insight={insight}
          key={insight.idx}
          className="basis-1/4"
        />
      ))}
    </>
  );
}

export default RelatedLoader;
