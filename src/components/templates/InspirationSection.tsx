import { getRandomInsights } from "@/services/insights.api";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import GetInspirationsBtn from "../organisms/GetInspirationsBtn";
import InspirationItems from "../organisms/InspirationItems";

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
