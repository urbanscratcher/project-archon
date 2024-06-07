import { getFeaturedAuthors } from "@/services/trending.api";
import Link from "next/link";
import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";

async function FeaturedAuthorSection({ border = false }: { border?: boolean }) {
  const authors = await getFeaturedAuthors(4);

  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>Featured Authors</SectionHead>
      <Box vertical className="gap-2">
        <List className="pb-1">
          {authors.map((author) => (
            <ListItem
              horizontal
              className={`items-center gap-4 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0 last:pb-1`}
              key={author.idx}
            >
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
              <Box vertical className="gap-[2px]">
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
            </ListItem>
          ))}
        </List>
        <ViewAllButton to="/authors" />
      </Box>
    </SectionContainer>
  );
}

export default FeaturedAuthorSection;
