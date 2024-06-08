import { z } from "zod";

export const CoverSchema = z.object({
  idx: z.number(),
  isMain: z.boolean(),
  insight: z.object({
    idx: z.number(),
    title: z.string(),
    thumbnail: z.string().nullable(),
  }),
  topic: z.object({
    idx: z.number(),
    name: z.string(),
  }),
  createdAt: z.coerce.date(),
  createdBy: z.number(),
});

export const CoversSchema = z.object({
  total: z.number(),
  data: z.array(CoverSchema),
});

export type Cover = z.infer<typeof CoverSchema>;
export type Covers = z.infer<typeof CoversSchema>;
