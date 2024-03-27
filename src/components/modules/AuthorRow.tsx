import { Creator } from "@/types/Insight";
import Link from "next/link";
import ImageWrap from "../ImageWrap";

function AuthorRow({ creator, isWhite }: Creator & { isWhite: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-sky-700`}>
      <Link href={`/authors/${creator.idx}`}>
        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-sky-700 object-cover">
          <ImageWrap src={creator?.avatar || ""} fill alt="avatar" />
        </div>
      </Link>
      <Link href={`/authors/${creator.idx}`}>
        <p
          className={`text-[17px] leading-[1.263] tracking-[0.5px] ${isWhite && "text-white"} capitalize`}
        >{`${creator.firstName} ${creator.lastName}`}</p>
      </Link>
    </div>
  );
}

export default AuthorRow;
