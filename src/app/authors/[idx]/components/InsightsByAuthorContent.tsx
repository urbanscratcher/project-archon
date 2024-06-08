import List from "@/components/atoms/List";
import SectionHead from "@/components/atoms/SectionHead";
import InsightsItem from "@/components/molecules/InsightsItem";
import { getInsightsByAuthor } from "@/services/insights.api";
import { type Insight } from "@/types/Insight";

async function InsightsByAuthorContent({ idx }: { idx: number }) {
  const insights = await getInsightsByAuthor({
    authorIdx: idx,
    offset: 0,
    limit: 10,
  });

  if (insights?.total <= 0) {
    return;
  }

  const data = {
    firstName: insights.data[0].createdBy.firstName,
    lastName: insights.data[0].createdBy.lastName,
    insights:
      insights.data && insights.data.length > 0 ? insights.data : undefined,
  };

  return (
    <>
      <SectionHead>
        Written By {data.firstName} {data.lastName}
      </SectionHead>
      <List>
        {data?.insights &&
          data.insights.map((insight: Insight) => (
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

export default InsightsByAuthorContent;
