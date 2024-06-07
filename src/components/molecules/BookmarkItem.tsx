import { getInsight } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../atoms/Loader";
import InsightsItem from "./InsightsItem";

function BookmarkItem({ idx }: { idx: number }) {
  const {
    data: insight,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["insight", idx],
    queryFn: () => getInsight(idx),
  });

  if (isLoading) {
    return <Loader />;
  }

  // TODO mark err
  if (isError) {
    return <div>Error occurred while fetching insight.</div>;
  }

  return <InsightsItem key={insight.idx} insight={insight} summary />;
}

export default BookmarkItem;
