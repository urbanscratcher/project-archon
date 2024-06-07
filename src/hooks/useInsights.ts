import { getInsightsByTopic } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";

function useInsights(query: number, isAsc: boolean) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insights", query, isAsc],
    queryFn: () =>
      getInsightsByTopic({ topicIdx: query, limit: 10, isAsc: isAsc }),
  });

  return { data, isLoading, isError };
}

export default useInsights;
