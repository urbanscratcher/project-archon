import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import SavedForLaterList from "../modules/SavedForLaterList";

function SavedForLater() {
  return (
    <SectionContainer>
      <SectionHead>saved for later</SectionHead>
      <ul className="flex gap-4">
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLater;
