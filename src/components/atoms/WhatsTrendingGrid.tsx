import { WrapperProps } from "@/types/CommonTypes";

function WhatsTrendingGrid({ children }: WrapperProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-6
  sm:grid-cols-[1fr_auto_1fr]
  lg:grid-cols-[3fr_auto_2fr] lg:gap-4
  xl:lg:grid-cols-[3fr_auto_2fr_auto]`}
    >
      {children}
    </div>
  );
}

export default WhatsTrendingGrid;
