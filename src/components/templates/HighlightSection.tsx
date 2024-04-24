import EditorsPickSection from "./EditorsPickSection";
import HeadlineSection from "./HeadlineSection";

function HighlightSection() {
  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr]">
      {/* @ts-expect-error Async Server Component */}
      <HeadlineSection className="h-screen max-h-[700px] min-h-[300px] sm:max-h-none lg:min-h-[860px] 2xl:h-[1033px]" />
      <EditorsPickSection className="min-h-fit 2xl:h-[1033px]" />
    </section>
  );
}

export default HighlightSection;
