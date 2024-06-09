import { getTopics } from "@/services/topics.api";
import Link from "next/link";
import List from "../../components/atoms/List";
import ListItem from "../../components/atoms/ListItem";

async function TopTopicsLoader() {
  const topics = await getTopics();

  const data = topics.data.map((topic) => {
    return {
      idx: topic.idx,
      href: `/insights?topics=${topic.name.toLowerCase()}`,
      name: topic.name,
      totalInsights: `${topic?.totalInsights ? topic.totalInsights : 0}`,
    };
  });

  if (topics.total <= 0) {
    return;
  }

  return (
    <>
      <List
        className={`grid grid-cols-1 gap-y-4 sm:gap-y-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}
      >
        {data.map((topic) => (
          <ListItem key={topic.idx} horizontal>
            <Link
              href={topic.href}
              className="hover:shadow-[inset_0_-30px_0_#ddea6c]"
            >
              <h1 className="font-sans font-normal capitalize tracking-[.04rem]">
                {topic.name}{" "}
              </h1>
            </Link>

            <label
              className={`p flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-white sm:h-8 sm:w-8`}
            >
              {topic.totalInsights}
            </label>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default TopTopicsLoader;
