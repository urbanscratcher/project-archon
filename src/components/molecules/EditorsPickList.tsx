import { type Cover } from "@/types/Cover";
import ListVerticalBox from "../atoms/ListVerticalBox";
import EditorsPickItem from "./EditorsPickItem";

function EditorsPickList({ covers }: { covers: any }) {
  const data = { list: covers.slice(0, 3) };

  return (
    <ListVerticalBox className="marker:h4 gap-2 pl-5 marker:content-['✦'] [&>*]:pl-1">
      {data.list.map((cover: Cover) => {
        return <EditorsPickItem key={cover.insight.idx} cover={cover} />;
      })}
    </ListVerticalBox>
  );
}

export default EditorsPickList;
