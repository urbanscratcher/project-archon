import { Creator } from "@/types/Insight";
import Image from "next/image";

function AuthorRow({ creator, isWhite }: Creator & { isWhite: boolean }) {
  return (
    <div className={`flex items-center gap-2 text-sky-700`}>
      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-sky-700 object-cover">
        <Image src={creator.avatar} fill alt="avatar" />
      </div>
      <p
        className={`text-[17px] leading-[1.263] tracking-[0.5px] ${isWhite && "text-white"}`}
      >{`${creator.firstName} ${creator.lastName}`}</p>
    </div>
  );
}

export default AuthorRow;
