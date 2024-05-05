import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import ImageWrap from "../atoms/ImageWrap";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import InsightsItem from "../molecules/InsightsItem";
import FeaturedAuthors from "../templates/FeaturedAuthors";
import InspirationSection from "./InspirationSection";
import SectionContainer from "../templates/SectionContainer";

async function TheLatestSection() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <>
      <InspirationSection className={"h-fit lg:col-start-1"} />
      <SectionContainer
        border
        whitespace="sub"
        className="h-fit lg:col-start-2"
      >
        <SectionHead className="flex justify-between">
          The latest
          <ViewAll to="/insights" />
        </SectionHead>
        <ul>
          {trendingInsights.map((insight) => (
            <InsightsItem key={`latest_${insight.idx}`} insight={insight} />
          ))}
        </ul>
      </SectionContainer>
      <div className="flex h-fit flex-col gap-4">
        <SectionContainer border whitespace="sub">
          <FeaturedAuthors />
        </SectionContainer>

        <SectionContainer border whitespace="sub" className={`h-fit`}>
          <SectionHead>ad</SectionHead>
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl hover:cursor-pointer">
            <ImageWrap
              src={"/test.webp"}
              alt="ad"
              className={`absolute object-cover`}
              fill
            />
          </div>
        </SectionContainer>
      </div>
    </>
  );
}

export default TheLatestSection;
