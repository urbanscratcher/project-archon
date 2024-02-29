import Image from "next/image";
import Tag from "../Tag";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import SectionHeading from "../SectionHeading";
import ViewAll from "../ViewAll";

function EditorsPick() {
  return (
    <section className={`bg-y-200 xs:h-screen px-8 pb-10 pt-20 xl:h-[1033px]`}>
      <SectionHeading>editor&apos;s pick</SectionHeading>
      <div className="text-sky-700">
        <div className="flex flex-col gap-2">
          <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={"/test.webp"}
              className={`absolute object-cover`}
              fill
              alt="editors pick cover"
            />
          </div>
          <Tag tagName={"narrative"} />
          <h3>
            {
              "The Passive Cooling Strategy Of A Brick Office In Taiwan For Climate Control"
            }
          </h3>
        </div>
        <hr className="my-5 h-[1px] gap-2 border-sky-700" />
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 font-serif text-2xl">
              <span>✦</span>
              <h4>
                Marvels Of Modern Architecture: Inspiring Structures Shaping Our
                Cities
              </h4>
            </li>
            <li className="flex gap-2 font-serif text-2xl font-light">
              <span>✦</span>
              <h4 className="">
                Marvels Of Modern Architecture: Inspiring Structures Shaping Our
                Cities
              </h4>
            </li>
            <li className="flex gap-2 font-serif text-2xl font-light">
              <span>✦</span>
              <h4 className="">
                Marvels Of Modern Architecture: Inspiring Structures Shaping Our
                Cities
              </h4>
            </li>
          </ul>
          <ViewAll className={``} />
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;
