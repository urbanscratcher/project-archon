import { getRandomInsights } from "@/api/insights.api";
import { useQuery } from "@tanstack/react-query";

function useInspirations(query: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["inspirations", query],
    queryFn: () => getRandomInsights({ limit: query }),
  });
  return { data, isLoading, isError };
}

export default useInspirations;
