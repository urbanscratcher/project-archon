import { z } from "zod";
import { TopicObject } from "./Topic";
import { toCamelCase } from "@/libs/helpers";
import { getListSchema } from "./QueryParam";

export const AuthorSchema = z
  .object({
    idx: z.number(),
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    role: z.string(),
    job_title: z.string().optional(),
    biography: z.string().optional(),
    careers: z
      .string()
      .optional()
      .transform((careers) => {
        if (careers) {
          const parsed = careers.replace(/'/g, '"');
          const arr = JSON.parse(parsed);
          return arr;
        } else {
          return undefined;
        }
      }),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date().optional(),
    topics: z.array(TopicObject).optional(),
  })
  .transform((data) => toCamelCase(data));

export const AuthorsSchema = getListSchema(AuthorSchema);

export type Author = z.infer<typeof AuthorSchema>;
export type Authors = z.infer<typeof AuthorsSchema>;
