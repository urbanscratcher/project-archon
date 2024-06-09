import SectionHead from "@/components/atoms/SectionHead";
import ViewAllButton from "@/components/atoms/ViewAllButton";
import RelatedLoader from "@/components/molecules/RelatedLoader";
import { Topic } from "@/types/Topic";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";

function RelatedAside({ topic }: { topic: Topic }) {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        related
        <ViewAllButton to={`/insights?topics=${topic.name.toLowerCase()}`} />
      </SectionHead>
      <List className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <RelatedLoader key={topic.idx} topicIdx={topic.idx} />
      </List>
    </SectionContainer>
  );
}

export default RelatedAside;
