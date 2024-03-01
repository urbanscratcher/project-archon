import { ReactNode } from "react";

function SubSectionContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`rounded-xl border border-sky-700 px-4 py-8 ${className || ""}`}
    >
      {children}
    </section>
  );
}

export default SubSectionContainer;
