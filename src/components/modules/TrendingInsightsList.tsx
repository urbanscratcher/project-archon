import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsight, TrendingInsights } from "@/types/Trending";
import InsightsItemHead from "./InsightsItemHead";
import TrendingInsightsItem from "./TrendingInsightsItem";

async function TrendingInsightsList() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  if (!trendingInsights || trendingInsights.length <= 0) {
    return <></>;
  }

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <InsightsItemHead insight={trendingInsights[0]} />
      <ul className="flex flex-col py-4 sm:py-0 lg:block lg:border-r-sky-700">
        {trendingInsights.map((insight: TrendingInsight) => {
          return (
            <>
              <TrendingInsightsItem key={insight.idx} insight={insight} />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default TrendingInsightsList;
