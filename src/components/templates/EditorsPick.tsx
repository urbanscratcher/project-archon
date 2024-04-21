import SectionHead from "../SectionHead";
import EditorsPickList from "../organisms/EditorsPickList";

function EditorsPick() {
  return (
    <section className={`xs:h-screen bg-y-200 px-8 pb-10 pt-20 xl:h-[1033px]`}>
      <SectionHead>editor&apos;s pick</SectionHead>
      <div className="text-sky-700">
        {/* @ts-expect-error Async Server Component */}
        <EditorsPickList />
      </div>
    </section>
  );
}

export default EditorsPick;
