import { getRandomInsights } from "@/api/insights.api";
import SectionHead from "../SectionHead";
import SubSectionContainer from "../SubSectionContainer";
import GetInspirationsBtn from "../modules/GetInspirationsBtn";
import InspirationList from "../modules/InspirationList";

async function Inspirations({
  applyContainer = true,
  className,
}: {
  applyContainer?: boolean;
  className?: string;
}) {
  const inspirations = await getRandomInsights({ limit: 6 });

  return (
    <SubSectionContainer
      applyContainer={applyContainer}
      className={`${className || ""}`}
    >
      <SectionHead className="flex justify-between">
        inspirations
        <GetInspirationsBtn />
      </SectionHead>
      <ul className="grid grid-cols-2 grid-rows-3 gap-2">
        <InspirationList initialInspirations={inspirations} />
      </ul>
    </SubSectionContainer>
  );
}

export default Inspirations;
