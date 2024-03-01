import { TrendingInsights, TrendingInsightsSchema } from "@/types/Trending";
import { getList } from "./general.api";

export async function getTrendingInsights(): Promise<TrendingInsights> {
  const res = await getList(
    "http://localhost:5001/archon-api/v1/trending/insights",
  );

  const trendingInsights = TrendingInsightsSchema.safeParse(res);

  if (!trendingInsights || !trendingInsights.success) {
    console.error(trendingInsights.error);
  }

  if (trendingInsights.success && trendingInsights?.data) {
    return trendingInsights.data;
  }

  return [];
}
