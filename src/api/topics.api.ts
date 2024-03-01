import { TopicsSchema } from "@/types/Topic";
import { getList } from "./general.api";

export async function getTopics() {
  const res = await getList("http://localhost:5001/archon-api/v1/topics");
  const topics = res ? TopicsSchema.parse(res) : undefined;
  return topics;
}
