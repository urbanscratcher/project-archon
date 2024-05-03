import { getHeadline } from "@/services/covers.api";
import { type Cover } from "@/types/Cover";
import HeadlineSectionContainer from "../atoms/HeadlineSectionContainer";
import HeadlineTextContainer from "../atoms/HeadlineTextContainer";
import ImageOverlayed from "../atoms/ImageOverlayed";
import Tag from "../atoms/Tag";
import LinkedText from "../molecules/LinkedText";

async function HeadlineSection() {
  const headline: Cover = await getHeadline();

  const data = {
    idx: headline.insight.idx,
    thumbnail: headline.insight.thumbnail,
    tagName: headline.topic.name,
    title: headline.insight.title,
    href: `/insights/${headline.insight.idx}`,
  };

  return (
    <HeadlineSectionContainer>
      <ImageOverlayed
        src={data.thumbnail}
        alt="background thumbnail of headline"
        priority
      />
      <HeadlineTextContainer>
        <Tag tagName={data.tagName} white />
        <LinkedText
          href={data.href}
          title={data.title}
          level={1}
          lineClamp={3}
        />
      </HeadlineTextContainer>
    </HeadlineSectionContainer>
  );
}

export default HeadlineSection;
