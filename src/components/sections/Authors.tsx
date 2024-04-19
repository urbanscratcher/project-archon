import { getAuthors } from "@/api/authors.api";
import { type Authors } from "@/types/Author";
import AuthorList from "../modules/AuthorList";

async function Authors() {
  const initialAuthors = await getAuthors({ offset: 0, limit: 5 });
  return (
    <section className="w-full px-4 sm:w-2/3 sm:border-r sm:border-r-sky-700 sm:px-8">
      <h1 className="font-serif text-sky-700">
        Meet Our {initialAuthors?.total || 0} Awesome Authors
      </h1>
      {<AuthorList initialAuthors={initialAuthors} />}
    </section>
  );
}
export default Authors;
