import { getInsightsByAuthor } from "@/services/insights.api";
import { type Insight } from "@/types/Insight";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import InsightsItem from "../molecules/InsightsItem";

async function InsightsByAuthor({ idx }: { idx: number }) {
  const insights = await getInsightsByAuthor({
    authorIdx: idx,
    offset: 0,
    limit: 10,
  });

  if (insights?.total <= 0) {
    return <></>;
  }

  return (
    <SectionContainer>
      <SectionHead>
        Written By {insights.data[0].creator.firstName}{" "}
        {insights.data[0].creator.lastName}
      </SectionHead>
      <ul>
        {insights.data.map((insight: Insight) => (
          <InsightsItem
            key={insight.idx}
            insight={insight}
            summary
            oneThirdImage
          />
        ))}
      </ul>
    </SectionContainer>
  );
}

export default InsightsByAuthor;
