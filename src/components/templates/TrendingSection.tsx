import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import ViewAll from "../molecules/ViewAll";
import TrendingInsights from "../organisms/TrendingInsights";

function TrendingSection({ className }: { className?: string }) {
  return (
    <SectionContainer whitespace="no" className={`${className || ""}`}>
      <SectionHead className="flex justify-between">
        what&apos;s trending
        <ViewAll to={"/insights"} />
      </SectionHead>
      <div
        className={`grid grid-cols-1 gap-6
        sm:grid-cols-[1fr_auto_1fr]
        lg:grid-cols-[3fr_auto_2fr] lg:gap-4
        xl:lg:grid-cols-[3fr_auto_2fr_auto]`}
      >
        {/* @ts-expect-error Async Server Component */}
        <TrendingInsights />
      </div>
    </SectionContainer>
  );
}

export default TrendingSection;
