import { toCamelCase } from "@/libs/helpers";
import { z } from "zod";
import { getListSchema } from "./QueryParam";
import { TopicSchema } from "./Topic";

export const InsightsFilterSchema = z.object({
  insight_idx: z.string().optional(),
  title: z.string().optional(),
  topic_idx: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  created_by: z.string().optional(),
});

export const CreatorSchema = z
  .object({
    idx: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    avatar: z.string().nullable().optional(),
  })
  .transform((data) => toCamelCase(data));

const InsightObject = z.object({
  idx: z.number(),
  title: z.string(),
  thumbnail: z.string().optional(),
  summary: z.string().optional(),
  content: z.string().optional(),
  topic: TopicSchema,
  created_by: CreatorSchema,
  created_at: z.coerce.date(),
  edited_at: z.coerce.date().optional(),
});

export const InsightSchema = InsightObject.transform(
  ({ created_by, ...rest }) => {
    const newData = { ...rest, creator: { ...created_by } };
    return toCamelCase(newData);
  },
);

export const InsightsSchema = getListSchema(InsightSchema);

export const InsightRandomSchema = InsightObject.pick({
  idx: true,
  title: true,
  thumbnail: true,
  summary: true,
});

export const InsightRandomListSchema = z.array(InsightRandomSchema);

export type Creator = z.infer<typeof CreatorSchema>;
export type Insight = z.infer<typeof InsightSchema>;
export type Insights = z.infer<typeof InsightsSchema>;
export type InsightsFilter = z.infer<typeof InsightsFilterSchema>;
export type InsightRandom = z.infer<typeof InsightRandomSchema>;
export type InsightRandomList = z.infer<typeof InsightRandomListSchema>;
