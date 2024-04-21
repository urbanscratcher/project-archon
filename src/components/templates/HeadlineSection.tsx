import { getHeadline } from "@/api/covers.api";
import { Cover } from "@/types/Cover";
import ImageWrap from "../ImageWrap";
import HeadTxtLink from "../atoms/HeadTxtLink";
import TagLink from "../atoms/TagLink";

async function HeadlineSection() {
  const headline: Cover = await getHeadline();

  return (
    <section className="relative h-screen sm:min-h-[400px] xl:h-[1033px]">
      {/* gradient(black-yellow) filter */}
      <div
        role="presentation"
        className={`-z-5 absolute inset-0 w-full bg-gradient-to-tl from-y-700 to-black opacity-70`}
      ></div>
      {/* image bg */}
      <ImageWrap
        src={headline.insight.thumbnail}
        fill
        alt="headline thumbnail"
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      {/* headline */}
      <div
        className={`absolute bottom-0 inline-flex flex-col gap-3 px-10 py-16`}
      >
        <TagLink tagName={headline.topic.name} isWhite />
        <HeadTxtLink
          href={`/insights/${headline.insight.idx}`}
          className="text-white"
          txt={headline.insight.title}
        />
      </div>
    </section>
  );
}

export default HeadlineSection;
