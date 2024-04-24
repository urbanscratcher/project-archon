import { type Insight } from "@/types/Insight";
import Link from "next/link";
import Thumbnail from "../Thumbnail";
import Tag from "../atoms/Tag";
import AuthorRow from "../organisms/AuthorRow";
import DateTTRRow from "../organisms/DateTTRRow";

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
    <div className={`flex flex-col gap-4  ${className || ""}`}>
      <Thumbnail
        insightIdx={data.idx}
        href={data.href}
        src={data.thumbnail}
        alt={data.title}
        aspect={"video"}
      />
      <Tag tagName={data.tagName} />
      <Link href={data.href}>
        <p className="h3 lg:h2 line-clamp-4">{data.title}</p>
      </Link>
      <p className="line-clamp-5">{data.summary}</p>
      <DateTTRRow createdAt={data.createdAt} />
      <AuthorRow creator={data.creator} />
    </div>
  );
}

export default TrendingInsightsHead;
