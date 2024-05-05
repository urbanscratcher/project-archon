import { getTrendingInsights } from "@/services/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import SectionHead from "../atoms/SectionHead";
import SubSectionContainer from "../atoms/SubSectionContainer";
import ViewAll from "../atoms/ViewAll";
import InsightsItem from "../organisms/InsightsItem";
import FeaturedAuthors from "./FeaturedAuthors";
import InspirationSection from "./InspirationSection";

async function TheLatestSection() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <>
      <InspirationSection className={"h-fit lg:col-start-1"} />
      <SubSectionContainer className="h-fit lg:col-start-2">
        <SectionHead className="flex justify-between">
          The latest
          <ViewAll to="/insights" />
        </SectionHead>
        <ul>
          {trendingInsights.map((insight) => (
            <InsightsItem key={`latest_${insight.idx}`} insight={insight} />
          ))}
        </ul>
      </SubSectionContainer>
      <div className="flex h-fit flex-col gap-4">
        <SubSectionContainer>
          <FeaturedAuthors />
        </SubSectionContainer>

        <SubSectionContainer className={`h-fit`}>
          <SectionHead>ad</SectionHead>
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl hover:cursor-pointer">
            <ImageWrap
              src={"/test.webp"}
              alt="ad"
              className={`absolute object-cover`}
              fill
            />
          </div>
        </SubSectionContainer>
      </div>
    </>
  );
}

export default TheLatestSection;
