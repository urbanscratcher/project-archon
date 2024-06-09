"use client";

/**
 * [ ] UI - 북마크 버튼과 이미지 컴포넌트 분리
 */
import useBookmarkStore from "@/stores/useBookmarkStore";
import useToasterStore from "@/stores/useToastStore";
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
  } = useBookmarkStore((state) => ({
    addBookmark: state.addBookmark,
    deleteBookmark: state.deleteBookmark,
    isAlreadyBookmarked: state.isAlreadyBookmarked,
  }));

  const addToaster = useToasterStore((state) => state.addToaster);

  const bookmarkClickHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isBookmarked(insightIdx)) {
      deleteBookmark(insightIdx);

      addToaster({
        mainMessage: "Your bookmark is deleted",
        toasterType: "warn",
      });
    } else {
      addBookmark(insightIdx);

      addToaster({
        mainMessage: "Your bookmark is added",
        toasterType: "confirm",
      });
    }
  };

  useEffect(() => {
    setHover(isBookmarked(insightIdx));
  }, [isBookmarked, insightIdx]);

  return (
    <>
      <Link
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        href={href}
        className="relative h-fit hover:cursor-pointer"
      >
        {/* bookmark button */}
        <button
          className={`absolute right-0 top-0 z-20 -translate-x-[4px] -translate-y-[4px] ${hover || isBookmarked(insightIdx) ? "opacity-100" : "opacity-0"} rounded-full text-3xl text-sky-700 active:text-sky-800`}
          onClick={bookmarkClickHandler}
          onMouseEnter={() => setHoverBookmark(true)}
          onMouseLeave={() => setHoverBookmark(false)}
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
