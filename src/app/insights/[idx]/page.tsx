import InsightDetail from "@/components/sections/InsightDetail";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="py-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <InsightDetail idx={idx} />
    </main>
  );
}

export default InsightPage;
