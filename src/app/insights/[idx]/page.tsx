import InsightPostContent from "../components/InsightPostContent";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="py-[96px]">
      <InsightPostContent idx={idx} />
    </main>
  );
}

export default InsightPage;
