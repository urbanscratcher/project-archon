import InsightsList from "@/components/modules/InsightsList";
import TopicsNavbar from "@/components/modules/TopicsNavbar";

function InsightsPage() {
  return (
    <main className="flex pt-[96px]">
      <div className="w-2/3 border-r border-r-g-300 px-8">
        <TopicsNavbar />
        <InsightsList />
      </div>
      <div className="w-1/3 px-[3.2rem]">whats trending list</div>
    </main>
  );
}

export default InsightsPage;
