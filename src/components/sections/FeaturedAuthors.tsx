import ImageWrap from "../ImageWrap";
import SectionHeading from "../SectionHeading";
import ViewAll from "../ViewAll";

async function FeaturedAuthors() {
  const authors = [
    {
      idx: 1,
      firstName: "Olivia",
      lastName: "Bennett",
      topics: [{ idx: 2, name: "Urban" }],
      thumbnail: "/test.webp",
    },
    {
      idx: 2,
      firstName: "Valentina",
      lastName: "Ramos",
      topics: [
        { idx: 23, name: "Narrative" },
        { idx: 4, name: "Cultural" },
      ],
      thumbnail: "/test.webp",
    },
    {
      idx: 3,
      firstName: "Sophia",
      lastName: "Miller",
      topics: [
        { idx: 44, name: "Exhibition" },
        { idx: 33, name: "Technology" },
      ],
      thumbnail: "/test.webp",
    },
    {
      idx: 4,
      firstName: "Isabella",
      lastName: "Rodriguez",
      topics: [
        { idx: 24, name: "Landscape" },
        { idx: 41, name: "Residential" },
      ],
      thumbnail: "/test.webp",
    },
  ];

  return (
    <>
      <SectionHeading>Featured Authors</SectionHeading>
      <div className="flex flex-col gap-2">
        <ul className="pb-1">
          {authors.map((author) => (
            <li
              className="flex items-center gap-2 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0"
              key={author.idx}
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-sky-700">
                <ImageWrap
                  src={author.thumbnail}
                  alt={`avatar of ${author.firstName} ${author.lastName}`}
                  className="object-cover"
                  fill
                />
              </div>
              <div>
                <p className="font-semibold">
                  {author.firstName} {author.lastName}
                </p>
                <p>{author.topics.map((el) => el.name).join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
        <ViewAll to="/authors" />
      </div>
    </>
  );
}

export default FeaturedAuthors;
