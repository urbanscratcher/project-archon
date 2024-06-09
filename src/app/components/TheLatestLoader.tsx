import InsightsItem from "@/components/molecules/InsightsItem";
import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";

async function TheLatestLoader() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <>
      {trendingInsights.map((insight) => {
        const data = { ...insight, createdBy: insight.creator };
        return (
          <InsightsItem key={`${insight.idx}`} insight={data} oneThirdImage />
        );
      })}
    </>
  );
}

export default TheLatestLoader;
