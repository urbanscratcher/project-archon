import EditorsPick from "./EditorsPick";
import HeadlineSection from "./HeadlineSection";

function HighlightSection() {
  return (
    <section className="lg:grid lg:grid-cols-[2fr_1fr]">
      {/* @ts-expect-error Async Server Component */}
      <HeadlineSection />
      <EditorsPick />
    </section>
  );
}

export default HighlightSection;
