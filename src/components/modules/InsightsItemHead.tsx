import { Insight } from "@/types/Insight";
import Tag from "../Tag";
import Thumbnail from "../Thumbnail";
import AuthorRow from "./AuthorRow";
import DateTTRRow from "./DateTTRRow";
import InsightTitle from "./InsightTitle";

function InsightsItemHead({
  insight,
  className,
}: {
  insight: Insight;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 pr-4 lg:border-r lg:border-r-sky-700 ${className || ""}`}
    >
      <Thumbnail
        insightIdx={insight.idx}
        href={`/insights/${insight.idx}`}
        src={insight.thumbnail}
        alt={insight.title}
        aspect={"video"}
      />
      <Tag tagName="narrative" />
      <h2 className="font-serif">
        <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
      </h2>
      <p className="text-xl tracking-wide">{insight.summary}</p>
      <DateTTRRow createdAt={insight.createdAt} />
      <AuthorRow creator={insight.creator} />
    </div>
  );
}

export default InsightsItemHead;
