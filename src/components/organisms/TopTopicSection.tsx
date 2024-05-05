import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import TopTopicContent from "./TopTopicContent";

function TopTopicSection() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>TOP TOPICS</SectionHead>
      <TopTopicContent />
    </SectionContainer>
  );
}

export default TopTopicSection;
