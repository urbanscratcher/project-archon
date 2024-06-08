import { getHeadline } from "@/services/covers.api";
import { type Cover } from "@/types/Cover";
import Box from "../atoms/Box";
import ImageOverlayed from "../atoms/ImageOverlayed";
import Tag from "../atoms/Tag";
import LinkText from "../molecules/LinkText";

async function Headline() {
  const headline: Cover = await getHeadline();

  const data = {
    idx: headline.insight.idx,
    thumbnail: headline.insight.thumbnail,
    tagName: headline.topic.name,
    title: headline.insight.title,
    href: `/insights/${headline.insight.idx}`,
  };

  return (
    <>
      <ImageOverlayed
        src={data.thumbnail}
        alt="background thumbnail of headline"
        priority
      />
      <Box
        vertical
        className={`absolute bottom-0 mx-4 my-8 gap-3 text-white sm:mx-6 sm:my-16`}
      >
        <Tag tagName={data.tagName} white />
        <LinkText href={data.href} text={data.title} level={1} lineClamp={3} />
      </Box>
    </>
  );
}

export default Headline;
