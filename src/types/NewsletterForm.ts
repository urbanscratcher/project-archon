import { z } from "zod";

export const NewsletterFormSchema = z.object({
  fullName: z.string(),
  to: z.string(),
  agreed: z.boolean(),
});

export type NewsletterForm = z.infer<typeof NewsletterFormSchema>;
