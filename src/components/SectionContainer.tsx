import { ReactNode } from "react";

function SectionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 py-16 ${className || ""}`}>{children}</section>
  );
}

export default SectionContainer;
