import Link from "next/link";

type TagProps = {
  tagName: string;
  white?: boolean;
  className?: string;
};

function Tag({ tagName, white, className }: TagProps) {
  return (
    <Link
      href={{
        pathname: "/insights",
        query: { topics: tagName.toLowerCase() },
      }}
      className={`text-button h-fit w-fit rounded-full bg-transparent px-4 py-1 uppercase
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
