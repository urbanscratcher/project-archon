import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights as WhatsTrendingContent } from "@/types/Trending";
import WhatsTrendingContentGrid from "../atoms/WhatsTrendingContentGrid";
import TrendingInsightsHead from "../molecules/TrendingInsightsHead";
import TrendingInsightsList from "../molecules/TrendingInsightsList";

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
      {data?.restList && <TrendingInsightsList insights={data.restList} />}
      <hr className="hidden h-full bg-sky-700 xl:block xl:w-[1px]" />
    </WhatsTrendingContentGrid>
  );
}

export default WhatsTrendingContent;
