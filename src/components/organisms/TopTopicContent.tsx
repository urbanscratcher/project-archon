import { getTopics } from "@/services/topics.api";
import { type Topic } from "@/types/Topic";
import TopTopicListBox from "../atoms/TopTopicListBox";
import TopTopicsItem from "../molecules/TopTopicsItem";

async function TopTopicContent() {
  const topics = await getTopics();

  const data = {
    list: topics && topics.total > 0 && topics.data,
  };

  return (
    <TopTopicListBox>
      {data?.list &&
        data.list.map((topic: Topic) => (
          <TopTopicsItem key={topic.idx} topic={topic} />
        ))}
    </TopTopicListBox>
  );
}

export default TopTopicContent;
