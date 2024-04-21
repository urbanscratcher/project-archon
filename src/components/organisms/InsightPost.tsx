import ImageWrap from "@/components/ImageWrap";
import TagLink from "@/components/atoms/TagLink";
import DateTTRRow from "@/components/organisms/DateTTRRow";
import { Insight } from "@/types/Insight";
import { IoLink } from "react-icons/io5";

function InsightPost({ insight }: { insight: Insight }) {
  return (
    <section className="px-2 sm:px-4 lg:px-0">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 pb-28 pt-12">
        {insight?.topic && <TagLink tagName={insight.topic.name} />}
        <h1 className="text-center text-sky-700">{insight.title}</h1>
        <p className="my-6 text-sky-700">{insight.summary}</p>
        <DateTTRRow createdAt={insight.createdAt} isPrimary={false} />
      </div>
      <div className="relative aspect-video max-w-full overflow-hidden">
        <ImageWrap
          src={insight.thumbnail}
          alt={"thumbnail"}
          fill
          className="object-cover"
        />
      </div>
      <div className="mx-auto my-12 flex max-w-5xl flex-col">
        <div
          className="text-sky-700"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        <button className="my-12 w-fit self-center rounded-full border border-g-700 p-2">
          <IoLink className="text-lg text-g-700" />
        </button>
        <div className="grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] items-center gap-4 border-t border-t-g-300 py-10">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-sky-700">
            <ImageWrap
              src={insight.creator?.avatar || ""}
              alt="avatar"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold capitalize text-sky-700">
              {insight.creator.firstName} {insight.creator.lastName}
            </p>
            <p className="capitalize text-sky-700">Urban</p>
          </div>
          <p className="col-span-full text-g-700">
            Olivia Bennett, a talented young architecture intern, draws
            inspiration from her role as an assistant to the lead architect at
            UrbanScape Designs. With a passion for sustainable architecture and
            urban planning, her writing navigates the exciting realm of
            environmentally-conscious design and the shaping of urban
            landscapes. Olivias narratives offer fresh perspectives on
            sustainable building practices and innovative approaches to creating
            livable, vibrant cities. Join her in exploring the intersection of
            architecture and sustainability, as she uncovers the impactful ways
            design choices can influence our environment and communities for the
            better.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InsightPost;
