import { getCovers } from "@/services/covers.api";
import Thumbnail from "../Thumbnail";
import Divider from "../atoms/EditorsPickDivider";
import EditorsPickHeadContainer from "../atoms/EditorsPickHeadContainer";
import Tag from "../atoms/Tag";
import EditorsPickList from "../molecules/EditorsPickList";
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
    restList: covers?.data && covers.total > 1 && covers.data.slice(1),
  };

  return (
    <>
      {data?.head && (
        <EditorsPickHeadContainer>
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
        </EditorsPickHeadContainer>
      )}
      {data?.restList && <Divider />}
      {data?.restList && <EditorsPickList covers={data.restList} />}
    </>
  );
}

export default EditorsPickContent;
