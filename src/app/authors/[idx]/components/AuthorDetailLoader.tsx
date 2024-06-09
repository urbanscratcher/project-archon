import List from "@/components/atoms/List";
import ListItem from "@/components/atoms/ListItem";
import { getAuthor } from "@/services/authors.api";
import type { Topic } from "@/types/Topic";
import { uniqueId } from "lodash";
import { IoMailOutline } from "react-icons/io5";
import Box from "../../../../components/atoms/Box";
import ImageWrap from "../../../../components/atoms/ImageWrap";

async function AuthorDetailLoader({ idx }: { idx: number }) {
  const author = await getAuthor(idx);

  const data = {
    avatar: author?.avatar || "",
    avatarAlt: `Avatar of ${author.firstName} ${author.lastName}`,
    firstName: author.firstName,
    lastName: author.lastName,
    topics:
      author?.topics && author.topics.length > 0 ? author.topics : undefined,
    jobTitle: author?.jobTitle || undefined,
    biography: author?.biography || undefined,
    careers: author?.careers || undefined,
  };

  return (
    <>
      <Box
        className={`flex items-center justify-center gap-8 sm:mt-0 sm:flex-row`}
      >
        <Box
          className={`relative aspect-square w-40 overflow-hidden rounded-full outline outline-2 outline-sky-700`}
        >
          <ImageWrap
            src={data.avatar}
            alt={data.avatarAlt}
            className={`object-cover`}
            fill
          />
        </Box>
        <Box vertical className="gap-2">
          <h2
            className={`flex items-center gap-4 font-serif capitalize text-sky-700`}
          >
            {data.firstName} {data.lastName}
            <IoMailOutline />
          </h2>
          {data?.topics && (
            <h5 className="font-sans capitalize text-sky-700">
              {data.topics.map((topic: Topic) => topic.name).join(" · ")}
            </h5>
          )}
          {data?.jobTitle && (
            <h5 className="font-sans capitalize text-sky-700">
              {data.jobTitle}
            </h5>
          )}
        </Box>
      </Box>
      {data?.biography && <p className="p-lg text-sky-700">{data.biography}</p>}
      {data?.careers && (
        <List className={`p capitalize text-g-700`}>
          {data.careers.map((career: string) => (
            <ListItem key={uniqueId()}>• {career}</ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default AuthorDetailLoader;
