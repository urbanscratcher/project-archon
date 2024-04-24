import Link from "next/link";

type TagType = {
  tagName: string;
  white?: boolean;
  className?: string;
};

function Tag({ tagName, white, className }: TagType) {
  return (
    <Link
      href={{
        pathname: "/insights",
        query: { topics: tagName.toLowerCase() },
      }}
      className={`h-fit w-fit rounded-full bg-transparent px-4 py-1 text-[0.9375rem] text-sm uppercase tracking-widest
      hover:border-sky-700 hover:bg-sky-700 hover:text-white
      ${white ? "border-2 border-white font-medium text-white" : "border-2 border-sky-700 font-bold text-sky-700"}
      ${className || ""}
      `}
    >
      {tagName}
    </Link>
  );
}

export default Tag;