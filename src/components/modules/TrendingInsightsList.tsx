import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsight, TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
import InsightsItemHead from "./InsightsItemHead";
import InsightTitle from "./InsightTitle";
import Link from "next/link";

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
              className={`mx-4 flex gap-2 border-b border-b-g-300 py-4 last:border-b-0`}
            >
              <div className="flex w-1/2 flex-col gap-2">
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
              <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                <ImageWrap
                  src={insight.thumbnail}
                  alt={insight.title}
                  className="object-cover"
                  fill
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TrendingInsightsList;
