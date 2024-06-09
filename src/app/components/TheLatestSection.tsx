import List from "../../components/atoms/List";
import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import ViewAllButton from "../../components/atoms/ViewAllButton";
import TheLatestLoader from "./TheLatestLoader";

function TheLatestSection() {
  return (
    <SectionContainer border whitespace="sub" className="h-fit lg:col-start-2">
      <SectionHead className="flex justify-between">
        The latest
        <ViewAllButton to="/insights" />
      </SectionHead>
      <List vertical>
        <TheLatestLoader />
      </List>
    </SectionContainer>
  );
}

export default TheLatestSection;
