import { getRandomInsights } from "@/services/insights.api";
import InspirationList from "./InspirationList";

async function Inspirations() {
  const inspirations = await getRandomInsights({ limit: 6 });

  return <InspirationList initialInspirations={inspirations} />;
}

export default Inspirations;
