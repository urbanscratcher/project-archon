import Link from "next/link";

type TagLinkType = {
  tagName: string;
  isWhite?: boolean;
  className?: string;
};

function TagLink({ tagName, isWhite = false, className }: TagLinkType) {
  return (
    <Link
      href={{
        pathname: "/insights",
        query: { topics: tagName.toLowerCase() },
      }}
      className={`h-fit w-fit rounded-full bg-transparent px-4 py-1 text-sm uppercase tracking-widest
      hover:border-sky-700 hover:bg-sky-700 hover:text-white
      ${isWhite ? "border-2 border-white font-semibold text-white" : "border-2 border-sky-700 font-bold text-sky-700"}
      ${className || ""}
      `}
    >
      {tagName}
    </Link>
  );
}

export default TagLink;
