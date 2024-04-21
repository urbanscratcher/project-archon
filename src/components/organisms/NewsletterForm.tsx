"use client";

import { useFormStatus } from "react-dom";

function NewsletterForm({ isPrimary = true }: { isPrimary?: boolean }) {
  const { pending } = useFormStatus();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    if (response.ok) {
      form.reset();
      alert("Email sent successfully");
    } else {
      alert("Failed to send email");
    }
  };

  return (
    <form
      className={`flex flex-col gap-2  ${isPrimary ? "text-sky-700" : "text-g-700"}`}
      action={"/api/contact"}
      method="POST"
      onSubmit={submitHandler}
    >
      <p className="mb-2 ">
        Subscribe our newsletter to get the latest updates all about
        architecture
      </p>
      <input
        placeholder="Enter your full name"
        type="text"
        name="fullName"
        className={`rounded-md border ${isPrimary ? "border-sky-700" : "border-g-700"} bg-transparent px-2 py-1`}
      />
      <input
        placeholder="Enter your email"
        type="email"
        name="to"
        className={`rounded-md border ${isPrimary ? "border-sky-700" : "border-g-700"} bg-transparent px-2 py-1`}
      />
      <label className={`my-3 text-sm`}>
        <input type="checkbox" />
        &nbsp; By signing up, you agree to our terms and privacy policy
      </label>
      <button
        type="submit"
        className={`cursor-pointer rounded-full bg-sky-700 py-3 text-[15px] font-medium uppercase tracking-[1.25px] text-white hover:bg-sky-800 active:bg-sky-900`}
        disabled={pending}
      >
        {pending ? "loading..." : "subscribe"}
      </button>
    </form>
  );
}

export default NewsletterForm;
