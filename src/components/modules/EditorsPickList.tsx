import Image from "next/image";
import ViewAll from "../ViewAll";
import Tag from "../Tag";
import { getCovers } from "@/api/covers.api";
import { Cover } from "@/types/Cover";

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
          {covers.data && covers.total > 0 && covers.data[0].insight.title}
        </h3>
      </div>
      <hr className="my-5 h-[1px] gap-2 border-sky-700" />
      <div className="flex flex-col gap-2">
        <ul className="flex flex-col gap-3">
          {covers.data &&
            covers.total > 0 &&
            covers.data.map((c: Cover, idx: number) => {
              if (idx > 0 && idx < 4) {
                return (
                  <li
                    key={c.insight.title}
                    className="flex gap-2 font-serif text-2xl"
                  >
                    <span>✦</span>
                    <h4>{c.insight.title}</h4>
                  </li>
                );
              }
            })}
        </ul>
        <ViewAll />
      </div>
    </>
  );
}

export default EditorsPickList;
