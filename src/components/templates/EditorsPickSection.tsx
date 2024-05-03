import EditorsPickContainer from "../atoms/EditorsPickContainer";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import EditorsPickContent from "../organisms/EditorsPickContent";

function EditorsPickSection() {
  return (
    <SectionContainer className={`min-h-fit bg-y-200 2xl:h-[1033px]`}>
      <SectionHead>editor&apos;s pick</SectionHead>
      <EditorsPickContainer>
        <EditorsPickContent />
        <ViewAll to="/insights" />
      </EditorsPickContainer>
    </SectionContainer>
  );
}

export default EditorsPickSection;
