import { getAuthor } from "@/services/authors.api";
import type { Topic } from "@/types/Topic";
import { IoMailOutline } from "react-icons/io5";
import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";
import SectionContainer from "../atoms/SectionContainer";

async function AuthorDetailSection({ idx }: { idx: number }) {
  const author = await getAuthor(idx);

  return (
    <SectionContainer>
      <Box vertical className={`gap-8`}>
        <Box
          horizontal
          className={`items-center justify-center gap-8 sm:flex-row`}
        >
          <Box
            className={`relative aspect-square w-40 overflow-hidden rounded-full outline outline-2 outline-sky-700`}
          >
            <ImageWrap
              src={author.avatar}
              alt={`Avatar of ${author.firstName} ${author.lastName}`}
              className={`object-cover`}
              fill
            />
          </Box>
          <Box vertical className="gap-2">
            <h2
              className={`flex items-center gap-4 font-serif capitalize text-sky-700`}
            >
              {author.firstName} {author.lastName}
              <IoMailOutline />
            </h2>
            {author?.topics && author.topics.length > 0 && (
              <h5 className="font-sans capitalize text-sky-700">
                {author.topics.map((topic: Topic) => topic.name).join(" · ")}
              </h5>
            )}
            {author?.jobTitle && (
              <h5 className="font-sans capitalize text-sky-700">
                {author.jobTitle}
              </h5>
            )}
          </Box>
        </Box>
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
      </Box>
    </SectionContainer>
  );
}

export default AuthorDetailSection;
