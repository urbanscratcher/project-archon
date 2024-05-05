import { getTopics } from "@/services/topics.api";
import { type Topic } from "@/types/Topic";
import Link from "next/link";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";
import TopTopicText from "../atoms/TopTopicText";
import TopTopicTotalLabel from "../atoms/TopTopicTotalLabel";

async function TopTopicContent() {
  const topics = await getTopics();

  const data = {
    list:
      topics &&
      topics.total > 0 &&
      topics.data.map((topic: Topic) => {
        return {
          href: `/insights?topics=${topic.name.toLowerCase()}`,
          name: topic.name,
          totalInsights: topic.totalInsights,
        };
      }),
  };

  return (
    <>
      {data?.list && data.list.length > 0 && (
        <List
          className={`grid grid-cols-1 gap-y-4 sm:gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
        >
          {data.list.map((topic: Topic) => (
            <ListItem key={`topic_${topic.idx}`} horizontal>
              <Link
                href={topic.href}
                className="hover:shadow-[inset_0_-30px_0_#ddea6c]"
              >
                <TopTopicText text={topic.name} />
              </Link>
              <TopTopicTotalLabel label={topic.totalInsights} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default TopTopicContent;
