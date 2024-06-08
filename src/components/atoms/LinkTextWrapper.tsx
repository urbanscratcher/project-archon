import Link from "next/link";

type LinkTextWrapperProps = any;

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
