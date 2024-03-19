function NewsletterForm({ isPrimary = true }: { isPrimary?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2  ${isPrimary ? "text-sky-700" : "text-g-700"}`}
    >
      <p className="mb-2 ">
        Subscribe our newsletter to get the latest updates all about
        architecture
      </p>
      <input
        placeholder="Enter your full name"
        className={`rounded-md border ${isPrimary ? "border-sky-700" : "border-g-700"} bg-transparent px-2 py-1`}
      />
      <input
        placeholder="Enter your email"
        className={`rounded-md border ${isPrimary ? "border-sky-700" : "border-g-700"} bg-transparent px-2 py-1`}
      />
      <label className={`my-3 text-sm`}>
        <input type="checkbox" />
        &nbsp; By signing up, you agree to our terms and privacy policy
      </label>
      <input
        type="submit"
        className={`rounded-full bg-sky-700  py-3 text-[15px] font-medium uppercase tracking-[1.25px] text-white`}
        value={"subscribe"}
      />
    </div>
  );
}

export default NewsletterForm;
