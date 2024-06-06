import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import InsightsItem from "../molecules/InsightsItem";

async function TheLatestSection() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <SectionContainer border whitespace="sub" className="h-fit lg:col-start-2">
      <SectionHead className="flex justify-between">
        The latest
        <ViewAllButton to="/insights" />
      </SectionHead>
      <List vertical>
        {trendingInsights.map((insight) => (
          <InsightsItem key={insight.idx} insight={insight} />
        ))}
      </List>
    </SectionContainer>
  );
}

export default TheLatestSection;
