import { Insight } from "@/types/Insight";
import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
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
      className={`flex flex-col gap-4 border-r border-r-sky-700 pr-4 ${className || ""}`}
    >
      <div className={`relative aspect-video overflow-hidden rounded-2xl p-5`}>
        <ImageWrap
          src={insight.thumbnail}
          fill
          alt={insight.title}
          className={`object-cover`}
        />
      </div>
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
