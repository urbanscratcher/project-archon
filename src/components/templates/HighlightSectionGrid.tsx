import { WrapperProps } from "@/types/CommonTypes";

function HighlightGrid({ children }: WrapperProps) {
  return (
    <div
      className="
      lg:grid
      lg:grid-cols-[2fr_1fr]
    "
    >
      {children}
    </div>
  );
}

export default HighlightGrid;
