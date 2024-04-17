import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsight, TrendingInsights } from "@/types/Trending";
import Link from "next/link";
import Tag from "../Tag";
import Thumbnail from "../Thumbnail";
import InsightTitle from "./InsightTitle";
import InsightsItemHead from "./InsightsItemHead";

async function TrendingInsightsList() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  if (!trendingInsights || trendingInsights.length <= 0) {
    return <></>;
  }

  return (
    <>
      <InsightsItemHead insight={trendingInsights[0]} />
      <div className={`border-r border-r-sky-700`}>
        <ul>
          {trendingInsights.map((insight: TrendingInsight) => (
            <li
              key={`trending_${insight.idx}`}
              className={`mx-4 grid grid-cols-2 items-center gap-2 border-b border-b-g-300 py-4 last:border-b-0`}
            >
              <div className="flex flex-col gap-2">
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
                className={"max-h-[200px] w-full"}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TrendingInsightsList;
