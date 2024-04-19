"use client";
import useAuthors from "@/hooks/useAuthors";
import { type Author, type Authors } from "@/types/Author";
import { type Topic } from "@/types/Topic";
import Link from "next/link";
import ImageWrap from "../ImageWrap";
import Loader from "../Loader";

function AuthorList({ initialAuthors }: { initialAuthors: Authors }) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useAuthors({
    offset: 0,
    limit: 5,
    initialData: initialAuthors,
  });

  if (isLoading) {
    return (
      <div className="h-[66vh]">
        <Loader />
      </div>
    );
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
        <ul
          key={`authorList_${pageIdx}`}
          className={`flex flex-col gap-8 py-4 sm:gap-12 sm:py-8`}
        >
          {page.data.map((author: Author) => (
            <li
              key={`${author.firstName}_${author.lastName}_${author.idx}`}
              className={`flex items-center gap-4 sm:gap-8`}
            >
              <div
                className={`relative aspect-square w-16 overflow-hidden rounded-full outline outline-2 outline-sky-700 sm:w-32`}
              >
                <ImageWrap
                  src={author.avatar}
                  alt={`Avatar of ${author.firstName} ${author.lastName}`}
                  className={`object-cover`}
                  fill
                />
              </div>
              <div className="flex flex-col gap-2">
                <Link href={`/authors/${author.idx}`}>
                  <h3 className="cursor-pointer font-serif capitalize tracking-[0.25px] text-sky-700 hover:underline hover:decoration-2">
                    {author.firstName} {author.lastName}
                  </h3>
                </Link>
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
