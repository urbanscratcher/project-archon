import { getAuthors } from "@/services/authors.api";
import SectionContainer from "../atoms/SectionContainer";
import AuthorList from "../molecules/AuthorList";

async function Authors() {
  const initialAuthors = await getAuthors({ offset: 0, limit: 5 });
  return (
    <SectionContainer>
      <h1 className="mb-4 font-serif text-sky-700">
        Meet Our {initialAuthors?.total || 0} Awesome Authors
      </h1>
      {<AuthorList initialAuthors={initialAuthors} />}
    </SectionContainer>
  );
}
export default Authors;
