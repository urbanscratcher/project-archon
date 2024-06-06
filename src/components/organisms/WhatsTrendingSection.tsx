import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsight } from "@/types/Trending";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";
import TrendingInsightsListItem from "../molecules/TrendingInsightsListItem";

async function WhatsTrendingSection() {
  const trendingInsights = await getTrendingInsights();

  const data = {
    head:
      trendingInsights && trendingInsights.length > 0 && trendingInsights[0],
    restList:
      trendingInsights &&
      trendingInsights.length > 1 &&
      trendingInsights.slice(1),
  };

  return (
    <SectionContainer whitespace="none">
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAllButton to={"/insights"} />
      </SectionHead>
      <div
        className={`grid grid-cols-1 gap-6
            sm:grid-cols-[1fr_auto_1fr]
            lg:grid-cols-[3fr_auto_2fr] lg:gap-4
            xl:lg:grid-cols-[3fr_auto_2fr_auto]`}
      >
        {data?.head && <TrendingInsightsHead insight={data.head} />}
        <hr className="h-[1px] w-full border-0 bg-sky-700 sm:h-full sm:w-[1px]" />
        {data?.restList && (
          <List vertical className="lg:block">
            {data.restList.map((insight: TrendingInsight) => (
              <TrendingInsightsListItem
                key={`trendingInsights_${insight.idx}`}
                insight={insight}
              />
            ))}
          </List>
        )}
        <hr className="hidden h-full bg-sky-700 xl:block xl:w-[1px]" />
      </div>
    </SectionContainer>
  );
}

export default WhatsTrendingSection;
