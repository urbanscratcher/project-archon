import { getTrendingInsights } from "@/api/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import SubSectionContainer from "../SubSectionContainer";
import ViewAll from "../ViewAll";
import InsightsItem from "../organisms/InsightsItem";
import FeaturedAuthors from "./FeaturedAuthors";
import Inspirations from "./Inspirations";

async function TheLatest() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <SectionContainer
      className={`grid grid-cols-1 gap-4 bg-mint-100 lg:grid-cols-[1fr_2fr_1fr]`}
    >
      {/* @ts-expect-error Async Server Component */}
      <Inspirations className={"h-fit lg:col-start-1"} />
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
          {/* @ts-expect-error Async Server Component */}
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
    </SectionContainer>
  );
}

export default TheLatest;
