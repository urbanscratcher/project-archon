import {
  Insight,
  InsightSchema,
  Insights,
  InsightsSchema,
} from "@/types/Insight";
import { getList, getOne } from "./general.api";

export async function getInsight(idx: number): Promise<Insight> {
  const res = await getOne(
    `http://localhost:5001/archon-api/v1/insights/${idx}`,
  );

  console.log(res);

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
  limit = 10,
}: {
  topicIdx: number;
  limit: number;
}): Promise<Insights> {
  const queryString =
    topicIdx === 0
      ? `http://localhost:5001/archon-api/v1/insights?limit=${limit}`
      : `http://localhost:5001/archon-api/v1/insights?limit=${limit}&filter={"and":[{"topic_idx":"${topicIdx}"}]}`;
  const res = await getList(queryString);

  const insights = InsightsSchema.safeParse(res);

  if (!insights || !insights.success) {
    console.error(insights.error);
    throw new Error("parse error");
  }

  return insights.data;
}

export async function getInsights() {

  return;
}
