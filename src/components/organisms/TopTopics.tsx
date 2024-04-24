import { getTopics } from "@/api/topics.api";
import TopTopicsList from "../molecules/TopTopicsList";

async function TopTopics() {
  const topics = await getTopics();

  const data = {
    list: topics && topics.total > 0 && topics.data,
  };

  return <>{data?.list && <TopTopicsList topTopics={data.list} />}</>;
}

export default TopTopics;
