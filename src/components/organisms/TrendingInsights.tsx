import { getTrendingInsights } from "@/api/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import TrendingInsightsList from "../molecules/TrendingInsightsList";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";

async function TrendingInsights() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

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
      <hr className="h-[1px] w-full bg-sky-700 sm:h-full sm:w-[1px]" />
      {data?.restList && <TrendingInsightsList insights={data.restList} />}
      <hr className="hidden h-full bg-sky-700 xl:block xl:w-[1px]" />
    </>
  );
}

export default TrendingInsights;
