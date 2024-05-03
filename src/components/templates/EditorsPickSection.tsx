import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import VerticalBox from "../atoms/VerticalBox";
import ViewAll from "../atoms/ViewAll";
import EditorsPickContent from "../organisms/EditorsPickContent";

function EditorsPickSection() {
  return (
    <SectionContainer className={`min-h-fit bg-y-200 2xl:h-[1033px]`}>
      <SectionHead>editor&apos;s pick</SectionHead>
      <VerticalBox className="gap-6">
        <EditorsPickContent />
        <ViewAll to="/insights" />
      </VerticalBox>
    </SectionContainer>
  );
}

export default EditorsPickSection;
