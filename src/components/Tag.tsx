import Link from "next/link";

function Tag({
  tagName,
  isWhite = false,
  className,
}: {
  tagName: string;
  isWhite?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={{
        pathname: "/insights",
        query: { topics: tagName.toLowerCase() },
      }}
      className={`h-fit w-fit rounded-full px-4 py-1 text-sm uppercase tracking-widest ${isWhite ? "border-2 border-white font-semibold text-white" : "border-2 border-sky-700 font-bold text-sky-700 "} bg-transparent hover:border-sky-700 hover:bg-sky-700 hover:text-white ${className || ""}`}
    >
      {tagName}
    </Link>
  );
}

export default Tag;
