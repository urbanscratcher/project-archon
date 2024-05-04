import { WrapperProps } from "@/types/CommonTypes";

function HighlightSectionGrid({ children }: WrapperProps) {
  return (
    <section
      className="
    lg:grid
    lg:grid-cols-[2fr_1fr]
    "
    >
      {children}
    </section>
  );
}

export default HighlightSectionGrid;
