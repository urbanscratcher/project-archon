import { getTrendingInsights } from "@/api/trending.api";
import { type TrendingInsights } from "@/types/Trending";
import ImageWrap from "../ImageWrap";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import SubSectionContainer from "../SubSectionContainer";
import ViewAll from "../ViewAll";
import InsightsItem from "../modules/InsightsItem";
import FeaturedAuthors from "./FeaturedAuthors";
import Inspirations from "./Inspirations";

async function TheLatest() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  return (
    <SectionContainer
      className={`grid grid-cols-[1fr_2fr_1fr] gap-4 bg-mint-100`}
    >
      {/* @ts-expect-error Async Server Component */}
      <Inspirations className={"col-start-1 h-fit"} />
      <SubSectionContainer className="col-start-2 h-fit">
        <SectionHeading className="flex justify-between">
          The latest
          <ViewAll to="/insights" />
        </SectionHeading>
        <ul>
          {trendingInsights.map((insight) => (
            <InsightsItem key={insight.title} insight={insight} />
          ))}
        </ul>
      </SubSectionContainer>
      <div className="flex h-fit flex-col gap-4">
        <SubSectionContainer>
          {/* @ts-expect-error Async Server Component */}
          <FeaturedAuthors />
        </SubSectionContainer>

        <SubSectionContainer className={`h-fit`}>
          <SectionHeading>ad</SectionHeading>
          <div className="relative aspect-[3/2] w-full ">
            <ImageWrap
              src={"/test.webp"}
              alt="ad"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </SubSectionContainer>
      </div>
    </SectionContainer>
  );
}

export default TheLatest;
