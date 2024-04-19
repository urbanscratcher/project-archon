import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import ViewAll from "../ViewAll";
import SavedForLaterList from "../modules/SavedForLaterList";

function SavedForLater() {
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

export default SavedForLater;
