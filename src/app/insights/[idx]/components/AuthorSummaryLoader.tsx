import Box from "@/components/atoms/Box";
import AuthorWithTopicsRow from "@/components/molecules/AuthorWithTopicsRow";
import { getAuthor } from "@/services/authors.api";
import { type Author } from "@/types/Author";
import type { Insight } from "@/types/Insight";

async function AuthorSummaryLoader({ insight }: { insight: Insight }) {
  const author: Author = await getAuthor(insight.createdBy.idx);

  return (
    <Box className="grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] items-center gap-4 border-t border-t-g-300 py-10">
      <AuthorWithTopicsRow author={author} />
      <p className="col-span-full text-g-700">{author?.biography || ""}</p>
    </Box>
  );
}

export default AuthorSummaryLoader;
