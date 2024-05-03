import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import SavedForLaterList from "../organisms/SavedForLaterList";

function SavedForLaterSection() {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        saved for later
        <ViewAll to="/bookmarks" />
      </SectionHead>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLaterSection;
