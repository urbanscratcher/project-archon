"use client";

import useInsights from "@/hooks/useInsights";
import { Topic } from "@/types/Topic";
import { useSearchParams } from "next/navigation";
import InsightsItem from "./InsightsItem";
import Loader from "../Loader";

function InsightsList({ topics }: { topics: Topic[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("topics") || "all";

  const filteredTopics = topics
    .filter((topic) => topic.name.toLowerCase() === query.toLowerCase())
    .map((topic) => (topic ? topic.idx : 0));
  const filteredTopic = filteredTopics?.length > 0 ? filteredTopics[0] : 0;

  const { data: insights, isLoading, isError } = useInsights(filteredTopic);

  if (isLoading) {
    return (
      <div className="h-[66vh]">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {insights && insights.total > 0 && (
        <ul className="flex flex-col py-4">
          {insights.data.map((insight) => (
            <InsightsItem
              key={`insight_list_${insight.idx}`}
              insight={insight}
              className="border-b border-b-g-300 py-4 last:border-b-0"
              summary
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default InsightsList;
