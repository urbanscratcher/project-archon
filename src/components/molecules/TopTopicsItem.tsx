import { type Topic } from "@/types/Topic";
import Link from "next/link";

function TopTopicsItem({ topic }: { topic: Topic }) {
  const data = {
    href: `/insights?topics=${topic.name.toLowerCase()}`,
    name: topic.name,
    totalInsights: topic.totalInsights,
  };

  return (
    <li className={"flex"}>
      <Link href={data.href} className="hover:shadow-[inset_0_-30px_0_#ddea6c]">
        <h1 className="font-sans font-normal capitalize tracking-[.04rem]">
          {data.name}
        </h1>
      </Link>
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-white sm:h-8 sm:w-8`}
      >
        <p>{data.totalInsights}</p>
      </div>
    </li>
  );
}

export default TopTopicsItem;
