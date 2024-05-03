import { z } from "zod";

// ISSUE Since 'agreed' is not working as expected on the client side (NewsletterForm.tsx), I solved it temporarily by following a comment below
// https://github.com/orgs/react-hook-form/discussions/8516
// It keeps confused with true/false value when the checkbox is toggled
// I guess the refinement stage is not stable with Nextjs
export const NewsletterFormSchema = z.object({
  fullName: z
    .string()
    .min(1, { message: "Required" })
    .max(20, { message: "Type at most 20 characters" }),
  to: z.string().min(1, "Required").email({ message: "Type a valid email" }),
  agreed: z.boolean().refine((val) => val === true, { message: "*" }),
});

export type NewsletterForm = z.output<typeof NewsletterFormSchema>;
