import { ReactNode } from "react";

function SubSectionContainer({
  className,
  applyContainer = true,
  children,
}: {
  className?: string;
  applyContainer?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`rounded-xl  ${applyContainer ? "border border-sky-700 px-4 py-8" : ""} ${className || ""}`}
    >
      {children}
    </section>
  );
}

export default SubSectionContainer;
