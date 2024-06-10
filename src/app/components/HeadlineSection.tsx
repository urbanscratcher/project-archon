import SectionContainer from "../../components/atoms/SectionContainer";
import HeadlineLoader from "./HeadlineLoader";

function HeadlineSection() {
  return (
    <SectionContainer
      whitespace="none"
      className="
        3xl:max-h-[1
        440px]
        relative
        h-screen
        max-h-[700px]
        min-h-[496px]
        sm:max-h-[682px]
        lg:min-h-[1000px]
      "
    >
      <HeadlineLoader />
    </SectionContainer>
  );
}

export default HeadlineSection;
