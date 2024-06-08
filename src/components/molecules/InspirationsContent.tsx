import { getRandomInsights } from "@/services/insights.api";
import Inspirations from "./Inspirations";

async function InspirationsContent() {
  const initialInspirations = await getRandomInsights({ limit: 6 });

  return <Inspirations initialInspirations={initialInspirations} />;
}

export default InspirationsContent;
