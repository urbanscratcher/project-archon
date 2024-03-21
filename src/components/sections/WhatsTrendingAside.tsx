import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import SectionHeading from "../SectionHeading";
import SubSectionContainer from "../SubSectionContainer";
import InsightTitle from "../modules/InsightTitle";

async function WhatsTrendingAside() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  // TODO: error handling
  if (!trendingInsights || trendingInsights.length <= 0) {
    return <div>Empty list</div>;
  }

  return (
    <SubSectionContainer applyContainer={false}>
      <SectionHeading>What&apos;s Trending</SectionHeading>
      <ul className="flex flex-col">
        {trendingInsights.map((insight) => (
          <li
            key={`${insight.title}_${insight.idx}`}
            className={`flex gap-1 border-b border-b-g-200 py-4 last:border-b-0`}
          >
            <div className="flex w-2/3 flex-col gap-1">
              <p className="line-clamp-3 text-[17px] font-semibold capitalize leading-[1.263] tracking-[0.5px] text-g-700">
                <InsightTitle idx={insight.idx}>{insight.title}</InsightTitle>
              </p>
              <p className="capitalize tracking-wide text-g-700">{`By ${insight.creator.firstName} ${insight.creator.lastName}`}</p>
            </div>
            <div className="relative aspect-[3/2] w-1/3 overflow-hidden rounded-xl">
              <ImageWrap
                className="object-cover"
                src={insight.thumbnail}
                alt={insight.title}
                fill
              />
            </div>
          </li>
        ))}
      </ul>
    </SubSectionContainer>
  );
}

export default WhatsTrendingAside;
