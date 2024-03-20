import { Authors } from "@/types/Author";
import { Topic } from "@/types/Topic";
import ImageWrap from "../ImageWrap";

function AuthorList({ authors }: { authors: Authors }) {
  return (
    <ul className={`flex flex-col gap-12 py-8`}>
      {authors.data.map((author) => {
        return (
          <li
            key={`${author.firstName}_${author.idx}`}
            className={`flex items-center gap-8`}
          >
            <div
              className={`relative aspect-square w-32 overflow-hidden rounded-full outline outline-2 outline-sky-700`}
            >
              <ImageWrap
                src={author.avatar}
                alt={`Avatar of ${author.firstName} ${author.lastName}`}
                className={`object-cover`}
                fill
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-serif capitalize tracking-[0.25px] text-sky-700">
                {author.firstName} {author.lastName}
              </h3>
              {author?.topics && author.topics.length > 0 && (
                <p className="text-[26px] capitalize text-sky-700">
                  {author.topics.map((topic: Topic) => topic.name).join(" · ")}
                </p>
              )}
              {author?.jobTitle && (
                <p className="text-[26px] capitalize text-sky-700">
                  {author.jobTitle}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default AuthorList;
