import { getInsightsByTopic } from "@/api/insights.api";
import InsightsItem from "./InsightsItem";

async function Related() {
  const insights = await getInsightsByTopic({ topicIdx: 6, limit: 4 });
  return (
    <>
      {insights.data.map((insight) => (
        <InsightsItem
          isSquared
          insight={insight}
          key={insight.title}
          className="basis-1/4"
        />
      ))}
    </>
  );
}

export default Related;
