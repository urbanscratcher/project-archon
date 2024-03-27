import { Topic } from "@/types/Topic";
import {
  IoArrowDown,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import TopicsList from "./TopicsList";

function TopicsNavbar({ topics }: { topics: Topic[] }) {
  return (
    <div className="flex w-full gap-8">
      <div className="flex w-full items-center justify-between  uppercase text-sky-700">
        <IoChevronBackOutline className="scale-[120%]" />
        <ul className="flex w-full gap-4 border-b border-b-g-100 px-5 text-[15px] font-semibold tracking-[1.25px] outline-offset-2">
          <TopicsList topics={topics} />
        </ul>
        <IoChevronForwardOutline className="scale-[120%]" />
      </div>
      <div className="flex w-fit items-center gap-1 text-[15px] font-semibold tracking-[1.25px] text-sky-700">
        <p>DATE</p>
        <IoArrowDown />
      </div>
    </div>
  );
}

export default TopicsNavbar;
