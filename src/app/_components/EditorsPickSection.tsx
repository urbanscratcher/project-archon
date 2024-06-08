import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import EditorsPickContent from "./EditorsPickContent";

function EditorsPickSection() {
  return (
    <SectionContainer
      className={`
        min-h-fit
        bg-y-200
        lg:max-h-[1080px]
        3xl:max-h-[1440px]
      `}
    >
      <SectionHead>editor&apos;s pick</SectionHead>
      <EditorsPickContent />
    </SectionContainer>
  );
}

export default EditorsPickSection;
