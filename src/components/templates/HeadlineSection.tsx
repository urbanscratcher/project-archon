import { getHeadline } from "@/api/covers.api";
import { Cover } from "@/types/Cover";
import Link from "next/link";
import SectionContainer from "../SectionContainer";
import ImageOverlayed from "../atoms/ImageOverlayed";
import Tag from "../atoms/Tag";

async function HeadlineSection({ className }: { className: string }) {
  const headline: Cover = await getHeadline();

  const data = {
    idx: headline.insight.idx,
    thumbnail: headline.insight.thumbnail,
    tagName: headline.topic.name,
    title: headline.insight.title,
    href: `/insights/${headline.insight.idx}`,
  };

  return (
    <section className={`relative ${className || ""}`}>
      <ImageOverlayed
        src={data.thumbnail}
        alt="background thumbnail of headline"
        priority
      />
      <div
        className={`absolute bottom-0 mx-4 my-8 flex flex-col gap-3 text-white sm:mx-6 sm:my-16`}
      >
        <Tag tagName={data.tagName} white />
        <Link href={data.href} className={`hover hover-underline`}>
          <h1 className="line-clamp-4">{data.title}</h1>
        </Link>
      </div>
    </section>
  );
}

export default HeadlineSection;
