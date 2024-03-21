import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

function ViewAll({ to, className }: { to: string; className?: string }) {
  return (
    <Link
      href={to}
      className={`ml-auto mr-0 flex w-fit items-center gap-1 text-[15px] font-semibold uppercase leading-[1.263] tracking-[1.25px] text-sky-950 ${className || ""}`}
    >
      view all <IoChevronForwardOutline className="scale-[120%]" />
    </Link>
  );
}

export default ViewAll;
