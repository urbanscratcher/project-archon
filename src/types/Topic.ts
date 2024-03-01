import { toCamelCase } from "@/libs/helpers";
import { z } from "zod";

export const TopicSchema = z
  .object({
    idx: z.number(),
    name: z.string(),
    seq: z.number().optional(),
    total_insights: z.number().optional(),
  })
  .transform((data) => toCamelCase(data));

export const TopicsSchema = z.object({
  total: z.number(),
  data: z.array(TopicSchema),
});

export type Topic = z.infer<typeof TopicSchema>;
export type Topics = z.infer<typeof TopicsSchema>;
