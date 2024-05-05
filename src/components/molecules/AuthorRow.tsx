import { Creator } from "@/types/Insight";
import Link from "next/link";
import ImageWrap from "../atoms/ImageWrap";
import Box from "../atoms/Box";

function AuthorRow({ creator, white }: Creator & { white: boolean }) {
  const data = {
    href: `/authors/${creator.idx}`,
    avatar: creator?.avatar || "",
    fullName: `${creator.firstName} ${creator.lastName}`,
  };

  return (
    <Box horizontal className={`items-center gap-2 text-sky-700`}>
      <Link
        href={data.href}
        className="relative h-8 w-8 overflow-hidden rounded-full border border-sky-700 object-cover"
      >
        <ImageWrap src={data.avatar} fill alt="avatar" />
      </Link>
      <Link href={data.href} className="hover-darker">
        <p
          className={`p-lg capitalize
          ${white ? "text-white" : ""}`}
        >
          {data.fullName}
        </p>
      </Link>
    </Box>
  );
}

export default AuthorRow;
