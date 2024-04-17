/**
 * CHECK
 * [x] 썸네일 컴포넌트 만들기
 * [x] 썸네일 갈아끼우기
 * [x] 썸네일 프롭스
 * [x] 썸네일 클릭시 insight detail로 연결시키기
 * [x] 썸네일 호버시 필터 레이어 올리기
 * [ ] 썸네일 호버시 북마크 버튼 띄우기
 * [ ] 썸네일 호버시 북마크 버튼을 누르면 localStorage에 저장
 */
"use client";

import { ImageProps } from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import ImageWrap from "./ImageWrap";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

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
  const [hover, setHover] = useState(false);
  const [hoverBookmark, setHoverBookmark] = useState(false);

  const bookmarkClickHandler = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Link href={href}>
        <div
          onMouseEnter={(e) => {
            setHover(true);
          }}
          onMouseLeave={(e) => {
            setHover(false);
          }}
          className={`
            relative
            hover:cursor-pointer
            ${className || ""}
         `}
        >
          {/* bookmark button */}
          <button
            className={`absolute right-0 top-0 z-20 -translate-y-1/3 translate-x-1/3   ${hover ? "opacity-100" : "opacity-0"} rounded-full p-2 text-sky-700`}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              e.preventDefault();
              bookmarkClickHandler(e);
            }}
            onMouseEnter={(e) => {
              setHoverBookmark(true);
            }}
            onMouseLeave={(e) => {
              setHoverBookmark(false);
            }}
          >
            {hoverBookmark ? (
              <IoBookmark className={`text-3xl`} />
            ) : (
              <IoBookmarkOutline className={`text-3xl`} />
            )}
          </button>
          {/* image */}
          <div
            className={`
            relative
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
            img__filter
            overflow-hidden
            `}
          >
            <ImageWrap
              src={src}
              className={`absolute object-cover`}
              fill
              {...props}
            />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Thumbnail;
