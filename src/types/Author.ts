import { z } from "zod";
import { getListSchema } from "./QueryParam";
import { TopicSchema } from "./Topic";

export const AuthorSchema = z.object({
  idx: z.number(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.string(),
  jobTitle: z.string().optional(),
  biography: z.string().optional(),
  avatar: z.string().optional(),
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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  topics: z.array(TopicSchema).optional(),
});

export const AuthorsSchema = getListSchema(AuthorSchema);

export type Author = z.output<typeof AuthorSchema>;
export type Authors = z.output<typeof AuthorsSchema>;
