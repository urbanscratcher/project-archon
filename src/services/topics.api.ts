import { TopicsSchema } from "@/types/Topic";
import API_ENDPOINTS from "../libs/configApiUrl";
import { getList } from "./general.api";

export async function getTopics() {
  try {
    const res = await getList(API_ENDPOINTS.TOPICS);

    const topics = TopicsSchema.safeParse(res);

    if (!topics?.success) {
      console.error("Schema parsing failed: ", topics.error);
      throw new Error("Failed to parse topics");
    }

    return topics.data;
  } catch (error) {
    console.error("Error in getTopics: ", error);
    throw error;
  }
}
