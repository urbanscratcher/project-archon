/**
 * [ ] font 디자인 수정
 */

import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import TopTopics from "../organisms/TopTopics";

function TopTopicSection() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>Top topics</SectionHead>
      {/* @ts-expect-error Async Server Component */}
      <TopTopics />
    </SectionContainer>
  );
}

export default TopTopicSection;
