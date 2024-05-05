import { getRandomInsights } from "@/services/insights.api";
import List from "../atoms/List";
import SectionContainer from "../templates/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import GetInspirationsBtn from "../atoms/GetInspirationsBtn";
import InspirationItems from "../molecules/InspirationItems";

async function InspirationSection({ className }: { className?: string }) {
  const inspirations = await getRandomInsights({ limit: 6 });

  return (
    <SectionContainer border whitespace="sub" className={className}>
      <SectionHead className="flex justify-between">
        inspirations
        <GetInspirationsBtn />
      </SectionHead>
      <List className="grid grid-cols-2 grid-rows-3 gap-2">
        {/* TODO fix the key */}
        <InspirationItems
          key={new Date().toISOString()}
          initialInspirations={inspirations}
        />
      </List>
    </SectionContainer>
  );
}

export default InspirationSection;
