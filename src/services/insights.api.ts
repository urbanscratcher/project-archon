import {
  InsightRandomList,
  InsightRandomListSchema,
  InsightSchema,
  Insights,
  InsightsSchema,
  type Insight,
} from "@/types/Insight";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getList, getOne } from "./general.api";

export async function getInsight(idx: number): Promise<Insight> {
  try {
    const res = await getOne(`${API_ENDPOINTS.INSIGHTS}/${idx}`);

    console.log(res);

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
  const queryString =
    topicIdx === 0
      ? `${API_ENDPOINTS.INSIGHTS}?limit=${limit}&sorts=["${isAsc ? "" : "-"}idx"]`
      : `${API_ENDPOINTS.INSIGHTS}?limit=${limit}&filter={"and":[{"topic_idx":"${topicIdx}"}]}&sorts=["${isAsc ? "" : "-"}idx"]`;
  const res = await getList(queryString);

  const insights = InsightsSchema.safeParse(res);

  if (!insights || !insights.success) {
    console.error(insights.error);
    throw new Error("parse error");
  }

  return insights.data;
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
  const res = await getList(
    `${API_ENDPOINTS.INSIGHTS}?offset=${offset}&limit=${limit}&filter={"and":[{"created_by":"${authorIdx}"}]}`,
  );

  if (!res) {
    throw new Error("Failed to fetch");
  }

  const insights = InsightsSchema.safeParse(res);

  if (!insights.success) {
    throw new Error("Failed to parse");
  }

  return insights.data;
}

export async function getRandomInsights({
  limit = 6,
}: {
  limit: number;
}): Promise<InsightRandomList> {
  const res = await getList(`${API_ENDPOINTS.RANDOM_INSIGHTS}?limit=${limit}`);

  const insights = InsightRandomListSchema.safeParse(res);

  if (!insights || !insights?.success) {
    console.error(insights.error);
    throw new Error("parsing error");
  }

  return insights.data;
}

export async function getInsights() {
  return;
}
