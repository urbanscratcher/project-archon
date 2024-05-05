import { getTopics } from "@/services/topics.api";
import { type Topic } from "@/types/Topic";
import Link from "next/link";
import HorizontalItem from "../atoms/HorizontalItem";
import TopTopicListGrid from "../atoms/TopTopicListGrid";
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
    <TopTopicListGrid>
      {data?.list &&
        data.list.map((topic: Topic) => (
          <HorizontalItem key={topic.idx}>
            <Link
              href={topic.href}
              className="hover:shadow-[inset_0_-30px_0_#ddea6c]"
            >
              <TopTopicText text={topic.name} />
            </Link>
            <TopTopicTotalLabel label={topic.totalInsights} />
          </HorizontalItem>
        ))}
    </TopTopicListGrid>
  );
}

export default TopTopicContent;
