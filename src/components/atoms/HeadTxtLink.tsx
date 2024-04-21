import Link from "next/link";
import { type ReactNode } from "react";

type HeadTxtLink = {
  href: string;
  txt: string;
  className?: string;
};

function HeadTxtLink({ href, txt, className }: HeadTxtLink) {
  return (
    <Link
      href={href}
      className={`
        text-head hover hover-underline
        ${className || ""}
        `}
    >
      {txt}
    </Link>
  );
}

export default HeadTxtLink;
