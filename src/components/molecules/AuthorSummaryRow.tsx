import type { Author } from "@/types/Author";
import Link from "next/link";
import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";

function AuthorSummaryRow({ author }: { author: Author }) {
  return (
    <>
      <Link
        href={`/authors/${author.idx}`}
        className={`flex-grow-1 relative aspect-square w-[32px] flex-shrink-0 overflow-hidden rounded-full border border-sky-700 lg:w-[64px]`}
      >
        <ImageWrap
          src={author.avatar}
          alt={`avatar of ${author.firstName} ${author.lastName}`}
          className="object-cover"
          fill
        />
      </Link>
      <Box vertical className="gap-1">
        <Link href={`/authors/${author.idx}`} className="hover-darker">
          <p className="p-lg font-semibold capitalize">
            {author.firstName} {author.lastName}
          </p>
        </Link>
        {author?.topics && author.topics.length > 0 && (
          <p className="p-sm capitalize">
            {author.topics
              .map((el: { idx: number; name: string }) => el.name)
              .join(" · ")}
          </p>
        )}
      </Box>
    </>
  );
}

export default AuthorSummaryRow;
