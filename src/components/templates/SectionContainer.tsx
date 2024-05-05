import { WrapperProps } from "@/types/CommonTypes";

type WhitespaceType = "default" | "sub" | "no";

type SectionContainerProps = {
  border?: boolean;
  whitespace?: WhitespaceType;
} & WrapperProps;

function SectionContainer({
  children,
  className,
  border = false,
  whitespace = "default",
}: SectionContainerProps) {
  return (
    <section
      className={`
      ${whitespace === "default" ? "px-4 py-8 sm:px-6 sm:py-16" : ""}
      ${whitespace === "sub" ? "px-4 py-8" : ""}
    ${border ? "rounded-xl border border-sky-700" : ""}
    ${className || ""}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
