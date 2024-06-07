import InsightDetail from "@/components/templates/InsightDetail";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="py-[96px]">
      <InsightDetail idx={idx} />
    </main>
  );
}

export default InsightPage;
