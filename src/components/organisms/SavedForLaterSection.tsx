import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import SavedForLaterContent from "../molecules/SavedForLaterContent";

function SavedForLaterSection() {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        saved for later
        <ViewAllButton to="/bookmarks" />
      </SectionHead>
      <SavedForLaterContent />
    </SectionContainer>
  );
}

export default SavedForLaterSection;
