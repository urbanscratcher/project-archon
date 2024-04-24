import Link from "next/link";

function EditorsPickItem({ cover }: { cover: any }) {
  const data = {
    idx: cover.insight.idx,
    title: cover.insight.title,
    href: `/insights/${cover.insight.idx}`,
  };

  return (
    <li className="flex gap-2">
      <span className={"h4"}>✦</span>
      <Link href={data.href} className={`hover-underline`}>
        <h4>{data.title}</h4>
      </Link>
    </li>
  );
}

export default EditorsPickItem;
