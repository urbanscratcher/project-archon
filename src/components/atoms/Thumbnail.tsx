"use client";

/**
 * [ ] UI - 북마크 버튼과 이미지 컴포넌트 분리
 */
import useBookmarkStore from "@/stores/useBookmarkStore";
import { ImageProps } from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
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
  const {
    addBookmark,
    deleteBookmark,
    isAlreadyBookmarked: isBookmarked,
  } = useBookmarkStore();

  const bookmarkClickHandler = (e: MouseEvent) => {
    e.preventDefault();

    if (isBookmarked(insightIdx)) {
      deleteBookmark(insightIdx);
    } else {
      addBookmark(insightIdx);
    }
  };

  return (
    <>
      <Link
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
        href={href}
        className="relative h-fit hover:cursor-pointer"
      >
        {/* bookmark button */}
        <button
          className={`absolute right-0 top-0 z-20 -translate-x-[4px] -translate-y-[4px] ${hover || isBookmarked(insightIdx) ? "opacity-100" : "opacity-0"} rounded-full text-3xl text-sky-700 active:text-sky-800`}
          onClick={(e: MouseEvent) => {
            isBookmarked(insightIdx) && setHover(false);
            bookmarkClickHandler(e);
          }}
          onMouseEnter={(e) => {
            setHoverBookmark(true);
          }}
          onMouseLeave={(e) => {
            setHoverBookmark(false);
          }}
        >
          {hoverBookmark || isBookmarked(insightIdx) ? (
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
            src={src ?? ""}
            className={`absolute object-cover`}
            fill
            {...props}
          />
        </div>
      </Link>
    </>
  );
}

export default Thumbnail;
