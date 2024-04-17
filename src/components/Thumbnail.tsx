/**
 * CHECK
 * [x] 썸네일 컴포넌트 만들기
 * [x] 썸네일 갈아끼우기
 * [x] 썸네일 프롭스
 * [x] 썸네일 클릭시 insight detail로 연결시키기
 * [x] 썸네일 호버시 필터 레이어 올리기
 * [x] 썸네일 호버시 북마크 버튼 띄우기
 * [x] 썸네일 호버시 북마크 버튼을 누르면 localStorage에 저장
 * [ ] 썸네일 북마크 상태 전역 설정 (북마크 변경시 모든 썸네일에서 감지돼야 함)
 * [ ] UI - 북마크 버튼과 이미지 컴포넌트 분리
 */
"use client";

import { ImageProps } from "next/image";
import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import ImageWrap from "./ImageWrap";

type AspectProps = "video" | "square" | "photo" | "";
type RoundedProps = "xl" | "2xl" | "";

type ThumbnailProps = ImageProps & {
  insightIdx: number;
  href: string;
  aspect: AspectProps;
  rounded?: RoundedProps;
};

export function getStoredBookmarksOrInitialize() {
  const bookmarks = localStorage.getItem("bookmarks");
  const bookmarksArr: { idx: number }[] = bookmarks
    ? JSON.parse(bookmarks)
    : [];
  return bookmarksArr;
}

function isAlreadyBookmarked(
  bookmarksArr: { idx: number }[],
  insightIdx: number,
) {
  const isAlreadyBookmarked = bookmarksArr.some(
    (b: { idx: number }) => b.idx === insightIdx,
  );
  return isAlreadyBookmarked;
}

function Thumbnail({
  insightIdx = 0,
  href = "",
  aspect = "",
  rounded = "2xl",
  src,
  className,
  ...props
}: ThumbnailProps) {
  const [hover, setHover] = useState(false);
  const [hoverBookmark, setHoverBookmark] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarksArr = getStoredBookmarksOrInitialize();
    setIsBookmarked(isAlreadyBookmarked(bookmarksArr, insightIdx));
  }, [insightIdx]);

  const bookmarkClickHandler = (e: MouseEvent) => {
    e.preventDefault();

    const bookmarksArr = getStoredBookmarksOrInitialize();
    let newBookmarksArr;
    if (isBookmarked) {
      newBookmarksArr = bookmarksArr.filter(
        (b: { idx: number }) => b.idx !== insightIdx,
      );
      setIsBookmarked(false);
    } else {
      newBookmarksArr = [...bookmarksArr, { idx: insightIdx }];
      setIsBookmarked(true);
    }

    localStorage.setItem("bookmarks", JSON.stringify(newBookmarksArr));
  };

  return (
    <>
      <Link href={href} className="h-full">
        <div
          onMouseEnter={(e) => {
            setHover(true);
          }}
          onMouseLeave={(e) => {
            setHover(false);
          }}
          className={`
            relative
            h-full
            w-full hover:cursor-pointer
         `}
        >
          {/* bookmark button */}
          <button
            className={`absolute right-0 top-0 z-20 -translate-x-[4px] -translate-y-[4px] ${hover || isBookmarked ? "opacity-100" : "opacity-0"} rounded-full text-3xl text-sky-700 active:text-sky-800`}
            onClick={(e: MouseEvent) => {
              isBookmarked && setHover(false);
              bookmarkClickHandler(e);
            }}
            onMouseEnter={(e) => {
              setHoverBookmark(true);
            }}
            onMouseLeave={(e) => {
              setHoverBookmark(false);
            }}
          >
            {hoverBookmark || isBookmarked ? (
              <IoBookmark />
            ) : (
              <IoBookmarkOutline />
            )}
          </button>
          {/* image */}
          <div
            className={`
            relative
            ${className || ""}
            ${rounded === "xl" ? "rounded-xl" : "rounded-2xl"} 
            ${
              aspect === "video"
                ? "aspect-video"
                : aspect === "square"
                  ? "aspect-square"
                  : aspect === "photo"
                    ? "aspect-[3/2]"
                    : "h-full w-full"
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
