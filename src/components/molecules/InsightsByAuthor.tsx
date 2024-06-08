import { getInsightsByAuthor } from "@/services/insights.api";
import { type Insight } from "@/types/Insight";
import List from "../atoms/List";
import SectionHead from "../atoms/SectionHead";
import InsightsItem from "./InsightsItem";

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
    <>
      <SectionHead>
        Written By {insights.data[0].createdBy.firstName}{" "}
        {insights.data[0].createdBy.lastName}
      </SectionHead>
      <List>
        {insights.data.map((insight: Insight) => (
          <InsightsItem
            key={insight.idx + ""}
            insight={insight}
            summary
            oneThirdImage
          />
        ))}
      </List>
    </>
  );
}

export default InsightsByAuthor;
