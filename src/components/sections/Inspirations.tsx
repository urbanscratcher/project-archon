import ImageWrap from "../ImageWrap";
import SectionHeading from "../SectionHeading";
import SubSectionContainer from "../SubSectionContainer";
import { IoFlashSharp } from "react-icons/io5";

function Inspirations({
  applyContainer = true,
  className,
}: {
  applyContainer?: boolean;
  className?: string;
}) {
  const inspirations = [
    {
      idx: 1,
      title: "test1",
      thumbnail: "/test.webp",
    },
    {
      idx: 2,
      title: "test2",
      thumbnail: "/test.webp",
    },
    {
      idx: 3,
      title: "test3",
      thumbnail: "/test.webp",
    },
    {
      idx: 4,
      title: "test4",
      thumbnail: "/test.webp",
    },
    {
      idx: 5,
      title: "test5",
      thumbnail: "/test.webp",
    },
    {
      idx: 6,
      title: "test6",
      thumbnail: "/test.webp",
    },
  ];

  return (
    <SubSectionContainer
      applyContainer={applyContainer}
      className={`${className || ""}`}
    >
      <SectionHeading className="flex justify-between">
        inspirations
        <IoFlashSharp
          className={`scale-[120%] hover:cursor-pointer hover:text-sky-600`}
        />
      </SectionHeading>
      <ul className="grid grid-cols-2 grid-rows-3 gap-3">
        {inspirations.map((inspiration) => (
          <li
            key={inspiration.title}
            className={`relative aspect-[3/2] w-full overflow-hidden rounded-xl`}
          >
            <ImageWrap
              src={"/test.webp"}
              alt="inspiration"
              fill
              className={`object-cover`}
            />
          </li>
        ))}
      </ul>
    </SubSectionContainer>
  );
}

export default Inspirations;
