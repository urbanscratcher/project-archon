import HitInsightPost from "./components/HitInsightPost";
import InsightPostContent from "./components/InsightPostContent";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="py-[96px]">
      <HitInsightPost idx={idx} />
      <InsightPostContent idx={idx} />
    </main>
  );
}

export default InsightPage;
