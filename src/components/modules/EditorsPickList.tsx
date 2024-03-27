import { getCovers } from "@/api/covers.api";
import { Cover } from "@/types/Cover";
import Image from "next/image";
import Tag from "../Tag";
import ViewAll from "../ViewAll";
import InsightTitle from "./InsightTitle";

async function EditorsPickList() {
  const covers = await getCovers();

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={
              covers.data &&
              covers.total > 0 &&
              covers.data[0].insight.thumbnail
            }
            className={`absolute object-cover`}
            fill
            alt="editors pick cover"
          />
        </div>
        <Tag
          tagName={covers.data && covers.total > 0 && covers.data[0].topic.name}
        />
        <h3>
          {covers.data && covers.total > 0 && (
            <InsightTitle idx={covers.data[0].insight.idx}>
              {covers.data[0].insight.title}
            </InsightTitle>
          )}
        </h3>
      </div>
      <hr className="my-5 h-[1px] gap-2 border-sky-700" />
      <div className="flex flex-col gap-4">
        <ul className="flex flex-col gap-3">
          {covers.data &&
            covers.total > 0 &&
            covers.data.map((c: Cover, idx: number) => {
              if (idx > 0 && idx < 4) {
                return (
                  <li
                    key={`editors_${c.insight.idx}`}
                    className="flex gap-2 font-serif text-2xl"
                  >
                    <span>✦</span>
                    <h4>
                      <InsightTitle idx={c.insight.idx}>
                        {c.insight.title}
                      </InsightTitle>
                    </h4>
                  </li>
                );
              }
            })}
        </ul>
        <ViewAll to="/insights" />
      </div>
    </>
  );
}

export default EditorsPickList;
