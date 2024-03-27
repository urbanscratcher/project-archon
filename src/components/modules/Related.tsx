import SectionHead from "@/components/SectionHead";
import ViewAll from "@/components/ViewAll";
import RelatedList from "@/components/modules/RelatedList";
import SectionContainer from "../SectionContainer";
import { Topic } from "@/types/Topic";

function Related({ topic }: { topic: Topic }) {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        related
        <ViewAll to={`/insights?topics=${topic.name.toLowerCase()}`} />
      </SectionHead>
      <ul className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <RelatedList topicIdx={topic.idx} />
      </ul>
    </SectionContainer>
  );
}

export default Related;
