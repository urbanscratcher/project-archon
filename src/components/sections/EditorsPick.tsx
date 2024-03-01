import SectionHeading from "../SectionHeading";
import EditorsPickList from "../modules/EditorsPickList";

function EditorsPick() {
  return (
    <section className={`bg-y-200 xs:h-screen px-8 pb-10 pt-20 xl:h-[1033px]`}>
      <SectionHeading>editor&apos;s pick</SectionHeading>
      <div className="text-sky-700">
        {/* @ts-expect-error Async Server Component */}
        <EditorsPickList />
      </div>
    </section>
  );
}

export default EditorsPick;
