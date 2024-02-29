import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import TopTopicsList from "../modules/TopTopicsList";

function TopTopics() {
  return (
    <SectionContainer className="bg-b-200">
      <SectionHeading>Top topics</SectionHeading>
      <ul className={`flex flex-wrap gap-x-36 gap-y-10`}>
        {/* @ts-expect-error Async Server Component */}
        <TopTopicsList />
      </ul>
    </SectionContainer>
  );
}

export default TopTopics;
