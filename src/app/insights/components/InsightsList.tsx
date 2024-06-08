"use client";

import List from "@/components/atoms/List";
import useInsights from "@/hooks/useInsights";
import { Topic } from "@/types/Topic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../../../components/atoms/Loader";
import InsightsItem from "../../../components/molecules/InsightsItem";

function InsightsList({ topics }: { topics: Topic[] }) {
  const searchParams = useSearchParams();
  const topicsQuery = searchParams.get("topics") || "all";
  const sortQuery = searchParams.get("sort") || "";
  const orderQuery = searchParams.get("order") || "";

  const [isAsc, setIsAsc] = useState(false);
  const [topicIdx, setTopicIdx] = useState(0);

  useEffect(() => {
    if (sortQuery === "date" && orderQuery === "asc") {
      setIsAsc(true);
    } else {
      setIsAsc(false);
    }
  }, [sortQuery, orderQuery]);

  useEffect(() => {
    const filteredTopics = topics
      .filter((topic) => topic.name.toLowerCase() === topicsQuery.toLowerCase())
      .map((topic) => (topic ? topic.idx : 0));

    const filteredTopic = filteredTopics?.length > 0 ? filteredTopics[0] : 0;

    setTopicIdx(filteredTopic);
  }, [topicsQuery, topics]);

  const { data: insights, isLoading, isError } = useInsights(topicIdx, isAsc);

  if (isLoading) {
    return (
      <div className="h-[66vh]">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <p>Error in fetching insights</p>;
  }

  return (
    <>
      {insights && insights.total > 0 && (
        <List vertical className="py-4">
          {insights.data.map((insight) => (
            <InsightsItem
              key={insight.idx}
              insight={insight}
              className="border-b border-b-g-300 py-4 last:border-b-0"
              summary
            />
          ))}
        </List>
      )}
    </>
  );
}

export default InsightsList;
