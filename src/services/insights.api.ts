import {
  Insight,
  InsightRandomList,
  InsightRandomListSchema,
  InsightSchema,
  Insights,
  InsightsSchema,
} from "@/types/Insight";
import { getList, getOne } from "./general.api";

export async function getInsight(idx: number): Promise<Insight> {
  const res = await getOne(
    `http://localhost:5001/archon-api/v1/insights/${idx}`,
  );

  const insight = InsightSchema.safeParse(res);

  if (!insight || !insight.success) {
    console.error(insight.error);
  }

  if (insight.success) {
    return insight.data;
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
      ? `http://localhost:5001/archon-api/v1/insights?limit=${limit}&sorts=["${isAsc ? "" : "-"}idx"]`
      : `http://localhost:5001/archon-api/v1/insights?limit=${limit}&filter={"and":[{"topic_idx":"${topicIdx}"}]}&sorts=["${isAsc ? "" : "-"}idx"]`;
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
    `http://localhost:5001/archon-api/v1/insights?offset=${offset}&limit=${limit}&filter={"and":[{"created_by":"${authorIdx}"}]}`,
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
  const res = await getList(
    `http://localhost:5001/archon-api/v1/random/insights?limit=${limit}`,
  );

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
