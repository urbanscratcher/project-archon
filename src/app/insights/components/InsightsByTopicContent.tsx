import { getTopics } from "@/services/topics.api";
import InsightsList from "./InsightsList";
import TopicsNavbar from "./TopicsNavbar";

async function InsightsByTopicContent() {
  const topics = await getTopics();

  return (
    <>
      {topics?.data && <TopicsNavbar topics={topics.data} />}
      {topics?.data && <InsightsList topics={topics.data} />}
    </>
  );
}

export default InsightsByTopicContent;
