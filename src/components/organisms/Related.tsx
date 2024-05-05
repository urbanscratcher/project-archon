import SectionHead from "@/components/atoms/SectionHead";
import ViewAll from "@/components/atoms/ViewAll";
import RelatedList from "@/components/molecules/RelatedList";
import { Topic } from "@/types/Topic";
import SectionContainer from "../templates/SectionContainer";

function Related({ topic }: { topic: Topic }) {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        related
        <ViewAll to={`/insights?topics=${topic.name.toLowerCase()}`} />
      </SectionHead>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <RelatedList key={topic.idx} topicIdx={topic.idx} />
      </ul>
    </SectionContainer>
  );
}

export default Related;
