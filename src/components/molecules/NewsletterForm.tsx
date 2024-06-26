"use client";

import useSubscribe from "@/hooks/useSubscribe";
import useToastersStore from "@/stores/useToastStore";
import {
  NewsletterFormSchema,
  type NewsletterForm,
} from "@/types/NewsletterForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../atoms/Button";

type NewsletterFormProp = {
  primary?: boolean;
};

const initialData = { fullName: "", to: "", agreed: true };

function NewsletterForm({ primary = true }: NewsletterFormProp) {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
    watch,
    trigger,
  } = useForm<NewsletterForm>({
    mode: "all",
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: initialData,
  });

  const addToaster = useToastersStore((state) => state.addToaster);

  const { mutateAsync, isPending, isError } = useSubscribe();

  async function submitHandler(data: Pick<NewsletterForm, "fullName" | "to">) {
    const result = await mutateAsync(data);

    addToaster({
      mainMessage: result?.message || "You've successfully subscribed :)",
      toasterType: "confirm",
    });

    reset();
  }

  // ISSUE As noted in NewsletterForm.ts, it is temporarily written
  // Though the subscription forces to trigger the validation but I'm afraid that it would be not a fully controllable solution
  useEffect(() => {
    const subcription = watch(() => {
      trigger(["agreed"]);
    });
    return () => subcription.unsubscribe();
  }, [watch, trigger]);

  return (
    <form
      className={`flex flex-col gap-3  ${primary ? "text-sky-700" : "text-g-700"}`}
      onSubmit={handleSubmit(submitHandler)}
    >
      <p className="mb-1">
        Subscribe our newsletter to get the latest updates all about
        architecture
      </p>
      <div
        className={`rounded-md border ${primary ? "border-sky-700" : " border-g-700"} relative bg-transparent`}
      >
        <label
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 text-sm transition-all ${errors.fullName ? `z-10  ${primary ? "bg-y-100 text-sky-700" : "bg-white text-g-500"}` : ""}`}
        >
          {errors.fullName && errors.fullName.message}
        </label>
        <input
          {...register("fullName")}
          name="fullName"
          placeholder="Enter your full name"
          type="text"
          className={
            "placeholder-shown:p h-full w-full rounded-md border-0 bg-transparent px-2 py-2"
          }
          disabled={isPending}
        />
      </div>
      <div
        className={`rounded-md border ${primary ? "border-sky-700" : " border-g-700"} relative bg-transparent`}
      >
        <label
          className={`pointer-events-none absolute left-1 -translate-y-1/2 px-1 text-sm transition-all  ${errors.to ? `z-10  ${primary ? "bg-y-100 text-sky-700" : "bg-white text-g-500"}` : ""}`}
        >
          {errors.to && errors.to.message}
        </label>
        <input
          {...register("to")}
          placeholder="Enter your email"
          type="email"
          name="to"
          className={
            "placeholder-shown:p h-full w-full rounded-md border-0 bg-transparent px-2 py-2"
          }
          disabled={isPending}
        />
      </div>
      <label className={`my-2 text-sm`}>
        <input
          {...register("agreed")}
          type="checkbox"
          name={"agreed"}
          defaultChecked
          disabled={isPending}
        />
        &nbsp; By signing up, you agree to our terms and privacy policy
        {errors?.agreed?.message || ""}
      </label>
      <Button type="submit" disabled={isPending || !isValid}>
        {isPending ? "sending..." : "subscribe"}
      </Button>
    </form>
  );
}

export default NewsletterForm;
