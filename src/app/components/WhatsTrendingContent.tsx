import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsight } from "@/types/Trending";
import List from "../../components/atoms/List";
import TrendingInsightsHead from "./TrendingInsightsHead";
import TrendingInsightsListItem from "./TrendingInsightsListItem";

async function WhatsTrendingContent() {
  const trendingInsights = await getTrendingInsights();

  const data = {
    head: trendingInsights.length > 0 ? trendingInsights[0] : undefined,
    restList:
      trendingInsights && trendingInsights.length > 1
        ? trendingInsights.slice(1)
        : [],
  };

  if (!data?.head) {
    return;
  }

  return (
    <>
      <TrendingInsightsHead insight={data.head} />
      <hr className="h-[1px] w-full border-0 bg-sky-700 sm:h-full sm:w-[1px]" />
      {data.restList.length > 0 && (
        <List vertical className="lg:block">
          {data.restList.map((insight: TrendingInsight) => (
            <TrendingInsightsListItem
              key={`trendingInsights_${insight.idx}`}
              insight={insight}
            />
          ))}
        </List>
      )}
      <hr className="hidden h-full bg-sky-700 xl:block xl:w-[1px]" />
    </>
  );
}

export default WhatsTrendingContent;
