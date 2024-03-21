import { getAuthors } from "@/api/authors.api";
import { type Authors } from "@/types/Author";
import AuthorList from "../modules/AuthorList";

async function Authors() {
  const initialAuthors = await getAuthors({ offset: 0, limit: 5 });
  return (
    <section className="w-2/3 border-r border-r-g-300 px-8">
      <h1 className="font-serif text-sky-700">
        Meet Our {initialAuthors?.total || 0} Awesome Authors
      </h1>
      {<AuthorList initialAuthors={initialAuthors} />}
    </section>
  );
}
export default Authors;
