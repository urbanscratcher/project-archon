import { type Insight } from "@/types/Insight";
import Box from "../atoms/Box";
import ListItem from "../atoms/ListItem";
import Tag from "../atoms/Tag";
import Thumbnail from "../atoms/Thumbnail";
import AuthorRow from "./AuthorRow";
import DateTTRRow from "./DateTTRRow";
import LinkText from "./LinkText";

function InsightsItem({
  insight,
  squared = false,
  oneThirdImage = false,
  summary = false,
  className,
}: {
  insight: Insight;
  key: string;
  squared?: boolean;
  oneThirdImage?: boolean;
  summary?: boolean;
  className?: string;
}) {
  return (
    <ListItem
      className={`grid
      ${squared ? "grid-rows-[auto_auto] content-start" : `${oneThirdImage ? "grid-cols-1 sm:grid-cols-[1fr_2fr]" : "grid-cols-2"} border-b border-b-g-300 last:border-b-0`}
      items-center gap-4
      ${squared ? "" : "py-6"}
      ${className || ""}`}
    >
      <Thumbnail
        insightIdx={insight.idx}
        href={`/insights/${insight.idx}`}
        src={insight?.thumbnail || ""}
        alt={insight.title}
        aspect={`${squared ? "video" : "photo"}`}
      />
      <Box vertical className={`gap-2`}>
        <Tag tagName={insight.topic.name} />
        <LinkText
          href={`/insights/${insight.idx}`}
          text={insight.title}
          lineClamp={3}
          level={squared ? 3 : 4}
        />
        {summary && (
          <p className="line-clamp-3 text-ellipsis text-sky-700">
            {insight.summary}
          </p>
        )}
        <DateTTRRow createdAt={insight.createdAt} className="p-sm" />
        <AuthorRow creator={insight.creator} />
      </Box>
    </ListItem>
  );
}

export default InsightsItem;
