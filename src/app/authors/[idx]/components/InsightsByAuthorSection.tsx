import SectionContainer from "../../../../components/atoms/SectionContainer";
import InsightsByAuthorContent from "./InsightsByAuthorContent";

function InsightsByAuthorSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <InsightsByAuthorContent idx={idx} />
    </SectionContainer>
  );
}

export default InsightsByAuthorSection;
