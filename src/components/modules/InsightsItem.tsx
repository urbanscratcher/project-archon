import { getTimeAgo } from "@/libs/helpers";
import { Insight } from "@/types/Insight";
import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
import AuthorRow from "./AuthorRow";

function InsightsItem({
  insight,
  className,
}: {
  insight: Insight;
  className?: string;
}) {
  return (
    <li
      className={`border-b-g-300 flex gap-4 border-b py-5 last:border-b-0 ${className || ""}`}
    >
      <div
        className={`relative aspect-video w-1/2 overflow-hidden rounded-2xl`}
      >
        <ImageWrap
          src={insight.thumbnail}
          fill
          alt={insight.title}
          className={`object-cover`}
        />
      </div>
      <div className={`flex w-1/2 flex-col gap-2`}>
        <Tag tagName="narrative" />
        <h3 className="font-serif text-sky-700">{insight.title}</h3>
        <div className="flex gap-1 text-sky-700">
          <p>{getTimeAgo(insight.createdAt, "month")}</p>
          <p>·</p>
          <p>{`2 min read`}</p>
        </div>
        <AuthorRow creator={insight.creator} />
      </div>
    </li>
  );
}

export default InsightsItem;
