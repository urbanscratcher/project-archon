import type { AuthorTopics } from "@/types/Author";
import Link from "next/link";
import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";

type AuthorWithTopicsRowProps = {
  author: {
    idx: number;
    firstName: string;
    lastName: string;
    avatar?: string | undefined;
    topics?: AuthorTopics | undefined;
  };
};

function AuthorWithTopicsRow({ author }: AuthorWithTopicsRowProps) {
  const data = {
    href: `/authors/${author.idx}`,
    avatar: author?.avatar || "/fallback.webp",
    avatarAlt: `avatar of ${author.firstName} ${author.lastName}`,
    firstName: author.firstName,
    lastName: author.lastName,
    topics:
      author?.topics && author.topics.length > 0 ? author.topics : undefined,
  };

  return (
    <>
      <Link
        href={data.href}
        className={`flex-grow-1 relative aspect-square w-[32px] flex-shrink-0 overflow-clip rounded-full border border-sky-700 lg:w-[64px]`}
      >
        <ImageWrap
          src={data.avatar}
          alt={data.avatarAlt}
          className="rounded-full object-cover"
          fill
        />
      </Link>
      <Box vertical className="gap-1">
        <p className="p-lg font-semibold capitalize">
          <Link href={data.href} className="hover-darker">
            {data.firstName} {data.lastName}
          </Link>
        </p>
        {data?.topics && (
          <p className="p-sm capitalize">
            {data.topics.map((t) => t.name).join(" · ")}
          </p>
        )}
      </Box>
    </>
  );
}

export default AuthorWithTopicsRow;
