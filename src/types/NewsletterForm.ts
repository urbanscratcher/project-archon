import { z } from "zod";

export const NewsletterFormSchema = z.object({
  fullName: z
    .string()
    .min(3, "Type at least 3 characters")
    .max(20, "Type at most 20 characters"),
  to: z.string().email(),
  agreed: z.boolean().refine((val) => val, { message: "Agree on our terms" }),
});

export type NewsletterForm = z.infer<typeof NewsletterFormSchema>;
