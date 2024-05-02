"use client";

import subscribe, {
  type FormError,
  type NewsletterFormState,
} from "@/actions/subscribe";
import {
  NewsletterFormSchema,
  type NewsletterForm,
} from "@/types/NewsletterForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FieldPath, useForm } from "react-hook-form";
// @ts-expect-error
import { useFormState } from "react-dom";
import SubmitBtn from "../atoms/SubmitBtn";

type NewsletterFormProp = {
  primary?: boolean;
};

function NewsletterForm({ primary = true }: NewsletterFormProp) {
  const {
    register,
    formState: { errors },
    setError,
    watch,
  } = useForm<NewsletterForm>({
    mode: "all",
    resolver: zodResolver(NewsletterFormSchema),
  });
  const [state, formAction] = useFormState<NewsletterFormState, FormData>(
    subscribe,
    null,
  );

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state.status === "error") {
      state.errors?.forEach((error: FormError) => {
        setError(error.path as FieldPath<NewsletterForm>, {
          message: error.message,
        });
      });
    }

    if (state.status === "success") {
      // TODO modal window pop up
      alert(state.message);
    }
  }, [state, setError]);

  return (
    <form
      className={`flex flex-col gap-3  ${primary ? "text-sky-700" : "text-g-700"}`}
      action={formAction}
    >
      <p className="mb-1">
        Subscribe our newsletter to get the latest updates all about
        architecture
      </p>
      <div
        className={`rounded-md border ${primary ? "border-sky-700" : " border-g-700"} relative bg-transparent`}
      >
        <label
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 text-sm transition-all  ${errors.fullName ? `z-10  ${primary ? "bg-y-100 text-sky-700" : "bg-white text-g-500"}` : ""}`}
        >
          {errors.fullName && errors.fullName.message}
        </label>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          placeholder="Enter your full name"
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
        <label
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 transition-all  ${errors.to ? `z-10 ${primary ? "bg-y-100 text-sky-700" : "bg-white text-g-500"} text-sm` : ""}`}
        >
          {errors.to && errors.to.message}
        </label>
        <input
          {...register("to")}
          placeholder="Enter your email"
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
        {watch("agreed") === false && "(*)"}
      </label>
      <SubmitBtn
        isValid={!errors.fullName && !errors.to && watch("agreed")}
        className="cursor-pointer rounded-full bg-sky-700 py-3 text-[15px] font-medium uppercase tracking-[1.25px] text-white hover:bg-sky-800 active:bg-sky-900 disabled:cursor-not-allowed disabled:bg-g-700"
      />
    </form>
  );
}

export default NewsletterForm;
