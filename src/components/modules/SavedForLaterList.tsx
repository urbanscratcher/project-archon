import ImageWrap from "../ImageWrap";
import Tag from "../Tag";
import AuthorRow from "./AuthorRow";

async function SavedForLaterList() {
  const insights = [
    {
      idx: 6,
      topic: {
        idx: 4,
        name: "narrative",
      },
      thumbnail: "/test.webp",
      title:
        "Marvels Of Modern Architecture: Inspiring Structures Shaping Our Cities",
      creator: {
        firstName: "Sophia",
        lastName: "Miller",
        avatar: "https://project-archon.netlify.app/data/authors/avatar/7.webp",
      },
    },
    {
      idx: 6,
      topic: {
        idx: 4,
        name: "narrative",
      },
      thumbnail: "/test.webp",
      title:
        "The Passive Cooling Strategy Of A Brick Office In Taiwan For Climate Control",
      creator: {
        firstName: "Sophia",
        lastName: "Miller",
        avatar: "https://project-archon.netlify.app/data/authors/avatar/7.webp",
      },
    },
  ];

  return (
    <>
      {insights.map((insight, idx) => (
        <li
          key={insight.title}
          className={`relative h-[550px] w-1/4 overflow-hidden rounded-2xl`}
        >
          <ImageWrap
            src={insight.thumbnail}
            alt={insight.title}
            fill
            className="absolute inset-0 -z-10 object-cover"
          />
          <div
            className={`grid h-full grid-rows-[min-content_auto_min-content] items-end gap-3 px-10 py-10`}
          >
            <Tag tagName={insight.topic.name} isWhite />
            <h3 className="text-white">{insight.title}</h3>
            <AuthorRow creator={insight.creator} isWhite />
          </div>
        </li>
      ))}
    </>
  );
}

export default SavedForLaterList;
