import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import TopTopicsLoader from "./TopTopicsContent";

function TopTopicSection() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>TOP TOPICS</SectionHead>
      <TopTopicsLoader />
    </SectionContainer>
  );
}

export default TopTopicSection;
