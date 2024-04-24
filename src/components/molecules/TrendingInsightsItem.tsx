import { TrendingInsight } from "@/types/Trending";
import Link from "next/link";
import Thumbnail from "../Thumbnail";
import Tag from "../atoms/Tag";

function TrendingInsightsItem({ insight }: { insight: TrendingInsight }) {
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
    <li
      className={`grid grid-rows-[1fr_auto] items-center gap-4 border-b border-b-g-300 py-4 last:border-b-0 sm:grid-cols-2 sm:grid-rows-1 sm:gap-2`}
    >
      <div className="row-start-2 flex flex-col gap-2 sm:row-start-auto">
        <Tag tagName={data.tagName} />
        <Link className="hover-underline" href={data.insightLink}>
          <h4 className="capitalize">{data.title}</h4>
        </Link>
        <p className="capitalize text-g-700">
          By{" "}
          <Link href={data.authorLink} className="hover-darker capitalize">
            {data.fullName}
          </Link>
        </p>
      </div>
      <Thumbnail
        insightIdx={data.idx}
        href={data.insightLink}
        src={data.thumbnail}
        alt={data.title}
        aspect={"square"}
        rounded={"xl"}
        className={"row-start-1 max-h-[200px] w-full sm:row-start-auto"}
      />
    </li>
  );
}

export default TrendingInsightsItem;
