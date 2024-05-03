import { WrapperProps } from "@/types/CommonTypes";
import Link, { LinkProps } from "next/link";
import { HTMLProps } from "react";

type TextLinkWrapperProps = LinkProps &
  HTMLProps<HTMLAnchorElement> &
  WrapperProps;

function TextLinkWrapper({
  href,
  children,
  className,
  ...restProps
}: TextLinkWrapperProps) {
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

export default TextLinkWrapper;
