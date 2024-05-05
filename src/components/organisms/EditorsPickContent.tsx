import { getCovers } from "@/services/covers.api";
import { type Cover } from "@/types/Cover";
import Thumbnail from "../Thumbnail";
import Box from "../atoms/Box";
import List from "../atoms/List";
import ListItem from "../atoms/ListItem";
import Tag from "../atoms/Tag";
import LinkText from "../molecules/LinkText";

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
        <Box vertical className="gap-2">
          <Thumbnail
            insightIdx={data.head.idx}
            href={data.head.href}
            src={data.head.thumbnail}
            alt="editors pick cover"
            aspect={"video"}
            className="mb-3"
          />
          <Tag tagName={data.head.topic} />
          <LinkText
            href={data.head.href}
            text={data.head.title}
            level={3}
            lineClamp={3}
          />
        </Box>
      )}
      {data?.restList && <hr className="border-sky-700" />}
      {data?.restList && (
        <List
          vertical
          className="marker:h4 gap-2 pl-5 marker:content-['✦'] [&>*]:pl-1"
        >
          {data.restList.map((item: any) => (
            <ListItem horizontal key={item.idx} id={item.idx}>
              <LinkText
                href={item.href}
                text={item.title}
                level={4}
                lineClamp={3}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default EditorsPickContent;
