import { getTrendingInsights } from "@/api/trending.api";
import Image from "next/image";
import Tag from "../Tag";
import { TrendingInsight, TrendingInsights } from "@/types/Trending";
import { getTimeAgo } from "@/libs/helpers";

async function TrendingInsightsList() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  if (!trendingInsights || trendingInsights.length <= 0) {
    return <></>;
  }

  console.log(trendingInsights);

  return (
    <>
      <div className={`flex flex-col gap-4 border-r border-r-sky-700 pr-4`}>
        <div className="relative aspect-video overflow-hidden rounded-2xl p-5">
          <Image
            src={trendingInsights[0].thumbnail}
            fill
            alt={trendingInsights[0].title}
            className={`object-cover`}
          />
        </div>
        <Tag tagName="narrative" />
        <h2 className="font-serif">{trendingInsights[0].title}</h2>
        <p className="text-xl tracking-wide">{trendingInsights[0].summary}</p>
        <div className="flex gap-1">
          <p>{getTimeAgo(trendingInsights[0].createdAt, "month")}</p>
          <p>·</p>
          <p>{`2 min read`}</p>
        </div>
        <div className={`flex items-center gap-2`}>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-sky-700 object-cover">
            <Image src={trendingInsights[0].creator.avatar} fill alt="avatar" />
          </div>
          <p>{`${trendingInsights[0].creator.firstName} ${trendingInsights[0].creator.lastName}`}</p>
        </div>
      </div>

      <div className={`border-r border-r-sky-700`}>
        <ul>
          {trendingInsights.map((insight: TrendingInsight, idx: number) => (
            <li
              key={insight.title}
              className="border-b-g-300 mx-4 flex gap-2 border-b py-4"
            >
              <div className="flex w-1/2 flex-col gap-2">
                <Tag tagName={insight.topic.name} />
                <h4 className="font-serif capitalize">{insight.title}</h4>
                <p className="text-g-700 capitalize tracking-wider">
                  By{" "}
                  {`${insight.creator.firstName} ${insight.creator.lastName}`}
                </p>
              </div>
              <div className="relative aspect-square w-1/2 overflow-hidden rounded-xl">
                <Image
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
