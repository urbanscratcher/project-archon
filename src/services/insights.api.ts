import {
  InsightRandomList,
  InsightRandomListSchema,
  InsightSchema,
  Insights,
  InsightsSchema,
  type Insight,
} from "@/types/Insight";
import API_ENDPOINTS from "../libs/configApiUrl";
import { create, getList, getOne } from "./general.api";

export async function getInsight(idx: number): Promise<Insight> {
  try {
    const res = await getOne(`${API_ENDPOINTS.INSIGHTS}/${idx}`);

    const insight = InsightSchema.safeParse(res);
    if (!insight.success) {
      throw new Error("Failed to parse insight");
    }

    return insight.data;
  } catch (error) {
    console.error("Errors in getInsight: ", error);
    throw error;
  }
}

export async function getInsightsByTopic({
  topicIdx,
  isAsc = false,
  limit = 10,
}: {
  topicIdx: number;
  isAsc?: boolean;
  limit: number;
}): Promise<Insights> {
  try {
    const queryString =
      topicIdx === 0
        ? `${API_ENDPOINTS.INSIGHTS}?limit=${limit}&sorts=["${isAsc ? "" : "-"}idx"]`
        : `${API_ENDPOINTS.INSIGHTS}?limit=${limit}&filter={"and":[{"topic_idx":"${topicIdx}"}]}&sorts=["${isAsc ? "" : "-"}idx"]`;
    const res = await getList(queryString);

    const insights = InsightsSchema.safeParse(res);
    if (!insights.success) {
      throw new Error("Failed to parse insights by topic");
    }

    return insights.data;
  } catch (error) {
    console.error("Errors in getInsightsByTopic: ", error);
    throw error;
  }
}

export async function getInsightsByAuthor({
  authorIdx,
  offset,
  limit = 10,
}: {
  authorIdx: number;
  offset: number;
  limit: number;
}) {
  try {
    const queryString = `${API_ENDPOINTS.INSIGHTS}?offset=${offset}&limit=${limit}&filter={"and":[{"created_by":"${authorIdx}"}]}`;
    const res = await getList(queryString);

    if (!res) {
      throw new Error("Failed to fetch insights by author");
    }

    const insights = InsightsSchema.safeParse(res);
    if (!insights.success) {
      throw new Error("Failed to parse insights by author");
    }

    return insights.data;
  } catch (error) {
    console.error("Errors in getInsightsByAuthor: ", error);
    throw error;
  }
}

export async function getRandomInsights({
  limit = 6,
}: {
  limit: number;
}): Promise<InsightRandomList> {
  try {
    const queryString = `${API_ENDPOINTS.RANDOM_INSIGHTS}?limit=${limit}`;
    const res = await getList(queryString);

    const insights = InsightRandomListSchema.safeParse(res);
    if (!insights?.success) {
      throw new Error("Failed to parse getRandomInsights");
    }

    return insights.data;
  } catch (error) {
    console.error("Errors in getRandomInsights: ", error);
    throw error;
  }
}
