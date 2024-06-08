import { Creator } from "@/types/Insight";
import Link from "next/link";
import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";

function AuthorRow({
  creator,
  white = false,
}: {
  creator: Creator;
  white?: boolean;
}) {
  const data = {
    href: `/authors/${creator.idx}`,
    avatar: creator?.avatar || "",
    fullName: `${creator.firstName} ${creator.lastName}`,
  };

  return (
    <Box horizontal className={`items-center gap-2 text-sky-700`}>
      <Link
        href={data.href}
        className="relative h-8 w-8 overflow-hidden rounded-full border border-sky-700"
      >
        <ImageWrap
          src={data.avatar}
          fill
          alt="avatar"
          className="rounded-full object-cover"
        />
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
