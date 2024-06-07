import { getFeaturedAuthors } from "@/services/trending.api";
import Box from "../atoms/Box";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import AuthorWithTopicsRow from "../molecules/AuthorWithTopicsRow";

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
              <AuthorWithTopicsRow author={author} />
            </ListItem>
          ))}
        </List>
        <ViewAllButton to="/authors" />
      </Box>
    </SectionContainer>
  );
}

export default FeaturedAuthorSection;
