import { getFeaturedAuthors } from "@/api/trending.api";
import ImageWrap from "../ImageWrap";
import SectionHead from "../SectionHead";
import ViewAll from "../ViewAll";
import Link from "next/link";

async function FeaturedAuthors() {
  const authors = await getFeaturedAuthors(4);

  return (
    <>
      <SectionHead>Featured Authors</SectionHead>
      <div className="flex flex-col gap-2">
        <ul className="pb-1">
          {authors.map((author) => (
            <li
              className="flex items-center gap-2 border-b border-b-g-300 px-1 py-3 text-sky-700 last:border-b-0"
              key={author.idx}
            >
              <Link href={`/authors/${author.idx}`}>
                <div className="relative h-16 w-16 overflow-hidden rounded-full border border-sky-700">
                  <ImageWrap
                    src={author.avatar}
                    alt={`avatar of ${author.firstName} ${author.lastName}`}
                    className="object-cover"
                    fill
                  />
                </div>
              </Link>
              <div>
                <Link href={`/authors/${author.idx}`}>
                  <p className="font-semibold capitalize">
                    {author.firstName} {author.lastName}
                  </p>
                </Link>
                {author?.topics && author.topics.length > 0 && (
                  <p className="capitalize">
                    {author.topics
                      .map((el: { idx: number; name: string }) => el.name)
                      .join(" · ")}
                  </p>
                )}
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
