function Tag({
  tagName,
  isWhite = false,
}: {
  tagName: string;
  isWhite?: boolean;
}) {
  return (
    <div
      className={`h-fit w-fit rounded-full px-4 py-1 text-sm uppercase tracking-widest ${isWhite ? "font-semibold text-white" : "font-bold text-sky-700"} bg-transparent outline outline-2`}
    >
      {tagName}
    </div>
  );
}

export default Tag;
