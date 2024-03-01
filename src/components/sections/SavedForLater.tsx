import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import SavedForLaterList from "../modules/SavedForLaterList";

function SavedForLater() {
  return (
    <SectionContainer>
      <SectionHeading>saved for later</SectionHeading>
      <ul className="flex gap-4">
        {/* @ts-expect-error Async Server Component */}
        <SavedForLaterList />
      </ul>
    </SectionContainer>
  );
}

export default SavedForLater;
