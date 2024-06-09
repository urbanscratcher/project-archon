import SectionContainer from "../../components/atoms/SectionContainer";
import HeadlineLoader from "./HeadlineContent";

function HeadlineSection() {
  return (
    <SectionContainer
      whitespace="none"
      className="
        relative
        h-screen
        max-h-[700px]
        min-h-[496px]
        sm:max-h-[682px]
        lg:min-h-[980px]
        3xl:max-h-[1440px]
      "
    >
      <HeadlineLoader />
    </SectionContainer>
  );
}

export default HeadlineSection;
