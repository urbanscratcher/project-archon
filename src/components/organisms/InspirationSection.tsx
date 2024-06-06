import { getRandomInsights } from "@/services/insights.api";
import GetInspirationsBtn from "../atoms/GetInspirationsBtn";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import InspirationList from "../molecules/InspirationList";

async function InspirationSection() {
  const inspirations = await getRandomInsights({ limit: 6 });

  return (
    <SectionContainer border whitespace="sub" className={"h-fit"}>
      <SectionHead className="flex justify-between">
        INSPIRATIONS
        <GetInspirationsBtn />
      </SectionHead>
      <InspirationList initialInspirations={inspirations} />
    </SectionContainer>
  );
}

export default InspirationSection;
