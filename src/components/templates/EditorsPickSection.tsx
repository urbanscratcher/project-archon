import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import ViewAll from "../molecules/ViewAll";
import EditorsPick from "../organisms/EditorsPick";

function EditorsPickSection({ className }: { className?: string }) {
  return (
    <SectionContainer className={`${className || ""}  bg-y-200`}>
      <SectionHead>editor&apos;s pick</SectionHead>
      <div className="flex flex-col gap-6 text-sky-700">
        {/* @ts-expect-error Async Server Component */}
        <EditorsPick />
        <ViewAll to="/insights" />
      </div>
    </SectionContainer>
  );
}

export default EditorsPickSection;
