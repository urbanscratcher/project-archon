import GetInspirationsButton from "../atoms/GetInspirationsButton";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import Inspirations from "../molecules/Inspirations";

function InspirationSection({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub" className={"h-fit"}>
      <SectionHead className="flex justify-between">
        INSPIRATIONS
        <GetInspirationsButton />
      </SectionHead>
      <List className="grid grid-cols-2 grid-rows-3 gap-2">
        <Inspirations />
      </List>
    </SectionContainer>
  );
}

export default InspirationSection;
