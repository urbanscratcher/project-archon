import { type Topic } from "@/types/Topic";
import TopTopicsItem from "./TopTopicsItem";

function TopTopicsList({ topTopics }: { topTopics: any }) {
  return (
    <ul
      className={`grid grid-cols-1 gap-y-4 sm:gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
    >
      {topTopics.map((topic: Topic) => (
        <TopTopicsItem key={topic.idx} topic={topic} />
      ))}
    </ul>
  );
}

export default TopTopicsList;
