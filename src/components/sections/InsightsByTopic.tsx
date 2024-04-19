import { getTopics } from "@/api/topics.api";
import InsightsList from "../modules/InsightsList";
import TopicsNavbar from "../modules/TopicsNavbar";

async function InsightsByTopic() {
  const topics = await getTopics();

  return (
    <section className="w-full px-8 lg:w-2/3 lg:border-r lg:border-r-sky-700">
      {topics?.data && <TopicsNavbar topics={topics.data} />}
      {topics?.data && <InsightsList topics={topics.data} />}
    </section>
  );
}

export default InsightsByTopic;
