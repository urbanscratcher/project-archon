import { getTopics } from "@/api/topics.api";
import { Topic } from "@/types/Topic";
import Link from "next/link";

async function TopTopicsList() {
  const topics = await getTopics();

  return (
    <>
      {topics &&
        topics.total > 0 &&
        topics.data.map((el: Topic) => (
          <li className={"flex"} key={`topTopics_${el.idx}`}>
            <Link href={`/insights?topics=${el.name.toLowerCase()}`}>
              <button className="topTopics font-sans text-6xl capitalize text-sky-700">
                {el.name}
              </button>
            </Link>
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-700 text-lg text-white`}
            >
              {el.totalInsights}
            </div>
          </li>
        ))}
    </>
  );
}

export default TopTopicsList;
