import { getTrendingInsights } from "@/services/trending.api";
import { TrendingInsights } from "@/types/Trending";
import Thumbnail from "../atoms/Thumbnail";
import AuthorRowSimple from "./AuthorRowSimple";
import InsightTitle from "./InsightTitle";

async function WhatsTrendingAsideContent() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  // TODO: error handling
  if (!trendingInsights || trendingInsights.length <= 0) {
    return <div>Empty list</div>;
  }

  return (
    <>
      {" "}
      {trendingInsights.map((insight) => (
        <li
          key={insight.idx}
          className={`flex flex-col-reverse gap-2 border-b border-b-g-200 py-4 sm:flex-row sm:gap-1 sm:last:border-b-0`}
        >
          <div className="flex flex-col gap-1 px-1 sm:w-2/3 sm:px-0">
            <p className="line-clamp-3 text-[17px] font-semibold capitalize leading-[1.263] tracking-[0.5px] text-g-700">
              <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
            </p>

            <AuthorRowSimple
              href={`/authors/${insight.creator.idx}`}
              fullName={
                insight.creator.firstName + " " + insight.creator.lastName
              }
            />
          </div>
          <Thumbnail
            insightIdx={insight.idx}
            href={`/insights/${insight.idx}`}
            src={insight?.thumbnail || ""}
            alt={insight.title}
            aspect={"photo"}
            className={"flex-grow-1 sm:h-[180px] lg:h-[100px] 2xl:h-[120px]"}
            rounded={"xl"}
          />
        </li>
      ))}
    </>
  );
}

export default WhatsTrendingAsideContent;