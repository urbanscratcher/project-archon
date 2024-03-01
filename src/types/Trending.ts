import { z } from "zod";
import { toCamelCase } from "@/libs/helpers";

export const TrendingInsightSchema = z
  .object({
    idx: z.number(),
    hits: z.number(),
    title: z.string(),
    thumbnail: z.string(),
    summary: z.string(),
    topic: z.object({
      idx: z.number(),
      name: z.string(),
    }),
    creator: z.object({
      idx: z.number(),
      first_name: z.string(),
      last_name: z.string(),
      avatar: z.string().optional(),
    }),
    created_at: z.coerce.date(),
    edited_at: z.coerce.date().optional(),
  })
  .transform((data) => toCamelCase(data));

export const TrendingInsightsSchema = z.array(TrendingInsightSchema);

export type TrendingInsight = z.infer<typeof TrendingInsightSchema>;
export type TrendingInsights = z.infer<typeof TrendingInsightsSchema>;
