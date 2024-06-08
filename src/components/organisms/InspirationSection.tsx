import InsipreButton from "../atoms/InspireButton";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import InspirationsContent from "../molecules/InspirationsContent";

function InspirationSection({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub" className={"h-fit"}>
      <SectionHead className="flex justify-between">
        INSPIRATIONS
        <InsipreButton />
      </SectionHead>
      <List className="grid grid-cols-2 grid-rows-3 gap-2">
        <InspirationsContent />
      </List>
    </SectionContainer>
  );
}

export default InspirationSection;
