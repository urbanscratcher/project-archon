import Box from "@/components/atoms/Box";
import ImageWrap from "@/components/atoms/ImageWrap";
import Tag from "@/components/atoms/Tag";
import DateTTRRow from "@/components/molecules/DateTTRRow";
import type { Insight } from "@/types/Insight";
import { IoLink } from "react-icons/io5";
import SectionContainer from "../../../../components/atoms/SectionContainer";
import AuthorSummaryContent from "./AuthorSummaryContent";

function InsightPostSection({ insight }: { insight: Insight }) {
  return (
    <SectionContainer whitespace="none" className="px-2 sm:px-4 lg:px-0">
      {/* title */}
      <Box
        vertical
        className="mx-auto max-w-5xl items-center gap-2 pb-28 pt-12"
      >
        {insight?.topic && <Tag tagName={insight.topic.name} />}
        <h1 className="text-center text-sky-700">{insight.title}</h1>
        <p className="my-6 text-sky-700">{insight.summary}</p>
        <DateTTRRow createdAt={insight.createdAt} />
      </Box>
      {/* thumbnail */}
      <Box className="relative aspect-video max-w-full overflow-hidden">
        <ImageWrap
          src={insight?.thumbnail || ""}
          alt={"thumbnail"}
          fill
          className="object-cover"
        />
      </Box>
      {/* content + author info */}
      <Box vertical className="mx-auto my-12 max-w-5xl">
        <div
          className="text-sky-700"
          dangerouslySetInnerHTML={{ __html: insight?.content || "" }}
        />
        <button className="my-12 w-fit self-center rounded-full border border-g-700 p-2">
          <IoLink className="text-lg text-g-700" />
        </button>
        {/* author info */}
        <AuthorSummaryContent insight={insight} />
      </Box>
    </SectionContainer>
  );
}

export default InsightPostSection;
