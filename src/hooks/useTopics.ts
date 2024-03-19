import { getTopics } from "@/api/topics.api";
import { useQuery } from "@tanstack/react-query";

function useTopics() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topics"],
    queryFn: () => getTopics(),
  });
  return { data, isLoading, isError };
}

export default useTopics;
