import Box from "@/components/atoms/Box";
import ImageWrap from "@/components/atoms/ImageWrap";
import SectionContainer from "@/components/atoms/SectionContainer";
import Tag from "@/components/atoms/Tag";
import DateTTRRow from "@/components/molecules/DateTTRRow";
import type { Insight } from "@/types/Insight";
import AuthorSummaryLoader from "./AuthorSummaryLoader";
import ShareButton from "./ShareButton";

function InsightPostSection({ insight }: { insight: Insight }) {
  return (
    <SectionContainer whitespace="none" className="px-2 sm:px-4 lg:px-0">
      {/* title */}
      <Box
        vertical
        className="mx-auto max-w-5xl items-center gap-2 pb-28 pt-12"
      >
        {insight?.topic && <Tag tagName={insight.topic.name} />}
        <h1 className="text-center capitalize text-sky-700">{insight.title}</h1>
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
      <Box vertical className="mx-auto my-12 max-w-3xl 2xl:max-w-4xl">
        <div
          className="content text-g-800"
          dangerouslySetInnerHTML={{ __html: insight?.content || "" }}
        />
        <ShareButton
          link={`https://project-archon.vercel.app/insights/${insight.idx}`}
        />
        {/* author info */}
        <AuthorSummaryLoader insight={insight} />
      </Box>
    </SectionContainer>
  );
}

export default InsightPostSection;
