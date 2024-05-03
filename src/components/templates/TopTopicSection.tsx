import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import TopTopics from "../organisms/TopTopics";

function TopTopicSection() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>Top topics</SectionHead>
      <TopTopics />
    </SectionContainer>
  );
}

export default TopTopicSection;
