import type { TrendingInsight } from "@/types/Trending";
import Box from "../../components/atoms/Box";
import Tag from "../../components/atoms/Tag";
import Thumbnail from "../../components/atoms/Thumbnail";
import AuthorRowWithAvatar from "../../components/molecules/AuthorRowWithAvatar";
import DateTTRRow from "../../components/molecules/DateTTRRow";
import LinkText from "../../components/molecules/LinkText";

function TrendingInsightsHead({
  insight,
  className,
}: {
  insight: TrendingInsight;
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
      <AuthorRowWithAvatar creator={data.creator} />
    </Box>
  );
}

export default TrendingInsightsHead;
