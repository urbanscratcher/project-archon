import { getAuthor } from "@/services/authors.api";
import { type Author } from "@/types/Author";
import type { Insight } from "@/types/Insight";
import AuthorWithTopicsRow from "../molecules/AuthorWithTopicsRow";

async function AuthorSummary({ insight }: { insight: Insight }) {
  const author: Author = await getAuthor(insight.createdBy.idx);

  const data = {
    idx: insight.createdBy.idx,
    avatar: insight.createdBy?.avatar || "",
    firstName: insight.createdBy.firstName,
    lastName: insight.createdBy.lastName,
    topics: author?.topics || [],
  };

  return (
    <div className="grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] items-center gap-4 border-t border-t-g-300 py-10">
      <AuthorWithTopicsRow author={author} />
      <p className="col-span-full text-g-700">{author.biography}</p>
    </div>
  );
}

export default AuthorSummary;
