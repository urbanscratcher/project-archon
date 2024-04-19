import SectionHead from "@/components/SectionHead";
import ViewAll from "@/components/ViewAll";
import RelatedList from "@/components/modules/RelatedList";
import { Topic } from "@/types/Topic";
import SectionContainer from "../SectionContainer";

function Related({ topic }: { topic: Topic }) {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        related
        <ViewAll to={`/insights?topics=${topic.name.toLowerCase()}`} />
      </SectionHead>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* @ts-expect-error Async Server Component */}
        <RelatedList topicIdx={topic.idx} />
      </ul>
    </SectionContainer>
  );
}

export default Related;
