import { getCovers } from "@/api/covers.api";
import { Cover } from "@/types/Cover";
import Link from "next/link";
import Thumbnail from "../Thumbnail";
import Tag from "../atoms/Tag";

async function EditorsPick() {
  const covers = await getCovers();

  const data = {
    head: covers?.data && covers.total > 0 && covers.data[0] && covers.data[0],
    restList: covers?.data && covers.total > 1 && covers.data.slice(1, -1),
  };

  return (
    <>
      {data.head && <EditorsPickHead cover={data.head} />}
      {data.restList && <hr className="h-[1px] gap-2 border-sky-700" />}
      {data.restList && <EditorsPickList covers={data.restList} />}
    </>
  );
}

export default EditorsPick;

function EditorsPickHead({ cover }: { cover: any }) {
  const data = {
    idx: cover.insight.idx,
    thumbnail: cover.insight.thumbnail,
    title: cover.insight.title,
    href: `/insights/${cover.insight.idx}`,
    topic: cover.topic.name,
  };

  return (
    <div className="flex flex-col gap-2">
      <Thumbnail
        insightIdx={data.idx}
        href={data.href}
        src={data.thumbnail}
        alt="editors pick cover"
        aspect={"video"}
        className="mb-3"
      />
      <Tag tagName={data.topic} />
      <Link href={data.href} className={`hover hover-underline`}>
        <h3 className="line-clamp-3">{data.title}</h3>
      </Link>
    </div>
  );
}

function EditorsPickItem({ cover }: { cover: any }) {
  const data = {
    idx: cover.insight.idx,
    title: cover.insight.title,
    href: `/insights/${cover.insight.idx}`,
  };

  return (
    <li className="flex gap-2">
      <span className={"h4"}>✦</span>
      <Link href={data.href} className={`hover hover-underline`}>
        <h4>{data.title}</h4>
      </Link>
    </li>
  );
}

function EditorsPickList({ covers }: { covers: any[] }) {
  const data = { list: covers.slice(0, 3) };

  return (
    <ul className="flex flex-col gap-2">
      {data.list.map((cover: Cover) => {
        return <EditorsPickItem key={cover.insight.idx} cover={cover} />;
      })}
    </ul>
  );
}
