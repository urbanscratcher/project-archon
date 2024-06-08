import { getInsight } from "@/services/insights.api";
import { useQuery } from "@tanstack/react-query";
import Loader from "../atoms/Loader";
import InsightsItem from "./InsightsItem";

function BookmarkItem({ idx }: { idx: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["insight", idx],
    queryFn: () => getInsight(idx),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error occurred while fetching insight.</div>;
  }

  if (!data) {
    return;
  }

  return <InsightsItem key={data.idx + ""} insight={data} summary />;
}

export default BookmarkItem;
