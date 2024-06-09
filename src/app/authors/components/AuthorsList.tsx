"use client";
import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import List from "@/components/atoms/List";
import useAuthors from "@/hooks/useAuthors";
import { type Author, type Authors } from "@/types/Author";
import { type Topic } from "@/types/Topic";
import Link from "next/link";
import ImageWrap from "../../../components/atoms/ImageWrap";
import Loader from "../../../components/atoms/Loader";

function AuthorsList({ initialAuthors }: { initialAuthors: Authors }) {
  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useAuthors({
    offset: 0,
    limit: 5,
    initialData: initialAuthors,
  });

  if (isLoading) {
    return (
      <Box vertical className={`gap-8 py-4 sm:gap-12 sm:py-8`}>
        <Loader />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box vertical className={`gap-8 py-4 sm:gap-12 sm:py-8`}>
        <p>Error</p>
      </Box>
    );
  }

  const clickHandler = () => {
    fetchNextPage();
  };

  return (
    <>
      {data?.pages.map((page, pageIdx) => (
        <List
          vertical
          key={pageIdx + ""}
          className={`gap-8 py-4 sm:gap-12 sm:py-8`}
        >
          {page.data.map((author: Author) => (
            <li
              key={`${author.firstName}_${author.lastName}_${author.idx}`}
              className={`flex items-center gap-4 sm:gap-8`}
            >
              <Link
                href={`/authors/${author.idx}`}
                className={`relative h-16 w-16 overflow-hidden rounded-full outline outline-2 outline-sky-700 sm:h-32 sm:w-32`}
              >
                <ImageWrap
                  src={author?.avatar || ""}
                  alt={`Avatar of ${author.firstName} ${author.lastName}`}
                  className={`rounded-full object-cover`}
                  fill
                />
              </Link>
              <Box vertical className="gap-2">
                <Link href={`/authors/${author.idx}`}>
                  <h3 className="hover-underline cursor-pointer font-serif capitalize text-sky-700">
                    {author.firstName} {author.lastName}
                  </h3>
                </Link>
                {author?.topics && author.topics.length > 0 && (
                  <h5 className="font-sans capitalize text-sky-700">
                    {author.topics
                      .map((topic: Topic) => topic.name)
                      .join(" · ")}
                  </h5>
                )}
                {author?.jobTitle && (
                  <h5 className="font-sans capitalize text-sky-700">
                    {author.jobTitle}
                  </h5>
                )}
              </Box>
            </li>
          ))}
        </List>
      ))}
      {hasNextPage && <Button onClick={clickHandler}>see more authors</Button>}
    </>
  );
}

export default AuthorsList;
