import { getAuthors } from "@/services/authors.api";
import AuthorsList from "./AuthorsList";

async function AuthorsLoader() {
  const initialAuthors = await getAuthors({ offset: 0, limit: 5 });

  return (
    <>
      <h1 className="mb-4 font-serif text-sky-700">
        Meet Our {initialAuthors?.total || 0} Awesome Authors
      </h1>
      {<AuthorsList initialAuthors={initialAuthors} />}
    </>
  );
}

export default AuthorsLoader;
