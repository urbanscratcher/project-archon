import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import SavedForLaterContent from "../molecules/SavedForLaterContent";

function SavedForLaterSection() {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        saved for later
        <ViewAll to="/bookmarks" />
      </SectionHead>
      <SavedForLaterContent />
    </SectionContainer>
  );
}

export default SavedForLaterSection;
