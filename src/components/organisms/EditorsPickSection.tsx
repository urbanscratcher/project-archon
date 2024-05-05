import Box from "../atoms/Box";
import SectionContainer from "../templates/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
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
      <Box vertical className="gap-6">
        <EditorsPickContent />
        <ViewAll to="/insights" />
      </Box>
    </SectionContainer>
  );
}

export default EditorsPickSection;
