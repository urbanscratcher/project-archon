import { getRandomInsights } from "@/services/insights.api";
import SectionHead from "../atoms/SectionHead";
import SubSectionContainer from "../atoms/SubSectionContainer";
import GetInspirationsBtn from "../organisms/GetInspirationsBtn";
import InspirationList from "../organisms/InspirationList";

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
        {/* TODO fix the key */}
        <InspirationList
          key={new Date().toISOString()}
          initialInspirations={inspirations}
        />
      </ul>
    </SubSectionContainer>
  );
}

export default Inspirations;
