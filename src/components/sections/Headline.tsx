import Image from "next/image";
import Tag from "../Tag";
import { getHeadline } from "@/api/covers.api";
import { Cover } from "@/types/Cover";

async function Headline() {
  const headline: Cover = await getHeadline();

  return (
    <section className="xs:h-screen relative min-h-[400px] xl:h-[1033px]">
      <Image
        src={headline.insight.thumbnail}
        fill
        alt="headline thumbnail"
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <div className={`absolute bottom-0 flex flex-col gap-3 px-10 py-16`}>
        <Tag tagName={headline.topic.name} isWhite />
        <h1 className="text-white">{headline.insight.title}</h1>
      </div>
    </section>
  );
}

export default Headline;
