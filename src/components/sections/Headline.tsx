import { getHeadline } from "@/api/covers.api";
import { Cover } from "@/types/Cover";
import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
import InsightTitle from "../modules/InsightTitle";

async function Headline() {
  const headline: Cover = await getHeadline();

  return (
    <section className="xs:h-screen relative min-h-[400px] xl:h-[1033px]">
      <ImageWrap
        src={headline.insight.thumbnail}
        fill
        alt="headline thumbnail"
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <div
        className={`absolute bottom-0 inline-flex flex-col gap-3 px-10 py-16`}
      >
        <Tag tagName={headline.topic.name} isWhite />
        <h1 className="text-white">
          <InsightTitle idx={headline.insight.idx}>
            {headline.insight.title}
          </InsightTitle>
        </h1>
      </div>
    </section>
  );
}

export default Headline;
