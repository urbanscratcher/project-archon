import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import TopTopicsContent from "./TopTopicsContent";

function TopTopicSection() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>TOP TOPICS</SectionHead>
      <TopTopicsContent />
    </SectionContainer>
  );
}

export default TopTopicSection;
