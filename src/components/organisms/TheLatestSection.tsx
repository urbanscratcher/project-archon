import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import InsightsItem from "../molecules/InsightsItem";
import SectionContainer from "../atoms/SectionContainer";
import List from "../atoms/List";

async function TheLatestSection() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <SectionContainer border whitespace="sub" className="h-fit lg:col-start-2">
      <SectionHead className="flex justify-between">
        The latest
        <ViewAll to="/insights" />
      </SectionHead>
      <List>
        {trendingInsights.map((insight) => (
          <InsightsItem key={`latest_${insight.idx}`} insight={insight} />
        ))}
      </List>
    </SectionContainer>
  );
}

export default TheLatestSection;
