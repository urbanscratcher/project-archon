import { type Cover } from "@/types/Cover";
import EditorsPickItem from "./EditorsPickItem";

function EditorsPickList({ covers }: { covers: any }) {
  const data = { list: covers.slice(0, 3) };

  return (
    <ul className="flex flex-col gap-2">
      {data.list.map((cover: Cover) => {
        return <EditorsPickItem key={cover.insight.idx} cover={cover} />;
      })}
    </ul>
  );
}

export default EditorsPickList;
