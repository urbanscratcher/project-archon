import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import SavedForLaterList from "../modules/SavedForLaterList";

function SavedForLater() {
  return (
    <SectionContainer>
      <SectionHead>saved for later</SectionHead>
      <ul className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLater;
