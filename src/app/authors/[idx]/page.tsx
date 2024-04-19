import AuthorDetail from "@/components/sections/AuthorDetail";
import InsightsByAuthor from "../../../components/sections/InsightsByAuthor";
import FeaturedAuthors from "@/components/sections/FeaturedAuthors";

function AuthorPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="grid grid-cols-1 py-[96px] lg:grid-cols-[2fr_1fr]">
      <div className="lg:border-r lg:border-r-sky-700">
        {/* @ts-expect-error Async Server Component */}
        <AuthorDetail idx={idx} />
        {/* @ts-expect-error Async Server Component */}
        <InsightsByAuthor idx={idx} />
      </div>
      <aside className="my-4 px-8">
        {/* @ts-expect-error Async Server Component */}
        <FeaturedAuthors />
      </aside>
    </main>
  );
}
export default AuthorPage;
