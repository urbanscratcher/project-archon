import Link from "next/link";
import Thumbnail from "../Thumbnail";
import Tag from "../atoms/Tag";

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
      <Link href={data.href} className={`hover-underline`}>
        <h3 className="line-clamp-3">{data.title}</h3>
      </Link>
    </div>
  );
}

export default EditorsPickHead;
