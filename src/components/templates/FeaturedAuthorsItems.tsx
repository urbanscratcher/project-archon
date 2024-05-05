import { getFeaturedAuthors } from "@/services/trending.api";
import ImageWrap from "../atoms/ImageWrap";
import Link from "next/link";
import ListItem from "../atoms/ListItem";
import Box from "../atoms/Box";

async function FeaturedAuthorsItems() {
  const authors = await getFeaturedAuthors(4);

  return (
    <>
      {authors.map((author) => (
        <ListItem
          horizontal
          className="items-center gap-4 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0 last:pb-1 lg:gap-2"
          key={author.idx}
        >
          <Link
            href={`/authors/${author.idx}`}
            className={`relative h-16 w-16 overflow-hidden rounded-full border border-sky-700`}
          >
            <ImageWrap
              src={author.avatar}
              alt={`avatar of ${author.firstName} ${author.lastName}`}
              className="object-cover"
              fill
            />
          </Link>
          <Box vertical className="gap-[2px]">
            <Link href={`/authors/${author.idx}`} className="hover-darker">
              <p className="font-semibold capitalize">
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
        </ListItem>
      ))}
    </>
  );
}

export default FeaturedAuthorsItems;
