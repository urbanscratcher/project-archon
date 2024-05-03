import { type Topic } from "@/types/Topic";
import Link from "next/link";
import ListHorizontalBox from "../atoms/ListHorizontalBox";
import TopTopicText from "../atoms/TopTopicText";
import TopTopicTotalLabel from "../atoms/TopTopicTotalLabel";

function TopTopicsItem({ topic }: { topic: Topic }) {
  const data = {
    href: `/insights?topics=${topic.name.toLowerCase()}`,
    name: topic.name,
    totalInsights: topic.totalInsights,
  };

  return (
    <ListHorizontalBox>
      <Link href={data.href} className="hover:shadow-[inset_0_-30px_0_#ddea6c]">
        <TopTopicText text={data.name} />
      </Link>
      <TopTopicTotalLabel label={data.totalInsights} />
    </ListHorizontalBox>
  );
}

export default TopTopicsItem;
