import { getAuthors } from "@/services/authors.api";
import { type Authors } from "@/types/Author";
import AuthorList from "../organisms/AuthorList";

async function Authors() {
  const initialAuthors = await getAuthors({ offset: 0, limit: 5 });
  return (
    <section className="w-full p-4 sm:px-8 lg:w-2/3 lg:border-r lg:border-r-sky-700 lg:py-0">
      <h1 className="font-serif text-sky-700">
        Meet Our {initialAuthors?.total || 0} Awesome Authors
      </h1>
      {<AuthorList initialAuthors={initialAuthors} />}
    </section>
  );
}
export default Authors;
