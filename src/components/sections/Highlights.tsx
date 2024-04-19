import EditorsPick from "./EditorsPick";
import Headline from "./Headline";

function Highlights() {
  return (
    <section className="sm:grid sm:grid-cols-[2fr_1fr] ">
      {/* @ts-expect-error Async Server Component */}
      <Headline />
      <EditorsPick />
    </section>
  );
}

export default Highlights;
