import { getTrendingInsights } from "@/services/trending.api";
import { TrendingInsights } from "@/types/Trending";
import Link from "next/link";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import Thumbnail from "../atoms/Thumbnail";
import InsightTitle from "../molecules/InsightTitle";

async function WhatsTrendingAside({ border = false }: { border?: boolean }) {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  // TODO: error handling
  if (!trendingInsights || trendingInsights.length <= 0) {
    return <div>Empty list</div>;
  }

  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>What&apos;s Trending</SectionHead>
      <ul className="flex flex-col">
        {trendingInsights.map((insight) => (
          <li
            key={insight.idx}
            className={`flex flex-col-reverse gap-2 border-b border-b-g-200 py-4 sm:flex-row sm:gap-1 sm:last:border-b-0`}
          >
            <div className="flex flex-col gap-1 px-1 sm:w-2/3 sm:px-0">
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
              src={insight?.thumbnail || ""}
              alt={insight.title}
              aspect={"photo"}
              className={"flex-grow-1 sm:h-[180px] lg:h-[100px] 2xl:h-[120px]"}
              rounded={"xl"}
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default WhatsTrendingAside;
