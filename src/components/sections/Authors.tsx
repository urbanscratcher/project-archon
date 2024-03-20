import { getAuthors } from "@/api/authors.api";
import AuthorList from "../modules/AuthorList";

async function Authors() {
  const authors = await getAuthors({ offset: 0, limit: 5 });

  return (
    <section className="w-2/3 border-r border-r-g-300 px-8">
      <h1 className="font-serif text-sky-700">
        Meet Our {authors.total} Awesome Authors
      </h1>
      <AuthorList authors={authors} />
      <button className="w-full rounded-full bg-sky-700 py-3 text-[15px] font-semibold uppercase tracking-[1.25px] text-white transition-colors hover:bg-sky-900">
        see more authors
      </button>
    </section>
  );
}
export default Authors;
