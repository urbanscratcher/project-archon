import SectionContainer from "../../../../components/atoms/SectionContainer";
import InsightsByAuthor from "../../../../components/molecules/InsightsByAuthor";

function InsightsByAuthorSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <InsightsByAuthor idx={idx} />
    </SectionContainer>
  );
}

export default InsightsByAuthorSection;
