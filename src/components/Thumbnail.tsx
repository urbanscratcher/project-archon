/**
 * CHECK
 * [x] 썸네일 컴포넌트 만들기
 * [x] 썸네일 갈아끼우기
 * [x] 썸네일 프롭스
 * [ ] 썸네일 클릭시 insight detail로 연결시키기
 * [ ] 썸네일 호버시 필터 레이어 올리기
 * [ ] 썸네일 호버시 북마크 버튼 띄우기
 * [ ] 썸네일 호버시 북마크 버튼을 누르면 localStorage에 저장
 */

import { ImageProps } from "next/image";
import ImageWrap from "./ImageWrap";
import Link from "next/link";

type AspectProps = "video" | "square" | "photo" | "";
type RoundedProps = "xl" | "2xl" | "";

type ThumbnailProps = ImageProps & {
  href: string;
  aspect: AspectProps;
  rounded?: RoundedProps;
};

function Thumbnail({
  href = "",
  aspect = "",
  rounded = "2xl",
  src,
  className,
  ...props
}: ThumbnailProps) {
  return (
    <Link href={href}>
      <div
        className={`
      relative
      overflow-hidden
      hover:cursor-pointer
      hover:brightness-90
      hover:transition-all
      active:brightness-[.8]
      ${rounded === "xl" ? "rounded-xl" : "rounded-2xl"} 
      ${
        aspect === "video"
          ? "aspect-video"
          : aspect === "square"
            ? "aspect-square"
            : aspect === "photo"
              ? "aspect-[3/2]"
              : ""
      }
      ${className || ""}
      `}
      >
        <ImageWrap
          src={src}
          className={`absolute object-cover`}
          fill
          {...props}
        />
      </div>
    </Link>
  );
}

export default Thumbnail;
