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
      className={`mb-3 text-[17px] text-lg font-semibold uppercase leading-[1.263] tracking-[0.5px] text-sky-950 ${className || ""}`}
    >
      {children}
    </p>
  );
}

export default SectionHead;
