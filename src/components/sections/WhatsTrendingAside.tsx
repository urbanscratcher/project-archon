import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsights } from "@/types/Trending";
import Link from "next/link";
import SectionHead from "../SectionHead";
import SubSectionContainer from "../SubSectionContainer";
import Thumbnail from "../Thumbnail";
import InsightTitle from "../modules/InsightTitle";

async function WhatsTrendingAside() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  // TODO: error handling
  if (!trendingInsights || trendingInsights.length <= 0) {
    return <div>Empty list</div>;
  }

  return (
    <SubSectionContainer applyContainer={false}>
      <SectionHead>What&apos;s Trending</SectionHead>
      <ul className="flex flex-col">
        {trendingInsights.map((insight) => (
          <li
            key={`trending_aside_${insight.idx}`}
            className={` flex flex-col-reverse gap-2 border-b border-b-g-200 py-4 sm:flex-row sm:gap-1 sm:last:border-b-0`}
          >
            <div className="flex w-full flex-col gap-1 px-1 sm:w-2/3 sm:px-0">
              <p className="line-clamp-3 text-[17px] font-semibold capitalize leading-[1.263] tracking-[0.5px] text-g-700">
                <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
              </p>

              <p className="capitalize tracking-wide text-g-700">
                By{" "}
                <Link href={`/authors/${insight.creator.idx}`}>
                  {insight.creator.firstName} {insight.creator.lastName}
                </Link>
              </p>
            </div>
            <Thumbnail
              insightIdx={insight.idx}
              href={`/insights/${insight.idx}`}
              src={insight.thumbnail || ""}
              alt={insight.title}
              aspect={"photo"}
              className={"w-full sm:h-[180px] lg:h-[100px]"}
              rounded={"xl"}
            />
          </li>
        ))}
      </ul>
    </SubSectionContainer>
  );
}

export default WhatsTrendingAside;
