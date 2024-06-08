import SectionContainer from "../atoms/SectionContainer";
import InsightsByAuthor from "../molecules/InsightsByAuthor";

function InsightsByAuthorSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <InsightsByAuthor idx={idx} />
    </SectionContainer>
  );
}

export default InsightsByAuthorSection;
