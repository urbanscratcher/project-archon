import { getInsightsByTopic } from "@/api/insights.api";
import { useQuery } from "@tanstack/react-query";

function useInsights(query: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insights", query],
    queryFn: () => getInsightsByTopic({ topicIdx: query, limit: 10 }),
  });

  return { data, isLoading, isError };
}

export default useInsights;
