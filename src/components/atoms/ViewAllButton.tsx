import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

function ViewAllButton({ to, className }: { to: string; className?: string }) {
  return (
    <Link
      href={to}
      className={`text-button hover-lighter ml-auto mr-0 flex w-fit items-center gap-1 text-sky-950 ${className || ""}`}
    >
      view all <IoChevronForwardOutline className="p scale-105" />
    </Link>
  );
}

export default ViewAllButton;
