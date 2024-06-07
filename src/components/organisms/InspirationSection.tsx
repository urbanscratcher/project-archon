import { getRandomInsights } from "@/services/insights.api";
import GetInspirationsButton from "../atoms/GetInspirationsButton";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import InspirationList from "../molecules/InspirationList";

async function InspirationSection({ border = false }: { border?: boolean }) {
  const inspirations = await getRandomInsights({ limit: 6 });

  return (
    <SectionContainer border={border} whitespace="sub" className={"h-fit"}>
      <SectionHead className="flex justify-between">
        INSPIRATIONS
        <GetInspirationsButton />
      </SectionHead>
      <InspirationList initialInspirations={inspirations} />
    </SectionContainer>
  );
}

export default InspirationSection;
