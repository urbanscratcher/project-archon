import { toCamelCase } from "@/libs/helpers";
import { z } from "zod";

export const TopicObject = z.object({
  idx: z.number(),
  name: z.string(),
  seq: z.number().optional(),
  total_insights: z.number().optional(),
});

export const TopicSchema = TopicObject.transform((data) => toCamelCase(data));

export const TopicsSchema = z.object({
  total: z.number(),
  data: z.array(TopicSchema),
});

export type Topic = z.output<typeof TopicSchema>;
export type Topics = z.output<typeof TopicsSchema>;
