import { type Insight } from "@/types/Insight";
import { type TrendingInsight } from "@/types/Trending";
import Link from "next/link";
import Thumbnail from "../atoms/Thumbnail";
import List from "../atoms/List";
import Tag from "../atoms/Tag";
import ListItem from "../atoms/ListItem";
import LinkText from "./LinkText";
import AuthorRowSimple from "./AuthorRowSimple";
import Box from "../atoms/Box";

function TrendingInsightsListItem({ insight }: { insight: TrendingInsight }) {
  const data = {
    idx: insight.idx,
    tagName: insight.topic.name,
    insightLink: `/insights/${insight.idx}`,
    fullName: `${insight.creator.firstName} ${insight.creator.lastName}`,
    thumbnail: insight?.thumbnail || "",
    title: insight.title,
    authorLink: `/authors/${insight.creator.idx}`,
  };
  return (
    <ListItem
      id={insight.idx}
      key={insight.idx}
      className={`grid grid-rows-[1fr_auto] items-center gap-4 border-b border-b-g-300 py-4 last:border-b-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-2`}
    >
      <Box vertical className="row-start-2 gap-2 sm:row-start-auto">
        <Tag tagName={data.tagName} />
        <LinkText
          href={data.insightLink}
          text={data.title}
          level={4}
          lineClamp={3}
          className="capitalize"
        />
        <AuthorRowSimple href={data.authorLink} fullName={data.fullName} />
      </Box>
      <Thumbnail
        insightIdx={data.idx}
        href={data.insightLink}
        src={data.thumbnail}
        alt={data.title}
        aspect={"square"}
        rounded={"xl"}
        className={"row-start-1 max-h-[200px] w-full sm:row-start-auto"}
      />
    </ListItem>
  );
}

export default TrendingInsightsListItem;
