"use client";

import useInsights from "@/hooks/useInsights";
import { useSearchParams } from "next/navigation";
import InsightsItem from "./InsightsItem";

function InsightsList() {
  const searchParams = useSearchParams();
  const query = searchParams.get("topics") || "all";

  const { data, isLoading, isError } = useInsights(query);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <>
      {data && data.total > 0 && (
        <ul className="flex flex-col py-4">
          {data.data.map((insight) => (
            <InsightsItem
              key={insight.title}
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
