import { getTrendingInsights } from "@/services/trending.api";
import {
  TrendingInsight,
  type TrendingInsights as WhatsTrendingContent,
} from "@/types/Trending";
import WhatsTrendingContentGrid from "../templates/WhatsTrendingContentGrid";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";
import TrendingInsightsListItem from "../molecules/TrendingInsightsListItem";
import List from "../atoms/List";

async function WhatsTrendingContent() {
  const trendingInsights: WhatsTrendingContent = await getTrendingInsights();

  const data = {
    head:
      trendingInsights && trendingInsights.length > 0 && trendingInsights[0],
    restList:
      trendingInsights &&
      trendingInsights.length > 1 &&
      trendingInsights.slice(1),
  };

  return (
    <WhatsTrendingContentGrid>
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
    </WhatsTrendingContentGrid>
  );
}

export default WhatsTrendingContent;
