import { z } from "zod";
import { zfd } from "zod-form-data";

export const NewsletterFormSchema = zfd.formData({
  fullName: zfd.text(
    z
      .string()
      .min(3, "Type at least 3 characters")
      .max(20, "Type at most 20 characters"),
  ),
  to: zfd.text(z.string().email()),
  agreed: z.any(),
});

export type NewsletterForm = z.infer<typeof NewsletterFormSchema>;
