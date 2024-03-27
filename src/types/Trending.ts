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

export const FeaturedAuthorSchema = z
  .object({
    cnt: z.number(),
    idx: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    avatar: z.string().optional(),
    topics: z
      .array(
        z.object({
          idx: z.number(),
          name: z.string(),
        }),
      )
      .optional(),
  })
  .transform((data) => toCamelCase(data));

export const FeaturedAuthorsSchema = z.array(FeaturedAuthorSchema);

export type TrendingInsight = z.infer<typeof TrendingInsightSchema>;
export type TrendingInsights = z.infer<typeof TrendingInsightsSchema>;
export type FeaturedAuthor = z.infer<typeof FeaturedAuthorSchema>;
export type FeaturedAuthors = z.infer<typeof FeaturedAuthorsSchema>;
