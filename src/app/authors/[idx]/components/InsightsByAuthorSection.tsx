import SectionContainer from "../../../../components/atoms/SectionContainer";
import InsightsByAuthorLoader from "./InsightsByAuthorLoader";

function InsightsByAuthorSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <InsightsByAuthorLoader idx={idx} />
    </SectionContainer>
  );
}

export default InsightsByAuthorSection;
