import { TopicsSchema, type Topics } from "@/types/Topic";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getList } from "./general.api";

export async function getTopics(): Promise<Topics> {
  try {
    const res = await getList(API_ENDPOINTS.TOPICS);

    const topics = TopicsSchema.safeParse(res);
    if (!topics?.success) {
      throw new Error("Failed to parse topics");
    }

    return topics.data;
  } catch (error) {
    console.error("Error in getTopics: ", error);
    throw error;
  }
}
