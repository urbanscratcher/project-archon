import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import VerticalBox from "../atoms/VerticalBox";
import ViewAll from "../atoms/ViewAll";
import EditorsPickContent from "../organisms/EditorsPickContent";

function EditorsPickSection() {
  return (
    <SectionContainer
      className={`
      3xl:max-h-[1440px]
      min-h-fit
      bg-y-200
      lg:max-h-[1080px]
    `}
    >
      <SectionHead>editor&apos;s pick</SectionHead>
      <VerticalBox className="gap-6">
        <EditorsPickContent />
        <ViewAll to="/insights" />
      </VerticalBox>
    </SectionContainer>
  );
}

export default EditorsPickSection;
