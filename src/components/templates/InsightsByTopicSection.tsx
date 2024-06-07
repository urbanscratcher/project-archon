import { getTopics } from "@/services/topics.api";
import SectionContainer from "../atoms/SectionContainer";
import InsightsList from "../molecules/InsightsList";
import TopicsNavbar from "../organisms/TopicsNavbar";

async function InsightsByTopicSection() {
  const topics = await getTopics();

  return (
    <SectionContainer>
      {topics?.data && <TopicsNavbar topics={topics.data} />}
      {topics?.data && <InsightsList topics={topics.data} />}
    </SectionContainer>
  );
}

export default InsightsByTopicSection;
