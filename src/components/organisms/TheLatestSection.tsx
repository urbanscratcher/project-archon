import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import TheLatest from "./TheLatest";

function TheLatestSection() {
  return (
    <SectionContainer border whitespace="sub" className="h-fit lg:col-start-2">
      <SectionHead className="flex justify-between">
        The latest
        <ViewAllButton to="/insights" />
      </SectionHead>
      <List vertical>
        <TheLatest />
      </List>
    </SectionContainer>
  );
}

export default TheLatestSection;
