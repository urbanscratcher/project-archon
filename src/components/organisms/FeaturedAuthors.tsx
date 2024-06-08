import { getFeaturedAuthors } from "@/services/trending.api";
import ListItem from "../atoms/ListItem";
import AuthorWithTopicsRow from "../molecules/AuthorWithTopicsRow";

async function FeaturedAuthors() {
  const authors = await getFeaturedAuthors(4);
  return (
    <>
      {authors.map((author) => (
        <ListItem
          horizontal
          className={`items-center gap-4 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0 last:pb-1`}
          key={author.idx}
        >
          <AuthorWithTopicsRow author={author} />
        </ListItem>
      ))}
    </>
  );
}

export default FeaturedAuthors;
