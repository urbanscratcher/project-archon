import Link from "next/link";
import { ReactNode } from "react";

function InsightTitle({ idx, children }: { idx: number; children: ReactNode }) {
  return (
    <Link href={`/insights/${idx}`}>
      <span className="line-clamp-4 hover:cursor-pointer hover:underline hover:decoration-2">
        {children}
      </span>
    </Link>
  );
}

export default InsightTitle;
