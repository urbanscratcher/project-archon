import AuthorDetail from "@/components/templates/AuthorDetail";
import InsightsByAuthor from "../../../components/templates/InsightsByAuthor";
import FeaturedAuthorsItems from "@/components/templates/FeaturedAuthorsItems";

function AuthorPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="grid grid-cols-1 py-[96px] lg:grid-cols-[2fr_1fr]">
      <div className="lg:border-r lg:border-r-sky-700">
        <AuthorDetail idx={idx} />
        <InsightsByAuthor idx={idx} />
      </div>
      <aside className="my-4 px-8">
        <FeaturedAuthorsItems />
      </aside>
    </main>
  );
}
export default AuthorPage;
