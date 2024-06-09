import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import ViewAllButton from "../../components/atoms/ViewAllButton";
import SavedForLaterLoader from "./SavedForLaterLoader";

function SavedForLaterSection() {
  return (
    <SectionContainer>
      <SectionHead className="flex justify-between">
        saved for later
        <ViewAllButton to="/bookmarks" />
      </SectionHead>
      <SavedForLaterLoader />
    </SectionContainer>
  );
}

export default SavedForLaterSection;
