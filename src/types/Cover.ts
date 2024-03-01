import { toCamelCase } from "@/libs/helpers";
import { z } from "zod";

export const CoverSchema = z
  .object({
    idx: z.number(),
    is_main: z.boolean(),
    insight: z.object({
      idx: z.number(),
      title: z.string(),
      thumbnail: z.string().nullable(),
    }),
    topic: z.object({
      idx: z.number(),
      name: z.string(),
    }),
    created_at: z.coerce.date(),
    created_by: z.number(),
  })
  .transform((data) => toCamelCase(data));

export const CoversSchema = z.object({
  total: z.number(),
  data: z.array(CoverSchema),
});

export type Cover = z.infer<typeof CoverSchema>;
export type Covers = z.infer<typeof CoversSchema>;
