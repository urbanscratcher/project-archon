import { getTrendingInsights } from "@/api/trending.api";
import { TrendingInsights } from "@/types/Trending";
import Image from "next/image";
import ImageWrap from "../ImageWrap";
import SectionContainer from "../SectionContainer";
import SectionHeading from "../SectionHeading";
import SubSectionContainer from "../SubSectionContainer";
import ViewAll from "../ViewAll";
import InsightsItem from "../modules/InsightsItem";
import Inspirations from "./Inspirations";
async function TheLatest() {
  const trendingInsights: TrendingInsights = await getTrendingInsights();

  const authors = [
    {
      idx: 1,
      firstName: "Olivia",
      lastName: "Bennett",
      topics: [{ idx: 2, name: "Urban" }],
      thumbnail: "/test.webp",
    },
    {
      idx: 2,
      firstName: "Valentina",
      lastName: "Ramos",
      topics: [
        { idx: 23, name: "Narrative" },
        { idx: 4, name: "Cultural" },
      ],
      thumbnail: "/test.webp",
    },
    {
      idx: 3,
      firstName: "Sophia",
      lastName: "Miller",
      topics: [
        { idx: 44, name: "Exhibition" },
        { idx: 33, name: "Technology" },
      ],
      thumbnail: "/test.webp",
    },
    {
      idx: 4,
      firstName: "Isabella",
      lastName: "Rodriguez",
      topics: [
        { idx: 24, name: "Landscape" },
        { idx: 41, name: "Residential" },
      ],
      thumbnail: "/test.webp",
    },
  ];

  return (
    <SectionContainer
      className={`grid grid-cols-[1fr_2fr_1fr] gap-4 bg-mint-100`}
    >
      <Inspirations className={"col-start-1 h-fit"} />
      <SubSectionContainer className="col-start-2 h-fit">
        <SectionHeading className="flex justify-between">
          The latest
          <ViewAll />
        </SectionHeading>
        <ul>
          {trendingInsights.map((insight, idx) => (
            <InsightsItem key={insight.title} insight={insight} />
          ))}
        </ul>
      </SubSectionContainer>
      <div className="flex h-fit flex-col gap-4">
        <SubSectionContainer>
          <SectionHeading>featured authors</SectionHeading>
          <div className="flex flex-col gap-2">
            <ul className="pb-1">
              {authors.map((author, idx) => (
                <li
                  className="flex items-center gap-2 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0"
                  key={author.firstName + "_" + author.lastName}
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-sky-700">
                    <Image
                      src={author.thumbnail}
                      alt={`avatar of ${author.firstName} ${author.lastName}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <p className="font-semibold">
                      {author.firstName} {author.lastName}
                    </p>
                    <p>{author.topics.map((el) => el.name).join(" · ")}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ViewAll />
          </div>
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
