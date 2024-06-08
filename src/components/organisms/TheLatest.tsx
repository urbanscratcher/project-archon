import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import InsightsItem from "../molecules/InsightsItem";

async function TheLatest() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <>
      {trendingInsights.map((insight) => (
        <InsightsItem key={insight.idx} insight={insight} />
      ))}
    </>
  );
}

export default TheLatest;
