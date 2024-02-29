import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

function ViewAll({ className }: { className?: string }) {
  return (
    <Link
      href="/insights"
      className={`ml-auto mr-0 flex w-fit items-center gap-1 font-semibold uppercase tracking-wider text-sky-950 ${className || ""}`}
    >
      view all <IoChevronForwardOutline className="scale-[120%]" />
    </Link>
  );
}

export default ViewAll;
