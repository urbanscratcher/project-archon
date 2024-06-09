import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import EditorsPickLoader from "./EditorsPickLoader";

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
      <EditorsPickLoader />
    </SectionContainer>
  );
}

export default EditorsPickSection;
