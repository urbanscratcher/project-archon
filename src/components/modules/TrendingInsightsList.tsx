import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsight, TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
import InsightsItemHead from "./InsightsItemHead";
import InsightTitle from "./InsightTitle";

async function TrendingInsightsList() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  // TODO: error handling
  if (!trendingInsights || trendingInsights.length <= 0) {
    return <></>;
  }

  return (
    <>
      <InsightsItemHead insight={trendingInsights[0]} />
      <div className={`border-r border-r-sky-700`}>
        <ul>
          {trendingInsights.map((insight: TrendingInsight, idx: number) => (
            <li
              key={insight.title}
              className={`border-b-g-300 mx-4 flex gap-2 border-b py-4 last:border-b-0`}
            >
              <div className="flex w-1/2 flex-col gap-2">
                <Tag tagName={insight.topic.name} />
                <h4 className="font-serif capitalize">
                  <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
                </h4>
                <p className="text-g-700 capitalize tracking-wide">
                  By{" "}
                  {`${insight.creator.firstName} ${insight.creator.lastName}`}
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
