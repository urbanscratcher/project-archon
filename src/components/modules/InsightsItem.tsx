import { Insight } from "@/types/Insight";
import Tag from "../Tag";
import Thumbnail from "../Thumbnail";
import AuthorRow from "./AuthorRow";
import DateTTRRow from "./DateTTRRow";
import InsightTitle from "./InsightTitle";

function InsightsItem({
  insight,
  squared,
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
    <li
      className={` grid ${squared ? "grid-rows-[auto_auto] content-start" : `${oneThirdImage ? "grid-cols-[1fr_2fr]" : "grid-cols-2"} border-b border-b-g-300 last:border-b-0`} items-center gap-4 py-6  ${className || ""}`}
    >
      <Thumbnail
        href={`/insights/${insight.idx}`}
        src={insight?.thumbnail || ""}
        alt={insight.title}
        aspect={`${squared ? "" : "video"}`}
        className={`${squared ? "h-[250px]" : "h-full max-w-full"}`}
      />
      <div className={`flex flex-col gap-2`}>
        <Tag tagName={insight.topic.name} />
        {squared ? (
          <h4 className="line-clamp-3 text-ellipsis font-serif text-sky-700">
            <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
          </h4>
        ) : (
          <h3 className="line-clamp-3 text-ellipsis font-serif text-sky-700">
            <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
          </h3>
        )}
        {summary && (
          <p className="line-clamp-3 text-ellipsis text-sky-700">
            {insight.summary}
          </p>
        )}
        <DateTTRRow createdAt={insight.createdAt} />
        <AuthorRow creator={insight.creator} />
      </div>
    </li>
  );
}

export default InsightsItem;
