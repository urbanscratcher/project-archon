"use client";

import subscribe from "@/actions/SubscribeNewsletter";
import { useForm } from "react-hook-form";
// @ts-expect-error
import { useFormState, useFormStatus } from "react-dom";

type NewsletterFormType = {
  primary?: boolean;
};

export type NewsletterFormData = {
  fullName: string;
  to: string;
  agreed: boolean;
};

export type NewsletterFormState = {
  status: "success" | "fail" | "invalid";
  invalid?: {
    field: "fullName" | "to" | "agreed";
    errorMessage: string;
  };
  message: string;
};

function NewsletterForm({ primary = true }: NewsletterFormType) {
  const { register } = useForm<NewsletterFormData>();
  const [state, formAction] = useFormState<NewsletterFormState, FormData>(
    subscribe,
    null,
  );

  return (
    <form
      className={`flex flex-col gap-3  ${primary ? "text-sky-700" : "text-g-700"}`}
      action={formAction}
      method="POST"
    >
      <p className="mb-1">
        Subscribe our newsletter to get the latest updates all about
        architecture
      </p>
      <div
        className={`rounded-md border ${primary ? "border-sky-700" : " border-g-700"} relative bg-transparent`}
      >
        <p
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 transition-all  ${state?.invalid?.field === "fullName" ? `z-10 ${primary ? "bg-y-100" : "bg-white"} text-sm text-sky-700` : "top-1/2 z-0 text-g-500"}`}
        >
          {state?.invalid?.field === "fullName"
            ? state.invalid.errorMessage
            : "Enter your full name"}
        </p>
        <input
          {...register("fullName")}
          type="text"
          name="fullName"
          className={
            "h-full w-full rounded-md border-0 bg-transparent px-2 py-2"
          }
        />
      </div>
      <div
        className={`rounded-md border ${primary ? "border-sky-700" : " border-g-700"} relative bg-transparent`}
      >
        <p
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 transition-all  ${state?.invalid?.field === "to" ? `z-10 ${primary ? "bg-y-100" : "bg-white"} text-sm text-sky-700` : "top-1/2 z-0 text-g-500"}`}
        >
          {state?.status === "invalid"
            ? state.invalid.errorMessage
            : "Enter your email"}
        </p>
        <input
          {...register("to")}
          type="email"
          name="to"
          className={
            "h-full w-full rounded-md border-0 bg-transparent px-2 py-2"
          }
        />
      </div>
      <label className={`my-2 text-sm`}>
        <input {...register("agreed")} type="checkbox" name={"agreed"} />
        &nbsp; By signing up, you agree to our terms and privacy policy
      </label>
      <SubmitButton className="cursor-pointer rounded-full bg-sky-700 py-3 text-[15px] font-medium uppercase tracking-[1.25px] text-white hover:bg-sky-800 active:bg-sky-900 disabled:cursor-not-allowed disabled:bg-g-700" />
    </form>
  );
}

function SubmitButton({ className }: { className?: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className || ""} disabled={pending}>
      {pending ? "sending..." : "subscribe"}
    </button>
  );
}

export default NewsletterForm;
