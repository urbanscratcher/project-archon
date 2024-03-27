import { getInsightsByTopic } from "@/api/insights.api";
import InsightsItem from "./InsightsItem";

async function RelatedList({ topicIdx }: { topicIdx: number }) {
  const insights = await getInsightsByTopic({ topicIdx: topicIdx, limit: 4 });
  return (
    <>
      {insights.data.map((insight) => (
        <InsightsItem
          squared
          insight={insight}
          key={`related_${insight.idx}`}
          className="basis-1/4"
        />
      ))}
    </>
  );
}

export default RelatedList;
