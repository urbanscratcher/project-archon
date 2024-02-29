import { TopicsSchema } from "@/types/Topic";

export async function getList(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(url, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        switch (res.status) {
          case 404:
            throw new Error("Not Found");
          case 429:
            throw new Error("Too many request");
          default:
            throw new Error("Internal Error");
        }
      }
    })
    .catch((err) => console.error(err));

  return response;
}

export async function getTopics() {
  const res = await getList("http://localhost:5001/archon-api/v1/topics");
  const topics = res ? TopicsSchema.parse(res) : undefined;
  return topics;
}
