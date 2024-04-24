import { getCovers } from "@/api/covers.api";
import EditorsPickHead from "../molecules/EditorsPickHead";
import EditorsPickList from "../molecules/EditorsPickList";

async function EditorsPick() {
  const covers = await getCovers();

  const data = {
    head: covers?.data && covers.total > 0 && covers.data[0] && covers.data[0],
    restList: covers?.data && covers.total > 1 && covers.data.slice(1),
  };

  return (
    <>
      {data?.head && <EditorsPickHead cover={data.head} />}
      {data?.restList && <hr className="h-[1px] gap-2 border-sky-700" />}
      {data?.restList && <EditorsPickList covers={data.restList} />}
    </>
  );
}

export default EditorsPick;
