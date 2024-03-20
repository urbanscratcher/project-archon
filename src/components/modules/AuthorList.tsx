"use client";
import { type Author, type Authors } from "@/types/Author";
import { type Topic } from "@/types/Topic";
import { type InfiniteData } from "@tanstack/react-query";
import ImageWrap from "../ImageWrap";
import useAuthors from "@/hooks/useAuthors";

function AuthorList({ initialAuthors }: { initialAuthors: Authors }) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useAuthors({
    offset: 0,
    limit: 5,
    initialData: initialAuthors,
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  const clickHandler = () => {
    fetchNextPage();
  };

  return (
    <>
      {data?.pages.map((page, pageIdx) => (
        <ul key={pageIdx} className={`flex flex-col gap-12 py-8`}>
          {page.data.map((author: Author) => (
            <li
              key={`${author.firstName}_${author.lastName}_${author.idx}`}
              className={`flex items-center gap-8`}
            >
              <div
                className={`relative aspect-square w-32 overflow-hidden rounded-full outline outline-2 outline-sky-700`}
              >
                <ImageWrap
                  src={author.avatar}
                  alt={`Avatar of ${author.firstName} ${author.lastName}`}
                  className={`object-cover`}
                  fill
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif capitalize tracking-[0.25px] text-sky-700">
                  {author.firstName} {author.lastName}
                </h3>
                {author?.topics && author.topics.length > 0 && (
                  <p className="text-[26px] capitalize text-sky-700">
                    {author.topics
                      .map((topic: Topic) => topic.name)
                      .join(" · ")}
                  </p>
                )}
                {author?.jobTitle && (
                  <p className="text-[26px] capitalize text-sky-700">
                    {author.jobTitle}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ))}
      {hasNextPage && (
        <button
          onClick={clickHandler}
          className={`w-full rounded-full bg-sky-700 py-3 text-[15px] font-semibold uppercase tracking-[1.25px] text-white transition-colors hover:bg-sky-900`}
        >
          see more authors
        </button>
      )}
    </>
  );
}

export default AuthorList;
