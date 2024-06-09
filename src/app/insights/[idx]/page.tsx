import InsightPostLoader from "./components/InsightPostLoader";
import RecordInsightHit from "./components/RecordInsightHit";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="py-[96px]">
      <RecordInsightHit idx={idx} />
      <InsightPostLoader idx={idx} />
    </main>
  );
}

export default InsightPage;
