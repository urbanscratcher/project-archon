import { type Insight } from "@/types/Insight";
import Thumbnail from "../atoms/Thumbnail";
import Box from "../atoms/Box";
import Tag from "../atoms/Tag";
import AuthorRow from "./AuthorRow";
import DateTTRRow from "./DateTTRRow";
import LinkText from "./LinkText";

function TrendingInsightsHead({
  insight,
  className,
}: {
  insight: Insight;
  className?: string;
}) {
  const data = {
    idx: insight.idx,
    href: `/insights/${insight.idx}`,
    thumbnail: insight.thumbnail,
    title: insight.title,
    summary: insight.summary,
    createdAt: insight.createdAt,
    creator: insight.creator,
    tagName: insight.topic.name,
  };

  return (
    <Box vertical className={`gap-4  ${className || ""}`}>
      <Thumbnail
        insightIdx={data.idx}
        href={data.href}
        src={data.thumbnail}
        alt={data.title}
        aspect={"video"}
      />
      <Tag tagName={data.tagName} />
      <LinkText
        text={data.title}
        href={data.href}
        level={3}
        lineClamp={4}
        className="lg:h2"
      />
      <p className="line-clamp-5">{data.summary}</p>
      <DateTTRRow createdAt={data.createdAt} />
      <AuthorRow creator={data.creator} />
    </Box>
  );
}

export default TrendingInsightsHead;
