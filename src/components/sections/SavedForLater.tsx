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
      <ul className="flex gap-4">
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLater;
