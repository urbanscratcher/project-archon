import TopicsNavbar from "@/components/modules/TopicsNavbar";
import InsightsByTopic from "@/components/sections/InsightsByTopic";

function InsightsPage() {
  return (
    <main className="flex pt-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <InsightsByTopic />
      <div className="w-1/3 px-[3.2rem]">whats trending list</div>
    </main>
  );
}

export default InsightsPage;
