import Box from "../atoms/Box";
import ListItem from "../atoms/ListItem";
import Tag from "../atoms/Tag";
import Thumbnail from "../atoms/Thumbnail";
import AuthorRowWithAvatar from "./AuthorRowWithAvatar";
import DateTTRRow from "./DateTTRRow";
import LinkText from "./LinkText";

type InsightsItemProps = {
  insight: {
    idx: number;
    title: string;
    topic: { name: string };
    thumbnail?: string | undefined;
    summary?: string | undefined;
    createdAt: any;
    createdBy: any;
  };
  key: string;
  squared?: boolean;
  oneThirdImage?: boolean;
  summary?: boolean;
  className?: string;
};

function InsightsItem({
  insight,
  squared = false,
  oneThirdImage = false,
  summary = false,
  className,
}: InsightsItemProps) {
  const insightData = {
    idx: insight.idx,
    thumbnail: insight?.thumbnail || "/fallback.webp",
    title: insight.title,
    topicName: insight.topic.name,
    summary: insight?.summary || "",
    createdAt: insight.createdAt,
    createdBy: insight.createdBy,
    href: `/insights/${insight.idx}`,
  };

  return (
    <ListItem
      className={`grid
      ${squared ? "grid-rows-[auto_auto] content-start" : `${oneThirdImage ? "grid-cols-1 sm:grid-cols-[1fr_2fr]" : "grid-cols-2"} border-b border-b-g-300 last:border-b-0`}
      items-center gap-4
      ${squared ? "" : "py-6"}
      ${className || ""}`}
    >
      <Thumbnail
        insightIdx={insightData.idx}
        href={insightData.href}
        src={insightData.thumbnail}
        alt={insightData.title}
        aspect={`${squared ? "video" : "photo"}`}
      />
      <Box vertical className={`gap-2`}>
        <Tag tagName={insightData.topicName} />
        <LinkText
          href={`/insights/${insightData.idx}`}
          text={insightData.title}
          lineClamp={3}
          level={squared ? 3 : 4}
          className="capitalize"
        />
        {summary && (
          <p className="line-clamp-3 text-ellipsis text-sky-700">
            {insightData.summary}
          </p>
        )}
        <DateTTRRow createdAt={insightData.createdAt} className="p-sm" />
        <AuthorRowWithAvatar creator={insightData.createdBy} />
      </Box>
    </ListItem>
  );
}

export default InsightsItem;
