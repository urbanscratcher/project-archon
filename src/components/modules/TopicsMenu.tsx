import { getTopics } from "@/api/topics.api";
import Link from "next/link";

async function TopicsMenu() {
  const topics = await getTopics();

  return (
    <>
      <li className="px-2 py-4" key="all">
        <Link
          href={{ pathname: "/insights", query: { topics: "all" } }}
          key={"all"}
        >
          ALL
        </Link>
      </li>
      {topics?.data &&
        topics?.data?.length > 0 &&
        topics.data.map((topic) => (
          <li className="px-2 py-4" key={topic.name}>
            <Link
              className={``}
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

export default TopicsMenu;
