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
      <ul className="flex flex-col gap-4 sm:flex-row">
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLater;
