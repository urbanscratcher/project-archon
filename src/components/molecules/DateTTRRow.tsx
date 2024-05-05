import { getTimeAgo } from "@/libs/helpers";
import { IoTimeOutline } from "react-icons/io5";
import Box from "../atoms/Box";

type DateTTRRow = {
  createdAt: Date;
  ttr?: string | number;
  className?: string;
};

function DateTTRRow({ createdAt, ttr = 2, className }: DateTTRRow) {
  return (
    <Box
      horizontal
      className={`flex-wrap items-center gap-1
      ${className || ""}`}
    >
      <Box
        horizontal
        className="flex-nowrap items-center gap-1 whitespace-nowrap"
      >
        <IoTimeOutline className="text-[1.1875rem]" />
        <p>{getTimeAgo(createdAt, "month")}</p>
      </Box>
      <p>·</p>
      <p className="whitespace-nowrap">{`${ttr} min read`}</p>
    </Box>
  );
}

export default DateTTRRow;
