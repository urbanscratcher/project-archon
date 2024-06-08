import {
  FeaturedAuthorsSchema,
  TrendingInsights,
  TrendingInsightsSchema,
  type FeaturedAuthors,
} from "@/types/Trending";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getList } from "./general.api";

export async function getTrendingInsights(): Promise<TrendingInsights> {
  try {
    const res = await getList(API_ENDPOINTS.TRENDING_INSIGHTS);

    const trendingInsights = TrendingInsightsSchema.safeParse(res);

    if (!trendingInsights.success) {
      throw new Error("Failed to parse trendingInsights");
    }

    return trendingInsights.data;
  } catch (error) {
    console.error("Error in getTrendingInsights: ", error);
    throw error;
  }
}

export async function getFeaturedAuthors(
  limit: number,
): Promise<FeaturedAuthors> {
  try {
    const res = await getList(
      `${API_ENDPOINTS.TRENDING_AUTHORS}?offset=0&limit=${limit}`,
    );
    if (!res) {
      throw new Error("Failed to fetch headline");
    }

    const featuredAuthors = FeaturedAuthorsSchema.safeParse(res);
    if (!featuredAuthors.success) {
      throw new Error("Failed to parse");
    }

    return featuredAuthors.data;
  } catch (error) {
    console.error("Error in getFeaturedAuthors: ", error);
    throw error;
  }
}
