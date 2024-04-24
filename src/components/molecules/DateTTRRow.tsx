import { getTimeAgo } from "@/libs/helpers";
import { IoTimeOutline } from "react-icons/io5";

type DateTTRRow = {
  createdAt: Date;
  ttr?: string | number;
  className?: string;
};

function DateTTRRow({ createdAt, ttr, className }: DateTTRRow) {
  return (
    <div
      className={`flex flex-wrap items-center gap-1
      ${className || ""}`}
    >
      <span className="flex flex-nowrap items-center gap-1 whitespace-nowrap">
        <IoTimeOutline className="text-[1.1875rem]" />
        <p>{getTimeAgo(createdAt, "month")}</p>
      </span>
      <p>·</p>
      <p className="whitespace-nowrap">{`2 min read`}</p>
    </div>
  );
}

export default DateTTRRow;
