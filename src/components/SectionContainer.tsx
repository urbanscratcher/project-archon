import { ReactNode } from "react";

function SectionContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-8 sm:px-6 sm:py-16 ${className || ""}`}>
      {children}
    </section>
  );
}

export default SectionContainer;
