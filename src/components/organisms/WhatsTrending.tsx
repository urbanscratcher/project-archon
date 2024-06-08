import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsight } from "@/types/Trending";
import List from "../atoms/List";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";
import TrendingInsightsListItem from "../molecules/TrendingInsightsListItem";

async function WhatsTrending() {
  const trendingInsights = await getTrendingInsights();

  const data = {
    head:
      trendingInsights && trendingInsights.length > 0 && trendingInsights[0],
    restList:
      trendingInsights &&
      trendingInsights.length > 1 &&
      trendingInsights.slice(1),
  };

  return (
    <>
      {" "}
      {data?.head && <TrendingInsightsHead insight={data.head} />}
      <hr className="h-[1px] w-full border-0 bg-sky-700 sm:h-full sm:w-[1px]" />
      {data?.restList && (
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

export default WhatsTrending;
