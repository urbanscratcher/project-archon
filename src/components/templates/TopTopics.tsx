/**
 * [ ] font 디자인 수정
 */

import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import TopTopicsList from "../organisms/TopTopicsList";

function TopTopics() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHead>Top topics</SectionHead>
      <ul className={`flex flex-wrap gap-x-36 gap-y-10`}>
        {/* @ts-expect-error Async Server Component */}
        <TopTopicsList />
      </ul>
    </SectionContainer>
  );
}

export default TopTopics;
