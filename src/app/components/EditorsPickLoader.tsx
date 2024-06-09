import { getCovers } from "@/services/covers.api";
import { type Cover } from "@/types/Cover";
import Box from "../../components/atoms/Box";
import List from "../../components/atoms/List";
import ListItem from "../../components/atoms/ListItem";
import Tag from "../../components/atoms/Tag";
import Thumbnail from "../../components/atoms/Thumbnail";
import ViewAllButton from "../../components/atoms/ViewAllButton";
import LinkText from "../../components/molecules/LinkText";

async function EditorsPickLoader() {
  const covers = await getCovers();

  const data = {
    head: covers?.data &&
      covers.total > 0 && {
        idx: covers.data[0].insight.idx,
        thumbnail: covers.data[0].insight?.thumbnail || "",
        title: covers.data[0].insight.title,
        href: `/insights/${covers.data[0].insight.idx}`,
        topic: covers.data[0].topic.name,
      },
    restList: covers?.data && covers.total > 1 && covers.data.slice(1, 4),
  };

  return (
    <Box vertical className="gap-6">
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
        <List vertical className="marker:h4 gap-2 pl-5 marker:content-['✦']">
          {data.restList.map((item: Cover) => (
            <ListItem
              key={`editorsPick_${item.insight.idx}`}
              className="marker:h4 pl-1 marker:content-['✦']"
            >
              <LinkText
                href={`/insights/${item.insight.idx}`}
                text={item.insight.title}
                level={4}
                lineClamp={3}
              />
            </ListItem>
          ))}
        </List>
      )}
      <ViewAllButton to="/insights" />
    </Box>
  );
}

export default EditorsPickLoader;
