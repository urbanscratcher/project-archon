import { WrapperProps } from "@/types/CommonTypes";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type LinkTextWrapperProps = LinkProps &
  HTMLProps<HTMLAnchorElement> &
  WrapperProps;

function LinkTextWrapper({
  href,
  children,
  className,
  ...restProps
}: LinkTextWrapperProps) {
  return (
    <Link
      href={href}
      className={`hover-underline ${className || ""}`}
      {...restProps}
    >
      {children}
    </Link>
  );
}

export default LinkTextWrapper;
