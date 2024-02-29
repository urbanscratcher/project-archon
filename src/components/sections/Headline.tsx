import Image from "next/image";
import Tag from "../Tag";

function Headline() {
  return (
    <section className="xs:h-screen relative min-h-[400px] xl:h-[1033px]">
      <Image
        src="/test.webp"
        alt="headline"
        fill
        className="absolute inset-0 -z-10 object-cover"
        priority
      />
      <div className={`absolute bottom-0 flex flex-col gap-3 px-10 py-16`}>
        <Tag tagName={"narrative"} isWhite />
        <h1 className="text-white">
          {
            "A Shared Kitchen Seamlessly Blending Into The Urban Fabric, Crafting A Community Oasis"
          }
        </h1>
      </div>
    </section>
  );
}

export default Headline;
