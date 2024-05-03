import { getAuthor } from "@/api/authors.api";
import { Topic } from "@/types/Topic";
import { IoMailOutline } from "react-icons/io5";
import ImageWrap from "../ImageWrap";

async function AuthorDetail({ idx }: { idx: number }) {
  const author = await getAuthor(idx);

  return (
    <section className="px-2 sm:px-8">
      <div className={`flex flex-col gap-8`}>
        <div
          className={`flex flex-col items-center justify-center gap-8 sm:flex-row`}
        >
          <div
            className={`relative aspect-square w-40 overflow-hidden rounded-full outline outline-2 outline-sky-700`}
          >
            <ImageWrap
              src={author.avatar}
              alt={`Avatar of ${author.firstName} ${author.lastName}`}
              className={`object-cover`}
              fill
            />
          </div>
          <div>
            <h2
              className={`flex items-center gap-2 font-serif capitalize text-sky-700`}
            >
              {author.firstName} {author.lastName}
              <IoMailOutline />
            </h2>
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
        </div>
        {author?.biography && (
          <p className="text-[17px] leading-[1.263] tracking-[0.5px] text-sky-700">
            {author.biography}
          </p>
        )}
        {author?.careers && (
          <ul
            className={`text-[17px] capitalize leading-[1.263] tracking-[0.5px] text-g-700`}
          >
            {author.careers.map((career: string, idx: number) => (
              // TODO fix the key
              <li key={idx}>• {career}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default AuthorDetail;
