import { getTopics } from "@/services/topics.api";
import InsightsList from "../molecules/InsightsList";
import TopicsNavbar from "./TopicsNavbar";

async function InsightsByTopic() {
  const topics = await getTopics();

  return (
    <>
      {topics?.data && <TopicsNavbar topics={topics.data} />}
      {topics?.data && <InsightsList topics={topics.data} />}
    </>
  );
}

export default InsightsByTopic;
