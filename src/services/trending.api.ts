import {
  FeaturedAuthorsSchema,
  TrendingInsights,
  TrendingInsightsSchema,
} from "@/types/Trending";
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

export async function getFeaturedAuthors(limit: number) {
  const res = await getList(
    `http://localhost:5001/archon-api/v1/trending/authors?offset=0&limit=${limit}`,
  );
  if (!res) {
    throw new Error("Failed to fetch headline");
  }

  const featuredAuthors = FeaturedAuthorsSchema.safeParse(res);
  if (!featuredAuthors.success) {
    throw new Error("Failed to parse");
  }

  if (featuredAuthors.success && featuredAuthors?.data) {
    return featuredAuthors.data;
  }

  return [];
}
