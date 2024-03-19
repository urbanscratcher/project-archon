import { getTimeAgo } from "@/libs/helpers";
import { IoTimeOutline } from "react-icons/io5";

function DateTTRRow({
  createdAt,
  ttr,
  isPrimary = true,
  className,
}: {
  createdAt: Date;
  ttr?: string | number;
  isPrimary?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-1 ${isPrimary ? "text-sky-700" : "text-g-700"} ${className || ""}`}
    >
      <IoTimeOutline className="text-[19px]" />
      <p>{getTimeAgo(createdAt, "month")}</p>
      <p>·</p>
      <p>{`2 min read`}</p>
    </div>
  );
}

export default DateTTRRow;
