"use client";

import { Topic } from "@/types/Topic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function TopicsList({ topics }: { topics: Topic[] }) {
  const search = useSearchParams();
  const searchTopic = search.get("topics");

  return (
    <>
      <li key="all" className="">
        <Link
          className={`block w-full py-4 hover:border-b-2 hover:border-b-sky-700 ${!searchTopic || searchTopic === "all" ? "border-b-2 border-b-sky-700" : ""}`}
          href={{ pathname: "/insights", query: { topics: "all" } }}
          key={"all"}
        >
          ALL
        </Link>
      </li>
      {topics.length > 0 &&
        topics.map((topic: Topic) => (
          <li key={topic.name}>
            <Link
              className={`block h-full w-full py-4 hover:border-b-2 hover:border-b-sky-700 ${searchTopic === topic.name.toLowerCase() ? "border-b-2 border-b-sky-700" : ""}`}
              href={{
                pathname: "/insights",
                query: { topics: topic.name.toLowerCase() },
              }}
            >
              {topic.name}
            </Link>
          </li>
        ))}
    </>
  );
}

export default TopicsList;
