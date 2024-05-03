import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights as WhatsTrendingWithCover } from "@/types/Trending";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";
import TrendingInsightsList from "../molecules/TrendingInsightsList";

async function WhatsTrendingWithCover() {
  const trendingInsights: WhatsTrendingWithCover = await getTrendingInsights();

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
      {data?.head && <TrendingInsightsHead insight={data.head} />}
      <hr className="h-[1px] w-full border-0 bg-sky-700 sm:h-full sm:w-[1px]" />
      {data?.restList && <TrendingInsightsList insights={data.restList} />}
      <hr className="hidden h-full bg-sky-700 xl:block xl:w-[1px]" />
    </>
  );
}

export default WhatsTrendingWithCover;
