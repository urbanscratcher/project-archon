import { getCovers } from "@/services/covers.api";
import { type Cover } from "@/types/Cover";
import Thumbnail from "../Thumbnail";
import Divider from "../atoms/EditorsPickDivider";
import ListItemBox from "../atoms/ListItemBox";
import ListVerticalBox from "../atoms/ListVerticalBox";
import Tag from "../atoms/Tag";
import VerticalBox from "../atoms/VerticalBox";
import LinkedText from "../molecules/LinkedText";

async function EditorsPickContent() {
  const covers = await getCovers();

  const data = {
    head: covers?.data &&
      covers.total > 0 && {
        idx: covers.data[0].insight.idx,
        thumbnail: covers.data[0].insight.thumbnail,
        title: covers.data[0].insight.title,
        href: `/insights/${covers.data[0].insight.idx}`,
        topic: covers.data[0].topic.name,
      },
    restList:
      covers?.data &&
      covers.total > 1 &&
      covers.data.slice(1, 4).map((cover: Cover) => {
        return {
          idx: cover.insight.idx,
          title: cover.insight.title,
          href: `/insights/${cover.insight.idx}`,
        };
      }),
  };

  return (
    <>
      {data?.head && (
        <VerticalBox className="gap-2">
          <Thumbnail
            insightIdx={data.head.idx}
            href={data.head.href}
            src={data.head.thumbnail}
            alt="editors pick cover"
            aspect={"video"}
            className="mb-3"
          />
          <Tag tagName={data.head.topic} />
          <LinkedText
            href={data.head.href}
            title={data.head.title}
            level={3}
            lineClamp={3}
          />
        </VerticalBox>
      )}
      {data?.restList && <Divider />}
      {data?.restList && (
        <ListVerticalBox className="marker:h4 gap-2 pl-5 marker:content-['✦'] [&>*]:pl-1">
          {data.restList.map((item: any) => (
            <ListItemBox key={item.idx}>
              <LinkedText
                href={item.href}
                title={item.title}
                level={3}
                lineClamp={4}
              />
            </ListItemBox>
          ))}
        </ListVerticalBox>
      )}
    </>
  );
}

export default EditorsPickContent;
