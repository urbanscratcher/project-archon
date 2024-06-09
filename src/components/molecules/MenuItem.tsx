import Link from "next/link";
import type { ReactNode } from "react";
import ListItem from "../atoms/ListItem";

function MenuItem({
  children,
  pathName,
  href,
  onClick,
  className,
}: {
  children: ReactNode;
  pathName: string;
  href: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <ListItem className={className || ""}>
      <Link
        className={`text-button menu__hover sm:px-1 ${pathName === href ? "menu__active" : ""}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </ListItem>
  );
}

export default MenuItem;
