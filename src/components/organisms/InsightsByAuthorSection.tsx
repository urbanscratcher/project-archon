import SectionContainer from "../atoms/SectionContainer";
import InsightsByAuthor from "./InsightsByAuthor";

function InsightsByAuthorSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <InsightsByAuthor idx={idx} />
    </SectionContainer>
  );
}

export default InsightsByAuthorSection;
