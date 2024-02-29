import SectionHeading from "../SectionHeading";
import SectionContainer from "../SectionContainer";

function TopTopics() {
  const topics = [
    { name: "design", total: 1 },
    { name: "technology", total: 2 },
    { name: "residential", total: 3 },
    { name: "interior", total: 9 },
  ];

  return (
    <SectionContainer className="bg-b-200">
      <SectionHeading>Top topics</SectionHeading>
      <ul className={`flex flex-wrap gap-x-36 gap-y-10`}>
        {topics.map((el) => (
          <li className={"flex"} key={el.name}>
            <button className="topTopics font-sans text-6xl capitalize text-sky-700">
              {el.name}
            </button>
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full bg-sky-700 text-lg text-white`}
            >
              {el.total}
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}

export default TopTopics;
