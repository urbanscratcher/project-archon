import { TrendingInsight } from "@/types/Trending";
import Link from "next/link";
import Tag from "../Tag";
import Thumbnail from "../Thumbnail";
import InsightTitle from "./InsightTitle";

function TrendingInsightsItem({ insight }: { insight: TrendingInsight }) {
  return (
    <li
      className={`grid grid-rows-[1fr_auto] items-center gap-2 border-b border-b-g-300 py-4 last:border-b-0 sm:mx-4 sm:grid-cols-2`}
    >
      <div className="row-start-2 flex flex-col gap-2 sm:row-start-auto">
        <Tag tagName={insight.topic.name} />
        <h4 className="font-serif capitalize">
          <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
        </h4>
        <p className="capitalize tracking-wide text-g-700">
          By{" "}
          <Link
            href={`/authors/${insight.creator.idx}`}
            className="capitalize hover:text-g-900"
          >{`${insight.creator.firstName} ${insight.creator.lastName}`}</Link>
        </p>
      </div>
      <Thumbnail
        insightIdx={insight.idx}
        href={`/insights/${insight.idx}`}
        src={insight?.thumbnail || ""}
        alt={insight.title}
        aspect={"square"}
        rounded={"xl"}
        className={"row-start-1 max-h-[200px] w-full sm:row-start-auto"}
      />
    </li>
  );
}

export default TrendingInsightsItem;
