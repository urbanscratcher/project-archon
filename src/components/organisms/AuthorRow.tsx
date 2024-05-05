import { Creator } from "@/types/Insight";
import Link from "next/link";
import ImageWrap from "../atoms/ImageWrap";

function AuthorRow({ creator, white }: Creator & { white: boolean }) {
  const data = {
    href: `/authors/${creator.idx}`,
    avatar: creator?.avatar || "",
    fullName: `${creator.firstName} ${creator.lastName}`,
  };

  return (
    <div className={`flex items-center gap-2 text-sky-700`}>
      <Link
        href={data.href}
        className="relative h-8 w-8 overflow-hidden rounded-full border border-sky-700 object-cover"
      >
        <ImageWrap src={data.avatar} fill alt="avatar" />
      </Link>
      <Link href={data.href} className="hover-darker">
        <p
          className={`text-[1.0625rem]/[1.263] capitalize tracking-[0.03125rem]
          ${white ? "text-white" : ""}`}
        >
          {data.fullName}
        </p>
      </Link>
    </div>
  );
}

export default AuthorRow;
