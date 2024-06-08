import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import EditorsPick from "./EditorsPick";

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
      <EditorsPick />
    </SectionContainer>
  );
}

export default EditorsPickSection;
