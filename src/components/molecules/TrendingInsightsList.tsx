import { type Insight } from "@/types/Insight";
import { type TrendingInsight } from "@/types/Trending";
import TrendingInsightsItem from "./TrendingInsightsItem";

function TrendingInsightsList({ insights }: { insights: Insight[] }) {
  return (
    <ul className="flex flex-col lg:block">
      {insights.map((insight: TrendingInsight) => {
        return (
          <>
            <TrendingInsightsItem key={insight.idx} insight={insight} />
          </>
        );
      })}
    </ul>
  );
}

export default TrendingInsightsList;
