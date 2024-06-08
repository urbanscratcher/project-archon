import { getTopics } from "@/services/topics.api";
import Link from "next/link";
import List from "../../components/atoms/List";
import ListItem from "../../components/atoms/ListItem";
import TopTopicText from "../../components/atoms/TopTopicText";
import TopTopicTotalLabel from "../../components/atoms/TopTopicTotalLabel";

async function TopTopicsContent() {
  const topics = await getTopics();

  const data = topics.data.map((topic) => {
    return {
      idx: topic.idx,
      href: `/insights?topics=${topic.name.toLowerCase()}`,
      name: topic.name,
      totalInsights: topic.totalInsights + "",
    };
  });

  return (
    <>
      {topics.total > 0 && (
        <List
          className={`grid grid-cols-1 gap-y-4 sm:gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
        >
          {data.map((topic) => (
            <ListItem key={topic.idx} horizontal>
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

export default TopTopicsContent;
