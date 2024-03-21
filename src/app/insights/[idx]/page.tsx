import SectionHeading from "@/components/SectionHeading";
import ViewAll from "@/components/ViewAll";
import Related from "@/components/modules/Related";
import InsightPost from "@/components/sections/InsightPost";
import SectionContainer from "../../../components/SectionContainer";

function InsightPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <main className="pt-[96px]">
      {/* @ts-expect-error Async Server Component */}
      <InsightPost idx={idx} />
      <SectionContainer>
        <SectionHeading className="flex justify-between">
          related
          <ViewAll to={"/insights"} />
        </SectionHeading>
        <div>
          <ul className="flex gap-4">
            {/* @ts-expect-error Async Server Component */}
            <Related />
          </ul>
        </div>
      </SectionContainer>
    </main>
  );
}

export default InsightPage;
