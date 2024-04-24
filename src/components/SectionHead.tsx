import { ReactNode } from "react";

function SectionHead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-3 font-semibold uppercase tracking-[0.5px] text-sky-950 ${className || ""}`}
    >
      {children}
    </p>
  );
}

export default SectionHead;
