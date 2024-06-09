"use client";

import Box from "@/components/atoms/Box";
import List from "@/components/atoms/List";
import Loader from "@/components/atoms/Loader";
import InsightsItem from "@/components/molecules/InsightsItem";
import useInsights from "@/hooks/useInsights";
import { Topic } from "@/types/Topic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function InsightsList({ topics }: { topics: Topic[] }) {
  const searchParams = useSearchParams();
  const topicsQuery = searchParams.get("topics") || "all";
  const sortQuery = searchParams.get("sort") || "";
  const orderQuery = searchParams.get("order") || "";

  const [isAsc, setIsAsc] = useState(false);
  const [topicIdx, setTopicIdx] = useState(0);

  // set order state from query str
  useEffect(() => {
    if (sortQuery === "date" && orderQuery === "asc") {
      setIsAsc(true);
    } else {
      setIsAsc(false);
    }
  }, [sortQuery, orderQuery]);

  // set topic idx
  useEffect(() => {
    const filteredTopics = topics
      .filter((topic) => topic.name.toLowerCase() === topicsQuery.toLowerCase())
      .map((topic) => (topic ? topic.idx : 0));

    const filteredTopic = filteredTopics?.length > 0 ? filteredTopics[0] : 0;

    setTopicIdx(filteredTopic);
  }, [topicsQuery, topics]);

  // fetch insights by topic idx
  const { data: insights, isLoading, isError } = useInsights(topicIdx, isAsc);

  // on loading
  if (isLoading) {
    return (
      <div className="h-[66vh]">
        <Loader />
      </div>
    );
  }

  // on error
  if (isError) {
    return <p>Error in fetching insights</p>;
  }

  // render empty list
  if (!insights || insights.total <= 0) {
    return (
      <Box vertical className="items-center justify-center py-10">
        <h4 className="py-4 font-sans">No articles found for this topic</h4>
        <p className="p-lg">New articles will be updated soon</p>
        <p className="p-lg">Please check other topics :)</p>
      </Box>
    );
  }

  return (
    <>
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
    </>
  );
}

export default InsightsList;
