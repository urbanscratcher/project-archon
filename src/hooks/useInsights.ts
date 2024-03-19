import { getInsightsByTopic } from "@/api/insights.api";
import { useQuery } from "@tanstack/react-query";

function useInsights(query: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insights", query],
    queryFn: () => {
      const topicIdx = query === "all" ? 0 : 7;
      const res = getInsightsByTopic({ topicIdx, limit: 10 });
      return res;
    },
  });

  return { data, isLoading, isError };
}

export default useInsights;
